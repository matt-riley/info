import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { configure } from '@storybook/react';

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});
const req = require.context('../src/components', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(req);
}
configure(loadStories, module);
