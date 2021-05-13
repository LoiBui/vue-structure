<template>
  <div class="home page">
    <p>{{ $t("language") }}</p>
    <input type="text" @debounce-change="debounceTest">
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
export default {
  name: 'IndexPage',
  directives: {
    debounce
  },
  methods: {
    debounceTest () {
      console.log('zoooo')
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
