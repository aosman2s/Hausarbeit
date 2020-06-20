<template>
  <div>
    <button
      v-for="tab in tabs"
      v-bind:key="tab"
      v-bind:class="['tab-button', { active: currentTab === tab }]"
      v-on:click="currentTab = tab"
    >
      {{ tab }}
    </button>

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
      tabs:["HTML","CSS","JavaScript"]
    };
  },
  computed: {
    currentTabComponent : function(){
      return "tab_"+this.currentTab.toLowerCase();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
