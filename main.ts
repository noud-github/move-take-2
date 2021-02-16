input.onButtonPressed(Button.A, function () {
    aan = 1
})
input.onButtonPressed(Button.B, function () {
    aan = 0
})
let Distance = 0
let aan = 0
Kitronik_Move_Motor.setUltrasonicUnits(Kitronik_Move_Motor.Units.Centimeters)
let moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
aan = 0
basic.forever(function () {
    basic.showNumber(Distance)
    basic.pause(1000)
})
basic.forever(function () {
    Distance = Kitronik_Move_Motor.measure()
    if (aan == 1) {
        if (Distance >= 10) {
            Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 20)
        } else if (Distance < 10) {
            Kitronik_Move_Motor.stop()
            basic.pause(500)
            Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, 50)
            basic.pause(1000)
            Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Left, 50)
            basic.pause(500)
            Kitronik_Move_Motor.stop()
        }
    } else {
        Kitronik_Move_Motor.stop()
    }
})
basic.forever(function () {
    if (aan == 1) {
        moveMotorZIP.showColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Red))
        basic.pause(200)
        moveMotorZIP.showColor(Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Blue))
        basic.pause(200)
    } else {
        moveMotorZIP.clear()
        moveMotorZIP.show()
    }
})
