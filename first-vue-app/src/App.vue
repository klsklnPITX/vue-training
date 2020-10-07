<template>
  <section>
    <h2>My Friends</h2>
    <ul>
      <friend-contact></friend-contact>
      <friend-contact></friend-contact>
    </ul>
  </section>
</template>

<!-- Configuration for Vue App. Everything can be addded here:
data(), methods:, computed: etc -->
<script>
// default specifies that this is the default export object of the file
// no const app = ... here. no export would be possible then
export default {
  data() {
    return {
      friends: [
        {
          id: "kilian",
          name: "Kilian Kalus",
          phone: "934 840 2324",
          email: "kilian.kalus@gmail.com",
        },
        {
          id: "hans",
          name: "Hans Peter",
          phone: "934 840 2324",
          email: "hans.peter@gmail.com",
        },
      ],
    };
  },
};
</script>