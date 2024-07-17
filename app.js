let timediv = document.querySelector(".time");
let date = document.querySelector(".date");


setInterval(() => {
    let date1 = new Date().toLocaleString();
    date1 = date1.split(",")

    let time12 = date1[1]
    time12 = time12.split(":")
    if (time12[0] > 12) {
        timediv.innerHTML = `${time12[0] - 12} :  ${+ time12[1]}  :  ${time12[2]}`
        console.log("hello");
    } else if (time12[0] === 12) {
        timediv.innerHTML = `${time12[0]} :  ${+ time12[1]}  :  ${+ time12[2]}`

    } else {
        timediv.innerHTML = `${time12[0]} :  ${+ time12[1]}  :  ${time12[2]}`
    }


    let resul = `${time12[0] - 12}  `
    date.innerHTML = date1[0];




}, 1000);


let card = document.querySelector("#card");
let location = document.querySelector(".location");
let loader = document.querySelector("#wifi-loader");
form.addEventListener("submit", async (event) => {
    event.preventDefault();
    
    try {
        let userCity = document.querySelector("#Email").value;
        let row = document.querySelector(".row");
        location.style.display = "flex";
        


        let currDate = document.querySelector("#dateTime");
        let condition = document.querySelector(".condition")
        let temp = document.querySelector(".tempBig")
        let form = document.querySelector("#form")
        let divtemp2 = document.querySelector("#div2")
        let divtemp3 = document.querySelector("#div3")
        let divtemp4 = document.querySelector("#div4")
        let div5temp = document.querySelector("#div5")
        let div2value = document.querySelector("#div2value")
        let div3value = document.querySelector("#div3value")
        let div4value = document.querySelector("#div4value")
        let div5value = document.querySelector("#div5value")
        let divtemp5 = document.querySelector(".weather");
        divtemp5.innerHTML = "";
        divtemp2.innerHTML = "";
        divtemp3.innerHTML = "";
        divtemp4.innerHTML = "";
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



        row.style.display = "flex";
        location.innerHTML = `<b>${response.location.name}, ${response.location.country}</b>`;
        let correct = response.current.condition.icon;
        location.style.height = "auto";

        correct = correct.toString();
        correct = correct.split("/");
        correct = correct.splice(3)
        correct = "./" + correct[0] + "/" + correct[1] + "/" + correct[2] + "/" + correct[3]

        let weatherimg = `<img  width="90%" src="${correct}">`
        divtemp5.innerHTML = `${weatherimg}`
        // divtemp5.setAttribute("class" , "imgi");

        condition.innerHTML = `<b>${response.current.condition.text}</b>`

        temp.innerHTML = `<b>${Math.round(response.current.temp_c)}&#176</b>`

        divtemp2.innerHTML = `<img src="./imsges/wind icon.png" width="30%" alt="">`
        div2value.innerHTML = `${response.current.wind_kph}km/h`

        divtemp3.innerHTML = `<img src="./imsges/humidity.png" width="30%" alt="">`
        div3value.innerHTML = `${response.current.humidity}%`

        divtemp4.innerHTML = `<img src="./imsges/visibility.png" width="30%" alt="">`
        div4value.innerHTML = `${response.current.vis_km} km`

        div5temp.innerHTML = `<img src="./imsges/pressuer.png" width="30%" alt="">`
        div5value.innerHTML = ` ${response.current.pressure_mb.toFixed(1)} mb`
        // div1value = "Hello";
        
        userCity.reset();


    }
   /* catch (error) {
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
        document.querySelector("#Email").value = "";
        // userCity.value = "";

    } */finally {
    }




})




