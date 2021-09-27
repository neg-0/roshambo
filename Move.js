class Move {
    constructor(name, beats) {
        this.name = name
        this.beats = beats
    }

    static GetMove(moveName) {
        if (!this.IsValidPlay(moveName)) {
            return null
        }

        switch (moveName.toLowerCase()) {
            case "rock": {
                return new Rock();
            }
            case "paper": {
                return new Paper();
            }
            case "scissors": {
                return new Sciccors();
            }
        }
    }

    static GetRandomMove() {
        let moves = ["rock", "paper", "scissors"]
        let num = Math.floor(Math.random() * 3)
        return this.GetMove(moves[num])
    }

    static IsValidPlay(move) {
        if (!move)
            return false
        move = move.toLowerCase()
        return (move === "rock" || move === "paper" || move === "scissors")
    }

    beatsMove(moveToBeat) {
        if (this.beats === moveToBeat.name) {
            return "win"
        } else if (this.name === moveToBeat.name) {
            return "draw"
        } else return "lose"
    }
}

class Rock extends Move {
    constructor() {
        super("Rock", "Sciccors")
    }
}

class Paper extends Move {
    constructor() {
        super("Paper", "Rock")
    }
}

class Sciccors extends Move {
    constructor() {
        super("Sciccors", "Paper")
    }
}

module.exports = exports = Move;