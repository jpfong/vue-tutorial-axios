<template>
<div>
  <input type="text" v-model="postTitle" placeholder="title"/>
  <input type="text" v-model="postBody" placeholder="body"/>
  <input type="button" @click="createPost()" value="submit">
  <ul v-if="posts && posts.length">
    <li v-for="post of posts" v-bind:key="post.id">
      <p><strong>{{post.title}}</strong></p>
      <p>{{post.body}}</p>
    </li>
  </ul>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'app',
  data () {
    return {
      postBody: null,
      postTitle: null,
      posts: []
    }
  },
  created() {
    this.$http.get('posts').then((response) => {
      this.posts = response.data
    })
    .catch((e) => {
      console.error(e)
    })
  },
  methods: {
    createPost () {
      this.$http.post('posts', {
        title: this.postTitle,
        body: this.postBody
      }).then((response) => {})
      .catch((e) => {
        console.error(e)
      })
    }
  }
}
</script>
