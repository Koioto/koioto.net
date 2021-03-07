<template>
<div class="yt-embed">
    <iframe width="720" height="405" v-bind:src="url" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            default: "5DRYW09ilOo"
        }
    },
    data: function() {
        return {
            url: "https://www.youtube.com/embed/" + this.id
        }
    }    
}
</script>

<style scoped>
.yt-embed iframe {
    width: 100%;
}
</style>