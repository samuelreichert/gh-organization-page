# GitHub Organization Page

## Setup
This project was made using Node.js 12.18.

You must also have [Yarn](https://yarnpkg.com/) installed.

First clone this project using:
```
git@github.com:samuelreichert/gh-organization-page.git
```

Then install the dependencies using Yarn.
```
yarn install
```

You need to create a `.env.local` file for the environment variables necessary to run the project.
All you need to do is:
```
cp .env.local.example .env.local
```
Then you must fill the `REACT_APP_GITHUB_TOKEN` variable with a GitHub Access Token with the proper rights to use the GraphQL API. (Instructions on how to create you access token are [here](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token))

You can change the organization that is being used to show the information. To do that, open `.env.local` and change `REACT_APP_GITHUB_ORGANIZATION` value.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Tech stack
The project has the following tech stack:

* React
* Apollo Client
* Styled Components
