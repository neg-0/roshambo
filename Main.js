#!/usr/bin/env node
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const { string } = require('yargs')
const argv = yargs(hideBin(process.argv)).argv
const Move = require("./Move")

console.log("Playing a game of Roshambo against the computer.")

const move = Move.getMove(argv.move)

if (move) {
    console.log(`Player plays ${move.name}`)
} else {
    console.log("Player has made an invalid move!")
}