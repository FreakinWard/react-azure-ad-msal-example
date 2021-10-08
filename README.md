# react-azure-ad-msal-example
---

# Getting Started Example
```shell
# Create `.env` with environment variables
cat << EOF >> .env
REACT_APP_azureApplicationId = "your-azure-application-id"
REACT_APP_azureCloudInstanceId = "your-azure-cloud-instance-id" 
REACT_APP_azureTenantInfo = "your-azure-tenant-info"
REACT_APP_azureRedirectUri = "http://localhost:3000"
REACT_APP_globalMsGraphUri = "https://graph.microsoft.com" 
REACT_APP_logoutRedirectUri = "/"
EOF


# start the example
npm start
```

## Helpful resources

1. [msal-react](https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/getting-started.md#getting-started)
1. [msal tutorial](https://docs.microsoft.com/en-us/azure/active-directory/develop/tutorial-v2-react)
1. [Create App Configuration](https://docs.microsoft.com/en-us/azure/active-directory/develop/scenario-spa-app-registration)
1. [Sign-in and Sign-out](https://docs.microsoft.com/en-us/azure/active-directory/develop/scenario-spa-sign-in?tabs=react)


## Create App Configuration
source: [Create App Configuration](https://docs.microsoft.com/en-us/azure/active-directory/develop/tutorial-v2-javascript-auth-code#configure-your-javascript-spa)

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

## PingId integration

### Helpful Resources

- [PingId OAuth2 Developer Guide](https://docs.pingidentity.com/bundle/developer/page/ftz1601508081721.html)
- [PingId - Get Tokens: GrantType - cod](https://docs.pingidentity.com/bundle/developer/page/yhk1601508082481.html)
- [PingId - Intermediate (client-side) implicit grant type](https://docs.pingidentity.com/bundle/developer/page/msk1601508083227.html)

1. loginqa.company.com/as/ftxNO_AE8tT/resume/as/authorization.ping
    1. MSAL Login
1. authenticator.pingone.com/pingid/ppm/auth
    1. blank white screen -> PingId Authenticated (Green)
1. loginqa.company.com/as/ftxNO_AE8tT/resume/as/authorization.ping
    1. PingId Authenticated (Green) ->
1. localhost
    1. black screen -> app load


### Overview
#### MSAL is expected to handle auth:
- access/refresh tokens
- token validation

#### OpenId is expected to do:
- ClientId: pingIdClientIdValue
- ClientSecret: pingIdClientSecretValue
- ResponseType: code
- GrantType: refresh_token

#### Refresh Request Details
- Authority: "https://loginqa.company.com"
- path: as/token.oauth2
- Header: Authorization: Basic {base64EncodedClientIdAndSecret}

#### Steps
Given MSAL is authenticated, then redirect to the pingId authorization endpoint

Authorization endpoint: https://localhost:3000/as/authorization.oauth2
                        ?client_id=pingIdClientIdValue
                        &response_type=code
                        &scope=edit
                        &redirect_uri=

---
>You're still here? It's over...go home.

---


https://logindev.company.com/as/authorization.oauth2
?client_id=clientId
&redirect_uri=https%3A%2F%2Flocalhost%3000%2Flogin-callback
&response_type=code
&scope=openid%20profile%20profile
&code_challenge=codeChallengeValue
&code_challenge_method=codeChallengeMethod
&response_mode=form_post
&nonce=nonceValue
&state=stateValue
&x-client-SKU=ID_NETSTANDARD2_0
&x-client-ver=5.5.0.0
