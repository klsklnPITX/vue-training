<template>
  <div>
    <user-data @add-user="addUser"></user-data>
    <active-user
      v-for="user in users"
      :key="user.id"
      :user-name="user.userName"
      :age="user.age"
    ></active-user>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          id: "1",
          userName: "Kilian",
          age: "27",
        },
        {
          id: "2",
          userName: "Hans",
          age: "30",
        },
      ],
    };
  },
  methods: {
    addUser(userName, age) {
      const newUser = {
        id: new Date().toISOString(),
        userName: userName,
        age: age,
      };
      this.users.push(newUser);
    },
  },
};
</script>
<style>
section {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
}
</style>