<template>
  <div>
    <div class="side-1">
      <button
        @click="changeContent('selector')"
        :class="['side-1-btn', { active: currentTab === 'selector' }]"
      >
        Selector
      </button>
      <button
        @click="changeContent('colors')"
        :class="['side-1-btn', { active: currentTab === 'colors' }]"
      >
        Colors
      </button>
      <button
        @click="changeContent('boxes')"
        :class="['side-1-btn', { active: currentTab === 'boxes' }]"
      >
        Boxes
      </button>
    </div>

    <div class="content">
      <h1>{{ title }}</h1>
      <img alt="Vue logo" :src="imgSrc" />
      <div>{{ content }}</div>
    </div>

    <div class="side-2">

    </div>
  </div>
</template>
<script>
export default {
  name: "tab_css",
  data() {
    return {
      title: "",
      content: "",
      imgSrc: "api/posts/css/img"
    };
  },
  async created() {
    const res = await fetch("api/posts/css");

    const data = await res.json();
    this.title = data.title;
    this.content = data.content;
  },
  methods: {
    async changeContent(api) {
      const res = await fetch(`api/posts/css/${api}`);
      const data = await res.json();
      this.title = data.title;
      this.content = data.content;
    },
  },
};
</script>
