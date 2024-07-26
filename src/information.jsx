import { useEffect, useState} from 'react'

export default function Information(props){
    const [array1, setArray1] = useState([]);
    useEffect(() => {
        setArray1(prevArray1 => [...prevArray1, props.array1])
    }, [props.array1])


    const inception = array1.map((element) => {
        //console.log(element)
        const inceptio2 = element.map((fields) => {
            const key = Object.keys(fields)[0]
            return (<p className='grid' key={fields[key]} style={{color: fields.color}}>
                {fields[key]}
                </p>)
        })
        return (<div className='fields--test'>{inceptio2}</div>)
    })

    // const fieldInput = props.array1.map((fields)=> {
    //     return (<p className='grid' key={fields[0]}>{fields}</p>)
    // })
    

    return (
        <div key={'f'} className=''>
            {inception}
        </div>
    )
}