const app = Vue.createApp({
  data() {
    return {
      userClass: "",
      paraToggler: true,
      bgColor: "",
    };
  },
  computed: {
    classes() {
      return {
        visible: this.paraToggler,
        hidden: !this.paraToggler,
        user1: this.userClass === "user1",
        user2: this.userClass === "user2"
      };
    }
  },
  methods: {
    showHideParagraph() {
      this.paraToggler = !this.paraToggler;
    },
  }
});

app.mount("#assignment");