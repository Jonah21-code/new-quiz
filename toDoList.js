document.addEventListener('DOMContentLoaded',() =>{
    const input1=document.getElementById("input");
    let taskBut=document.querySelector("#but");
    let taskList1= document.querySelector(".taskList")

    function taskList(){
        const taskText = input1.value.trim();
if(taskText){
    return;
}
const li= document.createElement("li");
li.textContent=taskText;
taskList.appendChild("li")
    }
})
taskBut.addEventListener("click", taskList())

