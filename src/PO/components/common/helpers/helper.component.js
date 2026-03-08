export class HelperComponent {

    constructor(page, selector) {
        this.page = page
        this.helper = page.locator(selector)
    }

    async getMsg() {
        return await this.helper.innerText()
    }
}