<template>
  <div class="main-container">
    <div class="main-nav">
      <button
        v-for="tab in tabs"
        v-bind:key="tab"
        v-bind:class="['tab-button', { active: currentTab === tab }]"
        v-on:click="changeImg(tab)"
      >
        {{ tab }}
      </button>
    </div>

    <div class="main-body" style="width:100%;">
      <router-view
        v-bind:is="currentTabComponent"
        class="tab-container"
      ></router-view>
    </div>
  </div>
</template>

<script>
import tab_html from "./Html-Tab-Component.vue";
import tab_css from "./Css-Tab-Component.vue";
import tab_javascript from "./JavaScript-Tab-Component.vue";
import "./Body.css";

export default {
  name: "MainComponent",
  components: {
    tab_html,
    tab_css,
    tab_javascript,
  },
  data() {
    return {
      currentTab: "html",
      tabs: ["html", "css", "javascript"],
    };
  },
  computed: {
    currentTabComponent: function() {
      return "tab_" + this.currentTab.toLowerCase();
    },
  },
  watch: {
    $route(to) {
      this.currentTab = to.name;
      console.log(this.currentTab)
    },
  },
  methods: {
    changeImg(tab) {
      this.currentTab = tab;
      this.$router.push({ path: tab.toLowerCase() });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
