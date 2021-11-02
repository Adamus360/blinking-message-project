// activate lightsaber, then scroll it off the screen.
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . # .
        . . . . #
        `)
    basic.showLeds(`
        # . . . .
        . # . . .
        . . # . .
        . . . # .
        . . . . #
        `)
    basic.pause(2000)
    basic.showLeds(`
        . # . . .
        . . # . .
        . . . # .
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . . # .
        . . . . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . # .
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    // Show text: May the force be with you.
    basic.showString("May the force be with you.")
})
