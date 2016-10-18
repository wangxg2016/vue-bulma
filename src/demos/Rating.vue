<template>
<xcontent>
  <span slot="title">Rating</span>
  <div class="notification"></button>
  <label class="label">ReanOnly</label>
  <stars :amount="4" :size="5"></stars>
  <br>
  <label class="label">iPhone 5</label>
  <stars :amount="3" :size="5" :readonly="false" :color="'#04be02'"></stars>
  <br>
  <label class="label">iPhone 6</label>
  <stars :amount="3" :size="5" :readonly="false" :mode="'rotate'"></stars>
  <br>
  <label class="label">iPhone 6s</label>
  <stars :amount="8" :size="10" :readonly="false" :color="'#f30'" :icon="'heart'" :mode="'grow'"></stars>
  <br>
  <label class="label">iPhone 7</label>
  <stars :amount="8" :size="10" :readonly="false" :color="'#f30'" :icon="'rocket'" :mode="'grow'"></stars>
  </div>
</xcontent>
</template>

<script>
import Stars from '../components/stars'
import { Xcontent } from '../components/page'
export default {
  components: {
    Xcontent,
    Stars
  }
}
</script>
