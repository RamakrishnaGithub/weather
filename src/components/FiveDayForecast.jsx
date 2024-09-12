import React from 'react'

const FiveDayForeCast = ({ fivedayforecaseData }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
    }).format(date);
  };

  return (
    <div
      style={{
        backgroundColor: "#7d59bf",
        color: "white",
        borderRadius: "0.5rem",
        width: "230px",
        paddingLeft: "15px",
        paddingRight: '15px',
        paddingTop: "15px",
        paddingBottom: "5px",



      }}
    >
      {fivedayforecaseData.list.slice(0, 4).map((item, index) => (
        <div
          key={index}
          style={{
            marginBottom: "25px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <div style={{ fontSize: "15px", fontWeight: "bold" }}>
              {Math.round(item.main.temp)}°c
            </div>
          </div>
          <div>
            <div style={{ fontSize: "14px", fontWeight: "bold" }}>
              {formatDate(item.dt_txt)}
            </div>
          </div>
          <div>
            <div style={{ fontSize: "15px" }}>
              {item.weather[0].description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FiveDayForeCast
