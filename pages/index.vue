<template>
  <main>
    <AppHeader />
    <AppContent title="Новости">
      <NewsList />
    </AppContent>
    <AppFooter />
  </main>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,400;6..12,700&display=swap');

  body, html, #__nuxt, #__layout, main {
    height: 100%;
  }

  body {
    margin: 0;
    font-family: 'Nunito Sans';
    line-height: 1.4;
  }

  main {
    display: flex;
    flex-direction: column;
  }

  button {
    cursor: pointer;
    padding: 0;
    border: none;
    background-color: transparent;
  }

  img {
    max-width: 100%;
  }

  a {

    &, &:visited, &:active {
      color: #0C5BEF;
    }

    &:hover {
      color: #0029A9;
    }
  }
</style>

<script>
  import { $query } from '/api';

  export default {
    name: 'IndexPage',
  }
</script>
