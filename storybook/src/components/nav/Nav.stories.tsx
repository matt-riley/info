import { checkA11y } from "@storybook/addon-a11y";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Nav } from "./index";

storiesOf("Nav", module)
  .addDecorator(checkA11y)
  .add("with text", () => <Nav></Nav>);
