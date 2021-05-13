export default {
  methods: {
    $jumpTo (selector) {
      const el = document.querySelectorAll(selector)[0]
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      } else {
        throw new Error('Element not supplied.')
      }
    }
  }
}
