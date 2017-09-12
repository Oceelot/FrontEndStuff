function ShowSidebar() {

    var sidebar = document.getElementById("sidebar");

    var centerBlocks = document.getElementsByClassName("flexcBlueBlock-center");

    centerBlocks[0].style.color = "white";
    sidebar.style.display = "block";
    sidebar.style.width = "300px";
}

function PopModal() {
    var modal = document.getElementsByClassName("modal");
    var screen = document.getElementsByClassName("screen");

    modal[0].style.display = "block";
    screen[0].style.display = "block";
}

function CloseModal() {
    var modal = document.getElementsByClassName("modal");
    var screen = document.getElementsByClassName("screen");

    modal[0].style.display = "none";
    screen[0].style.display = "none";
}