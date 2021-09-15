# react-azure-ad-msal-example
---

# Getting Started Example

1. [msal-react](https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/getting-started.md#getting-started)
1. [msal tutorial](https://docs.microsoft.com/en-us/azure/active-directory/develop/tutorial-v2-react)
1. [Create App Configuration](https://docs.microsoft.com/en-us/azure/active-directory/develop/scenario-spa-app-registration)
1. [Sign-in and Sign-out](https://docs.microsoft.com/en-us/azure/active-directory/develop/scenario-spa-sign-in?tabs=react)


## Create App Configuration
source: [Create App Configuration](https://docs.microsoft.com/en-us/azure/active-directory/develop/scenario-spa-app-registration)

```javascript
// authConfig.js

export const msalConfig = {
    auth: {
        clientId: azureApplicationId,
        authority: `${azureCloudInstanceId}/${azureTenantInfo}`,
        redirectUri: azureRedirectUri,
        postLogoutRedirectUri: logoutRedirectUri
    },
    // ...rest
};

```


## React
1. create `msalInstance` [index.js](https://github.com/FreakinWard/react-azure-ad-msal-example/blob/2ad149a9d49ed1c641021517fb480b111ef04302/src/index.js#L10)
1. wrap application with `MsalProvider` [App.js]()
1. set `instance` prop to `msalInstance`
1. `AuthenticationTemplate` and `UnauthenticatedTemplate` - [Determining whether user is authenticated](https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/getting-started.md#determining-whether-a-user-is-authenticated) 

`msal-react` exposes `AuthenticationTemplate` and `UnauthenticatedTemplate`
These are implemented in `Home.jsx` and are documented with [Determining whether user is authenticated](https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/getting-started.md#determining-whether-a-user-is-authenticated) 



### MSAL Config
[msal api docs](https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/initialization.md)



### MSAL Provider
setNavigationClient is documented [here](https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/performance.md#how-to-configure-azuremsal-react-to-use-your-routers-navigate-function-for-client-side-navigation)


```javascript
// Home.js

<AuthenticatedTemplate>
    <SecretThing />
</AuthenticatedTemplate>

<UnauthenticatedTemplate>
    <p>You are not signed in! Please sign in.</p>
</UnauthenticatedTemplate>

```



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
