input.onButtonPressed(Button.A, function () {
    hit = 0
    life_pionts = randint(50, 100)
    damage = randint(10, 20)
    if (life_pionts > 80) {
        basic.showString("big dragon")
    } else if (life_pionts < 80) {
        basic.showString("Danger")
    }
    basic.pause(1500)
    basic.showNumber(life_pionts)
})
input.onButtonPressed(Button.AB, function () {
    if (life_pionts <= 0) {
        basic.showString("WIN!")
    } else if (life_pionts >= 0) {
        basic.showString("lose")
    }
    basic.showNumber(life_pionts)
    basic.showNumber(hit)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
    hit += 1
    life_pionts = life_pionts - damage
    basic.showNumber(life_pionts)
})
let damage = 0
let life_pionts = 0
let hit = 0
basic.showIcon(IconNames.Angry)
