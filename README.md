## Autorization form

This project is a login form implemented using React and TypeScript. It features a mock fetch request to simulate an API call.

#### How to run project

```
yarn install
yarn start
```

#### Demo

[gh-pages](https://amorymeow.github.io/authorization_form/)

#### Features

- Mock Fetch Request: The fetch request is simulated to imitate a real API call, returning a promise that resolves or rejects based on the provided credentials.
- Loading State: When the login button is clicked, the form enters a loading state, during which a spinner is displayed on the button.
- Success State: Upon successful login, a checkmark replaces the spinner on the button, and a success message is displayed.
- Error Handling: If the login credentials are incorrect or not filled in, an error message is shown.
- Test Credentials: The mock fetch request uses the following test credentials for successful login:

|  username | password  |
| ------------ | ------------ |
|  admin | admin  | 

This setup provides a realistic simulation of a login process, including loading indicators and success/error feedback for the user.


