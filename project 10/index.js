const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
// const imgurl="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png";

const form=document.querySelector("form");
const search=document.querySelector("#search");
const weather=document.querySelector("#weather");
// console.log(weather);
// console.log(form);
// console.log(search);
const getweather=async(city)=>{
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
const responce=await fetch(url);
const data=await responce.json();
showweather(data);
}

const showweather=(data)=>{
    if(data.code=="404"){
        weather.innerHTML=`<h2>loading..</h2>`
    }
    weather.innerHTML=`<div>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
</div>
<div>
    <h2>${data.main.temp}</h2>
    <h4>${data.weather[0].main}</h4>
</div>`;

}
form.addEventListener("submit",function(event){
    getweather(search.value);
    event.preventDefault();
})
