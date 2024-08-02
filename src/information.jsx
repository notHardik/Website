import { useEffect, useState} from 'react'
import PropTypes from 'prop-types';

export default function Information(props){
    const [array1, setArray1] = useState([]);
    useEffect(() => {
        setArray1(prevArray1 => [...prevArray1, props.array1])
    }, [props.array1])
    useEffect(() => {
        setArray1([])
    }, [props.restart])
    var listOfCountry = []
    var fieldsInCountry = []
    console.log('arrat len: ' + array1.length)
    if (!props.restart){
        listOfCountry = array1.map((element) => {
        
            fieldsInCountry = element.map((fields) => {
                const key = Object.keys(fields)[0]
                return (<p className='grid' key={fields[key]} style={{color: fields.color}}>
                    {fields[key]}
                    </p>)
            })
            return (<div className='fields--test' key={element}>{fieldsInCountry}</div>)
        })
    }else{
        return (<div></div>)
    }
    

    // const fieldInput = props.array1.map((fields)=> {
    //     return (<p className='grid' key={fields[0]}>{fields}</p>)
    // })
    
    Information.propTypes = {
        array1: PropTypes.array
    }

    return (
        <div key={'f'} className='field--layout'>
            {listOfCountry}
        </div>
    )
}