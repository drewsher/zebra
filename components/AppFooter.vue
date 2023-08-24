<template>
  <footer class="footer">
    <AppIcon
      icon-path="logo.svg"
      class="footer__icon"
    />
    <p class="footer__text">© alpha, 2023</p>
  </footer>
</template>

<style lang="scss">
  .footer {
    display: flex;
    gap: 6px;
    flex-direction: column;
    padding: 40px 100px;
    margin-top: auto;
    background-color: #F8F8F8;

    &__icon {
      width: 115px;
    }

    &__text {
      margin: 0;
      color: #81899D;
    }
  }
</style>

<script>
  export default {
    name: 'AppFooter'
  }
</script>
