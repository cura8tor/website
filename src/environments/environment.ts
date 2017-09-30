// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: 'AIzaSyCt6JvnKfbizTaJ9A6_LBVpHd66sm0_bAQ',
    authDomain: 'cura8tor.firebaseapp.com',
    databaseURL: 'https://cura8tor.firebaseio.com',
    projectId: 'cura8tor',
    storageBucket: 'cura8tor.appspot.com',
    messagingSenderId: '191569534597'
  }
};
