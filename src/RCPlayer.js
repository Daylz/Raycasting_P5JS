class RCPlayer {
    constructor(position = createVector(0, 0), angle = 0)
    {
        this.position = position
        this.angle = angle
    }

    show()
    {
    
        ellipse(this.position.x, this.position.y, 10, 10)

    }
}