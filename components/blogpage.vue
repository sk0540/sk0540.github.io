<template>
            <main id="blog">
                <article class="article-page">
                    <h1 class="article-title">{{articles.title}}</h1>
                    <time v-text="$dayjs(articles.publishedAt).locale('ja').format('YYYY/MM/DD')" />
                    <div class="article-content" v-html="articles.body"></div>
                    <hr>
                </article>   
            </main>
</template>
<script>
export default {
  props: {
      articles:{
        type: Object,
      },
  },
}
</script>
