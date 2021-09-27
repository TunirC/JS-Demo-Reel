var btnClick = document.querySelector("#btn-click");
var inputText = document.querySelector("#input-Text");
var outputText = document.querySelector("#output-Text");

var urlName = "	https://api.funtranslations.com/translate/minion.json";

function onClickEvent(){
    var responseURL = urlName + "?" + "text=" + inputText.value;

    fetch(responseURL)
    .then(Response => Response.json())
    .then(json => outputText.innerText = json.contents.translated)

}


btnClick.addEventListener("click", onClickEvent)


// fetch("https://api.funtranslations.com/translate/minion.json?text=I am inevitable")
// .then(Response => Response.json())
// .then(json => console.log(json))



// document.querySelector("textarea")
// document.querySelector(".btn-primary")
// document.querySelector("#input-btn")
// document.querySelector("input[name='translator']")
