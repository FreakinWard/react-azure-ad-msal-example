import { LogLevel } from "@azure/msal-browser";
// Browser check variables
// If you support IE, our recommendation is that you sign-in using Redirect APIs
// If you as a developer are testing using Edge InPrivate mode, please add "isEdge" to the if check
const ua = window.navigator.userAgent;
const msie = ua.indexOf("MSIE ");
const msie11 = ua.indexOf("Trident/");
const msedge = ua.indexOf("Edge/");
const firefox = ua.indexOf("Firefox");
const isIE = msie > 0 || msie11 > 0;
const isEdge = msedge > 0;
const isFirefox = firefox > 0; // Only needed if you need to support the redirect flow in Firefox incognito

// Config object to be passed to Msal on creation
const {
    REACT_APP_azureApplicationId,
    REACT_APP_azureCloudInstanceId,
    REACT_APP_azureTenantInfo,
    REACT_APP_azureRedirectUri,
    REACT_APP_globalMsGraphUri,
    REACT_APP_logoutRedirectUri,
} = process.env;

const azureApplicationId = REACT_APP_azureApplicationId
const azureCloudInstanceId = REACT_APP_azureCloudInstanceId;
const azureTenantInfo = REACT_APP_azureTenantInfo;
const azureRedirectUri = REACT_APP_azureRedirectUri;
const globalMsGraphUri = REACT_APP_globalMsGraphUri
const logoutRedirectUri = REACT_APP_logoutRedirectUri

const env = process.env.REACT_APP_azureApplicationId;

console.log('test',{env})

console.log('test',{REACT_APP_azureApplicationId})

export const msalConfig = {
    auth: {
        clientId: azureApplicationId,
        authority: `${azureCloudInstanceId}/${azureTenantInfo}`,
        redirectUri: azureRedirectUri,
        postLogoutRedirectUri: logoutRedirectUri
    },
    cache: {
        storeAuthStateInCookie: isIE || isEdge || isFirefox
    },
    system: {
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                    default:
                        return;
                }
            }
        }
    }
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest = {
    scopes: ["User.Read"]
};

// Add here the endpoints for MS Graph API services you would like to use.
export const graphConfig = {
    graphMeEndpoint: `${globalMsGraphUri}/v1.0/me`
};
