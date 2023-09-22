let down = false;
let rightOrLeft = false; //Left = False, Right = True
let pos=95;

//Get context and screen size;
var ctx = stars1.getContext("2d");
var W = window.innerWidth;
var H = window.innerHeight;

//Set Canvas and Background Color;
stars1.width = W;
stars1.height = H;
ctx.fillStyle = "#DDD0C8";
ctx.fillRect(0, 0, W, H+1);


/*
function animate() {
    const starArrayX = [];
    const starArrayY = [];
    const starArrayR = [];
    const starArrayEnd = [];

    numStars = Math.random()*350+250;
    for(let i = 0; i < numStars; i++)
    {
        let x = W * Math.random();
        starArrayX.push(x);
        let y = H * Math.random();
        starArrayY.push(y);
        let r = 2.5 * Math.random();
        starArrayR.push(r);
        let end = Math.PI * 2;
        starArrayEnd.push(end);

        //Draw the stars;
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.arc(x, y, r, 0, end);
        ctx.fill();
    }
}

animate();
*/
window.onresize = function(){location.reload();}

window.onload = function () {
    document.getElementById("github").onclick = function() {
        console.log("hit");
        window.open("https://github.com/notHardik/Website", "_blank")
    };  
}