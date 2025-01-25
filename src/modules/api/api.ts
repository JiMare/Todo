import authApiMethods from './authApiMethods';
import taskApiMethods from './taskApiMethods';

export default {
  ...authApiMethods,
  ...taskApiMethods,
};
