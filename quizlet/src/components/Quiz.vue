<template>
  <div id="quiz">
    
      <li class="item-1">
        <div class="name">{{ quiz.name }}</div>
        <div class="terms">{{ quiz.terms }}</div>
        <div class="user">
          <span class="avatar"><img src="@/assets/avatar.jpg" alt="" /></span
          ><span class="user-name">{{ quiz.user }}</span>
        </div>
      </li>
    
  </div>
</template>

<script>
export default {
  props: {
    quiz: Object,
  },
};
</script>

<style lang="scss" scoped>
#quiz {



        li {
          width: 400px;
          height: 110px;
          margin: 0px 12px 12px 12px;
          background: #ffffffff;
          border-radius: 6px;
          border-width: 1px;
          border-color: #f4f4f3ff;
          border-style: solid;
          div {
            margin-left: 32px;
          }
          .name {
            margin-top: 16px;
            font-weight: bold;
            font-size: 16px;
            line-height: 26px;
            color: #22211eff;
          }
          .terms {
            font-size: 12px;
            line-height: 20px;
            color: #979691ff;
            // margin-top: 3px;
          }
          .user {
            margin-top: 12px;
            .avatar {
              img {
                width: 20px;
                height: 20px;
                border-radius: 10px;
                background: #ffffffff;
                opacity: 1;
                overflow: hidden;
                vertical-align: middle;
              }
            }
            .user-name {
              font-size: 11px;
              line-height: 18px;
              color: #979691ff;
              margin-left: 8px;
            }
          }
        }
      
}
</style>