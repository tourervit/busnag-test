<template>
  <label :for="name" class="base-label">
    {{ name }}
    <input :id="name" :type="type" :name="name" @input="input" />
  </label>
</template>

<script>
export default {
  emits: ["change"],
  props: {
    type: {
      type: String,
      default: "text",
    },
    name: {
      type: String,
    },
  },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    input($event) {
      this.$emit("change", {
        name: this.name,
        value: $event.target.value,
      });
    },
  },
};
</script>

<style scoped>
.base-label {
  display: flex;
  flex-direction: column;
}
</style>
