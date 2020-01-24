let WIDTH = 512;
let HEIGHT = 512;
let pixDensity

let player

let fpsCounter

function setup() {
    frameRate(60);
    createCanvas(WIDTH, HEIGHT);
    background(0);

    pixDensity = pixelDensity()

    player = new RCPlayer(createVector(WIDTH / 2, HEIGHT / 2), 0)

    fpsCounter = new FPSCounter(10, 25, 20, 15);
}

function draw() {
    background(0);

    if (player != null)
    {
        let deltaTime = 1 / frameRate() != Infinity ? 1 / frameRate() : 0;
    
        player.position = player.position.add(50 * deltaTime, 0)
    
        print(deltaTime)
    
        player.show()
    }

    
    fpsCounter.show();
}

/**
 * Updates the pixel color at a specifix coordinate [x, y]
 *
 * Example:
 * updatePixelAt(10, 13, 255, 128, 64, 255)
 *
 * @param {Number} x x coordinate of the pixel
 * @param {Number} y y coordinate of the pixel
 * @param {Number} r red value [0, 255]
 * @param {Number} g green value [0, 255]
 * @param {Number} b blue value [0, 255]
 * @param {Number} a alpha value [0, 255]
 */
function updatePixelAt(x = 0, y = 0, r = 0, g = 0, b = 0, a = 255) {
    for (let i = 0; i < pixDensity; i++) {
        for (let j = 0; j < pixDensity; j++) {
            index = 4 * ((y * pixDensity + j) * WIDTH * pixDensity + (x * pixDensity + i));
            pixels[index] = r;
            pixels[index + 1] = g;
            pixels[index + 2] = b;
            pixels[index + 3] = a;
        }
    }
}

/**
 * Returns a number whose value is limited to the given range.
 *
 * Example: limit the output of this computation to between 0 and 255
 * (x * 255).clamp(0, 255)
 *
 * @param {Number} min The lower boundary of the output range
 * @param {Number} max The upper boundary of the output range
 * @returns A number in the range [min, max]
 * @type Number
 */
Number.prototype.clamp = function (min, max) {
    return Math.min(Math.max(this, min), max);
};