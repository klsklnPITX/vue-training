// pass an object to create app {} to configure the options of this app
const app = Vue.createApp({
  // predefined: "data" option/configuration key. wants function as value
  // shorthand function writing here instead of "data: function(){}"". 
  // always returns an object
  data() {
    // set up any key value pairs 
    // anything stored in data can be used in 
    // the controled html object (#user-goal)
    return {
      courseGoalA: "Finish the course",
      courseGoalB: "Master Vue",
      vueLink: "https://vuejs.org"
    };
  },
  //methods (reserved term as data) takes an object full of functions
  methods: {
    //short hand notation like with data
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    }
  }
});

// mount to css selector for DOM object to control
app.mount("#user-goal");