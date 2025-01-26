import authApiMethods from './authApiMethods';
import taskApiMethods from './taskApiMethods';
import userApiMethods from './userApiMethods';

export default {
  ...authApiMethods,
  ...taskApiMethods,
  ...userApiMethods,
};
