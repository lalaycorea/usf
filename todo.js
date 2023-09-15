const searchBox = document.getElementById("searchbox");
const list = document.getElementById("list");
function addTask(){
    if(searchBox.value === ''){
        alert("Please input task!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = searchBox.value;
        list.appendChild(li);
        let span = document.createElement ("span");
        span.innerHTML= "\u00d7";
        li.appendChild (span)

    }
    searchBox.value = "";
    dataSave();
}
list.addEventListener("click",function (e){
    if(e.target.tagName === "LI" ){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        dataSave();
    }
}, false);

function dataSave(){
    localStorage.setItem("data",list.innerHTML);
}

function showToDo(){
    list.innerHTML = localStorage.getItem("data");

}
showToDo();