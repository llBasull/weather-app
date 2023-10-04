import React,{useState} from 'react'
import axios from 'axios'

function App(){

  const [data,setdata] = useState({});
  const [Location,setLocation] = useState('');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${Location}&appid=d3d58691cdf5427ef7b5c4173a30de96&units=metric`;
  const searchLocation = (event) =>{
    if(event.key==='Enter'){
    axios.get(url).then((response) => {
      setdata(response.data)
      console.log(response.data)
    })
    setLocation('')
  }
  }
    

  return (
    <div className="app">
      <div className="search">
        <input value={Location} 
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation} 
        placeholder='Enter Location'
        type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name} </p>
          </div>
          <div className="temp">
           {data.main ? <h1>{data.main.temp}°C</h1> :null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p>:null}
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
           {data.main ? <p className='bold'>{data.main.feels_like}°C</p>:null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className='bold'>{data.main.humidity}%</p>:null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.main ? <p className='bold'>{data.wind.speed}m/s</p>:null}
            <p>Wind</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default App;