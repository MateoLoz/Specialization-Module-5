import { test, expect } from '@playwright/test'
import RegisterPage from '../PO/pages/Auth/register/register.page'
import { validRegistration } from '../test-data/testData'
test.describe('Register system', () => {

    test('Successful account registration with valid required fields', async ({ page }) => {

        const registerPage = new RegisterPage(page)

        // Given the user is on the register page
        await registerPage.open('auth/register')

        // When the user enter valid credentials
        await registerPage.registerForm.enterAllCredentials(validRegistration);

        // And the user click the register button
        await registerPage.registerForm.register()


        // expect redirect to login
        await expect(page).toHaveURL(/login/)
    })

})