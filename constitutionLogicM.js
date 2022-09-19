function setDeviceType() {
    if(window.screen.availWidth > 1370) {
        window.location ="constitutionD.html";
    }
}

function toggleTab() {
    let nav = document.getElementById("nav-tab");
    let tb = document.getElementById("top-bar");
    let tbl = document.getElementById("topbreakline");
    if(window.scrollY == 0) {
        nav.style.transform = "translateY(-125%)";
        tb.style.transform = "translateY(0%)";
        tb.style.boxShadow = "0px 5px 1em #000000aa";
        tbl.style.height = "7.5em";
        isUp = false;
    }
    else {
        nav.style.transform = "translateY(-250%)";
        tb.style.transform = "translateY(-100%)";
        tbl.style.height = "0";        
        tb.style.boxShadow = "0px 0px 0em #000000aa";
        isUp = true;
    }
}

window.onload = () => {setDeviceType();}
window.addEventListener("scroll", (e) => {toggleTab();});