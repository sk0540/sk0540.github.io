<template>
            <main id="blog">
                <h1 class="headline" id="top" >Blog<span class="subtext">ブログ</span></h1>
                <article v-for="content in articles.contents">
                    <h1 class="article-title"><nuxt-link :to="`/myblog/${content.id}/`">{{content.title}}</nuxt-link></h1>
                    <time v-text="$dayjs(content.publishedAt).locale('ja').format('YYYY/MM/DD')" />
                    <div class="article-content" v-html="content.body"></div>
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
