import { BasePage } from "./base.page";
class MyAccountPage extends BasePage {
    private get registerEmailInput() {
        return $('#reg_email');
    }

    private get registerPasswordInput() {
        return $('#reg_password');
    }

    private get registerButton() {
        return $(`[name='register']`);
    }

    public async open() {
        return super.open('/my-account');
    }

    public async loginWithNewUser(email: string, password: string) {
        await this.registerEmailInput.setValue(email);
        await this.registerPasswordInput.setValue(password);
        await this.registerButton.click();
    }
}

export default new MyAccountPage();