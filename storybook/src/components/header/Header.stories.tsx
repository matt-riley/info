import { checkA11y } from "@storybook/addon-a11y";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Header } from "./index";

storiesOf("Header", module)
  .addDecorator(checkA11y)
  .add("with text", () => <Header></Header>);
