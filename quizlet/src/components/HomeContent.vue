<template>
  <div id="home-content">
    <strong class="title">Board name</strong>
    <div class="main-content">
      <div class="category">
        <div>
          <span class="cate-name">Recent </span><span class="tag">5</span>
        </div>
        <ul class="cate-list">
          <quiz v-for="(quiz, index) in quizs" :key="index" :quiz="quiz"></quiz>
        </ul>
        <!-- <ul class="cate-list">
          <li class="item-1">
            <div class="name">HCI201</div>
            <div class="terms">448 terms</div>
            <div class="user">
              <span class="avatar"
                ><img src="@/assets/avatar.jpg" alt="" /></span
              ><span class="user-name">User ABC</span>
            </div>
          </li>
          <li class="item-2">2</li>
          <li class="item-3">3</li>
          <li class="item-4">4</li>
          <li class="item-5">5</li>
        </ul> -->
      </div>
      <div class="category">
        <div>
          <span class="cate-name">Recent </span><span class="tag">5</span>
        </div>
        <!-- <ul class="cate-list">
          <li class="item-1">
            <div class="name">HCI201</div>
            <div class="terms">448 terms</div>
            <div class="user">User ABC</div>
          </li>
          <li class="item-2">2</li>
          <li class="item-3">3</li>
          <li class="item-4">4</li>
        </ul> -->
        <ul class="cate-list">
          <quiz v-for="(quiz, index) in quizs" :key="index" :quiz="quiz"></quiz>
        </ul>
      </div>
      <div class="category">
        <div>
          <span class="cate-name">Recent </span><span class="tag">5</span>
        </div>
        <!-- <ul class="cate-list">
          <li class="item-1">
            <div class="name">HCI201</div>
            <div class="terms">448 terms</div>
            <div class="user">User ABC</div>
          </li>
          <li class="item-2">2</li>
          <li class="item-3">3</li>
          <li class="item-4">4</li>
          <li class="item-5">5</li>
        </ul> -->
        <ul class="cate-list">
          <quiz v-for="(quiz, index) in quizs" :key="index" :quiz="quiz"></quiz>
        </ul>
      </div>
      <div class="category">
        <div>
          <span class="cate-name">Recent </span><span class="tag">5</span>
        </div>
        <!-- <ul class="cate-list">
          <li class="item-1">
            <div class="name">HCI201</div>
            <div class="terms">448 terms</div>
            <div class="user">User ABC</div>
          </li>
          <li class="item-2">2</li>
          <li class="item-3">3</li>
          <li class="item-4">4</li>
        </ul> -->
        <ul class="cate-list">
          <quiz v-for="(quiz, index) in quizs" :key="index" :quiz="quiz"></quiz>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Quiz from "./Quiz.vue";
export default {
  components: {
    Quiz,
  },
  computed: {
    ...mapGetters(["quizs"]),
  },
};
</script>

<style lang="scss" scoped>
#home-content {
  font-family: Prompt;
  .title {
    position: absolute;
    top: 99px;
    left: 88px;
    font-family: Josefin Sans;
    font-size: 32px;
    line-height: 48px;
    color: #22211eff;
    font-weight: bold;
  }
  .main-content {
    margin-top: 202px;
    margin-left: 88px;
    .category {
      display: inline-block;
      vertical-align: top;
      .cate-name {
        // font-weight: bold;
        font-size: 16px;
        line-height: 26px;
        color: #403f3aff;
      }
      .tag {
        font-size: 12px;
        line-height: 20px;
        border-radius: 11.5px;
        opacity: 1;
        color: #65645d;
        background: #f4f4f3;
        padding: 2px 6px 2px 6px;
      }
      .cate-list {
        background: #f9f9f8ff;
        border-radius: 6px;
        list-style-type: none;
        padding: 12px 0 1px 0;
        margin-right: 12px;
      }
    }
  }
}
</style>