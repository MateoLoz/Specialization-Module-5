import { test, expect } from '@playwright/test'
import LoginPage from '../PO/pages/Auth/login/login.page';
import { validUser } from '../test-data/testData'
test.describe('Login system', () => {

    test('Successful login with valid credentials', async ({ page }) => {

        const loginPage = new LoginPage(page)

        // Given the user is on the login page
        await loginPage.open('auth/login')

        // When the user enter a valid email
        await loginPage.loginForm.enterEmail(validUser.email)

        // And the user enter a valid password
        await loginPage.loginForm.enterPassword(validUser.password)

        // And then the user click the submit button
        await loginPage.loginForm.login()

        // Then the user should be redirected to the user account page
        await expect(page).toHaveURL(/account/)
    })

})