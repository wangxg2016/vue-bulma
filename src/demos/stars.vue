<template>
<xcontent>
  <span slot="title">Stars</span>
  <div class="box no-shadow">
      <list :title="'Read Only Stars'">
        <list-item>
          <div class="item-inner">
            <div class="item-title-row">iPhone 7</div>
            <div class="item-after">
              <stars :amount="4" :size="5"></stars>
            </div>
          </div>
        </list-item>
      </list>
      <list :title="'Click Star!'">
        <list-item>
          <div class="item-inner">
            <div class="item-title-row">
              <div class="item-title">iPhone 5</div>
              <div class="item-after" style="font-size:1.5rem;">
                <stars :amount="3" :size="5" :readonly="false" :color="'#04be02'"></stars>
              </div>
            </div>
          </div>
        </list-item>
        <list-item>
          <div class="item-inner">
            <div class="item-title-row">
              <div class="item-title">iPhone 5</div>
              <div class="item-after" style="font-size:1.5rem;">
                <stars :amount="3" :size="5" :readonly="false" :mode="'rotate'"></stars>
              </div>
            </div>
          </div>
        </list-item>
        <list-item>
          <div class="item-inner">
            <div class="item-title-row">
              <div class="item-title">iPhone 6</div>
              <div class="item-after" style="font-size:1.5rem;">
                <stars :amount="6" :size="7" :readonly="false" :color="'#f30'" :icon="'likefill'" :mode="'grow'"></stars>
              </div>
            </div>
          </div>
        </list-item>
        <list-item>
          <div class="item-inner">
            <div class="item-title-row">
              <div class="item-title">iPhone 6S</div>
              <div class="item-after" style="font-size:1.5rem;">
                <stars :amount="5" :size="6" :readonly="false" :color="'#f30'" :icon="'rocket'" :mode="'grow'"></stars>
              </div>
            </div>
          </div>
        </list-item>
      </list>
  </div>
</xcontent>
</template>

<script>
import { List, ListItem } from '../components/list'
import Stars from '../components/stars'
import { Xcontent } from '../components/page'
export default {
  components: {
    Xcontent,
    List,
    ListItem,
    Stars
  }
}
</script>
