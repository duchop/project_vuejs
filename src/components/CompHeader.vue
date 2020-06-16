<template>
  <div class="header">
    <header>
      <span>{{ text }}</span>
    </header>
  </div>
</template>

<script>
export default {
  name: "comp-header",
  data() {
    return {
      text: "クレスコロゴ）サンプルWebApp メニュー画面"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  border: 2px solid black;

}
header > span {
  font-size: 18px;
  float: left;
}
</style>
