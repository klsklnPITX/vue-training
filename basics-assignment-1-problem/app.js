const app = Vue.createApp({
  data() {
    return {
      myName: "Kilian",
      myAge: 27,
      imageUrl: "https://imge.com/wp-content/uploads/2019/02/imge-new.png"
    };
  },
  methods: {
    favNumber() {
      return Math.random();
    }
  }
});

app.mount("#assignment");