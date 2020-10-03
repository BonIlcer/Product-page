<template>
  <button>
    <img :src="require(`@/assets/${imgSrc}`)" />
    {{ text }}
  </button>
</template>

<script>
export default {
  props: ["imgSrc", "text"],
};
</script>

<style lang="scss" scoped>
img {
  margin-right: 10px;
}
button {
  font-weight: 600;
  font-size: 14px;
  color: #050f19;
  height: 40px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
}
</style>
