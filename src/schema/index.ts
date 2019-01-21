import { gql } from "apollo-server-core";
import rootQuery from "./rootQuery";
import services from "./services/index";

const schema = gql`
  ${rootQuery}
  ${services}
`;

export default schema;
