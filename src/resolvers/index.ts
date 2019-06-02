import rootQuery from './rootQuery';
import user from './user';

const allResolvers = {
  ...rootQuery,
  ...user,
};

export default allResolvers;
