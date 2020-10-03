const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: ""
    };
  },
  methods: {
    add(n) {
      this.counter += n;
    },

    reduce(n) {
      this.counter -= n;
    },

    // By default browser gives the object from the event listener
    // as parameter. Catch it with "event" in this case 
    // to retrieve the input text. Check html ($event).
    // $event is only needed when calling the method from html, eg. with params
    // otherwise event doesnt need to be specified in html
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },

    submitForm() {
      // Prevent page reloading on submission which is the usual
      // form submit behaviour
      //event.preventDefault(); - better way in Vue, check html form
      // added .prevent modifier to v-on:submit
      alert("Subbed");
    },

    confirmInput() {
      this.confirmedName = this.name
    }
  }
});

app.mount('#events');
