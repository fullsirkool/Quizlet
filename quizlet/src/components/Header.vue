<template>
  <div id="header">
    <div class="left">
      <div class="logo"></div>
      <div class="header-menu">
        <div class="header-menu-item selected">
          <div class="indicator"></div>
          Home
        </div>
        <div class="header-menu-item">
          <div class="indicator"></div>
          Explanations
        </div>
        <div class="header-menu-item">
          <div class="indicator"></div>
          Your Library
          <svg class="arrow-icon"></svg>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="textbox">
        <svg
          class="w-6 h-6 left"
          fill="#686583"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
        >
          <path
            d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"
          />
        </svg>
        <input placeholder="Search..." type="text" />
      </div>
      <div class="icon-noti"></div>
      <div class="icon-setting"></div>
      <div class="avatar">
        <img src="~@/assets/avatar.jpg" />
        <div class="badge"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$text-box-width: 600px;
$text-box-height: 36px;
#header {
  height: 52px;
  width: 100%;
  background: #ffffffff;
  border-radius: 0px;
  box-shadow: 0px 0px 7px #c3c2beff, 0px 0px 2px #c3c2beff;
  display: flex;
  justify-content: space-between;

  .right {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 30px;
    div {
      margin-left: 15px;
    }
    /* Textbox 2 */
    .textbox {
      position: relative;
      opacity: 1;
    }
    .textbox input {
      width: $text-box-width;
      height: $text-box-height;
      padding-left: 34px;
      padding-right: 12px;
      font-family: Prompt;
      font-size: 14px;
      background: #f9f9f8ff;
      border-radius: 6px;
      border-width: 0px;
      outline: none;
    }
    .textbox svg.left {
      // background-image: url("~@/assets/left-icon.svg");
      width: 16px;
      height: 16px;
      fill: #22211e;
      position: absolute;
      transform: translate(70%, 70%);
    }

    /* hover */
    .textbox input:hover {
      color: #c3c2beff;
      background: #f9f9f8ff;
    }
    /* focused */
    .textbox input:focused {
      color: #c3c2beff;
      background: #ffffffff;
    }
    /* disabled */
    .textbox input:disabled {
      color: #c3c2beff;
      background: #f9f9f8ff;
    }
    .textbox :disabled + .icon,
    .textbox :disabled + .icon + .icon {
      fill: #22211eff;
    }
    /* Notifications 9 */
    .icon-noti {
      background-image: url(~@/assets/notifications.svg);
      // position: absolute;
      // top: 14px;
      // left: 1780px;
      width: 24px;
      height: 24px;
      fill: #403f3a;
      opacity: 1;
      cursor: pointer;
    }
    .icon-setting {
      background-image: url(~@/assets/settings.svg);
      // position: absolute;
      // top: 14px;
      // left: 1820px;
      width: 24px;
      height: 24px;
      fill: #403f3a;
      opacity: 1;
      cursor: pointer;
    }
    .avatar {
      // position: absolute;
      // top: 8px;
      // left: 1860px;
      width: 36px;
      height: 36px;
      background: #ffffffff;
      opacity: 1;
      overflow: hidden;
      border-radius: 18px;
      cursor: pointer;
    }
    .avatar img {
      // background-image: url(~@/assets/avatar.jpg);
      // background-repeat: no-repeat;
      background-position: center;
      width: 36px;
      height: 36px;
    }
    .avatar .badge {
      width: 8px;
      height: 8px;
      border-radius: 4px;
    }
    .avatar.active .badge {
      background: #000000;
      opacity: 0;
      border-width: 1.5px;
      border-color: #ffffff;
    }
    .avatar.inactive .badge {
      background: #000000;
      opacity: 0;
      border-width: 1.5px;
      border-color: #ffffff;
    }
    .avatar.idle .badge {
      background: #000000;
      opacity: 0;
      border-width: 1.5px;
      border-color: #ffffff;
    }
    .avatar.do_not_disturb .badge {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 8px;
      line-height: 8px;
      color: #ffffff;
      background: #000000;
      opacity: 0;
      border-width: 1.5px;
      border-color: #ffffff;
    }
  }
  .left {
    display: flex;
    .logo {
      background-image: url("~@/assets/logo.png");
      background-repeat: no-repeat;
      margin-top: 4px;
      margin-left: 15px;
      width: 100px;
      height: 44px;
      border-radius: 6px;
      background-size: cover;
      background-position: 0 -30px;
      cursor: pointer;
    }
    .header-menu {
      margin-left: 20px;
      width: 309px;
      height: 52px;
      display: flex;
      align-items: center;
      font-family: Prompt;
      font-size: 14px;
      line-height: 22px;
      opacity: 1;
    }
    .header-menu svg.arrow-icon {
      background-image: url("~@/assets/arrow-icon-3.svg");
      background-repeat: no-repeat;
      width: 12px;
      height: 12px;
      margin-left: 16px;
      fill: currentColor;
    }
    .header-menu .header-menu-item {
      padding: 15px 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #515049ff;
      background: transparent;
      border-radius: 0px;
      cursor: pointer;
      white-space: nowrap;
    }
    .header-menu .header-menu-item:hover {
      color: #979690ff;
      background: #e2e2dfff;
    }
    .header-menu .header-menu-item:hover:active {
      color: #979690ff;
      background: #c3c2beff;
    }
    .header-menu .header-menu-item.selected {
      position: relative;
      font-weight: bold;
      color: #4255ffff;
      background: transparent;
    }
    .header-menu .header-menu-item.selected:hover:active {
      color: #4255ffff;
      background: transparent;
    }
    .header-menu .header-menu-item.selected .indicator {
      position: absolute;
      bottom: 0px;
      width: 100%;
      height: 4px;
      background: #818effff;
      border-radius: 0px;
    }
  }
}
</style>