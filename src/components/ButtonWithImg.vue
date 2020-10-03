<template>
  <button>
    <img :src="require(`@/assets/${imgSrc}`)" />
    {{ text }}
  </button>
</template>

<script>
export default {
  props: ["imgSrc", "text"],
  mounted() {
    console.log(this.imgSrc);
  },
};
</script>

<style lang="scss" scoped>
button {
  display: flex;
}
</style>
