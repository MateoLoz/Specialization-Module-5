import { test, expect } from '@playwright/test';
import { HomePage } from '../PO/pages/home.page';
import { filterAscScenario } from '../test-data/testData';
test.describe('Feature: Tool shop filters', () => {

    test('should show items ordered by name ASC when Name A-Z filter is selected', async ({ page }) => {

        const homepage = new HomePage(page);

        // Given I am on the home page
        await homepage.open();

        // When I select the filter
        await homepage.filter.sortByValue(filterAscScenario.filter);

        // Then products should be ordered by name ASC
        const names = await homepage.products.getAllNames();

        expect(names.length).toBeGreaterThan(0);

        const sorted = [...names].sort((a, b) => a.localeCompare(b));

        expect(names).toEqual(sorted);

    });

});