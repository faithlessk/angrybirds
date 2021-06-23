let films = [{
  img: "https://www.bing.com/images/blob?bcid=TpOJpES7S-YCqxcxoNWLuD9SqbotqVTdP80",
  name: "Angry Birds Toons",
  genre: "Genre: Comedy, Adventure",
  seasons: "Seasons: 3",
  episodes: "Episodes: 104",
  time: "Running Time: 3 mins",
  color: "lightcoral"
},
{
  img: "https://www.bing.com/images/blob?bcid=Tt6MGZN20dwCDF1gqcPOew24kV0Q.....6g",
  name: "Angry Birds Stella",
  genre: "Genre: Adventure",
  seasons: "Seasons: 1",
  episodes: "Episodes: 26",
  time: "Running Time: 3 mins",
  color: "hotpink"
},
{
  img: "https://www.bing.com/images/blob?bcid=TiZzk-RDNOYCqxcxoNWLuD9SqbotqVTdPxI",
  name: "Angry Birds MakerSpace",
  genre: "Genre: Comedy",
  seasons: "Seasons: 1",
  episodes: "Episodes: 20",
  time: "Running Time: 1 min",
  color: "cornflowerblue"
},
{
  img: "https://www.bing.com/images/blob?bcid=Tu4zvJd8YNwCDF1gqcPOew24kV0Q.....xI",
  name: "Angry Birds Slingshot Stories",
  genre: "Genre: Comedy, Action",
  seasons: "Seasons: 2",
  episodes: "Episodes: 10",
  time: "Running Time: 1 min",
  color: "gold"
},
{
  img: "https://i.ytimg.com/vi/YHEkvuOctBg/maxresdefault.jpg",
  name: "The Angry Birds Movie",
  genre: "Genre: Comedy, Action, Family",
  seasons: "Seasons: N/A",
  episodes: "Episodes: 1",
  time: "Running Time: 97 mins",
  color: "red"
},
{
  img: "https://www.bing.com/images/blob?bcid=Tr7ncS5djtwCDF1gqcPOew24kV0Q.....wc",
  name: "The Angry Birds Movie 2",
  genre: "Genre: Comedy, Action, Family",
  seasons: "Seasons: N/A",
  episodes: "Episodes: 1",
  time: "Running Time: 96 mins",
  color: "wheat"
}
]

let data = films
let renderData = (data) => {
  let card = document.querySelector("#card")
  card.innerHTML = ""

  for (let i = 0; i < data.length; i++) {
    let html = `
    <div class="card"
    style="width: 18rem; margin: 18px; border: solid ${data[i].color} 9px; border-radius: 20px; background-color: whitesmoke; box-shadow: 0 0 15px rgb(0 0 255 / 23%);">
    <img src="${data[i].img}" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title" style="display: flex; justify-content: center;">${data[i].name}</h5>
      <p class="card-text">
        ${data[i].genre}
        <br>
        <br>
        ${data[i].seasons}
        <br>
        <br>
        ${data[i].episodes}
        <br>
        <br>
        ${data[i].time}
      </p>
      <p href="#" class="btn btn-primary">Like</a>
      <p href="#" class="btn btn-danger">Dislike</a>
    </div>
  </div>`
    card.innerHTML += html
  }
}
renderData(data)

let all = document.getElementById("all")
all.addEventListener("click", (e) => {
  e.preventDefault()
  renderData(data)
})

let form = document.getElementById("search")
form.onsubmit = (e) => {
  e.preventDefault()
  let input = form.inputData.value.toLowerCase()
  let result = data.filter((d) => {
    return (d.name.toLowerCase()).includes(input)
  })

  renderData(result)
}
