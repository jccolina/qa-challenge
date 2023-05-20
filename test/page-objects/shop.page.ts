import { BasePage } from "./base.page";
class ShopPage extends BasePage {
    private getProductCategoryLink(category: string) {
        return $(`//*[contains(@class,'cat-item')]//a[text()='${category}']`);
    }

    private getProductLink(productName: string) {
        return $(`//*[@id='content']//li//*[.='${productName}']`);
    }

    public async open() {
        return super.open('/shop');
    }

    public async clickProductCategory(category: string) {
        await this.getProductCategoryLink(category).click();
    }

    public async clickProductItem(productName: string) {
        await this.getProductLink(productName).click();
    }
}

export default new ShopPage();