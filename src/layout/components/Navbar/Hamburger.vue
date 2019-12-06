<template>
  <div @click="toggleClick">
    <i :class="[{'is-active':isActive}, 'el-icon-s-unfold', 'hamburger']"></i>
  </div>
</template>

<script>
export default {
  name: 'Hamburger',
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggleClick () {
      this.$emit('toggleClick')
    }
  }
}
</script>

<style scoped>
.hamburger {
  display: inline-block;
  vertical-align: middle;
  font-size: 25px;
}

.hamburger.is-active {
  transform: rotate(180deg);
}
</style>
