
async function Search(){
    let output=document.getElementById('output');
    let location=document.getElementById('location');

    if(location.value==""){
        output.innerHTML="<h3>Enter your City Name</h3>";
    }
    else{
        output.innerHTML="";
        const api=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location.value}&appid=d8ab14f7e93c56cbe84562d28e8202bd&units=metric`)
       const data=await api.json();
        console.log(data);
        output.innerHTML=`
        <div class="card">
            <h2>Weather of &nbsp <span style="color: #9de2ff;"> ${data.name}</span></h2>
        <div class="weatherDetails">
            <p>Sky condition:<span>${data.weather[0].description}</span></p>
            <p>Temperature:<span>${data.main.temp}</span></p>
            <p>wind speed:<span>${data.wind.speed}</span></p>
        </div>
        </div>
        `
    }
}