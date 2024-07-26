import './App.css'
import { useState, useEffect, useRef} from 'react'
import Information from './information'

import { BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom'
import Blogs from '../pages/landingPage'

import { Hexagon, TiledHexagons } from 'tiled-hexagons'
import { VectorMap } from '@react-jvectormap/core'
import worldMill from "@react-jvectormap/world/dist/worldMill.json";
import VaraText from './VaraText';

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
		!item.continents.includes('Antarctica') && !item.continents.includes('Oceania') && item.unMember == true) : [];

	const dataListField = filteredData.map(fields =>{
		return(<option key={fields.name.common}>{fields.name.common}</option>)
	})

	function handleClick() {
		onCountryChange(data)
		setData("")
	}

	//console.log(dataListField);
	return(
		<div className='bottom--submit'>
			<Hexagon 
			sideLength={15} 
			borderRadius={1}
			fill={'#FF1818'}
			className="hexagon--button"/>
			<input type='text' className='guessText' id='countryInput'
			placeholder='Enter Country Name' list="json-datalist"
			onChange={(event) => setData(event.target.value)}
			value={data}
			/>
			<datalist id="json-datalist">
				{dataListField}
			</datalist>
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
    , {name: 'Direction'}, {name: 'Temp.'}
  	]
	const rowField = fuck.map(fields=> {
		return (<p className='grid field--edit'>{fields.name}</p>)
	})
	return(
		<div className="fields--test">{rowField}</div>
	)
}

function App() {

	const [data, setData] = useState(null); 
	const [country, setCountry] = useState()
	const [targetCountry, setTargetCountry] = useState()
	const [array1, setArray1] = useState([])
	const [guessedCountry, setGuessedCountry] = useState([])
	var filteredData = useCountryList();

	useEffect(()=> {
		if(filteredData && filteredData.length > 0){
			setTargetCountry(startGame())
		}
	}, [filteredData]);
    
	const startGame = () => {
		filteredData = filteredData ? filteredData.filter(item => item.continents && item.continents.length > 0 && 
		!item.continents.includes('Antarctica') && !item.continents.includes('Oceania') && item.unMember == true) : [];

		const index = Math.floor(Math.random() * filteredData.length)
		setTargetCountry(filteredData[index])
		console.log("answer " + JSON.stringify(filteredData[index]))
		return filteredData[index]
	}	
	
	const handleCountryChange = (data2) => {
		setCountry(data2)
		console.log(filteredData)
		var guess = filteredData.find(element => element.name.common === data2);
		setGuessedCountry(prevArray1 => [...prevArray1, guess])
		guessedCountry.forEach(field => {
			if(guess.name.common == field.name.common){
				guess = null
			}
		});
		const guessHemisphere = (guess.latlng[0] <= 0) ? "Southern" : "Northern";
		const targetHemisphere = (targetCountry.latlng[0] <= 0) ? "Southern" : "Northern"
		// console.log("target guess"+ (guess.latlng[0] == targetCountry.latlng[0]) ? "#34e89e" : "#ee0979")
		// console.log("actual guess" + guess)
		if (guess.name.common != targetCountry.name.common){
			const test = [
				{name: guess.name.common, color: "#3494E6"}, 
				{hemisphere: guessHemisphere, color: (targetHemisphere == guessHemisphere) ? "#34e89e" : "#ee0979"},
				{continents: guess.continents[0], color: (guess.continents[0] == targetCountry.continents[0]) ? "#34e89e" : "#ee0979"}, 
				{population: (guess.population < targetCountry.population) ? (Math.trunc(guess.population/1000000) + "M ↑ ") : (Math.trunc(guess.population/1000000)	 + "M ↓ "), color: "#3494E6"},
				{direction: "E", color: "#3494E6"}, 
				{temperature: "30.7", color: "#3494E6"}];
			setArray1(test)
			//console.log(array1)
		}else if(guess.name.common == targetCountry.name.common){
			const test = [
				{name: guess.name.common, color: "#3494E6"}, 
				{hemisphere: guessHemisphere, color: "#34e89e"},
				{continents: guess.continents[0], color: "#34e89e"}, 
				{population: guess.population, color: "#34e89e"},
				{direction: "E", color: "#34e89e"}, 
				{temperature: "30.7", color: "#34e89e"}];
			setArray1(test)
		}else{
			console.log("not found")
		}
	}
	useEffect(() => {

	  }, []);

	return (
		<div className="main">
			{/* <h1 className='countryleText'></h1> */}
			<VaraText className='countryleText' text='Countryle' />
			<div className="setup">
				<div className="guess--box">
					<div className="top--div">
						<img className='worldImage' src="public/world.png"/>
						<Fields />
						<div className="information--grid">
							<Information hesmiphere="Northern"
							continents="North America"
							population="1,000,000,000"
							direction="NE"
							temperature="27.8"
							array1={array1}
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