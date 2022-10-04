input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 1; index++) {
        for (let index = 0; index < 5; index++) {
            basic.pause(100)
            sprite.move(1)
        }
        sprite.turn(Direction.Left, 90)
        basic.pause(100)
        sprite.turn(Direction.Left, 45)
    }
})
let sprite: game.LedSprite = null
sprite = game.createSprite(4, -1)
basic.forever(function () {
	
})
