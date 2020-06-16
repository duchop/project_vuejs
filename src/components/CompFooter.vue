<template>
  <div class="footer">
    <footer>
      <span>{{ text }}</span>
    </footer>
  </div>
</template>

<script>
export default {
  name: "comp-footer",
  data() {
    return {
      text: "Copywrite© CRESCO,LTD All Rights Reserved."
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  border: 2px solid black;

}
footer > span {
  font-size: 18px;
  float: right;
}
</style>
