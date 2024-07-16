import { test, expect } from '@playwright/test';
import { TopNavigation } from '../page_objects/navigation/TopNavigation';

test('has title', {
  tag: '@smoke'
}, async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', {
  tag: '@smoke'
}, async ({ page }) => {
  await page.goto('/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('search', {
  tag: '@smoke'
}, async ({ page }) => {
  await page.goto('/');
  await page.getByLabel('Search').click()

  await page.getByPlaceholder('Search docs').fill('test');
  await page.getByRole('link', { name: 'Writing tests' }).click();
  const row = page.getByRole('row');
  await row.filter({ hasText: 'locator.hover()'}).hover();
  const rowRight = row.getByRole('cell').filter({ hasText: /Hover mouse over the element/ });
  expect(rowRight).toBeVisible();
});

test.describe('navigate', {
  tag: '@smoke @colors'
} , () => {
  let topNav: TopNavigation;
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    topNav = new TopNavigation(page);
  });

  test('Docs', async ({ page }) => {
    await expect(page.getByRole('link', {name: 'Docs', exact: true}), 'Docs txt has dark color')
      .toHaveCSS('color', 'rgb(28, 30, 33)')
    await topNav.navigateTo('Docs');
    await expect(page.getByRole('link', {name: 'Docs', exact: true}), 'Docs txt has green color')
      .toHaveCSS('color', 'rgb(26, 126, 31)', { timeout: 10000 })
  }); 

  test('API', async ({ page }) => {
    await expect(page.getByRole('link', {name: 'API', exact: true}), 'API txt has dark color')
      .toHaveCSS('color', 'rgb(28, 30, 33)')
    await topNav.navigateTo('API');
    await expect(page.getByRole('link', {name: 'API', exact: true}), 'API txt has green color')
      .toHaveCSS('color', 'rgb(26, 126, 31)', { timeout: 10000 })
  }); 

  test('Community', async ({ page }) => {
    await expect(page.getByRole('link', {name: 'Community', exact: true}), 'Community txt has dark color')
      .toHaveCSS('color', 'rgb(28, 30, 33)')
    await topNav.navigateTo('Community');
    await expect(page.getByRole('link', {name: 'Community', exact: true}), 'Community txt has green color')
      .toHaveCSS('color', 'rgb(26, 126, 31)', { timeout: 10000 })
  });

  test('Languages', async ({ page }) => {
    let el =  page.getByRole('button', {name: 'Node.js', exact: true})
    await expect(el, 'Node.js txt has dark color').toHaveCSS('color', 'rgb(28, 30, 33)', { timeout: 10000 })
    await el.hover({timeout: 5000})
    await expect(page.getByLabel('Main', {exact: true})
      .getByRole('link', {name: 'Node.js', exact: true}), 'Node.js txt has green color'
    ).toHaveCSS('color', 'rgb(26, 126, 31)', { timeout: 10000 })
    
    await topNav.click('Python')
    el =  page.getByRole('button', {name: 'Python', exact: true})
    await expect(el, 'Python txt has dark color').toHaveCSS('color', 'rgb(28, 30, 33)', { timeout: 10000 })
    await el.hover({timeout: 5000})
    await expect(page.getByLabel('Main', {exact: true})
      .getByRole('link', {name: 'Python', exact: true}), 'Python txt has green color'
    ).toHaveCSS('color', 'rgb(26, 126, 31)', { timeout: 10000 })

    await topNav.click('Java')
    el =  page.getByRole('button', {name: 'Java', exact: true})
    await expect(el, 'Java txt has dark color').toHaveCSS('color', 'rgb(28, 30, 33)', { timeout: 10000 })
    await el.hover({timeout: 5000})
    await expect(page.getByLabel('Main', {exact: true})
      .getByRole('link', {name: 'Java', exact: true}), 'Java txt has green color'
    ).toHaveCSS('color', 'rgb(26, 126, 31)', { timeout: 10000 })

    await topNav.click('.NET')
    el =  page.getByRole('button', {name: '.NET', exact: true})
    await expect(el, '.NET txt has dark color').toHaveCSS('color', 'rgb(28, 30, 33)', { timeout: 10000 })
    await el.hover({timeout: 5000})
    await expect(page.getByLabel('Main', {exact: true})
      .getByRole('link', {name: '.NET', exact: true}), '.NET txt has green color'
    ).toHaveCSS('color', 'rgb(26, 126, 31)', { timeout: 10000 })
  });
});
