<template>
            <aside>
                <h2 class="article-list">Articles<span class="subtext">記事一覧</span></h2>
                <ul >
                    <li class="article-link" v-for="content in blogdata.contents">
                        <nuxt-link v-bind:class="[articleid==content.id ? 'active' : 'inactive']" 
                        :to="`/myblog/${content.id}/`">{{content.title}}</nuxt-link></li>
                </ul>
            </aside>
</template>