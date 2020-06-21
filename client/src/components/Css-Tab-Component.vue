<template>
  <div>
    <div class="side-1">
      <ul>
        <li><button @click="changeContent('selector')">1</button></li>
        <li><button @click="changeContent('colors')">2</button></li>
        <li><button @click="changeContent('boxes')">3</button></li>
      </ul>
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
      imgSrc: "http://localhost:5000/api/posts/css/img"
    };
  },
  async created() {
    const res = await fetch("http://localhost:5000/api/posts/css");

    const data = await res.json();
    this.title = data.title;
    this.content = data.content;
  },
  methods: {
    async changeContent(api) {
      const res = await fetch(`http://localhost:5000/api/posts/css/${api}`);
      const data = await res.json();
      this.title = data.title;
      this.content = data.content;
    },
  },
};
</script>
