
export class ButtonSubmit {
    constructor(page, selector) {
        this.page = page
        this.input = page.locator(selector)
    }

    async submit() {
        await this.input.click();
    }
}