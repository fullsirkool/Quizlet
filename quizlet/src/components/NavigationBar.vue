<template>
  <div id="navigation-bar">
    <div class="quiz-name">HCI201 Final</div>
    <div class="title">Study</div>
    <div class="sidebar-menu">
      <div class="sidebar-menu-item">
        <svg
          class="w-6 h-6 icon"
          fill="#686583"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M11.99 18.54l-7.37-5.73L3 14.07l9 7l9-7l-1.63-1.27zM12 16l7.36-5.73L21 9l-9-7l-9 7l1.63 1.27L12 16zm0-11.47L17.74 9L12 13.47L6.26 9L12 4.53z"
          />
        </svg>
        <span>My profile</span>
      </div>
      <div class="sidebar-menu-item">
        <svg
          class="w-6 h-6 icon"
          fill="#686583"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm7.93 9H13V4.07c3.61.45 6.48 3.32 6.93 6.93zM4 12c0-4.07 3.06-7.44 7-7.93v15.86c-3.94-.49-7-3.86-7-7.93zm9 7.93V13h6.93A8.002 8.002 0 0 1 13 19.93z"
          />
        </svg>
        <span>Notifications</span>
      </div>
      <div class="sidebar-menu-item">
        <svg
          class="w-6 h-6 icon"
          fill="#686583"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06l.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41z"
          />
        </svg>
        <span>Security</span>
      </div>
      <div class="sidebar-menu-item">
        <svg
          class="w-6 h-6 icon"
          fill="#686583"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M16 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02A4.5 4.5 0 0 0 16 7.97zM5 9v6h4l5 5V4L9 9H5zm7-.17v6.34L9.83 13H7v-2h2.83L12 8.83z"
          />
        </svg>
        <span>Billing & payment</span>
      </div>
      <div class="sidebar-menu-item">
        <svg
          class="w-6 h-6 icon"
          fill="#686583"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"
          />
        </svg>
        <span>Connected Apps</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#navigation-bar {
  margin-top: 113px;
  font-family: Promt;
  margin-left: 223px;
  .quiz-name {
    width: 190px;
    height: 48px;
    font-family: "Prompt";
    font-size: 32px;
    line-height: 48px;
    color: #403f3aff;
    font-weight: bold;
  }
  .title {
    text-transform: uppercase;
    margin-top: 80px;
    width: 95px;
    height: 24px;
    font-size: 18px;
    line-height: 28px;
    color: #c3c2beff;
  }
  .sidebar-menu {
    // position: absolute;
    // top: 292px;
    // left: 206px;
    margin-top: 25px;
    width: 225px;
    height: 280px;
    display: flex;
    flex-direction: column;
    font-family: Prompt;
    font-size: 18px;
    line-height: 28px;
    opacity: 1;
  }
  /* Sidebar menu 31 - Item */
  .sidebar-menu .sidebar-menu-item {
    padding: 12px 0 12px 0;
    display: flex;
    align-items: center;
    justify-content: left;
    color: #515049ff;
    background: transparent;
    border-radius: 6px;
    gap: 8px;
    cursor: pointer;
    white-space: nowrap;
  }
  /* Sidebar menu 31 - Item indent */
  .sidebar-menu .sidebar-menu-item.indent {
    padding-left: 35px;
  }
  /* Sidebar menu 31 - Hovered item */
  .sidebar-menu .sidebar-menu-item:hover {
    color: #979690ff;
    background: #e2e2dfff;
  }
  /* Sidebar menu 31 - Pressed item */
  .sidebar-menu .sidebar-menu-item:hover:active {
    color: #979690ff;
    background: #c3c2beff;
  }
  /* Sidebar menu 31 - Selected item */
  .sidebar-menu .sidebar-menu-item.selected {
    position: relative;
    font-weight: bold;
    color: #4255ffff;
    background: #d6daffff;
  }
  /* Sidebar menu 31 - Selected item */
  .sidebar-menu .sidebar-menu-item.selected:hover:active {
    color: #4255ffff;
    background: #d6daffff;
  }
  /* Sidebar menu 31 - Icon */
  .sidebar-menu svg.icon {
    width: 32px;
    height: 32px;
    fill: currentColor;
  }
  /* Sidebar menu 31 - Arrow icon */
  .sidebar-menu svg.arrow-icon {
    width: 16px;
    height: 16px;
    fill: currentColor;
  }
  /* Sidebar menu 31 - Arrow icon right */
  .sidebar-menu svg.arrow-icon.right {
    position: absolute;
    right: 16px;
  }
}
</style>