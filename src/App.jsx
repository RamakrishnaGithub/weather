import './App.css'
import HomeWheather from './components/HomeWheather'
import NavBar from './components/NavBar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import TodayHighlights from './components/TodayHighlights'
import FiveDayForeCast from './components/FiveDayForeCast'

function App() {
  const [city, setCity] = useState("mumbai")
  const [weatherData, setWeatherData] = useState(null)
  const [airQualityData, setAirQualityData] = useState(null)
  const [fivedayforecaseData,setfivedayforecaseData]=useState(null)

  const fetchAirQuality = (lat, lon) => {
    const API_KEY = "a8cc66f728d47aaa6cd46c7f1efec4a8"
    axios.get(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
      .then(response =>{setAirQualityData(response?.data.list[0])
         
      } )
      .catch(error => console.error("Error while fetching air quality data", error))
  }

  useEffect(() => {
    fetchWeatherData(city)
  }, [city])
  const fetchWeatherData = (city) => {
    const API_KEY = "a8cc66f728d47aaa6cd46c7f1efec4a8"
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setWeatherData(data)
        console.log(JSON.stringify(data))
        fetchAirQuality(data.coord.lat, data.coord.lon)
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`)
        .then(response=>setfivedayforecaseData(response.data))
        .catch(error=>console.error("Error wile fetching forecast data",error))
      })
      .catch(error => console.error("Error while fetching weather data", error))
  }

  const handleSearch = (searchCity) => {
    setCity(searchCity)
  }
  return (
    <>
      <NavBar onSearch={handleSearch}  weatherData={weatherData}/>
      {weatherData && airQualityData && 
      <div style={{ display: "flex", padding: "30px", gap: "20px",alignItems:'center' }}>
        <div style={{ flex: "1" }}>
          <HomeWheather weatherData={weatherData} />
          <p style={{marginTop:"10px",fontWeight:"bold",fontSize:"18px"}}>Last few hour's forecast</p>
         {fivedayforecaseData && <FiveDayForeCast fivedayforecaseData={fivedayforecaseData}/>}
        </div>
        <div style={{display:'flex',flexDirection:"column",flex:"0.5",gap:"20px"}}>
          <TodayHighlights weatherData={weatherData} airQualityData={airQualityData} />
        </div>
      </div>}
    </>
  )
}

export default App
