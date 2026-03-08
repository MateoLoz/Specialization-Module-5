export default class Filter {

    constructor(page) {
        this.page = page;

        this.sortFilter = page.locator('.form-select');
        this.rangeFilter = page.locator('.input-group.mb-3');
        this.clearFilter = page.locator('.search-reset');
        this.searchFilter = page.locator('.search-submit');
    }

    async sortByValue(value) {
        await this.sortFilter.selectOption(value);
    }

}