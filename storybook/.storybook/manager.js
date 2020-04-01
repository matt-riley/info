import { addons } from '@storybook/addons'
import { themes } from '@storybook/theming'
import '@storybook/addon-a11y/register'
import '@storybook/addon-actions/register'
import '@storybook/addon-viewport/register'

addons.setConfig({
  theme: themes.dark
})