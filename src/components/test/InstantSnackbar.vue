<template lang='pug'>
.instant-snackbar
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { aswait } from '@/utils/AsyncTimeout';

@Component
export default class InstantSnackbar extends Vue {
    protected async mounted() {
        // TODO:
    }
}
</script>

<style lang='scss' scoped>
@import 'variable';

.instant-snackbar {}
</style>
