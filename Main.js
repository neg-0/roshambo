#!/usr/bin/env node
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const { string } = require('yargs')
const argv = yargs(hideBin(process.argv)).argv
const Move = require("./Move")

console.log("Playing a game of Roshambo against the computer.")

// Creats a new Move object based on the player's input
const playerMove = Move.GetMove(argv.move)

// Checks to see if Move is valid and displays the output
if (playerMove) {
    console.log(`Player plays ${playerMove.name}!`)
} else {
    console.log("Player has made an invalid move!")
    return
}

// Creates a random computer move
const computerMove = Move.GetRandomMove()

console.log(`Computer plays ${computerMove.name}!`)

// Evaluate the two moves
const result = playerMove.beatsMove(computerMove)

switch (result) {
    case "win": {
        console.log("~The Player Wins!~")
        break;
    }
    case "lose": {
        console.log("~The Computer Wins!~")
        break;
    }
    case "draw": {
        console.log("~It's a Draw!~")
        break;
    }
}