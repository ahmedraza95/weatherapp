let timediv = document.querySelector(".time");
let date = document.querySelector(".date");


setInterval(() => {
    let date1 = new Date().toLocaleString();
    date1 = date1.split(",")

    let time12 = date1[1]
    time12 = time12.split(":")
    if (time12[0] > 12) {
        timediv.innerHTML = `${time12[0] - 12} :  ${+ time12[1]}  :  ${time12[2]} am`
        console.log("hello");
    } else if (time12[0] === 12) {
        timediv.innerHTML = `${time12[0]} :  ${+ time12[1]}  :  ${+ time12[2]} Pm`

    } else {
        timediv.innerHTML = `${time12[0]} :  ${+ time12[1]}  :  ${time12[2]} Pm`
    }


    let resul = `${time12[0] - 12}  `
    date.innerHTML = date1[0];




}, 1000);


let card = document.querySelector("#card");
let location = document.querySelector(".location");
let loader = document.querySelector("#wifi-loader");
let userCity = document.querySelector("#Email");
form.addEventListener("submit", async (event) => {
    event.preventDefault();

    try {
        let row = document.querySelector(".row");
        location.style.display = "inline";
        userCity = userCity.value;
        


        let currDate = document.querySelector("#dateTime");

        let form = document.querySelector("#form")
        let divtemp1 = document.querySelector("#div1")
        let divtemp2 = document.querySelector("#div2")
        let divtemp3 = document.querySelector("#div3")
        let divtemp4 = document.querySelector("#div4")
        let div5temp = document.querySelector("#div5")
        let div1value = document.querySelector("#div1value")
        let div2value = document.querySelector("#div2value")
        let div3value = document.querySelector("#div3value")
        let div4value = document.querySelector("#div4value")
        let div5value = document.querySelector("#div5value")
        let divtemp5 = document.querySelector(".weather");
        divtemp5.innerHTML = "";
        divtemp1.innerHTML = "";
        divtemp2.innerHTML = "";
        divtemp3.innerHTML = "";
        divtemp4.innerHTML = "";
        div1value.innerHTML = "";
        div2value.innerHTML = "";
        div3value.innerHTML = "";
        div4value.innerHTML = "";
        div5value.innerHTML = "";
        div5temp.innerHTML = "";
        location.innerHTML = `           
        <div id="wifi-loader">
            <svg class="circle-outer" viewBox="0 0 86 86">
                <circle class="back" cx="43" cy="43" r="40"></circle>
                <circle class="front" cx="43" cy="43" r="40"></circle>
                <circle class="new" cx="43" cy="43" r="40"></circle>
            </svg>
        <svg class="circle-middle" viewBox="0 0 60 60">
            <circle class="back" cx="30" cy="30" r="27"></circle>
            <circle class="front" cx="30" cy="30" r="27"></circle>
        </svg>
        <svg class="circle-inner" viewBox="0 0 34 34">
            <circle class="back" cx="17" cy="17" r="14"></circle>
            <circle class="front" cx="17" cy="17" r="14"></circle>
        </svg>
        <div class="text" data-text="Searching"></div>
    </div>
    </div>`;



        let ApiKey = `https://api.weatherapi.com/v1/current.json?key=6b98efe0404240d2b8c175044241905&q=${userCity}&aqi=no;`
        const url = await fetch(ApiKey);
        let response = await url.json();

        card.style.height = "auto";

        row.style.display = "flex";
        location.innerHTML = `Weather Today In ${response.location.name}, ${response.location.country}`;
        let correct = response.current.condition.icon;
        location.style.height = "auto";

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
        
        document.querySelector("#Email").value = "";


    }
    catch (error) {
        let row = document.querySelector(".row")


        console.log(error);
        // div5temp.style.display = "none";
        // form.addEventListener("submit", async (event) => {
        console.log(Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          }));
        row.style.display = "none";
        location.innerHTML = `<h1>City Not Found.......</h1>`;
        card.style.height = "40vh";
        document.querySelector("#Email").value = "";
        // userCity.value = "";

    } finally {
    }



    // "//cdn.weatherapi.com



















})






