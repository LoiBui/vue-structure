<template>
  <div class="home page">
    <p>{{ $t("language") }}</p>
    <input type="text"
      v-debounce="500"
      @throttle-change="throttleChange"
      v-throttle="500"
      @debounce-change="debounceTest"
      placeholder="test">
    <form @submit.prevent="validateBeforeSubmit">
      <input v-validate="'required|email'" name="email" type="text">
      <i v-show="errors.has('email')" class="fa fa-warning"></i>
      <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
import debounce from '@/directives/debounce'
import throttle from '@/directives/throttle'

export default {
  name: 'IndexPage',
  directives: {
    debounce,
    throttle
  },
  methods: {
    debounceTest () {
      console.log('zoooo')
    },
    throttleChange () {
      console.log('zooo throttle')
    },
    validateBeforeSubmit () {
      this.$validator.validateAll().then((result) => {
        console.log(result)
      })
      this.$i18n.locale = 'en'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
