<template>
  <div class="page-header">
    <!-- company logo -->
    <div class="logo">
      <img src="@/assets/logo.svg" alt="company logo" />
    </div>
    <!-- catalog -->
    <ButtonWithImg
      v-bind:imgSrc="'buttonBurger.svg'"
      v-bind:text="'Каталог'"
      v-bind:class="'catalog'"
    />
    <!-- input-search -->
    <AutocompletedInput />

    <!-- list -->
    <ButtonWithImg
      v-bind:imgSrc="'buttonList.svg'"
      v-bind:text="'Список'"
      v-bind:class="'list'"
    />
    <!-- user-avatar -->
    <div class="avatar">A</div>
  </div>
</template>

<script>
import ButtonWithImg from "@/components/ButtonWithImg";
import AutocompletedInput from "@/components/AutocompletedInput";

export default {
  name: "page-header",
  components: {
    ButtonWithImg,
    AutocompletedInput,
  },
};
</script>

<style lang="scss">
.page-header {
  font-size: 14px;
  border-top: 1px solid #eceff1;
  border-bottom: 1px solid #eceff1;
  height: 76px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  .catalog {
    background-color: #fed83d;
    border: none;
  }
  .list {
    background-color: #fafbfc;
    border: 1px solid #eceff1;
  }
  .avatar {
    border-radius: 50%;
    background-color: #9b51e0;
    // background-image: none;
    width: 40px;
    height: 40px;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
