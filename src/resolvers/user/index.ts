import music from './music';
import userResolver from './User';

const user = {
  ...userResolver,
  ...music,
};

export default user;
