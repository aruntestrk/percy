import { test, expect, type Page } from '@playwright/test';
const percySnapshot = require('@percy/playwright');
let scrollToBottom = require("scroll-to-bottomjs");
test.beforeEach(async ({ page }) => {
    await page.goto('https://google.com', { waitUntil: 'domcontentloaded' });
});
test.describe('Go to page', () => {
    test('Do screenshot', async ({page}) => {
        // lazy load fix
        await page.evaluate(scrollToBottom);
        // const currentScreen = +new Date();
        const currentScreen = '1';
        await percySnapshot(page, 'google' + '_' + currentScreen);
    });
});