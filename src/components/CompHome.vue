<template>
  <div class="home">
    <comp-header />
    <comp-container />
    <comp-footer />
  </div>
</template>

<script>
import CompHeader from "@/components/CompHeader";
import CompContainer from "@/components/CompContainer";
import CompFooter from "@/components/CompFooter";

export default {
  name: "comp-home",
  data() {
    return {
      msg: "demo"
    };
  },
  components: {
    CompHeader,
    CompContainer,
    CompFooter
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  width: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
