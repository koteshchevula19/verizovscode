import React, { useState } from 'react';

const NetworkMetrics = () => {
    const [weather, setWeather] = useState(null);
    const [flag, setFlag] = useState(false);

    let fetching = async () => {
        let weatherDetails = await fetch('https://freetestapi.com/api/v1/weathers');
        let weatherDetailsforaPlace = await weatherDetails.json();

        // Accumulate weather details in an array
        let allWeatherDetails = [];
        weatherDetailsforaPlace.forEach(weatherDetailsofEveryObject => {
            
            allWeatherDetails.push(weatherDetailsofEveryObject)
        });

        // Set the state once with the accumulated array
        setWeather(allWeatherDetails);
            setFlag(true);
       
    };

    return (
        <div>
            <button onClick={fetching}>Hitting Api</button><br />
            {
                !weather || !flag ? "Loading.." : 
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
                    {weather.map((weatherDetails)=>(
                     <tr><td>{JSON.stringify(weatherDetails.id)}</td>
                    <td>{JSON.stringify(weatherDetails.city)}</td>
                <td>{JSON.stringify(weatherDetails.country)}</td>
                <td>{JSON.stringify(weatherDetails.latitude)}</td>
                    <td>{JSON.stringify(weatherDetails.longitude)}</td>
                    <td>{JSON.stringify(weatherDetails.temperature)}</td>
                    <td>{JSON.stringify(weatherDetails.humidity)}</td></tr> 
))}
                </tbody>

            </table>
                            
                            
                        
                    </div>
                
            }
        </div>
    );
}

export default NetworkMetrics