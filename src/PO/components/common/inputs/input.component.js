export class InputComponent {

    constructor(page, selector) {
        this.page = page
        this.input = page.locator(selector)
    }

    async fill(value) {
        await this.input.fill(value)
    }

    async clear() {
        await this.input.clear()
    }

    async getValue() {
        return await this.input.inputValue()
    }
}