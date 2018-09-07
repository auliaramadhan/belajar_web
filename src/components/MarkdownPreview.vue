<template>
  <article class="container">
    <div class="row mt-4">
      <div class="col text-center">
       <h1>Markdown Preview</h1> 
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-md-6">
       <h4 class="light">Markdown </h4> 
       <textarea name="text" id="text" class="info"
       v-model="markdown"/>
      </div>

      <div class="col-md-6">
       <h4 class="light">Preview</h4> 
       <div 
       :key="markdown"
       class="info" 
       v-markdown>
         {{markdown}}
       </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  data(){
    return{
      markdown: '#### HELLO WORLD \n',

    }
  },
}
</script>


<style scoped>
.info{
  height: 400px;
  width: 100%;
  background: rgba(white, white, white, 0.9);
}
textarea{
  resize: none;
  border: 2px dashed orange;
  outline: none;
}
</style>

