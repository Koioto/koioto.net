<template>
<a :href="link" v-on:click="clicked">
    <button>
        <slot>ダウンロード</slot>
    </button>
</a>
</template>

<script>
export default {
    props: {
        link: {
            type: String,
            default: "#"
        },
        action: {
            type: String,
            default: "download"
        },
        category: {
            type: String,
            default: "koioto"
        },
        label: {
            type: String,
            default: "unknown"
        }
    },
    methods: {
        clicked: function() {
            ga('send', 'event', this.action, this.category, this.label);
        }
    }
}
</script>

<style scoped>
button {
    background-color: var(--accentColor);
    border: none;
    padding: 0.5em;
    border-radius: 0.2em;
    outline: none;
    color: var(--textColor);
    font-size: 2em;
    cursor: pointer;
}
button:hover {
    background-color: var(--darken10AccentColor);
}
</style>