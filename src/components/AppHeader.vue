<template>
  <div>
    Header
    <button v-show="isLoggedIn">Logout</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: true,
    };
  },
};
</script>

<style></style>
