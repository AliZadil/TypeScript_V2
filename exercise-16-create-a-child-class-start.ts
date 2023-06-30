/**
 * START: Follow the instructions below.
 */

class Currency {
    name: string;
    private code: string;
    private symbol: string;

    constructor(name: string, code: string, symbol: string) {
        this.name = name;
        this.code = code;
        this.symbol = symbol;
    }

    public describe(): void {
        let description = `The ${this.name} currency `;
        description += `has the code ${this.code} `;
        description += `and uses the symbol ${this.symbol}.`;

        console.log(description);
    }
}

// Alter this class to extend the `Currency` class.

class DetailedCurrency extends Currency {
    private banknotes: number[];

    constructor(name: string, code: string, symbol: string, banknotes: number[]) {
        super(name, code, symbol);
        this.banknotes = banknotes;
    }

    // Change the visibility modifier on this method so it can be called
    // by code outside of this class.

    public describeBankNotes() {
        // Change the visibility of the parent class `name` field so
        // that its value can be read here in this child class method.

        let description = `The ${this.name} currency uses the banknotes `;
        description += this.banknotes.join(", ");

        console.log(description);
    }
}

const euroCurrency = new DetailedCurrency("Euro", "EUR", "€", [500, 200, 100, 50, 20, 10, 5]);

euroCurrency.describe();

euroCurrency.describeBankNotes();

// ----

export {};
