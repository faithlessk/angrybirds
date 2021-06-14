let games = [{
        img: "https://th.bing.com/th/id/Ra0b9797d26b9af60debba670d848790b?rik=BGk3f2bXB1g0hg&riu=http%3a%2f%2flh3.googleusercontent.com%2fiOi6YJxQwMenT5UQWGPWTrFMQFm68IC4uKlFtARveZzVD5lTZ7fC47_rnnF7Tk48DpY%3dw300&ehk=xe4S5xzM90VnB3zyvBhocYiAj8AmbZzskp1W8GQVnd0%3d&risl=&pid=ImgRaw",
        name: "Angry Birds",
        genre: "Genre: Puzzle",
        levels: "Level Count: 732",
        version: "Current Version: 8.0.3"
    },
    {
        img: "https://www.bing.com/images/blob?bcid=Ti5l6BwDjdsCDF1gqcPOew24kV0Q.....wA",
        name: "Angry Birds 2",
        genre: "Genre: Puzzle",
        levels: "Level Count: 2980",
        version: "Current Version: 2.42.0"
    },
    {
        img: "https://www.bing.com/images/blob?bcid=TmSi3xYJo9sCDF1gqcPOew24kV0Q.....4s",
        name: "Angry Birds Seasons",
        genre: "Genre: Puzzle",
        levels: "Level Count: 850",
        version: "Current Version: 6.6.2"
    },
    {
        img: "https://m.media-amazon.com/images/G/01/DeveloperBlogs/AmazonDeveloperBlogs/legacy/6a0148c71fb71b970c015432458c5f970c-pi._CB520205554_.png",
        name: "Angry Birds Rio",
        genre: "Genre: Puzzle",
        levels: "Level Count: N/A",
        version: "Current Version: 2.6.1"
    },
    {
        img: "https://www.bing.com/images/blob?bcid=TlaYXnTrr9sCDF1gqcPOew24kV0Q.....1k",
        name: "Angry Birds Friends",
        genre: "Genre: Puzzle",
        levels: "Level Count: N/A",
        version: "Current Version: 9.8.1"
    },
    {
        img: "https://i.ebayimg.com/images/g/SCcAAOSwBLlVWkmX/s-l300.jpg",
        name: "Angry Birds Space",
        genre: "Genre: Puzzle",
        levels: "Level Count: 623",
        version: "Current Version: 2.2.12"
    },
    {
        img: "https://th.bing.com/th/id/R61a3da24dd3c54a911b39dc8926e9ce0?rik=xDITJCGY7VLXHg&riu=http%3a%2f%2fa203.phobos.apple.com%2fus%2fr30%2fPurple4%2fv4%2f7b%2fb7%2f65%2f7bb7651f-52a1-c4a6-74b3-38e41147fd9d%2fmzl.pudpqcyg.png&ehk=6bisQbHLwnzFigMlzYibJeRfWcnG3cr0vqBnXRa%2beRs%3d&risl=&pid=ImgRaw",
        name: "Bad Piggies",
        genre: "Genre: Puzzle",
        levels: "Level Count: 229",
        version: "Current Version: 2.3.9"
    },
    {
        img: "https://www.bing.com/images/blob?bcid=TsO0neDa2tsCDF1gqcPOew24kV0Q.....xo",
        name: "Angry Birds Go!",
        genre: "Genre: Racing",
        levels: "Level Count: 55",
        version: "Current Version: 2.9.1"
    }
]

let data = games
let renderData = (data) => {
    let card = document.querySelector("#card")
    card.innerHTML = ""

    for (let i = 0; i < data.length; i++) {
        let html = `
        <div class="card"
        style="width: 18rem; margin: 18px; border: solid red 9px; border-radius: 20px; background-color: whitesmoke; box-shadow: 0 0 15px rgb(0 0 255 / 23%);">
        <img src="${data[i].img}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title" style="display: flex; justify-content: center;">${data[i].name}</h5>
          <p class="card-text">
            ${data[i].genre}
            <br>
            <br>
            ${data[i].levels}
            <br>
            <br>
            ${data[i].version}
          </p>
          <a href="#" class="btn btn-primary">Like</a>
          <a href="#" class="btn btn-danger">Dislike</a>
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