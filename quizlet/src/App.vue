<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </div>
  <router-view />
</template>

<style lang="scss">
@font-face {
  font-family: "Prompt";
  src: local("Prompt"), url(./fonts/Prompt/Prompt-Regular.ttf);
}
@font-face {
  font-family: "Josefin_Sans";
  src: local("Josefin_Sans"),
    url(./fonts/Josefin_Sans/static/JosefinSans-Regular.ttf);
}
#app {
  font-family: "Prompt";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  margin: 0px;
  padding: 0px;
}

#nav {
  // padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
