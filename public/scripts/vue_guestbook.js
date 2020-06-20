Vue.component('comment-section', {
  template: `
    <div class="comment-section">

      <guest-form @comment-submitted="addComment"></guest-form>

      <div>
        <h3>Comments</h3>
        <p v-if="!comments.length">There are no comments yet.</p>
        <ul id="comment-section">
          <li v-for="comment in comments">
            <p class="comment-name">{{ comment.name }}</p>
            <p class="comment-contents">{{ comment.comment }}</p>
          </li>
        </ul>
      </div>

    </div>
  `,
  data() {
    return {
      comments: []
    };
  },
  methods: {
    addComment(comment) {
      this.comments.push(comment);
    },
    getComments: function () {
      var that = this;
      $.ajax({
        url: 'public/json/comments.json',
        method: 'GET'
      }).then(function (response) {
        if (response.error) {
          console.err("There was an error " + response.error);
          that.loginError = 'Error';
        } else {
          for (item of response){
            that.addComment(item);
          }
        }
      }).catch(function (err) {
        console.error(err);
      });
    }
  },
  created() {
    this.getComments();
  }
});

Vue.component('guest-form', {
  template: `
    <form id="comment-form" class="guest-form" @submit.prevent="onSubmit">

    <div id="form-error" v-if="errors.length">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
    </div>

    <div class="input-area">
        <label for="name">Name:</label>
        <input id="name" name="name" v-model="name">
    </div>
    
    <div class="input-area">
        <label for="comment">Comment:</label>      
        <textarea name="comment" id="comment" v-model="comment"></textarea>
    </div>

    <input type="submit" value="Submit">  

    </form>
    `,
  data() {
    return {
      name: null,
      comment: null,
      errors: []
    }
  },
  methods: {
    onSubmit() {
      if (this.name && this.comment) {
        const comment = {
          name: this.name,
          comment: this.comment
        };
        this.$emit('comment-submitted', comment);
        this.name = null;
        this.comment = null;

        var newComment = $("#comment-form").serializeArray()
        console.log(newComment);


      } else {
        this.errors.length = 0;
        if (!this.name) this.errors.push('Name required.');
        if (!this.comment) this.errors.push('Comment required.');
      }
    }
  }
});

var app = new Vue({
  el: '#app',
});