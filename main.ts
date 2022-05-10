radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        servos.P0.run(VITESSE)
    } else {
        servos.P0.stop()
    }
    if (receivedNumber == 1) {
        servos.P1.run(VITESSE)
    } else {
        basic.pause(100)
    }
    if (receivedNumber == 2) {
        if (VITESSE < 100) {
            VITESSE = VITESSE + 5
        }
    }
    if (receivedNumber == 3) {
        if (VITESSE >= 5) {
            VITESSE = VITESSE - 10
        }
    }
    if (receivedNumber == 4) {
        servos.P0.run(-40)
        servos.P1.run(-40)
        basic.pause(10)
        servos.P0.run(0)
        servos.P1.run(0)
    }
})
input.onGesture(Gesture.LogoUp, function () {
    radio.sendNumber(4)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(1)
    basic.pause(10)
    radio.sendNumber(99)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(0)
    basic.pause(10)
    radio.sendNumber(99)
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendNumber(0)
    radio.sendNumber(1)
})
let VITESSE = 0
radio.setGroup(1)
VITESSE = 30
