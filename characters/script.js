let bon = [{
    img: "https://th.bing.com/th/id/Rfd1fe6d592157c259f03d2927c2945e6?rik=jhRFc0Q3YUqzpg&riu=http%3a%2f%2fstatic1.wikia.nocookie.net%2f__cb20130304122244%2fangrybirdsfanon%2fimages%2ff%2ff0%2fAngry_Bird_red.png&ehk=3wBIAVlZxpMCKae9zRNiwcgbuUmvG0b0tiZQ4UDZ4XQ%3d&risl=&pid=ImgRaw",
    gender: "Gender: Male",
    name: "Red",
    species: "Species: Northern Cardinal",
    abilities: "Abilities: Leadership",
    powerlevel: "Power Level: Weak",
    color: "red"
  },
  {
    img: "https://easydraweverything.com/wp-content/uploads/2019/08/Yellow-Bird-step_00.png",
    gender: "Gender: Male",
    name: "Chuck",
    species: "Species: Canary",
    abilities: "Abilities: Superspeed",
    powerlevel: "Power Level: Medium",
    color: "yellow"
  },
  {
    img: "https://th.bing.com/th/id/Re963d0b8bf8ea103548dc870bfe6e47b?rik=37OWymhYPEAvUw&pid=ImgRaw",
    gender: "Gender: Male",
    name: "Bomb",
    species: "Species: Loon",
    abilities: "Abilities: Explode, Electric Shock",
    powerlevel: "Power Level: Strong",
    color: "black"
  },
  {
    img: "https://th.bing.com/th/id/R5ee963fa8d1eb728e8f8cbeb66c0348a?rik=KPSeYJU4a0z3%2bA&riu=http%3a%2f%2fvignette4.wikia.nocookie.net%2fangry-birds-roleplay%2fimages%2fc%2fc7%2fMatilda.png%2frevision%2flatest%3fcb%3d20140727150416&ehk=hgndTS6rKXJsUsx6eTGZum8FVfCS5ABZ93fvpslG0ew%3d&risl=&pid=ImgRaw",
    gender: "Gender: Female",
    name: "Matilda",
    species: "Species: Chicken",
    abilities: "Abilities: Shooting Egg",
    powerlevel: "Power Level: Strong",
    color: "lightgray"
  },
  {
    img: "https://easydraweverything.com/wp-content/uploads/2019/08/Big-Brother-step_00.png",
    gender: "Gender: Male",
    name: "Terence",
    species: "Species: Northen Cardinal",
    abilities: "Abilities: Weight, strength, and momentum",
    powerlevel: "Power Level: Strong",
    color: "maroon"
  },
  {
    img: "https://vignette.wikia.nocookie.net/angrybirds/images/d/dd/Blues_240.png/revision/latest?cb=20130419123057",
    gender: "Gender: Male",
    name: "The Blues",
    species: "Species: Mountain Bluebirds",
    abilities: "Abilities: Splitting up in flight",
    powerlevel: "Power Level: Weak",
    color: "skyblue"
  },
  {
    img: "https://th.bing.com/th/id/Rb1e5bdfa86ebe728ae8b816336e9dd84?rik=AxupjLVvdENu%2bQ&pid=ImgRaw",
    gender: "Gender: Male",
    name: "Hal",
    species: "Species: Emerald Toucanet",
    abilities: "Abilities: Spinning back like a boomerang",
    powerlevel: "Power Level: Medium",
    color: "green"
  },
  {
    img: "https://vignette.wikia.nocookie.net/angry-birds-universe/images/5/5f/ClassicStella.png/revision/latest?cb=20181121193832",
    gender: "Gender: Female",
    name: "Stella",
    species: "Species: Galah",
    abilities: "Abilities: Trapping objects in bubbles, then lifting them up and dropping them up and dropping them",
    powerlevel: "Power Level: Weak",
    color: "pink"
  },
  {
    img: "https://vignette.wikia.nocookie.net/videogamefanon/images/2/28/SilverBird2.png/revision/latest/fixed-aspect-ratio-down/width/240/height/240?cb=20151212182359&fill=transparent",
    gender: "Gender: Female",
    name: "Silver",
    species: "Species: Peregrine Falcon",
    abilities: "Abilities: Loops downwards",
    powerlevel: "Power Level: Weak",
    color: "gray"
  },
  {
    img: "https://th.bing.com/th/id/R00e53e6f355c3cd27535d9af9cb3cb89?rik=krH4wqFOQ7LRdA&riu=http%3a%2f%2fvignette2.wikia.nocookie.net%2fangrybirds%2fimages%2f4%2f43%2fOrange.png%2frevision%2flatest%3fcb%3d20130419130022&ehk=vkX79DcH4WLC1E%2fh8xnmO6tc0VxsclSVvMjff84wnq4%3d&risl=&pid=ImgRaw",
    gender: "Gender: Male",
    name: "Bubbles",
    species: "Species: Jamaican Oriole",
    abilities: "Abilities: Inflating like a balloon",
    powerlevel: "Power Level: Strong",
    color: "orange"
  }
]
let bin = [{
    img: "https://i.pinimg.com/originals/c2/2d/03/c22d033f26fa2d329951849c8d9c4329.png",
    gender: "Gender: Male",
    name: "Minion Pig",
    species: "Species: Pig",
    abilities: "Abilities: Splitting into 3 in King Pig Mode",
    powerlevel: "Power Level: Weak",
    color: "limegreen"
  },
  {
    img: "https://vignette4.wikia.nocookie.net/angrybirds/images/3/39/Hp.png/revision/latest/scale-to-width-down/183?cb=20130713090008",
    gender: "Gender: Male",
    name: "Corporal Pig",
    species: "Species: Pig",
    abilities: "Abilities: Extra protection, explodes in King Pig Mode",
    powerlevel: "Power Level: Medium",
    color: "limegreen"
  },
]

let data = bon.concat(bin)
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
          ${data[i].gender}
          <br>
          <br>
          ${data[i].species}
          <br>
          <br>
          ${data[i].abilities}
          <br>
          <br>
          ${data[i].powerlevel}
        </p>
        <h4>0</h4>
        <p href="#" class="btn btn-primary">Like</p>
        <p href="#" class="btn btn-danger">Dislike</p>
      </div>
    </div>`
    card.innerHTML += html
  }


}
renderData(data)

let birds = document.getElementById("birds")
birds.addEventListener("click", (e) => {
  e.preventDefault()
  renderData(bon)
})

let pigs = document.getElementById("pigs")
pigs.addEventListener("click", (e) => {
  e.preventDefault()
  renderData(bin)
})

let home = document.getElementById("all")
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

let a =document.querySelectorAll(".card")
for(let i =0; i<a.length;i++){
  a[i].addEventListener("click", (e)=>{
    if(e.target.innerHTML == "Like")
    {
      // let like = e.target.parentNode.childNodes[5].innerHTML
      // like = parseInt(like)
      // like++
      e.target.parentNode.childNodes[5].innerHTML = 1
    }
    if(e.target.innerHTML == "Dislike")
    {
      // let like = e.target.parentNode.childNodes[5].innerHTML
      // like = parseInt(like)
      // like--
      e.target.parentNode.childNodes[5].innerHTML = 0
    }
  })
}