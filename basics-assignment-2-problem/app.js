const app = Vue.createApp({
  data() {
    return {
      firstInp: "",
      secInp: "",
      confirmedInp: ""
    };
  },
  methods: {
    showAlert() {
      alert("Alert here");
    },

    setText(event) {
      this.firstInp = event.target.value;
    },

    setTextSec(event) {
      this.secInp = event.target.value;
    },

    setConfirmedText() {
      this.confirmedInp = this.secInp;
    }
  }
});

app.mount("#assignment");