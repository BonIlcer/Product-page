<template>
  <div class="page-header">
    <div class="logo">
      <img src="@/assets/logo.svg" alt="company logo" />
    </div>
    <ButtonWithImg
      v-bind:imgSrc="'buttonBurger.svg'"
      v-bind:text="'Каталог'"
      v-bind:class="'catalog'"
    />
    input-search cart-list? user-avatar

    <ButtonWithImg v-bind:imgSrc="'buttonList.svg'" v-bind:text="'Список'" />
  </div>
</template>

<script>
import ButtonWithImg from "@/components/ButtonWithImg";

export default {
  name: "header",
  components: {
    ButtonWithImg,
  },
};
</script>

<style lang="scss">
.page-header {
  border-top: 1px solid #eceff1;
  border-bottom: 1px solid #eceff1;
  height: 76px;
}
.catalog {
  background-color: blueviolet;
}
</style>
