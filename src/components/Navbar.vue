<template>
  <div class="navbar">
    <div class="right">
      <div>
        <img src="@/assets/navLocation.svg" alt="location icon" />
        <p>Волгоградская область</p>
      </div>
    </div>
    <div class="left">
      <div><p>Тендеры</p></div>
      <div><p>База подрядчиков</p></div>
      <div>
        <p>Другие сервисы</p>
        <img src="@/assets/navArrow.svg" alt="arrow icon" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  font-size: 12px;
  min-height: 32px;
  margin: 0px 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  color: #708598;
  .right,
  .left,
  div {
    display: flex;
    margin: auto 0px;
    align-items: center;
  }
  .left {
    div {
      margin-left: 24px;
    }
  }
  img {
    margin: 0px 7px;
  }
  .right div:hover,
  .left div:hover {
    opacity: 0.7;
  }
}
</style>
