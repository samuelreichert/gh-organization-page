import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

vi.mock('./components/OrganizationInfo', () => ({
  default: () => <section>Organization information</section>,
}));
vi.mock('./components/PinnedRepos', () => ({
  default: () => <section>Pinned repositories</section>,
}));
vi.mock('./components/ReposList', () => ({
  default: () => <section>Repositories</section>,
}));

describe('<App />', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders the organization sections after searching for an organization', () => {
    render(<App />);

    expect(
      screen.getByText(
        'Search for a GitHub organization to view its repositories.',
      ),
    ).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText('Organization login'), {
      target: { value: 'example' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Search' }));

    expect(screen.getByText('Organization information')).toBeInTheDocument();
    expect(screen.getByText('Pinned repositories')).toBeInTheDocument();
    expect(screen.getByText('Repositories')).toBeInTheDocument();
    expect(localStorage.getItem('selected-github-organization')).toBe(
      'example',
    );
  });
});
