let name = "";
name = prompt("What's your name? ");

    alert("hello "+ name +"! Lets calculate something");

    let user = document.querySelector('h1');
    user.textContent = "Welcome "  + name;
    // Todo: Make M+ M- and MC functional
let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'AC'){
      string = ""
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'DEL'){
      string = string.slice(0,-1);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'x!'){
      for(let i = string-1; i >= 1; i--){
        string *= i;
      }
      document.querySelector('input').value = string;
    }
    else{ 
      
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})