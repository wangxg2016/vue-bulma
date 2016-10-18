<template>
<xcontent>
  <span slot="title">Collapse</span>
  <div class="columns">
    <div class="column is-6">
      <collapse>
        <collapse-item title="明月几时有" :index="0" :selected="index1">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.</p> 
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.</p> 
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.</p> 
        </collapse-item>
        <collapse-item title="把酒问青天" :index="1" :selected="index1">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.</p> 
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.</p> 
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.</p> 
        </collapse-item>
        <collapse-item title="今夕是何年" :index="2" :selected="index1">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.</p> 
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.</p> 
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.</p> 
        </collapse-item>
      </collapse>
    </div>
    <div class="column is-6">
      <collapse>
        <collapse-item title="明月几时有" :accordion="true" :index="0" :selected="index2" @change="update2">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.</p> 
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.</p> 
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.</p> 
        </collapse-item>
        <collapse-item title="把酒问青天" :accordion="true" :index="1" :selected="index2" @change="update2">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.</p> 
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.</p> 
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.</p> 
        </collapse-item>
        <collapse-item title="今夕是何年" :accordion="true" :index="2" :selected="index2" @change="update2">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.</p> 
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.</p> 
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.</p> 
        </collapse-item>
      </collapse>
    </div>
  </div>
</xcontent>
</template>
<script>
import { Xcontent } from '../components/page'
import { Collapse, CollapseItem } from '../components/collapse'
export default {
  components: {
    Collapse,
    CollapseItem,
    Xcontent
  },
  data () {
    return {
      index1: -1,
      index2: -1
    }
  },
  methods: {
    update2 (index) {
      this.index2 = Number(index)
    }
  }
}
</script>