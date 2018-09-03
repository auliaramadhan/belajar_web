<template>
    <div>
      <div
      @click="nodeClicked"
     :style="{'margin-left': `${depth * 20}px`}"
      class="node">
      <h3>
      <span 
      v-if="haschildren"
      class="type">{{expanded ? '&#9660;' : '&#9658;'}}</span>
      <span class="type" v-else>&#9671;</span>
          {{node.name}}
          
          </h3>
      </div>
      <TreeBrowser 
        v-if="expanded"
        v-for='child in node.children'
        :key="child.name" 
        :node="child"
        :depth='depth + 1'
        @onClick="(node) => $emit('onClick', node)"
      />
    </div>
</template>

<script>

export default {
  name: 'TreeBrowser',
  props: {
    node: Object,
    depth: {
      type: Number,
      default: 0,
    }
  },
  data(){
    return{
      expanded: false,
    }
  },
  methods: {
    nodeClicked: function (){
      this.expanded = !this.expanded;
      if (!this.haschildren) {
        this.$emit('onClick', this.node);
        console.log('we are here' );
      }
    }
  },
  computed: {
    haschildren() {
      return this.node.children;
    }
  }
};
</script>

<style scoped>
.node{
  text-align: left;
}
</style>

