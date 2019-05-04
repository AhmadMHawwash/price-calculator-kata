import Product from "./product";

export default class Calculator {
    private tax: number = .2;
    private discount: number = 0;
    setTax(tax: number) {
        this.tax = tax;
    }
    setDiscount(discount: number) {
        this.discount = discount;
    }
    doTax(product: Product, tax?: number): number {
        return product.price + product.price * (tax || this.tax);
    }
    doDiscount(product: Product, discount?: number, tax?: number): number {
        const price = this.doTax(product, tax);
        return price - price * (discount || this.discount);
    }
}