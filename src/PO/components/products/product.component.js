import { expect } from '@playwright/test';

export default class Products {

    constructor(page) {
        this.page = page;
        this.sortingCompleted = page.locator('[data-test="sorting_completed"]');
        this.productItems = page.locator('a.card');
        this.productNames = page.locator('[data-test="product-name"]');
        this.productPrices = page.locator('[data-test="product-price"]');
        this.productCo2 = page.locator('.co2-letter.active');
    }

    async waitForSorting() {
        await expect(this.sortingCompleted).toBeVisible({ timeout: 8000 });
    }

    async getAllNames() {
        await this.waitForSorting();

        const names = await this.productNames.allTextContents();

        return names.map(n => n.trim());
    }

    async getAllPrices() {
        await this.waitForSorting();

        const prices = await this.productPrices.allTextContents();

        return prices.map(p =>
            parseFloat(p.replace('$', '').trim())
        );
    }

    async getAllCo2() {
        await this.waitForSorting();

        const co2 = await this.productCo2.allTextContents();

        return co2.map(v => v.trim());
    }
}