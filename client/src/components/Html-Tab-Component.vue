<template>
  <div>
    <div class="side-1">
      <button
        @click="changeContent('headings')"
        :class="['side-1-btn', { active: currentTab === 'headings' }]"
      >
        Headings
      </button>
      <button
        @click="changeContent('paragraphs')"
        :class="['side-1-btn', { active: currentTab === 'paragraphs' }]"
      >
        Paragraphs
      </button>
      <button
        @click="changeContent('tables')"
        :class="['side-1-btn', { active: currentTab === 'tables' }]"
      >
        Tables
      </button>
    </div>

    <div class="content">
      <h1>{{ title }}</h1>
      <img alt="Vue logo" :src="imgSrc" />
      <div>{{ content }}</div>
    </div>

    <div class="side-2"></div>
  </div>
</template>
<script>
export default {
  name: "tab_html",
  data() {
    return {
      title: "",
      content: "",
      imgSrc: "http://localhost:5000/api/posts/html/img",
      currentTab: "",
    };
  },
  async created() {
    const res = await fetch("http://localhost:5000/api/posts/html");

    const data = await res.json();
    this.title = data.title;
    this.content = data.content;
  },
  methods: {
    async changeContent(api) {
      const res = await fetch(`http://localhost:5000/api/posts/html/${api}`);
      const data = await res.json();
      this.currentTab = api;
      this.title = data.title;
      this.content = data.content;
    },
  },
};
</script>
