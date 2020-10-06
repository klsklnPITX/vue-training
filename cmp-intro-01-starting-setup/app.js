const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "kilian",
          name: "Kilian Kalus",
          phone: "0546134165",
          email: "kilian.kalus@gmail.com"
        },
        {
          id: "hans",
          name: "Hans Peter",
          phone: "0546134165",
          email: "hans.peter@gmail.com"
        }
      ]
    };
  }
});

// Create a component. Basically a custom html element.
// Vue Component is an app that belongs to another app. ("mini-app" of main app)
// Takes a custom html identifier. Always use one with dash/mutliple words. 
// Avoids conflict with official html elements.
// 2nd: Takes config object like in create app. 
app.component("friend-contact", {
  template:
    `
    <li>
      <h2> {{ friend.name }}</h2>
      <button @click="toggleDetails">
        {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
      </button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
      </ul>
    </li>
    `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "hans",
        name: "Hans Peter",
        phone: "0546134165",
        email: "hans.peter@gmail.com"
      }
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  }
});

app.mount("#app")