<template>
  <label>
    <suggestions
      v-model="query"
      :options="options"
      :onInputChange="onItemInputChange"
    />
    <img src="@/assets/inputSearch.svg" alt="search icon" />
  </label>
</template>

<script>
export default {
  data() {
    let items = [
      "A product",
      "Another product",
      "B product",
      "Not product",
      "Продукт А",
      "Продукт Б",
      "Не продукт",
      "Еще один не продукт",
      "А Дополнение",
      "Б Дополнение",
      "Вв",
      "Bb",
    ];
    return {
      query: "",
      items: items,
      selectedItem: null,
      options: {
        placeholder: "Хочу найти...",
        inputClass: "autocomleted-input",
      },
    };
  },
  methods: {
    onItemInputChange(query) {
      if (query.trim().length === 0) {
        return null;
      }
      // return the matching items as an array
      return this.items.filter((item) => {
        return item.toLowerCase().includes(query.toLowerCase());
      });
    },
    onItemSelected(item) {
      this.selectedItem = item;
    },
    onSearchItemSelected(item) {
      this.selectedSearchItem = item;
    },
  },
};
</script>

<style lang="scss">
label {
  width: 520px;
  height: 40px;
  padding: 8px 14px;
  display: flex;
  align-items: center;
  border: 1px solid #eceff1;
  .v-suggestions {
    width: 100%;
    .autocomleted-input {
      width: 100%;
      font-size: 14px;
      border: none;
    }
    .autocomleted-input:focus {
      outline: none;
    }
  }
  img {
    cursor: pointer;
  }
}
</style>
