const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      taskToAdd: "",
      showList: true,
    };
  },
  computed: {
    buttonText() {
      // if (this.showList) {
      //   return "Hide List";
      // } else {
      //   return "Show List";
      // }
      return this.showList ? "Hide List" : "Show List";
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.taskToAdd);
      this.taskToAdd = "";
    },
    toggleList() {
      this.showList = !this.showList;
    },
    removeTask(idx) {
      this.tasks.splice(idx, 1);
    }
  },

});

app.mount("#assignment")