
<template>
    <Layout>
        <div v-html="$page.post.content"></div>
    </Layout>    
</template>

<page-query>
query projectPost ($path: String!) {
  post: projectPost (path: $path) {
    title
    content
  }
}

</page-query>

<script>
export default {
    metaInfo() {
        return {
            title: this.$page.post.title 
        }
    }
}
</script>

<stlyle>
color: red

</style>

