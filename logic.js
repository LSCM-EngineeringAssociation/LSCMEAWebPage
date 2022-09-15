var isUp = false;
function toggleTab() {
    let nav = document.getElementById("nav-tab");
    let tb = document.getElementById("top-bar");
    if (window.matchMedia("(orientation: portrait)").matches) {
        if(!isUp){
            nav.style.transform = "translateY(-500%)";
            tb.style.transform = "translateY(-100%)";
            document.getElementById("toggleTab").innerHTML = "Show";
            isUp = true;
        } else {
            nav.style.transform = "translateY(-250%)";
            tb.style.transform = "translateY(0%)";
            document.getElementById("toggleTab").innerHTML = "Hide";
            isUp = false;
        }
    } else if (window.matchMedia("(orientation: landscape)").matches) {
        if(!isUp){
            nav.style.transform = "translateY(-300%)";
            tb.style.transform = "translateY(-100%)";
            document.getElementById("toggleTab").innerHTML = "Show";
            isUp = true;
        } else {    
            nav.style.transform = "translateY(-100%)";
            tb.style.transform = "translateY(0%)";
            document.getElementById("toggleTab").innerHTML = "Hide";
            isUp = false;
        }
    }
}

function toggleTab2() {
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

window.DeviceOrientationEvent = () => {toggleTab();}
window.addEventListener("scroll", (e) => {toggleTab2();});