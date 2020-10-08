<!-- UserData should output two input fields => for name and age -->
<template>
  <section>
    <form @submit.prevent="addUser">
      <label>Name</label>
      <input type="text" v-model="userName" />
      <label>Age</label>
      <input type="text" v-model="age" />
      <button type="submit">Add</button>
    </form>
  </section>
</template>

<script>
export default {
  emits: ["add-user"],
  data() {
    return {
      userName: "",
      age: "",
    };
  },
  methods: {
    addUser() {
      this.$emit("add-user", this.userName, this.age);
    },
  },
};
</script>