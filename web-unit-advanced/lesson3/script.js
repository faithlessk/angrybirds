let game_dict = [
  {
    name:"roblox",
    url:"https://th.bing.com/th/id/R7652d7f972676d12ea15f9386a784cf0?rik=TNFxJpcuXk6Ncg&pid=ImgRaw"
  },
  {
    name:"minecraft",
    url:"https://getdrawings.com/free-icon/minecraft-launcher-icon-69.png"
  },
  {
    name:"fortnite",
    url:"https://th.bing.com/th/id/R275c8b2e8734e0ae3e0d4f6f662aa00f?rik=Ii5%2bccmwp04hLA&pid=ImgRaw"
  },
  {
    name:"among us",
    url:"https://among-us.io/wp-content/uploads/2020/09/among-us-icon.jpg"
  },
  {
    name:"valorant",
    url:"https://external-preview.redd.it/9LAUtPMJxhqx8H2KAv-oipyMnAwFErAUyhUwsz-aNiM.jpg?auto=webp&s=68f81f665ee87fd43dce4465c69bac79dd45821f"
  },
  {
    name:"rocket league",
    url:"https://th.bing.com/th/id/Rd8ace1286a2c5e8bb335fa5f80c14ef4?rik=FTuQfreqPmwLvw&pid=ImgRaw"
  },
  {
    name:"gang beast",
    url:"https://th.bing.com/th/id/R214821fa35fcfcd6d7aa99606e5d91a8?rik=sN3JZI0jgDt99g&pid=ImgRaw"
  },
  {
    name:"clash of clans",
    url:"https://th.bing.com/th/id/R4efb1952ba1e3f0788c5cdb814f3a714?rik=A8NIB9vCIgrmqw&riu=http%3a%2f%2fwww.goodluckhavefun.net%2fwp-content%2fuploads%2f2013%2f01%2fClash-of-Clcans-iOS-Icon.png&ehk=fEXrDShBe%2b90rrdUvfV1KA55uVgREKOvW%2b4%2fNPejwjU%3d&risl=&pid=ImgRaw"
  }
]
let form = document.getElementById("form")
let img = document.getElementById("img")
form.onsubmit = (e)=>{
  e.preventDefault()

  let key = form.searchKey.value
  
  for(let i = 0;i<game_dict.length;i++){
    if(game_dict[i].name == key){
      img.src = game_dict[i].url
        break
    }else{
      img.src = "https://www.lettertrein.be/images/Error/404.gif"
    }
  }
}