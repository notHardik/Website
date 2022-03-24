
const socialMedia = [
    {socialName : "Twitter", href : "logo\twitter.svg"},
    {socialName : "GitHub", href : "logo\github.png"},
    {socialName : "LinkedIn", href : "logo\inLogo.png"}
];

// document.getElementById("darmode").onclick = function(){darkMode()};


function darkMode() {
    var element = document.getElementById("section");
    var textName = document.getElementById("darkmode");
    
    if(textName.innerHTML == "DARK MODE")
    {
        textName.innerHTML= "LIGHT MODE";
        element.style.background = "linear-gradient(35deg, rgb(5,53,55), rgb(249,163,162))";

    }else
    {
        textName.innerHTML = "DARK MODE";
        element.style.background = "linear-gradient(35deg, rgb(162, 251, 251), rgb(251,165,165))";
    }
    
}