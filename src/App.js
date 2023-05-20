import React,{useState} from "react";


let App=()=>{

  let [cord,setCord]=useState({latitude:"",longitude:""});
  let [hemisphere,setHemisphere]=useState("");
  let [month,setMonth]=useState("");
  let [weather,setWeather]=useState("");
  let [show,setShow]=useState("")
  let monthsarr=["January","February","March","April","May","June","July","August","September","October","November","December"]
 function  getloc() {
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition((position)=>{
      console.log(position)
      setCord({latitude:position.coords.latitude,longitude:position.coords.longitude})
      setMonth(new Date().getMonth())
      hem(position.coords.latitude);
      checkweather(new Date().getMonth(),position.coords.latitude)
      setShow("none");
      
    })
  }
}

function hem(latitude){
  if(latitude>0){
    setHemisphere("Northern Hemisphere");
  }else if(latitude<0){
    setHemisphere("Southern Hemisphere");
  }else{
    setHemisphere("Equator");
  }

 
}


function checkweather(month,lat){
  if((lat>0 && month>=9 && month<=2)||(lat<0 && month>=3 && month<=8)){
    setWeather("Burr, it's chilly!")
  }else if((lat<0 && month>=9 && month<=2)||(lat>0 && month>=3 && month<=8)){
    setWeather("Let's heat the beach!")
  }
}

  return (
    <div className="container">
      <div>
          <h1 style={{color:"gold"}}>{weather}</h1>
      </div>
      <div>
        <p style={{color:"rgb(0, 255, 191)",fontSize:"22px"}}>{(cord.latitude)?`Latitude : ${cord.latitude}`:""}</p>
        <p style={{color:"rgb(0, 255, 191)",fontSize:"22px"}}>{(cord.longitude)?`Longitude : ${cord.longitude}`:""}</p>
      </div>
      <div>
        <h3 style={{color:"green",fontSize:"30px"}}>{hemisphere}</h3>
      </div>
      <div>
        <h2 style={{color:"rgb(255, 0, 200)",fontSize:"30px"}}>{monthsarr[month]}</h2>
      </div>
      <h1 style={{display:show,color:"blue"}}>See the weather description</h1>
      <button onClick={getloc} style={{display:show}}>Click here</button>
    </div>
  )
}
export default App;