import { Then } from '@wdio/cucumber-framework';

import productPage from '../page-objects/product.page';

Then('I should see product page', async function () {
    expect(await productPage.productImage).toBeDisplayed();
    expect(await productPage.summarySectionText).toBeDisplayed();
    expect(await productPage.descriptionSectionText).toBeDisplayed();
    let expectedTitle = this['product-name'];
    let actualTitle = await productPage.getProductTitle();
    expect(actualTitle).toBe(expectedTitle);
});

Then('I should see stock status {string} on product page', async function (expectedMessage: string) {
    let actualMessage = await productPage.getStockMessage();
    expect(actualMessage).toBe(expectedMessage);
});
