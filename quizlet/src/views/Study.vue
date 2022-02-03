<template>
  <div id="study">
    <Header />
    <div class="right">
      <navigation-bar />
      <study-content />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import NavigationBar from "../components/NavigationBar.vue";
import StudyContent from "../components/StudyContent.vue";
export default {
  components: {
    Header,
    NavigationBar,
    StudyContent,
  },
};
</script>

<style lang="scss" scoped>
#study {
  .right {
    display: flex;
    width: 100%;
  }
}
</style>