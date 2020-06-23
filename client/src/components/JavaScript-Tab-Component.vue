<template>
  <div>
    <div class="side-1">
      <button
        @click="changeContent('functions')"
        :class="['side-1-btn', { active: currentTab === 'functions' }]"
      >
        Functions
      </button>
      <button
        @click="changeContent('objects')"
        :class="['side-1-btn', { active: currentTab === 'objects' }]"
      >
        Objects
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
  name: "tab_javascript",
  data() {
    return {
      title: "",
      content: "",
      imgSrc: "http://localhost:5000/api/posts/javascript/img",
      currentTab:""
    };
  },
  async created() {
    const res = await fetch("http://localhost:5000/api/posts/javaScript");

    const data = await res.json();
    this.title = data.title;
    this.content = data.content;
  },
  methods: {
    async changeContent(api) {
      const res = await fetch(
        `http://localhost:5000/api/posts/javaScript/${api}`
      );
      const data = await res.json();
      this.currentTab=api
      this.title = data.title;
      this.content = data.content;
    },
  },
};
</script>
