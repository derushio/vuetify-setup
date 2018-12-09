<template lang='pug'>
.hello-world
    h2.display-3 Hello world.
    v-btn
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import TestDialog from '@/components/TestDialog.vue';

import { aswait } from '@/utils/AsyncTimeout';
const wait = aswait;

@Component({
    components: {
        TestDialog,
    },
})
export default class HelloWorld extends Vue {
    protected async mounted() {
        await this.$vdialog.open({ component: TestDialog, needCard: true }).promise;

        // await this.$vprogress.circularTimer(3000);
        // await this.$vprogress.circularProgress(async (setProgress) => {
        //     await aswait(1000);
        //     setProgress(90);
        //     await aswait(2000);
        //     setProgress(100);
        // });

        // await this.$vdialog.open({ component: Vue.extend(VBtn as Vue), needCard: true,
        //     propsData: {
        //         color: 'warning',
        //     },
        // }).promise;
        // await this.$vprogress.circularLoading(async () => {
        //     await this.$vsnackbar.alert('Click me').promise;
        // });

        // if ((await this.$vdialog.confirm('Are you ready?').promise).confirm) {
        //     await this.$vdialog.alert('Great!!').promise;
        // }

        // const result = await this.$vdialog.prompt('Type your mind.').promise;
        // if (result.confirm) {
        //     await this.$vdialog.alert({ title: 'Typed', message: result.text, fullscreen: true }).promise;
        // }
    }
}
</script>

<style lang='stylus' scoped>
@require '~@/assets/styles/entry/_variable.styl';

.hello-world {}
</style>
