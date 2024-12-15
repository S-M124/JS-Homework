class BookReadStatus {
    constructor(title, author, readStatus) {
        this.titleName = title;
        this.authorsName = author;
        this.readStatus1 = readStatus;
    }

    checkReadStatus() {
        if (
            (this.titleName === "Mockingjay: The Final Book of The Hunger Games" &&
                this.authorsName === "Suzanne Collins") ||
            (this.titleName === "The Robots of Dawn" &&
                this.authorsName === "Isaac Asimov")
        ) {
            if (this.readStatus1 === true) {
                console.log(`Already read ${this.titleName} by ${this.authorsName}`);
            } else {
                console.log(
                    `You still need to read ${this.titleName} by ${this.authorsName}`
                );
            }
        }
    }
}

const book1 = new BookReadStatus(
    "Mockingjay: The Final Book of The Hunger Games",
    "Suzanne Collins",
    true
);
const book2 = new BookReadStatus("The Robots of Dawn", "Isaac Asimov", false);
const book3 = new BookReadStatus("", "", false);

book1.checkReadStatus();
book2.checkReadStatus();
book3.checkReadStatus();