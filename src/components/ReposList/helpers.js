export const uniqueLanguagesList = (repositories) => {
  let languages = [
    { value: 'all', label: 'All' },
  ];

  repositories.forEach(({ primaryLanguage }) => {
    if (!primaryLanguage) return null;

    return languages.push({
      value: primaryLanguage.id,
      label: primaryLanguage.name
    });
  });

  const uniqueLanguages = Array.from(new Set(languages.map(a => a.value)))
    .map(value => {
      return languages.find(a => a.value === value)
    })

  return uniqueLanguages;
};
