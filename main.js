// document.getElementById("counter").innerText = 7


 
let counter = document.getElementById("counter")

let count = 0
function increment() {
  count += 1
  counter.innerText = count
  
  
}

function decrement() {
  count -= 1
  counter.innerText = count
  
  
}


let saveEl = document.getElementById("save-el")

function save() {
   let previousEntries = count + " - "
   saveEl.textContent += previousEntries
   count = 0
   counter.innerText = count

}

//  let welcome = document.getElementById("welcome")
//  let name = "Jannah"
//  let greeting = "Welcome back, "

//  welcome.innerText = greeting + name + "!"

//  welcome.innerText += "👋"
