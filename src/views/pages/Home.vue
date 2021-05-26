<template>
  <div class="home page">
    <p>{{ $t("language") }}</p>
    <br />
    <input
      type="text"
      v-debounce="500"
      @debounce-change="debounceTest"
      placeholder="test"
    />
    <form @submit.prevent="validateBeforeSubmit" ref="form">
      <input v-validate="'required|email'" name="email" type="text" />
      <i v-show="errors.has('email')" class="fa fa-warning"></i>
        <span v-show="errors.has('email')" class="help is-danger">
          {{errors.first("email")}}
        </span>
      <input type="text" ref="test-ref" class="input" />
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
import debounce from "@/directives/debounce";

export default {
  name: "IndexPage",
  directives: {
    debounce,
  },
  computed: {},
  mounted() {},
  methods: {
    debounceTest() {},
    validateBeforeSubmit() {
      // console.log(this.$refs);
      this.$i18n.locale = 'en';
    },
    onTest() {
      console.log("on test");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
