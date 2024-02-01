import { useState } from 'react'
function Fetching1() {


    const [weather, setWeather] = useState(null);
    const [flag, setFlag] = useState(false);



    let Fetching = async (e) => {
        console.log("inside the func");
        // let enteredValue = document.getElementById('enteredValue').value;
        let weatherforCities = await fetch('https://freetestapi.com/api/v1/weathers');
        let weatherDetails = await weatherforCities.json();
        //console.log(weatherDetails);
        console.log(weatherDetails[e.target.value]);
        // let idofweather = e.target.value;
        weatherDetails.forEach(weatherDetailsforaPlace => {
           
                setWeather(weatherDetailsforaPlace);
                setFlag(true)
                console.log("Hey If loop");
                //setWeather(true)
            
           


        })
    }
    return (
        <div>
            <button onClick={Fetching}>Onclcik</button>
                        {(!weather || !flag) ?
                (<div>Loading...</div>) :
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
                            <tr><td>{JSON.stringify(weather.id)}</td></tr>
                            <tr><td>{JSON.stringify(weather.city)}</td></tr>
                            <tr><td>{JSON.stringify(weather.country)}</td></tr>
                            <tr><td>{JSON.stringify(weather.latitude)}</td></tr>
                            <tr><td>{JSON.stringify(weather.longitude)}</td></tr>
                            <tr><td>{JSON.stringify(weather.temperature)}</td></tr>
                            <tr><td>{JSON.stringify(weather.humidity)}</td></tr>

                        </tbody>

                    </table>
                    </div>
                 }
                </div>
                 )
                 }

                 export default Fetching1