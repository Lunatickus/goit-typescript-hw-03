class Key {
    private signature = Math.random();

    public getSignature(): number {
        return this.signature;
    }
}

class Person {
    private key: number;
    constructor(key: Key) {
        this.key = key.getSignature();
    }

    public getKey(): number {
        return this.key;
    }
}

abstract class House {
    protected tenants: Person[] = []
    protected door = false;
    protected key: number;

    constructor(k: Key) {
        this.key = k.getSignature();
    }

    public comeIn(person: Person): void {
        if(this.door) {
            this.tenants.push(person);
        }
    }

    public abstract openDoor(key: number): void;
}

class MyHouse extends House {
    constructor(k: Key) {
        super(k);
    }

    public openDoor(personsKey: number): void {
        if(personsKey === this.key) {
            this.door = true;
        }
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};