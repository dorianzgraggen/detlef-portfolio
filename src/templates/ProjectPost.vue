
<template>
    <Layout>
        <h1 v-if="$page.post.category !== 'cgbookcase'">{{ $page.post.title }} </h1>
        <g-image :src="$page.post.featuredImage" width="10"></g-image>
        <g-image :src="$page.post.lowres" width="10"></g-image>
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
    lowres:featuredImage (width: 100, blur: 40)
    highres:featuredImage
    category
  }
}

</page-query>

<script>
export default {
    metaInfo() {
        return {
            title: this.$page.post.title,
            // meta: [
            //     { name: "description", content: this.$page.post.title }
            // ]
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
    align-items: center;

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
    align-items: center;
}

.sidebyside > p > img:first-child {
    margin-right: 7px;
    width: 50%;
}

.sidebyside > p > img:last-child {
    margin-left: 7px;
    width: 50%;
}

.grid2 > p {
    width: 100%;
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 8px;
}

@media only screen and (max-width: 600px) {
    .onetwoleft {
        width: 100%;
        float: unset;
        width: 100%;
    }

    .onetworight {
        overflow: unset;
        float: unset;
        width: 100%;
        margin-bottom: unset;
        width: 100%;
    }

    .onetwoleft > p {
        margin-right: 0px;
    }
    .onetworight > p {
        margin-left: 0px;
    }

     .onetworight > p:first-child {
        margin-bottom: 16px;
    }

    .desktop {
        border: none;
        padding-top: 0;
        border-radius: 0;
    }

    .gallery-container {
        -webkit-column-count: 1;
        -moz-column-count: 1;
        column-count: 1;
    }

    .sidebyside > p {
        flex-wrap: wrap;
    }

    .sidebyside > p > img:first-child {
        margin-right: 0px;
        width: 100%;
        margin-bottom: 16px;
    }
    .sidebyside > p > img:last-child {
        margin-left: 0px;
        width: 100%;
    }


    .videoBlock-container {
        flex-wrap: wrap;
    }

    .video-container {
        width: 100% !important;
    }

    .video-div {
        width: 100% !important;
    }
    .videoText-container {
        width: 100% !important;
    }



    .threephones > p > img {
        padding-top: 0px;
        padding-bottom: 0px;
        max-height: 90vh;
        margin: 0 auto;
        margin-bottom: 16px;
        max-width: 100%;
        width: unset;
    }

    .threephones > p {
        flex-wrap: wrap;
    }

    .threephones {
        margin-bottom: 20px;
    }

    .grid2 > p {
        grid-template-columns: repeat(2, 1fr);
        grid-template-columns: repeat(1, 1fr);
    }
  
}

</style>

