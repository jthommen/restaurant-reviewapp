// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyD7mmudqxRJIDDxuQ28M0UxuNXmDcWKcMg",
    authDomain: "restaurant-reviewapp.firebaseapp.com",
    databaseURL: "https://restaurant-reviewapp.firebaseio.com",
    projectId: "restaurant-reviewapp",
    storageBucket: "restaurant-reviewapp.appspot.com",
    messagingSenderId: "19402762324"
  }
};
