import { Given, When } from '@wdio/cucumber-framework';

import shopPage from '../page-objects/shop.page';

Given('I select product category {string}', async function (category: string) {
    await shopPage.clickProductCategory(category);
});

When('I open product {string}', async function (productName: string) {
    await shopPage.clickProductItem(productName);
    // Stores product name to be used in next step validation
    this['product-name'] = productName;
});