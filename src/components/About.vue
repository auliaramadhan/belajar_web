<template>
   <div class="about">
      <h1>This is about Page {{ their_name}}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur impedit dicta et sequi eius sunt, sit fugiat vitae, quas atque dolores molestias assumenda officiis porro quibusdam neque autem alias. Maiores!</p>

   </div>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      their_name: this.$route.params.name
    };
  }
};
</script>
