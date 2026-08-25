import type { FilterOption } from '../../types';
import DropDownButton from '../DropDownButton';
import { Container, Text } from './style';

export const TYPES: FilterOption[] = [
  { value: 'all', label: 'All' },
  { value: 'isSources', label: 'Sources' },
  { value: 'isFork', label: 'Forks' },
  { value: 'isArchived', label: 'Archived' },
  { value: 'isMirror', label: 'Mirrors' },
];

interface FiltersProps {
  languages: FilterOption[];
  languageSelected: FilterOption;
  onChangeLanguage: (option: FilterOption) => void;
  onChangeType: (option: FilterOption) => void;
  typeSelected: FilterOption;
}

const Filters = ({
  languages,
  languageSelected,
  onChangeLanguage,
  onChangeType,
  typeSelected,
}: FiltersProps) => (
  <Container>
    <Text>Filters</Text>
    <DropDownButton
      onChange={onChangeType}
      options={TYPES}
      right="10px"
      selected={typeSelected}
      title="Type"
    />
    <DropDownButton
      onChange={onChangeLanguage}
      options={languages}
      selected={languageSelected}
      title="Language"
    />
  </Container>
);

export default Filters;
