import './App.css'
import { useState, useEffect} from 'react'
import Information from './information'
import { Hexagon } from 'tiled-hexagons'
// import { VectorMap } from '@react-jvectormap/core'
// import worldMill from "@react-jvectormap/world/dist/worldMill.json";
import VaraText from './VaraText';
import { json } from 'react-router-dom';

export function useCountryList(){
	const [data, setData] = useState(null); 
    
	useEffect(()=> {
			fetch("https://restcountries.com/v3.1/all?fields=name,continents,population,capital,latlng,unMember")
			.then(response => response.json())
			.then(json => setData(json))
			.catch(error => console.error(error))
	}, []);
	
	return data;
}


function InputBox({onCountryChange}){
	const [data, setData] = useState("");
	var filteredData = useCountryList()
	filteredData = filteredData ? filteredData.filter(item => item.continents && item.continents.length > 0 && 
		!item.continents.includes('Antarctica') && item.unMember == true) : [];
	// console.log(filteredData)

	const dataListField = filteredData.map(fields =>{
		return(<option key={fields.name.common}>{fields.name.common}</option>)
	})

	function handleClick() {
		onCountryChange(data)
		setData("")
	}

	function giveUp(){
		onCountryChange("giveUp")
		setData("")
		document.getElementById('countryInput').style.display = "none"
		document.getElementById('restartButton').style.display = "block"
	}

	function restart(){
		onCountryChange("restart")
		console.log('restart')
		document.getElementById('countryInput').style.display = "block"
		document.getElementById('restartButton').style.display = "none"
	}

	//console.log(dataListField);
	return(
		<div className='bottom--submit'>
			<Hexagon 
			sideLength={15} 
			borderRadius={1}
			fill={'#FF1818'}
			onClick={giveUp}
			id='fuck'
			className="hexagon--button"/>
			<input type='text' className='guessText' id='countryInput'
			placeholder='Enter Country Name' list="json-datalist"
			onChange={(event) => setData(event.target.value)}
			value={data}
			/>
			<datalist id="json-datalist">
				{dataListField}
			</datalist>
			<button className='restart--button' id='restartButton' onClick={restart}>Restart</button>
			<Hexagon 
			sideLength={15}
			borderRadius={1}
			fill={'#39ff14'}
			onClick={handleClick}
			className="hexagon--button"/>
		</div>
	)
}

function Fields() {
	const fuck = [{name: 'Name'},{name: 'Hemisphere'}, {name: 'Continent'}, {name: 'Population'}
    , {name: 'Direction'}, {name: 'Temp.'}]
	const rowField = fuck.map(fields=> {
		return (<p className='grid field--edit' key={fields.name}>{fields.name}</p>)
	})
	return(
		<div className="fields--test">{rowField}</div>
	)
}

function App() {

	// const [data, setData] = useState(null); 
	// const [country, setCountry] = useState()
	const initialState = []
	const [restart, setRestart] = useState(false)
	const [targetCountry, setTargetCountry] = useState()
	const [array1, setArray1] = useState([])
	const [guessedCountry, setGuessedCountry] = useState([])
	const [temperature, setTemperature] = useState()
	var filteredData = useCountryList();

	useEffect(()=> {
		if(filteredData && filteredData.length > 0){
			setTargetCountry(startGame())
		}
	}, [filteredData, restart]);
    
	const startGame = () => {
		var filteredData2 = filteredData ? filteredData.filter(item => item.continents && item.continents.length > 0 && 
		!item.continents.includes('Antarctica') && !item.unMember == true) : [];

		const index = Math.floor(Math.random() * filteredData2.length)
		setTargetCountry(filteredData2[index])
		console.log("answer " + JSON.stringify(filteredData2[index]))
		return filteredData2[index]
	}

	function getWeather(city){
		const apiKey = import.meta.env.VITE_WEATHER_REACT_API_KEY
		const response = fetch(`https://api.weatherapi.com/v1/current.json?q=${city}&key=${apiKey}`)
						.then(response => response.json())
						.then(data => {
							setTemperature(data.current.temp_f)
						})
	}
	
	const handleCountryChange = (data2) => {
		var guessHemisphere = ""
		var targetHemisphere = ""
		var guess = ""
		if(data2 === "giveUp"){
			setRestart(false)
			guess = targetCountry
			setGuessedCountry(prevArray1 => [targetCountry])
			guessHemisphere = (guess.latlng[0] <= 0) ? "Southern" : "Northern";
			targetHemisphere = (targetCountry.latlng[0] <= 0) ? "Southern" : "Northern"
			setTargetCountry("")
		}else if(data2 == "restart"){
			setRestart(true)
		}else{
			setRestart(false)
			console.log(data2)
			var guess = filteredData.find(element => element.name.common === data2);
			setGuessedCountry(prevArray1 => [...prevArray1, guess])
			guessedCountry.forEach(field => {
				if(guess.name.common == field.name.common){
					guess = null
				}
			});
			guessHemisphere = (guess.latlng[0] <= 0) ? "Southern" : "Northern";
			targetHemisphere = (targetCountry.latlng[0] <= 0) ? "Southern" : "Northern"
		}
		
		if (data2 != "restart"){
			if (guess.name.common != targetCountry.name.common){
				// console.log(guess.capital[0])
				// console.log(import.meta.env.VITE_WEATHER_REACT_API_KEY)
				//const temp = getWeather(guess.capital[0])
				// console.log(temp)
				const test = [
					{name: guess.name.common, color: "#3494E6"}, 
					{hemisphere: guessHemisphere, color: (targetHemisphere == guessHemisphere) ? "#34e89e" : "#ee0979"},
					{continents: guess.continents[0], color: (guess.continents[0] == targetCountry.continents[0]) ? "#34e89e" : "#ee0979"}, 
					{population: (guess.population < targetCountry.population) ? (Math.trunc(guess.population/1000000) + "M ↑ ") : (Math.trunc(guess.population/1000000) + "M ↓ "), color: "#3494E6"},
					{direction: "E (algo might not be working)", color: "#3494E6"}, 
					{temperature: "not working bro on me", color: "#3494E6"}];
				setArray1(test)
				//console.log(array1)
			}else if(guess.name.common == targetCountry.name.common){
				const test = [
					{name: guess.name.common, color: "#3494E6"}, 
					{hemisphere: guessHemisphere, color: "#34e89e"},
					{continents: guess.continents[0], color: "#34e89e"}, 
					{population: guess.population, color: "#34e89e"},
					{direction: "E (algo might not be working)", color: "#34e89e"}, 
					{temperature: "30.7", color: "#34e89e"}];
				setArray1(test)
			}else{
				console.log("not found")
			}
		}
	}

	return (
		<div className="main">
			{/* <h1 className='countryleText'></h1> */}
			<VaraText className='countryleText' text='Countryle' />
			<div className="setup">
				<div className="guess--box">
					<div className="top--div">
						<img className='worldImage' src="/world.png"/>
						<Fields />
						<div className="information--grid">
							<Information
							array1={array1}
							restart = {restart}
							/>
						</div>
					</div>
						<InputBox onCountryChange={handleCountryChange}/>
				</div>
			</div>
		</div>
	)
}

export default App


{/* <VectorMap
							map={worldMill}
							backgroundColor={"transparent"}
							zoomMin={1}
							zoomMax={4}
							className='map'
							containerStyle={{
								width: "100%",
								height: "100%",
							}}
						/> */}
