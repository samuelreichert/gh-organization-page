import { expect, test } from '@playwright/test';

const organization = {
  __typename: 'Organization',
  avatarUrl: 'https://avatars.githubusercontent.com/u/9919?v=4',
  id: 'organization-1',
  location: 'Amsterdam',
  name: 'Example Organization',
  websiteUrl: 'https://example.com',
};

const repositories = [
  {
    __typename: 'Repository',
    description: 'A TypeScript source repository',
    forkCount: 2,
    isArchived: false,
    isFork: false,
    isMirror: false,
    licenseInfo: { __typename: 'License', nickname: 'MIT', spdxId: 'MIT' },
    name: 'source-repository',
    parent: null,
    primaryLanguage: {
      __typename: 'Language',
      id: 'typescript',
      name: 'TypeScript',
      color: '#3178c6',
    },
    stargazers: { __typename: 'StargazerConnection', totalCount: 12 },
    updatedAt: '2026-05-01T00:00:00Z',
    url: 'https://github.com/example/source-repository',
  },
  {
    __typename: 'Repository',
    description: 'A JavaScript fork',
    forkCount: 0,
    isArchived: false,
    isFork: true,
    isMirror: false,
    licenseInfo: null,
    name: 'forked-repository',
    parent: {
      __typename: 'Repository',
      nameWithOwner: 'upstream/forked-repository',
      url: 'https://github.com/upstream/forked-repository',
    },
    primaryLanguage: {
      __typename: 'Language',
      id: 'javascript',
      name: 'JavaScript',
      color: '#f1e05a',
    },
    stargazers: { __typename: 'StargazerConnection', totalCount: 0 },
    updatedAt: '2025-01-01T00:00:00Z',
    url: 'https://github.com/example/forked-repository',
  },
];

test.beforeEach(async ({ page }) => {
  await page.route('**/graphql', async (route) => {
    const query = route.request().postDataJSON().query as string;
    let data;

    if (query.includes('BasicOrganizationInfo')) {
      data = { organization };
    } else if (query.includes('PinnedRepositoriesFromOrg')) {
      data = {
        organization: {
          ...organization,
          pinnedItems: { nodes: repositories },
        },
      };
    } else {
      data = {
        organization: {
          ...organization,
          repositories: { nodes: repositories },
        },
      };
    }

    await route.fulfill({ json: { data } });
  });

  await page.goto('/');
});

const searchForOrganization = async (
  page: import('@playwright/test').Page,
  login = 'example',
) => {
  await page.getByRole('searchbox', { name: 'Organization login' }).fill(login);
  await page.getByRole('button', { name: 'Search' }).click();
};

test('shows organization and repository information', async ({ page }) => {
  await searchForOrganization(page);

  await expect(page.locator('.org-logo')).toBeVisible();
  await expect(page.locator('.org-name')).toHaveText('Example Organization');
  await expect(page.locator('.org-website')).toHaveText('https://example.com');
  await expect(page.locator('.pinned-repo-item')).toHaveCount(2);
  await expect(page.locator('.repository-item')).toHaveCount(2);
  await expect(page.locator('.repository-item a a')).toHaveCount(0);
  await expect(page.getByRole('button', { name: 'example' })).toBeVisible();
});

test('filters repositories by type and language', async ({ page }) => {
  await searchForOrganization(page);

  await page.getByRole('button', { name: 'Type: All' }).click();
  await page.getByRole('button', { name: 'Forks', exact: true }).click();
  await page.getByRole('button', { name: 'Language: All' }).click();
  await page.getByRole('button', { name: 'JavaScript', exact: true }).click();

  await expect(page.locator('.repository-item')).toHaveCount(1);
  await expect(page.locator('.repository-name')).toHaveText(
    'forked-repository',
  );
});

test('shows GitHub API errors instead of a blank page', async ({ page }) => {
  await page.unroute('**/graphql');
  await page.route('**/graphql', async (route) => {
    await route.fulfill({
      status: 401,
      json: { message: 'Bad credentials' },
    });
  });
  await searchForOrganization(page);

  await expect(page.getByRole('alert')).toHaveCount(3);
  await expect(
    page.getByText('Unable to load repositories:', { exact: false }),
  ).toBeVisible();
});

test('reuses a recently searched organization', async ({ page }) => {
  await searchForOrganization(page, 'first-example');
  await searchForOrganization(page, 'second-example');
  await page.getByRole('button', { name: 'first-example' }).click();

  await expect(
    page.getByRole('searchbox', { name: 'Organization login' }),
  ).toHaveValue('first-example');
  await expect(
    page.getByRole('button', { name: 'first-example' }),
  ).toBeVisible();
});
