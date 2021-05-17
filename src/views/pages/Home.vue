<template>
  <div class="home page">
    <p>{{ $t("language") }}</p>
    {{dataTest}}
    <br>
    <input type="text"
      v-debounce="500"
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
import {mapGetters, mapState} from 'vuex'

export default {
  name: 'IndexPage',
  directives: {
    debounce
  },
  computed: {
    // ...mapState('moduleName', {
    //   loiFromState: state => state.dataTest
    // }),
    // ...mapGetters(['moduleName/dataTest']),
    // ...mapGetters('moduleName', ['dataTest']),
  },
  methods: {
    debounceTest () {
      // console.log(this['moduleName/dataTest'])
      // console.log(this.dataTest)
      // console.log(this.loiFromState)
    },
    validateBeforeSubmit () {
      // this.$validator.validateAll().then((result) => {
      //   console.log(result)
      // })
      // this.$i18n.locale = 'en'
      console.log(this.$FORMAT_DATETIME)
    },
    onTest(){
      console.log("on test")
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
