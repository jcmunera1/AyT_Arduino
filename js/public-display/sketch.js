let socket = io();


let holder = 0 ;
let myHolder;
let timer = 0;
let color = 0;

function setup() {
    montserrateFont = loadFont('assets/Montserrat-Bold.otf');
    let cnv = createCanvas(1280, 720);
}

//Socket receiving positions
socket.on('positions', (positions) => {
    holder = parseInt(positions);

});


function draw() {
    background(26, 105, 51);

    if (holder < 10) { 
        color = 0;
    }

    if (holder > 10 && holder < 30) { 
        color = 30;
    }

    if (holder > 30 && holder < 50) { 
        color = 50;
    }

    if (holder > 50 && holder < 70) { 
        color = 70;
    }

    if (holder > 70 && holder < 90) { 
        color = 90;
    }

    if (holder > 90 && holder < 110) { 
        color = 110;
    }

    
    if (holder > 110 && holder < 130) { 
        color = 130;
    }

    if (holder > 130 && holder < 150) {
        color = 150;
    }
        
    if (holder > 150 && holder < 170) {
        color = 170;
    }

    if (holder > 170 && holder < 190) {
        color = 190;
    }

    console.log(holder);
    fill(color);
    circle(30, 30, 30, 30)

    console.log("color: " + color);
    let xRect = 0;
    //rect(xRect, 0, 10, height);


    //Organizacion de lineas

    /*
    for (let i = 0; i < 10; i++) {
        fill(color);
        rect(xRect, 0, 10, height);
        xRect += 10;
        color += 10;
    }*/

}


