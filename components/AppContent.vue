<template>
  <article class="content">
    <header
      class="content-banner"
      :style="{
        backgroundImage: `url(${require('~/assets/images/banner.jpg')})`
      }"
    >
      <h1 class="content-banner__title">{{ title }}</h1>
    </header>
    <slot></slot>
  </article>
</template>

<style lang="scss">
  .content {
    &-banner {
      position: relative;
      padding: 224px 100px 48px;
      background-size: cover;
      background-position: center;

      &__title {
        font-size: 40px;
        font-weight: bold;
      }
    }
  }
</style>

<script>
  export default {
    name: 'AppContent',
    props: {
      title: {
        type: String,
        default: '',
      },
    }
  }
</script>
