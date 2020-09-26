// use "createApp"
const app = Vue.createApp({
  // data must be a function
  data() {
    return {
      message: 'This works in Vue 2!',
    }
  },
  methods: {
    changeMessage() {
      this.message = 'Will it work in Vue 3?';
    },
  },
})
// register using app.component instead of Vue.component
app.component('the-button', {
  emits: ['update'], // not required, but makes components more understandable
  template: '<button @click="updateMessage">Click me</button>',
  methods: {
    updateMessage() {
      this.$emit('update');
    },
  },
})
app.mount('#app')
