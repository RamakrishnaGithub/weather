import React from 'react'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CloudIcon from '@mui/icons-material/Cloud';
import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';

const HomeWheather = ({ weatherData }) => {
  const temprature = weatherData?.main?.temp || "N/A"
  const weatherDescription = weatherData?.weather?.[0]?.description || "N/A"
  const cityName = weatherData?.name || "N/A"
  const countryName = weatherData?.sys?.country || "N/A"
  const timeStamp = weatherData?.dt || null
  const currentDate = timeStamp ? new Date(timeStamp * 1000).toLocaleDateString("en-US", {
    weekday: "long", day: "numeric", month: "short"
  }) : "Data not available";
  const renderTempratureIcon = () => {
    if (temprature > 23) {
      return <WbSunnyIcon style={{ marginLeft: "10px", fontSize: "30px", color: "orange" }} />
    } else if (temprature < 10) {
      return <AcUnitIcon style={{ marginLeft: "10px", fontSize: "30px", color: "lightblue" }} />
    } else {
      return <CloudIcon style={{ marginLeft: "10px", fontSize: "30px", color: "lightgrey" }} />
    }
  }

  return (
    <div style={{ backgroundColor: "#7d59bf", color: "white", borderRadius: "10px", width: "200px", padding: "30px" }}>
      <div style={{ fontSize: "20px" }}>
        NOW
      </div>
      <div style={{ display: 'flex', alignItems: "center", fontSize: "35px", fontWeight: "bold" }}>
        {temprature}&deg; c
        {renderTempratureIcon()}
      </div>
      <div style={{ fontSize: "14px", marginTop: "6px", fontWeight: "bold" }}>{weatherDescription}</div>
      <div style={{ marginTop: "6px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <CalendarMonthSharpIcon />
          {currentDate}</div>
      </div>
      <div style={{marginTop:"5px",display:"flex",alignItems:"center"}}>
        <LocationOnSharpIcon/>
        {cityName},{countryName}
      </div>

    </div>
  )
}

export default HomeWheather
