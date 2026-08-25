export interface FilterOption {
  value: string;
  label: string;
}

export interface Language {
  id: string;
  name: string;
  color: string;
}

export interface Repository {
  description: string | null;
  forkCount: number;
  isArchived: boolean;
  isFork: boolean;
  isMirror: boolean;
  licenseInfo: {
    nickname: string | null;
    spdxId: string | null;
  } | null;
  name: string;
  parent: {
    nameWithOwner: string;
    url: string;
  } | null;
  primaryLanguage: Language | null;
  stargazers: {
    totalCount: number;
  };
  updatedAt: string;
  url: string;
}

export interface PinnedRepository {
  description: string | null;
  forkCount: number;
  name: string;
  primaryLanguage: Language | null;
  stargazers: {
    totalCount: number;
  };
  url: string;
}
