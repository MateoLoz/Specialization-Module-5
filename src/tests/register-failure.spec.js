import { test, expect } from '@playwright/test'
import RegisterPage from '../PO/pages/Auth/register/register.page'
import { invalidRegistration } from '../test-data/testData'
import { fnameMissing } from '../test-data/testData'
test.describe('Register system', () => {

    test('Registration fails when first name is missing', async ({ page }) => {

        const registerPage = new RegisterPage(page)

        // Given the user is on the register page
        await registerPage.open('auth/register')

        // When the user enter invalid credentials
        await registerPage.registerForm.enterCredentialsWithoutName(invalidRegistration);

        // And the user click the register button
        await registerPage.registerForm.register()


        // expect fname missing error msg
        await expect(await registerPage.registerForm.fnameErr.getMsg()).toContain(fnameMissing)
    })

})