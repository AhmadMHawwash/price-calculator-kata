import Calculator from "../PriceCalculator/Calculator";
import Product from "../PriceCalculator/Product";

describe("kata", () => {
    
    describe("Tax", () => {
        it("should compute total price after tax when tax given", () => {
            const prod1 = new Product('prod1', 123, 200);

            const calculator = new Calculator();

            const priceWithoutTax = calculator.doTax(prod1);
            const priceWithTax = calculator.doTax(prod1, 0.3);

            expect(priceWithTax).toEqual(260);
            expect(priceWithoutTax).toEqual(240);
        });
    });
    describe("Discount before Tax", () => {
        it("should compute total price after discount and tax when tax and discount given", () => {
            const prod1 = new Product('prod1', 123, 100);

            const calculator = new Calculator();

            const priceWithoutDiscountWithDefaultTax = calculator.doDiscount(prod1);

            const priceWithDiscountWithDefaulTax = calculator.doDiscount(prod1, 0.3);
            
            const priceWithNewTaxWithDiscount = calculator.doDiscount(prod1, 0.3, 0.3);

            expect(priceWithoutDiscountWithDefaultTax).toEqual(120)
            expect(priceWithDiscountWithDefaulTax).toEqual(84)
            expect(priceWithNewTaxWithDiscount).toEqual(91)
        });
    });

});

export { };
