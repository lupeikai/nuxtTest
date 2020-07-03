<template>
   <div>head</div>
</template>

<!--<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
   
})
</script>-->
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component
export default class Head extends Vue {
  message: string = 'This is a message'
}
</script>
