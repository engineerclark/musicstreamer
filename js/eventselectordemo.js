// equivalent of function passed to $(document).ready(onLoad)
function onLoad() {
    // $("button") equivalent
    var myButton = document.querySelector("button"),
        myLink = document.querySelector("#googleLink"),
        myInput = document.querySelector("input[name='textInput']"),
        responseBox = document.querySelector("#responseBox");
        
    
    // $(element).click(...) equivalent
    myButton.addEventListener("click", buttonHandler);
    myLink.addEventListener("click", linkHandler);
    
    // $(element).keyup(...) equivalent
    myInput.addEventListener("keyup", inputHandler);
    
    // $(document).on("newnotification", newNotificationHandler) equivalent
    document.addEventListener("newnotification", newNotificationHandler);
    
}

function buttonHandler(event) {
    alert("Button has been clicked.");
}

function linkHandler(event) {
    event.preventDefault();
    event.stopPropagation();
    alert("Google link has been clicked, but don't go to google");
}

function inputHandler(event) {
    var inputText = event.currentTarget.value;
    updateResponse(inputText);
}

function newNotificationHandler(event) {
    alert("Here's some notification!");
}

function updateResponse(text) {
    responseBox.innerHTML = text;
}

// $(document).ready(onLoad) equivalent
document.addEventListener("DOMContentLoaded", onLoad);

