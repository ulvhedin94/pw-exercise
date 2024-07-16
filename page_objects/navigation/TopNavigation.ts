import TopNavigationType, { ExternalLink, InternalLink } from "./TopNavigationType";
import { Locator, Page } from "@playwright/test";

export class TopNavigation {
    readonly page: Page;
    readonly topNavbar: Locator;
    constructor(page: Page) {
        this.page = page;
        this.topNavbar = page.getByLabel('Main', { exact: true })
    }

    async navigateTo(topNavigationType: InternalLink | ExternalLink, role: any = 'link') {
        await this.topNavbar.getByRole(role, { name: topNavigationType, exact: true }).click();
    }

    async hover(topNavigationType: TopNavigationType, role: any = 'link') {
        await this.topNavbar.getByRole(role, { name: topNavigationType, exact: true }).hover();
    }

    async click(topNavigationType: TopNavigationType, role: any = 'link') {
        await this.topNavbar.getByRole(role, { name: topNavigationType, exact: true }).click();
    }
}

