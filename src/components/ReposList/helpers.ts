import type { FilterOption, Repository } from '../../types';

export const uniqueLanguagesList = (
  repositories: Repository[],
): FilterOption[] => {
  const languages = repositories.flatMap(({ primaryLanguage }) =>
    primaryLanguage
      ? [{ value: primaryLanguage.id, label: primaryLanguage.name }]
      : [],
  );

  return [
    { value: 'all', label: 'All' },
    ...Array.from(
      new Map(languages.map((language) => [language.value, language])).values(),
    ),
  ];
};

export const filterRepositories = (
  repositories: Repository[],
  type: FilterOption,
  language: FilterOption,
) =>
  repositories.filter((repository) => {
    const matchesLanguage =
      language.value === 'all' ||
      repository.primaryLanguage?.id === language.value;
    const matchesType =
      type.value === 'all' ||
      (type.value === 'isSources'
        ? !repository.isFork
        : repository[type.value as keyof Repository] === true);

    return matchesLanguage && matchesType;
  });
