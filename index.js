let menu = document.querySelector("#menu");
let list = document.createElement("li");
list.textContent="contact";
menu.appendChild(list)
//menu.textContent="hello"
menu.after("hello")
menu.prepend(1)
menu.insertAdjacentHTML("beforebegin", "<h1>hello guys</h1>")
menu.insertAdjacentHTML("afterend", "<h2>bye</h2>")
//let uls=document.querySelector("#menu")
//menu.innerHTML="<li>help</li>"
//menu.replaceChild("vf", "firstChildElement")
let newNode = menu.cloneNode(true)
console.log(newNode)
//menu.removeChild(menu.lastElementChild);
let btn = document.querySelector("#btn")
let username=document.querySelector("#userName");
console.log(username.attributes)
user = username.value.trim();
function jay(){
    user = username.value.trim()
    if(user===""){
        alert="enter"
        return
    }
    else{

    }
}
