<template>
  <div>
    <hr>
   <Button class="edit-btn" @click="$router.replace('/')">Edit Post</Button>
   <div class="content-view" ref="contentContainer" v-html="content"></div>
    <div id="preview">
    <img v-if="url" :src="url" />
  </div>
  </div>
</template>
 <script>
 import {Button} from 'iview'
 import {mapGetters} from 'vuex'
 import Quill from 'quill'

 export default {
     components: {
       Button
     },
computed: {
  ...mapGetters(['delta'])
},
mounted() {
  let article= document.createElement('article');
  let quill = new Quill(article,{})
  quill.setContents(this.delta)
  setTimeout(() => { this.$refs.contentContainer.appendChild(article) }, 0)
}
 }
 </script>

 <style>
 .edit-btn {
   display: inline-block;
   margin-left: 90px;
   margin-top:30px;
  padding: 15px 25px;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #4CAF50;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
 }
 .t {
 margin:30px;  
 font-size: 26px;
  }
  .sc {
    font-size: 18px;
    margin:30px;
  }
   </style>