import {useState} from 'react'

async function NetworkMetrics() {
    
    var [airportDetails,setDetails]=useState("")
    const [flag,setFlag] = useState(false)
    let weatherData=[];
    let hittingApi=async()=>{
        let airports = await fetch('https://freetestapi.com/api/v1/weathers')
        let airportObject = await airports.json()
        airportObject.forEach(Data => {
            weatherData.push(Data);

    })
   
        setDetails(weatherData);
        setFlag(true);
        //  console.log((airportDetails));
    }

    return (
        <div>
            <button onClick={hittingApi}>Hitting API for the Data</button>
            { (!airportDetails||!flag)?"Loading" :
            <div>           
                 <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>City</th>
                        <th>Country</th>
                        <th>latitude</th>
                        <th>longitud</th>
                        <th>temperature</th>
                        <th>humidity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                     <tr><td>{JSON.stringify(airportDetails.id)}</td></tr>
                    <tr><td>{JSON.stringify(airportDetails.city)}</td></tr>
                    <tr><td>{JSON.stringify(airportDetails.country)}</td></tr>
                    <tr><td>{JSON.stringify(airportDetails.latitude)}</td></tr>
                    <tr><td>{JSON.stringify(airportDetails.longitude)}</td></tr>
                    <tr><td>{JSON.stringify(airportDetails.temperature)}</td></tr>
                    <tr><td>{JSON.stringify(airportDetails.humidity)}</td></tr> 
                    
                </tbody>

            </table>
            </div>

            }
        </div>
    )

}
export default NetworkMetrics;