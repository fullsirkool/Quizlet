<template>
  <div id="study-content">
    <div class="text-box">
      <div class="text">
        Which of the following(s) is/are the nicknames of version(s) of android?
        1)cupcake 2) muffin 3)honeycomb 4)gingerbread
        <br />a. 1,2,3 <br />b. 2,3,4 <br />c. 1,3,4 <br />d. 1,2,4
      </div>
    </div>
    <div class="paging">
      <svg
        class="w-6 h-6 button"
        fill="#686583"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20v-2z"
        />
      </svg>
      <span>1/488</span>
      <svg
        class="button w-6 h-6"
        fill="#686583"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8l-8-8z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#study-content {
  font-family: Prompt;
  margin-top: 235px;
  margin-left: 120px;
  .text-box {
    .text {
      width: 984px;
      font-size: 32px;
      line-height: 48px;
      color: #22211eff;
      text-align: center;
      background: #ffffffff;
      border-radius: 8px;
      box-shadow: 0px 7px 21px #c3c2beff, 0px 0px 2px #c3c2beff;
      padding: 70px 70px 190px 70px;
      
    }
  }
  .paging {
    margin: 50px 0 0 500px;
    span {
      font-size: 18px;
      line-height: 28px;
      color: #22211eff;
    }
    .button {
      cursor: pointer;
      padding: 0 20px;
      opacity: 1;
      vertical-align: middle;
    }
    /* Hover */
    .button:hover {
      fill: #33322eff;
      background: #00000000;
    }
    /* Pressed */
    .button:hover:active {
      fill: #403f3aff;
      background: #00000000;
    }
    /* Disabled */
    .button:disabled {
      opacity: 0.4;
    }
    .page {
      vertical-align: middle;
    }
  }
}
</style>