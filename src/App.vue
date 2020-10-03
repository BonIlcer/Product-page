<template>
  <div id="app">
    <Navbar />
    <Header />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";

export default {
  name: "App",
  components: {
    Navbar,
    Header,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Open Sans", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
