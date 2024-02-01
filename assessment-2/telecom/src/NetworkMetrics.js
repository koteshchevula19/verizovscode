
async function NetworkMetrics() {

    let airports = await fetch('https://freetestapi.com/api/v1/airports')
    let airportDetails = await airports.json()

    return (
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Code</th>
                        <th>City</th>
                        <th>Country</th>
                        <th>Location</th>
                        <th>TimeZone</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>{airportDetails.id}</td></tr>
                    <tr><td>{airportDetails.name}</td></tr>
                    <tr><td>{airportDetails.code}</td></tr>
                    <tr><td>{airportDetails.city}</td></tr>
                    <tr><td>{airportDetails.country}</td></tr>
                    <tr><td>{airportDetails.location.latitude},{airportDetails.location.longitude}</td></tr>
                    <tr><td>{airportDetails.timezone}</td></tr>
                    
                </tbody>

            </table>
        </div>
    )

}
export default NetworkMetrics;