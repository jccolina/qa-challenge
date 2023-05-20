import { BasePage } from "./base.page";
class HeaderPage extends BasePage {
    private get shopMenuItem() {
        return $('=Shop');
    }

    public async open() {
        return super.open('/');
    }

    public async clickShopMenu() {
        await this.shopMenuItem.click();
    }
}

export default new HeaderPage();