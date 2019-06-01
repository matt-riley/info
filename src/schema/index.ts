import { gql } from 'apollo-server-core';
import feature from './features';
import rootQuery from './rootQuery';
import services from './services';
import User from './user';

const schema = gql`
  ${rootQuery}
  ${services}
  ${feature}
  ${User}
`;

export default schema;
