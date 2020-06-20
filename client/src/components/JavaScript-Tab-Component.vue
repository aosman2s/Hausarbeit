<template>
  <div>
    <div>
      <h1>{{ title }}</h1>
      <div>{{ content }}</div>
    </div>
    <ul>
      <li><button @click="changeContent('functions')">1</button></li>
      <li><button @click="changeContent('objects')">2</button></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "tab_javascript",
  data() {
    return {
      title: "",
      content: "",
    };
  },
  async created() {
    const res = await fetch("http://localhost:5000/api/posts/javaScript");

    const data = await res.json();
    this.title = data.title;
    this.content = data.content;
  },
  methods: {
      async changeContent(api){
        const res = await fetch(`http://localhost:5000/api/posts/javaScript/${api}`);
        const data = await res.json();
         this.title = data.title;
        this.content = data.content;

      }
  },
};
</script>
