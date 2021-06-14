let num1 = Math.floor((Math.random() * 100) + 1);
let num2 = Math.floor((Math.random() * 100) + 1);
let question = prompt('What is ' + num1 + ' + ' + num2 + ' ?')
if(question == num1 + num2){
  alert('You are correct!')
}else{
  alert('You are incorrect!')
}
counter = 10
while(counter<86){
  console.log(counter)
  counter += 1
}
three = 3
while(three<100){
  console.log(three)
  three += 3
}