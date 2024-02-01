class User {
    uname: string;
    uId: number;
    password: string;

    constructor(uname: string, uId: number,password: string) {
        this.uname = uname;
        this.uId = uId;
        this.password = password;
    }

    getDetails() {
        console.log(`${this.uname} ${this.uId}`);
    }
}

let user12 = new User("Kotesh", 101,"koteshqwerty");
user12.getDetails();
