import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
const proxy = require("http-proxy-middleware");

const Question2 = () => {
    const [temp, setTemp] = useState();
    const [city, setCity] = useState("");


    const apiCall = city => {
        var options = {
            method: 'GET',
            url: 'https://yahoo-weather5.p.rapidapi.com/weather',
            params: { location: city, format: 'json', u: 'c' },
            headers: {
                'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com',
                'x-rapidapi-key': 'e0db17f747mshe7c04159e811479p1d62cejsn4e782060c783'
            }
        };
        Axios.request(options).then(function (response) {
            console.log(response.data);
            setTemp(response.data.current_observation.condition.temperature)
        }).catch(function (error) {
            console.error(error);
        });
    }
    let cityy;
    const handleChange = event => {
        setCity(event.target.value);
    }
    const handleSubmit = event => {
        console.log(city)
        apiCall(city)
        alert('Temperature ' + temp + " celcuis");
        event.preventDefault();


    }
    return (
        <div>
            <h3>Input 'CA' behind a canadian city eg 'London CA' to get london from canada and not england</h3>

            <form onSubmit={handleSubmit}>
                <label>
                    <input type="text" name="name" value={city} placeholder="City" onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />

            </form>
        </div>

    )
}

export default Question2;