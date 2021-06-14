let dom = document.querySelector(".a")
let form = document.querySelector("#form")

let getData = async (city) => {
  let preData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7674da634845e7c2d8c53ab0a48b8e29`)
  let data = await preData.json()

  console.log(data);

  let html = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"  alt="">
  <hr>
  <h1>${Math.floor(data.main.temp - 273)} *C</h1>
  <h4>${data.weather[0].description}</h4>
  <p>${data.name}</p>`
  dom.innerHTML = html
}
form.onsubmit = (e) => {
  e.preventDefault()
  let city = form.city.value.trim()
  getData(city)
}