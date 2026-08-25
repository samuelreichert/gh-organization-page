import { useState, type FormEvent } from 'react';
import { styled } from '@stitches/react';

const Container = styled('section', {
  borderBottom: '1px solid #ebebeb',
  marginBottom: '24px',
  padding: '14px 24px 24px',
});

const Title = styled('h1', {
  fontSize: '22px',
  fontWeight: 400,
  margin: '0 0 8px',
});

const Description = styled('p', {
  color: '#687689',
  fontSize: '14px',
  margin: '0 0 14px',
});

const Form = styled('form', {
  display: 'flex',
  gap: '10px',
});

const Input = styled('input', {
  border: '1px solid #ebebeb',
  borderRadius: '4px',
  color: '#2F445C',
  fontSize: '14px',
  padding: '8px 12px',
  width: 'min(360px, 100%)',
  '&:focus': {
    borderColor: '#63A9F3',
    outline: '2px solid rgba(99, 169, 243, 0.25)',
  },
});

const Button = styled('button', {
  backgroundColor: '#63A9F3',
  border: 0,
  borderRadius: '4px',
  color: '#ffffff',
  cursor: 'pointer',
  fontSize: '14px',
  padding: '8px 14px',
  '&:hover': {
    backgroundColor: '#438fdc',
  },
});

const Recent = styled('div', {
  alignItems: 'center',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
  marginTop: '14px',
});

const RecentLabel = styled('span', {
  color: '#687689',
  fontSize: '12px',
});

const RecentButton = styled('button', {
  backgroundColor: '#ffffff',
  border: '1px solid #ebebeb',
  borderRadius: '4px',
  color: '#2F445C',
  cursor: 'pointer',
  fontSize: '12px',
  padding: '5px 8px',
  '&:hover': {
    backgroundColor: '#F8F8F8',
  },
});

interface OrganizationSearchProps {
  onSearch: (login: string) => void;
  recentOrganizations: string[];
  selectedOrganization: string;
}

const OrganizationSearch = ({
  onSearch,
  recentOrganizations,
  selectedOrganization,
}: OrganizationSearchProps) => {
  const [login, setLogin] = useState(selectedOrganization);

  const submitLogin = (value: string) => {
    const trimmedLogin = value.trim();

    if (trimmedLogin) {
      setLogin(trimmedLogin);
      onSearch(trimmedLogin);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitLogin(login);
  };

  return (
    <Container>
      <Title>GitHub organization</Title>
      <Description>
        Enter an organization login to browse its repositories.
      </Description>
      <Form onSubmit={handleSubmit}>
        <Input
          aria-label="Organization login"
          onChange={(event) => setLogin(event.target.value)}
          placeholder="e.g. github"
          required
          type="search"
          value={login}
        />
        <Button type="submit">Search</Button>
      </Form>
      {!!recentOrganizations.length && (
        <Recent>
          <RecentLabel>Recent:</RecentLabel>
          {recentOrganizations.map((organization) => (
            <RecentButton
              key={organization}
              onClick={() => submitLogin(organization)}
              type="button"
            >
              {organization}
            </RecentButton>
          ))}
        </Recent>
      )}
    </Container>
  );
};

export default OrganizationSearch;
