interface Animal {
    sound(): string;
}

class Dog {
    public sound(): string {
        return 'Bark!';
    }
}

class Cat {
    public sound(): string {
        return 'Maow!'
    }
}

class Horse {
    public sound(): string {
        return 'Neigh!';
    }
}

class Cow {
    public sound(): string {
        return 'Moo!';
    }
}

class Lion {
    public sound(): string {
        return 'Roar!';
    }
}


class AnimalSoundFactory {
    public static getSound(name: string): Animal|null {
        if (/dog/gi.test(name)) {
            return new Dog();
        } else if (/cat/gi.test(name)) {
            return new Cat();
        } else if (/lion/gi.test(name)) {
            return new Lion();
        } else if (/cow/gi.test(name)) {
            return new Cow();
        } else if (/horse/gi.test(name)) {
            return new Horse();
        } else {
            return null;
        }
    }
}

function client() {
    console.clear();

    const a1 = AnimalSoundFactory.getSound('What is dog sound?');
    console.log(`Dog: `, a1?.sound());

    const a2 = AnimalSoundFactory.getSound('Tell me Cow sound.');
    console.log(`Cow: `, a2?.sound());

    const a3 = AnimalSoundFactory.getSound('What is Dinosaur sound ?');
    console.log('Dinosaur: ', a3?.sound())
}

client();

