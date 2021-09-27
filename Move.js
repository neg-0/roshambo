class Move {
    constructor(name, beats) {
        this.name = name
        this.beats = beats
    }

    static getMove(moveName) {
        if (!this.isValidPlay(moveName)) {
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

    static isValidPlay(move) {
        if (!move)
            return false
        move = move.toLowerCase()
        return (move === "rock" || move === "paper" || move === "scissors")
    }

    beatsMove(moveToBeat) {
        return this.beatsMove === moveToBeat
    }
}

class Rock extends Move {
    constructor() {
        super("Rock", "sciccors")
    }
}

class Paper extends Move {
    constructor() {
        super("Paper", "rock")
    }
}

class Sciccors extends Move {
    constructor() {
        super("Sciccors", "paper")
    }
}

module.exports = exports = Move;