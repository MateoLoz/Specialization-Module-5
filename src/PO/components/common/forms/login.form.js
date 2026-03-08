import { InputComponent } from "../inputs/input.component";
import { ButtonSubmit } from "../buttons/button.submit";

export default class LoginForm {
    constructor(page) {
        this.page = page;
        this.email = new InputComponent(page, '#email');
        this.password = new InputComponent(page, '#password');
        this.button = new ButtonSubmit(page, 'input[data-test="login-submit"]');
    }

    async enterEmail(email) {
        await this.email.fill(email);
    }

    async enterPassword(password) {
        await this.password.fill(password);
    }

    async login() {
        await this.button.submit();
    }
}