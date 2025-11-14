type Size = "" | "S" | "M" | "L" | "XL" | "XXL";

class Product {
    constructor(
        public name: string = "",
        public price: number = 0,
        public size: Size = ""
    ) { }

    // DRY
    isProductReady(): boolean {
        for (const key in this) {
            switch (typeof this[key]) {
                case "string":
                    if ((this[key] as string).length <= 0)
                        throw Error(`The product must have a ${key}`);
                    break;
                case "number":
                    if ((this[key] as number) <= 0)
                        throw Error(`The product must have a ${key}`);
                    break;
                default:
                    throw Error(`${typeof this[key]} is not supported`);
            }
        }
        return true;
    }

    toString() {
        // No DRY
        // if (this.name.length <= 0) throw Error('The product must have a name');
        // if (this.price <= 0) throw Error('The product must have a price');
        // if (this.size.length <= 0) throw Error('The product must have a size');

        // DRY
        if ( !this.isProductReady() ) return;

        return `${this.name} (${this.price}) , ${this.size}`;
    }
}

(() => {
    const bluePants = new Product("Blue pants", 10, "L");
    console.log(bluePants.toString());
})();
