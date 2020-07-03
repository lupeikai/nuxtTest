<template>
  <div>
    <Head></Head>
    <Nuxt />
    <div>di部</div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import Head from '../components/Head/index.vue';

@Component({
    components:{
      Head
    }
})
export default class Main extends Vue {
  message: string = 'This is a message'
}
</script>
<style lang="less" scoped>

</style>

