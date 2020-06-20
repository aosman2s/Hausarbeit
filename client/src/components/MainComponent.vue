<template>
  <div>
    <button
      v-for="tab in tabs"
      v-bind:key="tab"
      v-bind:class="['tab-button', { active: currentTab === tab }]"
      v-on:click= 'changeImg(tab)'

    >
      {{ tab }}
    </button>
    <img alt="Vue logo" :src='imgSrc'>

    <component v-bind:is="currentTabComponent" class="tab"></component>
  </div>
</template>

<script>
import tab_html from './Html-Tab-Component.vue'
import tab_css from './Css-Tab-Component.vue'
import tab_javascript from './JavaScript-Tab-Component.vue'

export default {
  name: "MainComponent",
  components: {
    tab_html,
    tab_css,
    tab_javascript
  },
  data() {
    return {
      currentTab :"HTML",
      tabs:["HTML","CSS","JavaScript"],
      imgSrc:"http://localhost:5000/api/posts/html/img"
    };
  },
  computed: {
    currentTabComponent : function(){
      
      return "tab_"+this.currentTab.toLowerCase();
    }
  },
  methods: {
    changeImg(tab){
      this.currentTab = tab
      if(this.currentTab.toLowerCase()=='html'){
        this.imgSrc = 'http://localhost:5000/api/posts/html/img'
      }else if(this.currentTab.toLowerCase()=='css'){
        this.imgSrc = 'http://localhost:5000/api/posts/css/img'
      }else{
        this.imgSrc = 'http://localhost:5000/api/posts/javascript/img'
      }
      
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
