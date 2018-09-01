
<template>
  <div class="test">
    <input type="text" v-model="title"><br>
    <h1>{{title}}</h1>
    <p v-text="user.firsname"></p>
    <p v-if="showLastName">{{user.lastname}}</p>
    <p v-else>Nobody</p>
    <ul>
      <li v-for="item in items" :key="item">{{item.title}}</li>
    </ul>
    <button v-on:click="greet('hello')">click me</button>
    <input type="text" v-on:keyup="presskey" v-on:keyup.enter="enterHit">
    <hr>
    <label >firstname : </label> <input type="text" v-model="user.firstname">
    <label >lastname : </label> <input type="text" v-model="user.lastname">
    <h3>{{fullname}}</h3>
    <h2>{{msg}}</h2>

  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'test',
  props: {
    msg: {
      type : String,
      default: 'Foobar'
    }
  },
  data () {
    return {
      title: 'hello wolrd',
      user: {
        firstname: 'john',
        lastname: 'doe'
      },
      showLastName: false,
      items: [
        {title:'item One'},
        {title:'item two'},
        {title:'item three'}
      ]
    }
  },
  methods: {
    greet: function(greet){
      alert(greet);
      console.log('hai');
    },
    presskey: function(e){
      console.log(e.target.value);
    },
    enterHit: function(){
      console.log('enter');
    }
  },
  computed: {
    fullname: function(){
      return this.user.firstname + ' '+ this.user.lastname;
    }
  }
}
</script>
