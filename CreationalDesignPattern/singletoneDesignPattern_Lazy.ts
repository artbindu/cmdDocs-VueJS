/**
 * Singleton Design Pattern - 'Lazy' way
 */
class Clock {
    private static instance: Clock;
    public time: Date;
    /**
     * Contructor should be private to prevent direct construction call with the `new` operator.
     */
    private constructor() {
        this.time = new Date();
    }
    /**
     * Object should be create with help of a method
     */
    public static getInstance(): Clock {
        // 'Lazy' way of creating Single Object
        if (!Clock.instance) {
            Clock.instance = new Clock();
        }
        return Clock.instance;
    }
}

/**
 * The client code.
 */
function clientCode(): void {
    console.clear();

    const s1 = Clock.getInstance();
    console.log(s1);
    setTimeout(() => {
        const s2 = Clock.getInstance();
        console.log(s2);

        if (s1 === s2) {
            console.log('Singleton works, both variables contain the same instance.');
        } else {
            console.log('Singleton failed, variables contain different instances.');
        }

    }, 1000)
}

clientCode();