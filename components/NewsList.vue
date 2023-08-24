<template>
  <div class='news'>
    <div class='news-list'>
      <div
        v-for='post in posts'
        :key='post.xmlId'
        class='news-item'
      >
        <img
          v-if='post.image'
          :src='post.image'
          alt='news-item__image'
        />
        <div class='news-item__wrapper'>
          <AppWrapper
            v-slot="{ date }"
            :date="formatDate(post.date)"
          >
            <div class="news-item-date">
              <span class="news-item-date__day">{{ date.day }}</span>
              <div class="news-item-date__content">
                <span class="news-item-date__month">{{ date.month }}</span>
                <span class="news-item-date__year">{{ date.year }}</span>
              </div>
            </div>
          </AppWrapper>
          <a
            :href="post.link"
            class='news-item__title'
          >
            {{ post.name }}
          </a>
          <div class='news-item__content'>{{ post.previewText }}</div>
          <div class="news-item-tags">
            <div class="news-item-tags__item">{{ post.type.value }}</div>
          </div>
        </div>
      </div>
    </div>
    <button
      v-if='next'
      class='news-more'
      @click='loadMore'
    >
      Загрузить еще
    </button>
  </div>
</template>

<style lang='scss'>
  .news {
    display: flex;
    flex-direction: column;
    gap: 72px;
    padding: 70px 100px;

    &-list {
      display: flex;
      flex-wrap: wrap;
      gap: 48px;
    }

    &-item {
      display: flex;
      flex-direction: column;
      min-height: 554px;
      flex-basis: calc(33% - 33px);
      border: 1px solid #0F62FE;
      border-radius: 16px;
      overflow: hidden;

      &__wrapper {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 32px;
      }

      &-date {
        display: flex;
        gap: 4px;
        font-size: 36px;
        color: #A1A7B5;
        line-height: 1;

        &__content {
          display: flex;
          flex-direction: column;
          font-size: 15px;
          line-height: 1.1;
        }
      }

      &__title {
        font-size: 22px;
        text-decoration: none;
      }

      &-tags {
        display: flex;
        gap: 12px;
        margin-top: auto;

        &__item {
          font-size: 14px;
          border-radius: 360px;
          padding: 4px 16px;
          background-color: #F0F6FE;
        }
      }
    }

    &-more {
      font-size: 20px;
      font-weight: 600;
      color: #002DBF;
      padding: 16px 32px;
      border: 1px solid #002DBF;
      border-radius: 8px;
      align-self: center;
    }
  }
</style>

<script>
  import { $query } from '/api';

  export default {
    name: 'NewsList',
    fetch() {
      this.fetchPosts();
    },
    data() {
      return {
        data: {},
        posts: [],
        next: false,
      }
    },
    methods: {
      async fetchPosts(page = 1) {
        this.data = await $query('/news/' + page);

        this.posts = this.posts.concat(this.data.items);

        this.hasNextPage();
      },
      async loadMore() {
        this.fetchPosts(this.data.nav.current + 1);
      },
      hasNextPage() {
        this.next = this.data.nav.current < this.data.nav.total;
      },
      formatDate(value) {
        const date = new Date(value);
        const monthNames = [
          'January', 'February', 'March',
          'April', 'May', 'June',
          'July', 'August', 'September',
          'October', 'November', 'December'
        ];

        return {
          day: date.getDate(),
          month: monthNames[date.getMonth()],
          year: date.getFullYear(),
        }
      }
    }
  }
</script>
