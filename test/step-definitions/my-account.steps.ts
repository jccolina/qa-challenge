import { Given } from '@wdio/cucumber-framework';

import myAccountPage from '../page-objects/my-account.page';
import randomUtils from '../../utils/random.utils';
const randomCredentials = require('../../resources/data-test/users').randomUser;

Given('I log in with a new user', async function () {
    await myAccountPage.open();
    const randomNumber: number = randomUtils.getRandomInteger(6);
    const email: string = randomCredentials.email.replace('xxx', randomNumber);
    const password: string = randomCredentials.password.replace('xxx', randomNumber);
    await myAccountPage.loginWithNewUser(email, password);
});