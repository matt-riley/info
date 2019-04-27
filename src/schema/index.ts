import { gql } from "apollo-server-core";
import feature from "./features";
import rootQuery from "./rootQuery";
import services from "./services";

const schema = gql`
  ${rootQuery}
  ${services}
  ${feature}
`;

export default schema;
