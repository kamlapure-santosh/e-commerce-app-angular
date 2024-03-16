import { EnvironmentConfiguration } from 'src/app/models/environment-config';
import 'zone.js/plugins/zone-error';

const localhostUrl = 'https://localhost:7086/api';
const serverUrl = '';

// The list of file replacements can be found in `angular.json`.
export const environment: EnvironmentConfiguration = {
  env_name: 'dev',
  production: false,
  apiBaseUrl: localhostUrl,
  apiEndpoints: {
    product: {
      getAllProduct: 'products',
      getProduct: 'products',
    },
  },
};
