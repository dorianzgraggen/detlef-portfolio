
<template>
    <Layout>
        <h1>{{ $page.post.title }}</h1>
        <div v-html="$page.post.content"></div>
    </Layout>    
</template>

<page-query>
query projectPost ($path: String!) {
  post: projectPost (path: $path) {
    title
    content
    featuredImage
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

<style>
h1, h2, h3, h4 {
    text-align: center;
}

</style>

