var postList = Vue.component('post-list', {
  template: '#post-list-template',
  data: function() {
    return {
      posts: ''
    }
  },
  mounted:function () {
    this.$http.get('./wp-json/wp/v2/posts').then(response => {
      this.posts = response.body;
    }, response => {
        console.log('Not Found');
    });
  }
});


var router = new VueRouter({
  routes: [
    { path: '/', component: postList }
  ]
});


new Vue({
  el: '#app',
  router: router
});
