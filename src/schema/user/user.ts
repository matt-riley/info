import { objectType } from 'nexus';
import { Music } from '../music';

const User = objectType({
  description: 'User type - describes the user',
  name: 'User',
  definition(t) {
    t.field('music', {
      description: 'Music related information',
      nullable: true,
      type: Music,
    });
  },
});

export default User;
