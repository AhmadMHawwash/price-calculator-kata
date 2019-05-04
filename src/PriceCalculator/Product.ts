export default class Product {
    public name: string;
    public UPC: number;
    public price: number;

    constructor(name: string, UPC: number, price: number){
        this.name = name;
        this.UPC = UPC;
        this.price = price;
    }
}