<template>
  <form class="form">
    <BaseInput name="username" :value="form.username" @change="change" />
    <BaseInput
      type="password"
      name="password"
      :value="form.password"
      @change="change"
    />
  </form>
</template>

<script>
import BaseInput from "@/components/BaseInput.vue";

export default {
  components: {
    BaseInput,
  },

  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      errors: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    change({ value, name }) {
      console.log(this.form[name]);
      this.form[name] = value;
    },
  },
};
</script>

<style scoped>
.form {
  width: 400px;
  margin: 0 auto;
}
</style>
