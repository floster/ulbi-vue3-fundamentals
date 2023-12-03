export default {
  name: 'observer',
  mounted: (el, binding) => {
    const config = {
      rootMargin: '0px',
      threshold: 1.0
    }
    const callback = (entries) => {
      if (entries[0].isIntersecting) {
        binding.value()
      }
    }

    const observer = new IntersectionObserver(callback, config)
    observer.observe(el)
  }
}
