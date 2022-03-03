<template>
    <div id="wrapper">
        <header>
            <div id="title">
                <h1>sk0540</h1>
                <p>sk0540のWebサイト</p>
            </div>
            <nav>
    
                <nuxt-link to="/#about">Top</nuxt-link>
                <nuxt-link to="/#works">Works</nuxt-link>
                <nuxt-link class="selected" to="/myblog/">Blog</nuxt-link>
            </nav>
        </header>
        <div id="content">
            <blog-component :articles="blogdata" />
            <aside>
                <h2 >Articles<span class="subtext">記事一覧</span></h2>
                <ul class="articles-array">
                    <li class="article-link" v-for="content in blogdata.contents"><nuxt-link :to="`/myblog/${content.id}/`">{{content.title}}</nuxt-link></li>
                </ul>
            </aside>
        </div>
      <footer><div class="copyright">©2021-2022 sk0540</div></footer>
    </div>
</template>

<script>
import BlogComponent from '~//components/blog.vue';

export default {

  components:{
      BlogComponent,
  },
    
  async asyncData({ $microcms }) {
    const blogdata = await $microcms.get({
      endpoint: 'blog',
    });
    return {blogdata};
  }
}
</script>

