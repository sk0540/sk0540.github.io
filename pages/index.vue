<template>
    <div id="wrapper">
        <header>
            <div id="title">
                <h1>sk0540</h1>
                <p>sk0540のblog</p>
            </div>
            <nav>
    
                <a href=#top>Top</a>
                <a href=#about>About</a>
                <a class="selected" href=#blog>(Blog)</a>
            </nav>
        </header>
        <div id="content">
            <main id="blog">
                <article>
                    <h1 class="aricle-title">タイトル</h1>
                    <p class="article-content">本文</p>
                    <hr>
                </article>
    
    
            </main>
            <aside>
                サイドメニュー予定地
            </aside>
        </div>
      <footer></footer>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData() {
    const { data } = await axios.get(
      // your-service-idËoÍnµ¸”πidknM€HfO`UD
      'https://sk0540.microcms.io/api/v1/blog',
      {
        // your-api-keyËoÍnapi-keyknM€HfO`UD
        headers: { 'X-MICROCMS-API-KEY': '66747e9fa86b4e99a5016f26fdfc255a9eec' }
      }
    )
    return data
  }
}
</script>

<style>
body {
    background: #ddd;
    color: #333;
    font-size: 16px;
    font-family: sans-serif;
    line-height: 2em;
    margin: 0;
}

#wrapper {
    background: #fff;
    margin: 0 auto;
    max-width: 60em;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

header,
footer {
    display: flex;
    background: #444;
    color: #fff;
    padding: 1em;
    margin: 0 2em;
    width: auto;
    min-width: 18em;
}

header {
    border-radius: 0 0 2em 2em;
}

nav {
    margin: auto 0 0 auto;
    text-align: right;
}

footer {
    border-radius: 1em 1em 0 0;
    margin-top: auto;
}

#content {
    margin: 0 auto;
}

main {
    margin: 2em 2em;
    max-width: 32em;
}

aside {
    margin: 4em 2em;
    min-width: 16em;
}

h1,
h2,
h3,
h4 {
    line-height: 1.5;
    margin-bottom: 1em;
}

h1 {
    font-size: 2em;
}

h2 {
    font-size: 1.5em;
}

h3 {
    font-size: 1.25em;
}

h4 {
    font-size: 1.1em;
}

h5 {
    font-size: 1em;
}

p {
    margin-bottom: 2em;
}

a {
    text-decoration: none;
}

nav a {
    color: #fff;
    padding: 0.25em 1em 0 1em;
    line-height: 2.5em;
}

a:hover {
    background: #654;
    border-radius: 0.25em;
}

.selected {
    border-bottom: solid 4px #0cf;
}

hr {
    border: 0;
    border-bottom: solid 1px #ddd;
    margin: 3em 0;
}

#title {}

#title h1 {
    position: relative;
    padding-left: 3.5rem;
    padding-right: 1em;
    margin: 0;
}

#title h1::before {
    position: absolute;
    background: #0cf;
    content: "";
    left: 0;
    top: 0;
    height: 1.25em;
    width: 1.25em;
    border-radius: 0.125em;
}

#title p {
    padding-left: 3.5rem;
    margin: 0;
}

@media screen and (min-width: 576px) {
    #content {
        display: flex;
    }
}
</style>
