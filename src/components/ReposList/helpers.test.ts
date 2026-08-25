import type { Repository } from '../../types';
import { filterRepositories, uniqueLanguagesList } from './helpers';

const sourceRepository: Repository = {
  description: 'Source repository',
  forkCount: 0,
  isArchived: false,
  isFork: false,
  isMirror: false,
  licenseInfo: null,
  name: 'source',
  parent: null,
  primaryLanguage: { id: 'typescript', name: 'TypeScript', color: '#3178c6' },
  stargazers: { totalCount: 1 },
  updatedAt: '2026-01-01T00:00:00Z',
  url: 'https://github.com/example/source',
};
const forkRepository: Repository = {
  ...sourceRepository,
  isFork: true,
  name: 'fork',
  primaryLanguage: { id: 'javascript', name: 'JavaScript', color: '#f1e05a' },
  url: 'https://github.com/example/fork',
};

describe('repository helpers', () => {
  it('creates a unique language filter list', () => {
    expect(
      uniqueLanguagesList([sourceRepository, forkRepository, sourceRepository]),
    ).toEqual([
      { value: 'all', label: 'All' },
      { value: 'typescript', label: 'TypeScript' },
      { value: 'javascript', label: 'JavaScript' },
    ]);
  });

  it('combines type and language filters', () => {
    expect(
      filterRepositories(
        [sourceRepository, forkRepository],
        { value: 'isFork', label: 'Forks' },
        { value: 'javascript', label: 'JavaScript' },
      ),
    ).toEqual([forkRepository]);
  });
});
