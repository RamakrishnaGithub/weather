import React from 'react'


const HeighlightBox = ({title,value,Icon}) => {
  return (
    <div style={{ width: "180px",gap:"30px",height:"60px", marginTop: "10px", backgroundColor: "#9e83cf", color: "white", borderRadius: "10px", padding: "20px" }}>
      <div>
        <div style={{fontSize:"16px"}}>{title}</div>
        <div style={{display:"flex",justifyContent:'space-between',marginTop:"20px"}}>
          <div><Icon/></div>
            <div>{value}</div>
        </div>
      </div>
    </div>
  )
}

export default HeighlightBox
