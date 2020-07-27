import React from 'react';
import { Container, Text } from './style';
import DropDownButton from '../DropDownButton';

const TYPES = [
  { value: 'isSources', label: 'Sources' },
  { value: 'isFork', label: 'Forks' },
  { value: 'isArchived', label: 'Archived' },
  { value: 'isMirror', label: 'Mirrors' }
];

const Filters = ({ languages, languageSelected, onChangeLanguage, onChangeType, typeSelected }) => (
  <Container>
    <Text>Filter</Text>

    <DropDownButton
      onChange={onChangeType}
      options={TYPES}
      right='10px'
      selected={typeSelected}
      title='Type'
    />

    <DropDownButton
      onChange={onChangeLanguage}
      options={languages}
      selected={languageSelected}
      title='Language'
    />
  </Container>
);

export default Filters;
