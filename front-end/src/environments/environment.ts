// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_ENDPOINT: 'http://localhost:8080/v1',
  CRYPTO_KEY: `-----BEGIN PUBLIC KEY-----
  MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC6lVh4D8/k++pLEwsbHTamjJqJ
  HLC8/H4DyVzDG9f3GCgCl8al27uyG5EcJqATH8tJwCFzv8hhO896ThyKL+ObjeGK
  4yx7kE1bnWhGcPulZtq+L7F/+jpKuIGlOFevnLMEBoaxhHvVyhiMbq5fo8r1c7/S
  n9Xi8xFTjSkQMxY2mQIDAQAB
  -----END PUBLIC KEY-----`,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
