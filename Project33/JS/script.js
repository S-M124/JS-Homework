class animal {
    constructor(animalsName, animalsKind) {
        this.name1 = animalsName;
        this.animalsKind = animalsKind;
    }

    animalsSpeak = function() {
        this.name1 = prompt("Give us your name.");
        this.animalsKind = prompt("Give us the name of a animal");

        console.log(`${this.animalsKind} says: Hey ${this.name1}`);
    };
}

const animalOne = new animal("", "");
animalOne.animalsSpeak();