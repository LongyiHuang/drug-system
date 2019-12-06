/**
* Description: 描述列表
*
* Created by longyihuang on 2019/11/1
* E-Mail: 475865662@qq.com
*/

<template>
  <ContentWrapper>
    <span class="normal-text" slot="left">{{title}}</span>
    <slot name="right" slot="right"></slot>
    <div slot="content">
      <el-row style="margin: 20px 0px; padding: 0px 20px" v-for="row in rowSize" :key="row">
        <el-col :span="span" :offset="1" v-for="(col, i) in descriptions.slice((row-1) * columns, row * columns)" :key="i">
          <div style="display: flex;">
            <label class="normal-text">{{col['label']}}:</label>
            <span style="flex: 1; margin-left: 5px" class="normal-text">{{col['value']}}</span>
          </div>
        </el-col>
      </el-row>
      <slot name="after"></slot>
    </div>
  </ContentWrapper>
</template>

<script>
  import ContentWrapper from "../layout/ContentWrapper";
  export default {
    name: "Descriptions",
    components: {ContentWrapper},
    props: {
      title: {
        type: String,
        default: function () {
          return null
        }
      },

      columns: {
        type: Number,
        default: function () {
          return 3;
        }
      },

      descriptions: {
        type: Array,
        default: function () {
          return []
        }
      }
    },

    computed: {
      rowSize () {
        return Math.ceil(this.descriptions.length / this.columns);
      },

      span () {
        return parseInt(24 / this.columns) - 1;
      }
    }
  }
</script>

<style lang='scss' scoped>

</style>
