import React from 'react';
import { mount } from 'enzyme';

import App from './App';
import OrganizationInfo from './components/OrganizationInfo';
import PinnedRepos from './components/PinnedRepos';
import ReposList from './components/ReposList';

describe('<App />', () => {
  it('renders <OrganizationInfo /> component', () => {
    const wrapper = mount(<App />);

    expect(wrapper.exists()).toBe(true);

    expect(wrapper.find(OrganizationInfo)).toHaveLength(1);
    expect(wrapper.find(PinnedRepos)).toHaveLength(1);
    expect(wrapper.find(ReposList)).toHaveLength(1);
  });
});
