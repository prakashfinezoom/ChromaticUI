import { test, expect, takeArchive } from "@chromaui/test-archiver";

test.use({ disableAutoCapture: true,resourceArchiveTimeout:1000*60 });

test("Book Store", async ({ page },testInfo) => {
 await page.goto("https://playwright.dev/docs/intro");
 await expect(page).toHaveTitle("Installation | Playwright");
 await page.locator(`//li[text()='yarn']`).click();
 await takeArchive(page, "Home Page" ,testInfo);
 
});