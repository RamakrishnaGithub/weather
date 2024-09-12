import React, { useState } from 'react'
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup'
import GpsFixedIcon from '@mui/icons-material/GpsFixed';


const NavBar = ({ onSearch, weatherData }) => {
  
  
  const [searchCity, setSearchCity] = useState('')


  const SearchCityClick = () => {
    if (searchCity.trim()) {
      onSearch(searchCity)
    } else {
      alert("Enter correct name of the city!")
    }
  }

  return <nav style={{
    display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "10px", padding: "10px",
    paddingLeft: "30px", paddingRight: "30px"
  }}>
    <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
      <FilterDramaIcon />
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>Weather</p>
    </div>

    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
      <ButtonGroup variant="contained" aria-label="Basic button group">
        <TextField
          style={{ backgroundColor: "white", borderRadius: "15px", width: "22rem" }}
          placeholder="Search"
          variant="outlined"
          size="small"
          onChange={(e) => {
            setSearchCity(e.target.value)
          }}
        />
        <Button variant="contained" style={{ backgroundColor: "#7d59bf" }} onClick={SearchCityClick}>Search</Button>
      </ButtonGroup>


    </div>

    {/* <div style={{
      alignItems: 'center',
      width: "120px",
      height: "30px",
      backgroundColor: "#7d59bf",
      borderRadius: "5px",
      color: "white",
      fontSize: "8px",
      fontWeight: "600",
      gap: "2px",
      display: "flex",
      justifyContent: "center"
    }} onClick={() => {
      
      if (navigator.geolocation) {
        const apiKey = 'a8cc66f728d47aaa6cd46c7f1efec4a8';
        navigator.geolocation.getCurrentPosition((position) => {
          const latitude = position.coords.latitude.toFixed();
          const longitude = position.coords.longitude.toFixed();
          console.log(latitude, longitude)
          // if(lat.toFixed()===latitude && lon.toFixed()===longitude){
          //   return true
          // }


          const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

                    // Fetch the city name
                    fetch(url)
                        .then(response => response.json())
                        .then(data => {
                            if (data.length > 0) {
                                const city = data?.name || 'Unknown city';
                                setSearchCity(city)
                            } 
                            console.log(data,"innerdata")
                        })
                        .catch(error => {
                            console.error('Error fetching city name:', error);
                        });

        }, (error) => {
          console.error('Error getting location:', error);
        });
      }
    }}>
      <GpsFixedIcon />
      <p style={{ fontSize: "10px" }}>Current location</p>
    </div> */}
  </nav>
}

export default NavBar
