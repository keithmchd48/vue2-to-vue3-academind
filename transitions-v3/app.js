// basic changes
const app = Vue.createApp({
  // basic changes
  data() {
    return {isVisible: true}
  },
  methods: {
    toggleBox() {
      this.isVisible = !this.isVisible;
    }
  },
})
// basic changes
app.mount("#app")

