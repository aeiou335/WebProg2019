let cvsWrapper = null;
let x1, y1, mid_x, mid_y, vy, ay, rotAngle;
let scrollSpeed = 2;
let assets = {}
let birdFlap, birdIdx;
let ground;
let status, point;
let bird, game;
// assets from: https://github.com/sourabhv/FlapPyBird/tree/master/assets

function flappyBird(){
    this.x = width/2;
    this.y = height/2;

    this.checkPosition = function () {
        if (this.y > 600){
            game.status = "gameover";
        }
        else if (this.y < 0){
            game.status = "hitTop";
        }
        if (!game.hitFlag && (game.status === "gameover" || game.status === "hitTop")) {
            assets["audio"][1].play();
            assets["audio"][0].play();
            game.hitFlag = true;
        }
    }
}

function pipe (){
    this.x = width - game.x1;
    this.y = height;
    this.gapDiff = random(50, height-50);
}

function newGame(){
    this.status = "start"; //start, play, gameover
    this.point = 0;
    this.x1 = 0;
    this.y1 = 0;
    this.vy = 0;
    this.ay = 0.5;
    this.rotAngle = 0;
    this.birdIdx = Math.floor(Math.random()*3);
    this.bgIdx = Math.floor(Math.random()*2);
    this.hitFlag = false;

    this.restart = function(){
        this.status = "start"; //start, play, gameover
        this.point = 0;
        this.x1 = 0;
        this.y1 = 0;
        this.rotAngle = 0;
        this.vy = 0;
        this.ay = 0.3;
        this.birdIdx = Math.floor(Math.random()*3)
        this.bgIdx = Math.floor(Math.random()*2);
        this.hitFlag = false;
        }
}

function preload() {
    assets["bg"] = ["day", "night"].map(prop => loadImage(`assets/sprites/background-${prop}.png`));
    assets["base"] = loadImage("assets/sprites/base.png");
    assets["bird"] = ["blue", "red", "yellow"].map(
                    color => ["upflap", "midflap", "downflap"].map(
                    flap => loadImage(`assets/sprites/${color}bird-${flap}.png`)));
    assets["audio"] = ["die", "hit", "point", "swoosh", "wing"].map(
                        sound => loadSound(`assets/audio/${sound}.wav`));
    assets["number"] = ["1", "2", "3", "4", "5", "6", "7", "8", "9"].map(n => loadImage(`assets/sprites/${n}.png`));
    assets["basic"] = ["gameover", "message"].map(w => loadImage(`assets/sprites/${w}.png`))
    assets["pipe"] = ["green", "red"].map(
        color => ["lower", "upper"].map(
        dir => loadImage(`assets/sprites/pipe-${color}-${dir}.png`)  
        )
    );
    //console.log(assets["bird"][0])
}

function setup() {
    // Game basic setup.
    // Mounting canvas onto div for convenient styling.
    
    cvsWrapper = document.getElementById("canvasWrapper");
    const myCanvas = createCanvas(
        cvsWrapper.offsetWidth,
        cvsWrapper.offsetHeight
    );
    myCanvas.parent("canvasWrapper");
    game = new newGame();
    bird = new flappyBird();
    birdFlap = 0;
}

function draw() {
    // Render function (called per frame.)
    background(0);
    translate(game.x1, game.y1);
    image(assets["bg"][game.bgIdx], 0, 0, width, height);
    image(assets["bg"][game.bgIdx], width, 0, width, height);
    image(assets["pipe"][0][1], width, 0)
    image(assets["pipe"][0][0], width, height-assets["base"].height-100);
    image(assets["base"], 0, height-assets["base"].height, width);
    image(assets["base"], width, height-assets["base"].height, width);
    //console.log(status);
    translate(bird.x-game.x1, bird.y);
    if (game.status === "start"){
        image(assets["basic"][1], -75, -170);
    }
    else if (game.status === "play" || game.status === "hitTop"){
        game.vy += game.ay;
        bird.y += game.vy;
        game.rotAngle += 0.02;
    }    
    else if (game.status === "gameover"){
        image(assets["basic"][0], -80, -300);
    }
    //console.log(game.status);
    rotate(game.rotAngle);
    image(assets["bird"][game.birdIdx][Math.floor(birdFlap/6)], 0, 0);
    if (birdFlap != 17) birdFlap += 1;
    else birdFlap = 0;
    if (game.status === "start" || game.status === "play"){
        game.x1 -= scrollSpeed;
        if (game.x1 < -width) game.x1 = 0;
    }
    bird.checkPosition();
    //console.log(game.status)
}

function keyPressed() {
    if (keyCode == 32){
        if (game.status === "play"){
            game.vy = -8;
            assets["audio"][4].play();
            game.rotAngle = -PI/6;
        }
        else if (game.status === "start"){
            game.status = "play";
        }
        else if (game.status === "gameover"){
            game.restart();
            bird.x = width/2;
            bird.y = height/2;
        }
    }
}
