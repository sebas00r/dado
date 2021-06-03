let value_dice = 0
basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        value_dice = randint(1, 6)
        basic.showNumber(value_dice)
    }
})
