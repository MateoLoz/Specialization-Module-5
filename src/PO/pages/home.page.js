import 'dotenv/config';
import Filter from "../components/filters/filter.component";
import Products from "../components/products/product.component";

export class HomePage {
    page;
    url = `${process.env.BASE_URL}`;

    constructor(page) {
        this.page = page;
        this.filter = new Filter(page);
        this.products = new Products(page);
    }
    async open() {
        this.page.goto(`${this.url}`);
    }
}