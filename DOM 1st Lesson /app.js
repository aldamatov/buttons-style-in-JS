const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++){
    buttons[i].style.backgroundColor = "#888";
    buttons[i].style.border = "15px solid rgb(54, 52, 52)";
    buttons[i].style.borderRadius = "15px";
    buttons[i].style.width = "10rem";
    buttons[i].style.height = "100px";
    buttons[i].style.fontSize = "30px"
    buttons[i].style.color = "white";
}

    buttons[3].style.display = "block";
    buttons[3].style.width = "31rem";