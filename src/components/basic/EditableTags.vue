/**
* Description: 可编辑的Tag列表,支持增删改
*
* Created by longyihuang on 2019/11/4
* E-Mail: 475865662@qq.com
*/

<template>
  <div class="editable-tags-container">
    <div>
      <el-tag
        class="tag"
        v-for="(tag, index) in tags"
        :key="index"
        v-if="editIndex !== index"
        @click="handleClickEdit(tag, index)"
        :closable="closable"
        @close="handleClose(index)"
        :disable-transitions="true"
      >
        {{tag}}
      </el-tag>
      <el-input
        v-else
        class="input-tag"
        v-model="inputValue"
        ref="editTagInput"
        size="small"
        @keyup.enter.native="handleEditConfirm"
        @blur="handleEditConfirm"
      />
    </div>

    <div v-if="addable">
      <el-input
        class="input-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="addTagInput"
        size="small"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
      />
      <el-button v-else class="button-new-tag" size="small" @click="showInput">{{addButtonName}}</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "EditableTags",
    props: {
      tags: {
        type: Array,
        default: function () {
          return [];
        }
      },
      addable: {
        type: Boolean,
        default: function () {
          return false;
        }
      },
      addButtonName: {
        type: String,
        default: function () {
          return '+ New Tag';
        }
      },
      closable: {
        type: Boolean,
        default: function () {
          return false;
        }
      }
    },
    data () {
      return {
        inputVisible: false,
        inputValue: '',
        editIndex: undefined
      }
    },
    methods: {
      handleClickEdit (tag, index) {
        this.editIndex = index;
        this.inputValue = tag;
        this.$nextTick(() => {
          this.$refs.editTagInput.$refs.input.focus();
        });
      },
      handleClose (index) {
        this.$emit('onCloseTag', index);
      },

      handleEditConfirm () {
        let inputValue = this.inputValue;
        const editIndex = this.editIndex;
        if (inputValue) {
          this.$emit('onEditTag', inputValue, editIndex);
        }
        this.editIndex = undefined;
        this.inputValue = '';
      },

      handleInputConfirm () {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.$emit('onAddTag', inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      },

      showInput () {
        this.inputVisible = true;
        this.$nextTick(() => {
          this.$refs.addTagInput.$refs.input.focus();
        });
      }
    }
  }
</script>

<style lang='scss' scoped>
  .editable-tags-container {
    display: flex;
    .tag {
      margin-right: 10px;
    }
    .input-tag {
      width: 90px;
      margin-right: 10px;
      vertical-align: bottom;
    }
    .button-new-tag {
      height: 32px;
      line-height: 30px;
      padding-top: 0;
      padding-bottom: 0;
    }
  }

</style>
