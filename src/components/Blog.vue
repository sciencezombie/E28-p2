<template>
  <div class="blog rteditor">
    <div class="post-inputs">
      <div class="cat-input">
       <select v-model="selected">
  <option disabled value="">Please select a category</option>
  <option>Business</option>
  <option>Life</option>
  <option>Love</option>
</select>
<span>Selected: {{ selected }}</span>
      </div>
      <div class="image-input">
        <div class="inner-image-input">
          <input type="file" @change="onFileChange" />
  <div id="preview">
    <img v-if="url" :src="url" />
  </div>
       <Button @click="showPreview" class="btn-preview">Show Preview</Button>
        </div>
     </div>
    </div>
   <quill-editor 
   v-model="content"
   ref="myQuillEditor"
   :options="editorOption"
   />
  </div>
</template>

<script>
import 'quill/dist/quill.snow.css'
import { quillEditor } from 'vue-quill-editor'
import { Button} from 'iview'
import { mapGetters } from 'vuex'


export default {
  name: "Blog",
  components: {
    Button,
    quillEditor
  },
  data: () => ( {
    selected: '', 
    url: '',
    content: '',
    editorOption: {
     debug: 'info',
     placeholder: 'Type your post',
     readOnly: true,
     theme: 'snow'
    },
  
      showImageModel: false,
      formEntered: false,
     mounting: false
  }),
    watch: {
      content(val) {
        if(!this.mounting) {
           this.$store.commit('setDelta', this.$refs.myQuillEditor.quill.getContents());
        }
         this.$store.commit('setContent',val)
         this.mounting = false
      }
    },
    methods: {
      showPreview() {
         this.$router.replace('/preview')
      },
       onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
    }
    },
    computed: {
       ...mapGetters(['delta','contents'])
    },
    mounted() {
      this.mounting = true
      if(!this.content && this.contents) {
         this.content = this.contents
      }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.rteditor {
  margin-left: 20px;
  margin-right: 20px;
}
.cat-input, .title-input {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.post-inputs {
	display: grid;
	width: 90%;
	grid-gap: 20px;
	grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
	padding-bottom: 15px;
	padding-top: 15px;
	/* padding: 20px; */
}
.ql-editor {
	height: 72vh;
}
.inner-image-input {
	display: flex;
	align-items: center;
}
#preview img {
  width:150px;
  height:150px;
}
.flex-center {
	display: flex;
	align-items: center;
	justify-content: center;
}
.post-actions-row {
	display: flex;
	justify-content: space-between;
	padding: 10px;
}
.ivu-icon-ios-camera-outline {
	font-size: 16px;
}
.btn-preview {
   background-color: #4CAF50; 
  border: black;
  color: white;
  padding: 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin-left: 155px;
}
.btn-delete {
	color: #2d8cf0!important;
	border: 1px solid #2d8cf0!important;
}
.btn-delete:hover {
	color: red!important;
	border: 1px solid red!important;
}
</style>
