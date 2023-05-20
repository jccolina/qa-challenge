import { BasePage } from "./base.page";
class ProductPage extends BasePage {
    private get stockMessageText() {
        return $('.stock');
    }

    private get productTitleText() {
        return $(`[itemprop='name']`);
    }

    public get productImage() {
        return $(`[itemprop='image'] img`);
    }

    public get summarySectionText() {
        return $('.summary');
    }

    public get descriptionSectionText() {
        return $('#tab-description');
    }

    public async open(productName: string) {
        return super.open(`/${productName}`);
    }

    public async getStockMessage(): Promise<string> {
        return this.stockMessageText.getText();
    }

    public async getProductTitle(): Promise<string> {
        return this.productTitleText.getText();
    }

}

export default new ProductPage();