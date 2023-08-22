/**
 * Singleton Design Pattern - 'Eager' way
 */
class Clock {
    // 'Eager' way of creating Single Object
    private static instance: Clock = new Clock();
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