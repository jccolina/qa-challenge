import { Given } from '@wdio/cucumber-framework';

import headerPage from '../page-objects/header.page';

Given('I go to shop page', async function () {
    await headerPage.open();
    await headerPage.clickShopMenu();
});