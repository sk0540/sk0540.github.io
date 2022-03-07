<template>
    <div id="wrapper">
        <header>
            <div id="title">
                <h1>sk0540</h1>
                <p>sk0540のWebサイト</p>
            </div>
            <nav>
    
                <nuxt-link class="selected" to="/#about">Top</nuxt-link>
                <nuxt-link to="/#works">Works</nuxt-link>
                <nuxt-link to="/blog">Blog</nuxt-link>
            </nav>
        </header>
        <div id="content">
            <main>
                <h1 class="headline" id="about">About<span class="subtext">このサイトについて</span></h1>
                sk0540です。このwebサイトにWebデザインとプログラミングの制作物を載せていく予定です。
    
                <h1 class="headline" id="works">Works<span class="subtext">制作作品</span></h1>
                <div class="artwork">
                    <a  v-bind:href="url01"><img class='thumbnail' src="/nuxt-diff.jpg" alt="" ></img></a>
                    <h3 class="workdesc"><a class="worklink" v-bind:href="url01">文章比較ツール diff</a></h3>
                </div>
                <hr>
            </main>
            <aside>
                <p>サイドメニュー予定地ですサイドメニュー予定地ですサイドメニュー予定地です</p>
            </aside>
        </div>
        <footer>
            <div class="copyright">©2021-2022 sk0540</div>
        </footer>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title:'sk0450のWebサイト',
        }
    },

    data(){
        return{
            url01:'https://sk0540.github.io/nuxt-diff-test',
        }
    },
}
</script>



