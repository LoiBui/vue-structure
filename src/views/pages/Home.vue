<template>
  <div class="home page">
    Home Page
    <input type="text" @debounce-change="debounceTest">
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
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
