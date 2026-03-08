import 'dotenv/config';
import LoginForm from '../../../components/common/forms/login.form';

export default class LoginPage {
    page;
    loginForm;
    url = `${process.env.BASE_URL}`;

    constructor(page) {
        this.page = page;
        this.loginForm = new LoginForm(page);
    }
    async open(route) {
        await this.page.goto(`${this.url}${route}`);
    }
}