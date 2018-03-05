/* eslint-env commonjs */
import { configure, addDecorator } from "@storybook/vue";
import { withKnobs } from "@storybook/addon-knobs/vue";

addDecorator(withKnobs);

// automatically import all files ending in *.story.js
const req = require.context("../src", true, /\.story\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
