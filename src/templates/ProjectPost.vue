
<template>
    <Layout>
        <h1 v-if="$page.post.category !== 'cgbookcase'">{{ $page.post.title }} </h1>
        <h1 v-if="$page.post.category === 'cgbookcase'" id="cgb-title">{{ $page.post.title }} </h1>
        <div class="text-center" v-if="$page.post.category === 'cgbookcase'" id="cgb-subtitle">cgbookcase.com</div>
        <!-- <div v-html="$page.post.content"></div> -->
        <VueRemarkContent />
    </Layout>    
</template>

<page-query>
query projectPost ($path: String!) {
  post: projectPost (path: $path) {
    title
    content
    featuredImage
    category
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
h1, h2, h3 {
    text-align: center;
}

a {
    border-bottom-width: 2px;
    border-bottom-style: solid;
    transition-duration: .15s;
}

a:hover {
    background: #ffffff44;
}

p {
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    hyphens: auto;
}

.projectul ul {
    max-width: 700px;
    max-width: max-content;
    margin-left: auto;
    margin-right: auto;
    padding-left: 6px;
}

.projectul ul li {
    list-style-type: circle;
    list-style-position: inside;
}

img {
    margin: 0 auto;
    max-width: 100%;
    display: block;
    max-height: 90vh;
}

#cgb-title {
    /* color: red; */
    margin-bottom: 0px;
    margin-top: 0px;
}

#cgb-subtitle {
    font-size: 20px;
    opacity: .7;
}

.wide {
    width: calc(100% + 160px*2);
    margin-left: calc(160px*-1);
    display: block;
    max-width: none;
    max-height: none !important;
}


.threephones {
    margin-top: 40px;
    margin-bottom: 60px;
}

.threephones>p {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1020px;
}

.threephones > p > img {
    width: 29%;
    margin: 0;
    padding-top: 27px;
    padding-bottom: 36px;
    background: #ffffff0d;
    border-radius: 20px;
    border: 2px solid #bec7d91a;
}

.desktop {
    padding-top: 22px;
    background: #ffffff0d;
    border-radius: 12px;
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
    border: 2px solid #bec7d91a;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
}

.onetwoleft {
    width: 50%;
    float: left;
    margin-bottom: 16px;
}

.onetwoleft > p {
    margin: 0;
    margin-right: 0px;
    margin-right: 4px;
}

.onetworight {
    overflow: hidden;
    float: left;
    width: 50%;
    margin-bottom: 16px;
}

.onetworight > p {
        margin: 0;
        margin-left: 0px;
    margin-left: 4px;
}

.onetworight > p:nth-child(1) {
    outline: solid 10px #03060c;
}

.ytcontainer > div > div {
    padding-top: 0 !important;
}

.sidebyside>p {
    max-width: 100%;
    display: flex;
    justify-content: space-between;
}

.sidebyside > p > img:first-child {
    margin-right: 7px;
}

.sidebyside > p > img:last-child {
    margin-left: 7px;
}
</style>

