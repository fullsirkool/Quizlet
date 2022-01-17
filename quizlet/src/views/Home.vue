<template>
  <div class="home">
    <Header/> 
    <home-content/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import HomeContent from '@/components/HomeContent.vue'

export default {
  name: 'Home',
  components: {
    Header,
    HomeContent
  }
}
</script>
