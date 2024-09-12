import React from 'react'
import AirIcon from '@mui/icons-material/Air';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import CompressIcon from '@mui/icons-material/Compress';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import HeighlightBox from './heighlightBox';


const TodayHighlights = ({ weatherData, airQualityData }) => {
    const { main, wind, visibility, sys } = weatherData
    const airQualityIndex = airQualityData?.main?.aqi
    const { co, no, no2, o3 } = airQualityData?.components || {}

    const heighlights = [
        {
            title: "Feels like",
            value: `${main?.feels_like}°C`,
            icon: DeviceThermostatIcon,
        },
        {
            title: "Pressure",
            value: `${main?.pressure}hPa`,
            icon: CompressIcon,
        },
        {
            title: "Humidity",
            value: `${main?.humidity}%`,
            icon: InvertColorsIcon,
        },
        {
            title: "Visibility",
            value: `${visibility}km`,
            icon: RemoveRedEyeIcon,
        },
    ]

    const renderAirQualitydesc = (aqi) => {
        switch (aqi) {
            case 1:
                return "Good";
            case 2:
                return "Fair";
            case 3:
                return "Moderate";
            case 4:
                return "Poor";
            case 5:
                return "Very Poor";
            default:
                return "Unknown"
        }
    }

    return (
        <div style={{
            width: "800px",
            backgroundColor: "#7d59bf",
            color: "white",
            padding: "30px",
            borderRadius: "10px"
        }}>
            <div style={{ fontSize: "16px" }}>Today Highlights</div>
            <div style={{ display: "flex", gap: "18px" }}>
                <div style={{ width: "390px", marginTop: "10px", backgroundColor: "#9e83cf", color: "white", borderRadius: "10px" }}>
                    <div>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "18px", padding: "10px" }}>
                            <p>Air Quality Index</p>
                            <div style={{
                                marginTop: "20px",
                                width: "80px",
                                height: "20px",
                                borderRadius: "5px",
                                backgroundColor: "green",
                                color: 'white',
                                justifyContent: "center",
                                alignItems: "center",
                                display: "flex",
                                fontSize: "12px",
                                fontWeight: "bold"
                            }}>
                                {renderAirQualitydesc(airQualityIndex)}
                            </div>
                        </div>
                        <div style={{ fontSize: "40px", padding: "10px" }}>
                            <AirIcon /><span style={{fontSize:"20px",marginLeft:"10px"}}>{wind.speed}km</span>
                            <div style={{ fontSize: "15px", marginTop: "10px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "10px" }}>
                                <div>
                                    <p style={{ fontWeight: "bold" }}>CO</p>
                                    <p>{co} µg/m³</p>
                                </div>
                                <div>
                                    <p style={{ fontWeight: "bold" }}>NO</p>
                                    <p>{no} µg/m³</p>
                                </div>
                                <div>
                                    <p style={{ fontWeight: "bold" }}>NO<sub>2</sub></p>
                                    <p>{no2} µg/m³</p>
                                </div>
                                <div>
                                    <p style={{ fontWeight: "bold" }}>O<sub>3</sub></p>
                                    <p>{o3} µg/m³</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ width: "390px", marginTop: "10px", backgroundColor: "#9e83cf", color: "white", borderRadius: "10px", padding: "10px" }}>
                    <div style={{ fontSize: "18px" }}>
                        <p >Sunrise & Sunset</p>
                        <div style={{ display: 'flex', justifyContent: "space-between", padding: "10px" }}>
                            <div>
                                <WbSunnyIcon style={{ fontSize: "80px", marginLeft: "30px", color: "#FFD14B" }} />
                                <p style={{ fontSize: '18px', marginLeft: "20px" }}>{new Date(sys.sunrise * 1000).toLocaleTimeString()}</p>

                            </div>
                            <div>
                                <WbTwilightIcon style={{ fontSize: "80px", marginRight: "50px", color: "lightgray" }} />
                                <p style={{ fontSize: '18px', marginRight: "50px" }}>{new Date(sys.sunset * 1000).toLocaleTimeString()}</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ display: "flex", gap: "5px", marginTop: "10px" }}>
                {
                    heighlights.map((heighlight, index) => {
                        return <HeighlightBox Key={index} value={heighlight.value} title={heighlight.title} Icon={heighlight.icon} />
                    })
                }
            </div>
        </div>
    )
}

export default TodayHighlights
