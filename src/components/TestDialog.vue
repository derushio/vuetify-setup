<template lang='pug'>
.test-dialog
    h3.title hoge
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TestDialog extends Vue {}
</script>

<style lang='stylus' scoped>
.test-dialog {}
</style>
