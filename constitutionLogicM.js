function setDeviceType() {
    if(window.screen.availWidth > 1000) {
        window.location ="homeD.html";
    }
}

function toggleTab() {
    let nav = document.getElementById("nav-tab");
    let tb = document.getElementById("top-bar");
    let tbl = document.getElementById("topbreakline");
    if(window.scrollY < 5) {
        nav.style.transform = "translateY(-75%)";
        tb.style.transform = "translateY(0%)";
        tb.style.boxShadow = "0px 5px 1em #000000aa";
        tbl.style.height = "15em";
        isUp = false;
    }
    else {
        nav.style.transform = "translateY(-275%)";
        tb.style.transform = "translateY(-100%)";
        tbl.style.height = "0";        
        tb.style.boxShadow = "0px 5px 0em #000000aa";
        isUp = true;
    }
}

window.onload = () => {setDeviceType();}
window.addEventListener("scroll", (e) => {toggleTab();});