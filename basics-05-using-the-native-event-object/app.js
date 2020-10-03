const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      // fullname: ""
    };
  },
  // Watcher
  watch: {
    // same name as the above variable (name)
    // will always execute its corresponding function with its logic

    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000)

      }
    }


    // name(value) {
    //   if (value === "") {
    //     this.fullname = ""
    //   } else {
    //     this.fullname = value + " " + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === "") {
    //     this.fullname = ""
    //   } else {
    //     this.fullname = this.name + " " + value;
    //   }
    // }
  },
  // Will be used like variables but they still are functions.
  computed: {
    fullname() {
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    }
  },
  methods: {
    outputFullname() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Kalus";
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
      this.lastName = "";
    }
  }
});

app.mount('#events');
