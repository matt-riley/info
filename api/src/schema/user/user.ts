import { objectType } from '@nexus/schema';
import { Music } from '../music';

const User = objectType({
  description: 'User type - describes the user',
  name: 'User',
  definition(t) {
    t.field('music', {
      description: 'Music related information',
      nullable: false,
      type: Music,
      resolve() {
        return {};
      },
    });
  },
});

export default User;
