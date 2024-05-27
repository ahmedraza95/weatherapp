let timediv = document.querySelector(".time");
let date = document.querySelector(".date");


let ApiKey = "https://api.weatherapi.com/v1/current.json?key=6b98efe0404240d2b8c175044241905&q=karachi&aqi=no";
const url = await fetch(ApiKey);
let response = await url.json();

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    try {




        let currDate = document.querySelector("#dateTime");
        let userCity = document.querySelector("#Email").value;
        let form = document.querySelector("#form")
        let location = document.querySelector(".location");
        let divtemp1 = document.querySelector("#div1")
        let divtemp2 = document.querySelector("#div2")
        let divtemp3 = document.querySelector("#div3")
        let divtemp4 = document.querySelector("#div4")
        let div5temp = document.querySelector("#div5")
        // let divtemp6 = document.querySelector("#div6")
        let div1value = document.querySelector("#div1value")
        let div2value = document.querySelector("#div2value")
        let div3value = document.querySelector("#div3value")
        let div4value = document.querySelector("#div4value")
        let div5value = document.querySelector("#div5value")
        // let div6value = document.querySelector("#div6value")
        let divtemp5 = document.querySelector(".weather");
        location.style.display = "inline"


        ApiKey = `https://api.weatherapi.com/v1/current.json?key=6b98efe0404240d2b8c175044241905&q=${userCity}&aqi=no;`
        const url = await fetch(ApiKey);
        let response = await url.json();
        location.innerHTML = `Weather Today In ${response.location.name}, ${response.location.country}`;
        let correct = response.current.condition.icon;

        correct = correct.toString();
        correct = correct.split("/");
        correct = correct.splice(3)
        correct = "./" + correct[0] + "/" + correct[1] + "/" + correct[2] + "/" + correct[3]

        let weatherimg = `<img src="${correct}">`
        divtemp5.innerHTML = `Weather ${response.current.condition.text}${weatherimg}`

        divtemp1.innerHTML = `<img src="./sun logo.png" alt=""> Temp`
        div1value.innerHTML = `${response.current.temp_c}&#176 C`

        divtemp2.innerHTML = `<img src="./imsges/wind icon.png" width="10%" alt=""> Wind `
        div2value.innerHTML = `${response.current.wind_kph}km/h`

        divtemp3.innerHTML = `<img src="./imsges/humidity.png" width="10%" alt=""> Humidity`
        div3value.innerHTML = `${response.current.humidity}%`

        divtemp4.innerHTML = `<img src="./imsges/visibility.png" width="10%" alt=""> visibility`
        div4value.innerHTML = `${response.current.vis_km} km`

        div5temp.innerHTML = `<img src="./imsges/pressuer.png" width="10%" alt=""> Pressure`
        div5value.innerHTML = `<img src="./imsges/right-arrow.png" alt=""> ${response.current.pressure_mb.toFixed(1)} mb`
        // div1value = "Hello";

    } catch (error) {

        location.innerHTML = `<img src="./imsges/pressuer.png" sorry`;
        console.log(error);
        // form.addEventListener("submit", async (event) => {
        console.log(sweetAlert("City Is not Found", "Please Input Correct City!", "error"));

    }



    // "//cdn.weatherapi.com



















})






let time = response.location.localtime;
time = time.toString();
time = time.split(" ");
let hours = time[1];
hours = hours.toString();
hours = hours.split(":")


timediv.innerHTML = "";
setInterval(() => {


    if (+hours[0] > 12) {
        let hours12 = hours[0] - 12;
        let hoursMin = hours[1];
        timediv.innerHTML = `${hours12} : ${hoursMin} : PM`;
        date.innerHTML = `${time[0]}`;
        console.log();

    } else {
        timediv.innerHTML = `${hours[0]} : ${hours[1]} : AM`;
        date.innerHTML = `${time[0]}`;

    }

}, 1000)


