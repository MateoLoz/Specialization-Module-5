export class SelectComponent {

    constructor(page, selector) {
        this.page = page
        this.select = page.locator(selector)
    }

    async fill(value) {
        await this.select.selectOption(value)
    }

    async clear() {
        await this.select.clear()
    }

    async getValue() {
        return await this.input.inputValue()
    }
}