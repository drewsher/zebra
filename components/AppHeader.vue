<template>
  <header class="header">
    <AppIcon
      icon-path="logo.svg"
      class="header__icon"
    />
  </header>
</template>

<style lang="scss">
  .header {
    padding: 40px 100px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.08);

    &__icon {
      width: 152px;
    }
  }
</style>

<script>
  export default {
    name: 'AppHeader'
  }
</script>
