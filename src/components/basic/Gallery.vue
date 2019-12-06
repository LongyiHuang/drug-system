/**
* Description: 相册组件
*
* Created by huanglongyi on 2019/7/3
* E-Mail: 475865662@qq.com
*/

<template>
  <div>
    <div class="gallery-box" :style="{width: width+'px'}">
      <div class="gallery-item" v-for="(picUrl, index) in dataList" :key="index" @click="handleClick(picUrl)">
        <img
          class="thumbnail"
          :style="{width: cellWidth+'px',height: cellWidth+'px'}"
          v-lazy="picUrl"/>
      </div>
    </div>
    <el-dialog
      :visible.sync="showDialog"
      :before-close="()=>{showDialog = false}"
      width="60%"
      center
      append-to-body
    >
      <div class="pic-box">
        <img
          class="pic"
          :src="currentPicture"/>
      </div>
    </el-dialog>
  </div>
</template>

<script>
	export default {
		name: "gallery",
    props: {
      dataList: {
        type: Array,
        default: function () {
          return []
        }
      },

      cellWidth: {
        type: String,
        default: function () {
          return "100"
        }
      },

      width: {
        type: String,
        default: function () {
          return "800"
        }
      }
    },

    data () {
      return {
        showDialog: false,
        currentPicture: ''
      }
    },

    methods: {
      handleClick (picUrl) {
        this.showDialog = true
        this.currentPicture = picUrl
      }
    }

	}
</script>

<style lang="scss" scoped>
  .gallery-box{
    width: 800px;
    .gallery-item{
      margin: 10px 10px;
      display: inline-block;
    }
    .thumbnail{
      width: 100px;
      height: 100px;
      border-radius: 5px;
    }
  }

  .pic-box{
    width: 500px;
    height: 500px;
    margin: auto;
    text-align: center;
    line-height: 500px;
    .pic{
      max-width: 100%;
      max-height: 100%;
    }
  }


</style>
