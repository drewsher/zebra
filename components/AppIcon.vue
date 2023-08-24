<template>
  <div
    class="icon"
    v-html="AppIcon"
  />
</template>

<style lang="scss">
  .icon {
    display: flex;
  }
</style>

<script>
  export default {
    name: 'BaseIcon',
    props: {
      iconPath: {
        type: String,
        default: '',
      },
    },
    computed: {
      AppIcon() {
        return require('~/assets/icons/' + this.iconPath + '?raw');
      },
    },
  };
</script>
