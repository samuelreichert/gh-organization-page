import React from 'react';
import { Container, Text } from './style';
import DropDownButton from '../DropDownButton';

const TYPES = [
  { value: 'isFork', label: 'Sources' },
  { value: 'isFork', label: 'Forks' },
  { value: 'isArchived', label: 'Archived' },
  { value: 'isMirror', label: 'Mirrors' }
];

const Filters = ({ typeSelected, languageSelected, onChangeType, onChangeLanguage, languages }) => (
  <Container>
    <Text>Filter</Text>

    <DropDownButton options={TYPES} selected={typeSelected} onChange={onChangeType} title='Type' right='10px' />
    <DropDownButton options={languages} selected={languageSelected} onChange={onChangeLanguage} title='Language' />
  </Container>
);

export default Filters;
