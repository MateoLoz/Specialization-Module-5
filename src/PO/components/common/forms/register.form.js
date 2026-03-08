import { InputComponent } from "../inputs/input.component";
import { ButtonSubmit } from "../buttons/button.submit";
import { HelperComponent } from "../helpers/helper.component";
import { SelectComponent } from "../selects/select.component";

export default class RegisterForm {
    constructor(page) {
        this.page = page;
        this.fname = new InputComponent(page, 'input[data-test="first-name"]');
        this.fnameErr = new HelperComponent(page, 'div[data-test="first-name-error"] > div');
        this.lname = new InputComponent(page, 'input[data-test="last-name"]');
        this.bday = new InputComponent(page, 'input[data-test="dob"]');
        this.address = new InputComponent(page, 'input[data-test="street"]');
        this.city = new InputComponent(page, 'input[data-test="city"]');
        this.state = new InputComponent(page, 'input[data-test="state"]');
        this.code = new InputComponent(page, 'input[data-test="postal_code"]');
        this.country = new SelectComponent(page, 'select[data-test="country"]');
        this.phone = new InputComponent(page, 'input[data-test="phone"]');
        this.email = new InputComponent(page, '#email');
        this.password = new InputComponent(page, '#password');
        this.button = new ButtonSubmit(page, 'button[data-test="register-submit"]');
    }

    async enterAllCredentials(credentials) {
        await this.fname.fill(credentials.firstName);
        await this.lname.fill(credentials.lastName);
        await this.bday.fill(credentials.bday);
        await this.address.fill(credentials.address);
        await this.city.fill(credentials.city);
        await this.state.fill(credentials.state);
        await this.code.fill(credentials.postalCode);
        await this.country.fill(credentials.country);
        await this.phone.fill(credentials.phone);
        await this.email.fill(credentials.email);
        await this.password.fill(credentials.password);
    }

    async enterCredentialsWithoutName(credentials) {
        await this.lname.fill(credentials.lastName);
        await this.bday.fill(credentials.bday);
        await this.address.fill(credentials.address);
        await this.city.fill(credentials.city);
        await this.state.fill(credentials.state);
        await this.code.fill(credentials.postalCode);
        await this.country.fill(credentials.country);
        await this.phone.fill(credentials.phone);
        await this.email.fill(credentials.email);
        await this.password.fill(credentials.password);
    }

    async register() {
        await this.button.submit();
    }
}