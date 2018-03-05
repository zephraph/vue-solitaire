/* eslint-env commonjs */

import { storiesOf } from "@storybook/vue";
import { select } from "@storybook/addon-knobs/vue";
import Card from "./Card";
// import { action } from "@storybook/addon-actions";
// import { linkTo } from "@storybook/addon-links";

storiesOf("UICard", module).add("to Storybook", () => ({
  components: { Card },
  template: `<Card 
    style="width: 80px"
    rank="${select(
      "rank",
      ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Q", "J", "K"],
      "A",
      "rank-group"
    )}"
    suit="${select("suit", ["S", "C", "D", "H"], "S", "suit-group")}"
   />`
}));
