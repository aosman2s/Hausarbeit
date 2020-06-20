<template>
  <div>
      <h1>{{title}}</h1>
      <div>{{content}}</div>
  </div>
</template>
<script>
//import PostServices from '../PostServices.js'
export default {
    name: "tab_html",
    data() {
    return {
            title:"",
            content:""
        ,
        error :""
    };
  },
  async created() {

     const res = await fetch("http://localhost:5000/api/posts/html")

     const data = await res.json()
     this.title = data.title
     this.content=data.content
     console.log(data.title)
     console.log(this.data.post)
  },
}
</script>
