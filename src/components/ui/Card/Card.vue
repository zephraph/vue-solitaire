<template lang="pug">
  .container 
    .inner
      .top-left.corner 
        .rank {{ rank }}
        .suit {{ suit }}
      .bottom-right.corner
        .rank {{ rank }}
        .suit {{ suit }}
</template>

<script>
export default {
  name: "UICard",
  props: {
    rank: {
      required: true,
      type: String
    },
    suit: {
      required: true,
      type: String
    }
  }
};
</script>

<style lang="stylus" scoped>
.container {
  display: inline-block;
  border: 1px solid black;
  border-radius: 5px;
  padding: 3px;
}

.inner {
  height: 0;
  width: 100%;
  padding-bottom: 150%;
  position: relative;
}

.corner {
  display: flex;
  flex-direction: column;
}

.bottom-right {
  position: absolute;
  bottom: 0;
  right: 0;
  transform: rotate(180deg);
}
</style>
