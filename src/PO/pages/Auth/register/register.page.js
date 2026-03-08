import 'dotenv/config';
import RegisterForm from '../../../components/common/forms/register.form';
export default class RegisterPage {
    page;
    RegisterForm;
    url = `${process.env.BASE_URL}`;

    constructor(page) {
        this.page = page;
        this.registerForm = new RegisterForm(page);
    }
    async open(route) {
        await this.page.goto(`${this.url}${route}`);
    }
}