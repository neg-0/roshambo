class Move {
    constructor(name, beats) {
        this.name = name
        this.beats = beats
    }

    static GetMove(moveName) {
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

        return null
    }

    static GetRandomMove() {
        let moves = ["rock", "paper", "scissors"]
        let num = Math.floor(Math.random() * 3)
        return this.GetMove(moves[num])
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