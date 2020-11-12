<template>
  <div>
    <div
      class="cw-input-select_pop"
      v-if="isShowPop"
      onselectstart="return false"
    >
      <h3>热搜关键词</h3>
      <ul class="cw-input-select_options">
        <li v-for="option in optionsList" :key="option" @click="itemSelected(option)">{{option}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isShowPop: {
      type: Boolean,
      default: false,
    }, 
    optionsList: {
      type: Array,
      default: () => {
        return ["选项3", "选项2", "选项1"];
      },
    },
  },
  methods: {
    itemSelected(item) {
        this.$store.state.topbar=item
         this.$emit('itemSelected', item)
    },
    hidePop() {
    
    },
  },
  data() {
    return {
      state1:"",
      option:""
    };
  },
  mounted() {},
};
</script>
<style scoped>
/* 组件内容 */
.cw-input-select {
  width: 198px;
  position: absolute;
}

/* 基本下拉框 */
.cw-input-select_box {
  height: 28px;
  border: 1px solid #b7b7b7;
  border-radius: 4px;
  background-color: white;
  position: relative;
  cursor: pointer;
}

/* 基本下拉框里面右边的线体上下箭头（可旋转） */
.cw-arrow {
  content: "";
  display: block;
  position: absolute;
  right: 10px;
  top: 8px;
  border-top: 1px solid #c0c4cc;
  border-right: 1px solid #c0c4cc;
  border-radius: 1px;
  width: 8px;
  height: 8px;
  background: transparent;
  transition: transform 0.3s, -webkit-transform 0.3s;
  transform: rotate(135deg);
  z-index: 10;
}

/* 基本下拉框 文字 */
.cw-input-select_box > span {
  display: inline-block;
  line-height: 28px;
  padding: 0 30px 0 15px;
  font-size: 12px;
  color: #606266;
  /* 文字超出用省略号 */
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
  overflow: hidden;
}

/* 选项列表盒子 */
.cw-input-select_pop {
  position: absolute;
  background-color: white;
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  max-height: 274px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin-top: 12px;
  padding: 5px;
  box-sizing: border-box;
  z-index: 9;
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 90px;
  left: 670px;
}

/* 选项列表内容 */
.cw-input-select_options {
  display: block;
  margin-top: 26px;
  max-height: 234px;
}

/* 选项单元 */
.cw-input-select_options li {
  padding: 8px 15px;
  background-color: white;
  cursor: pointer;
}

/* 选项单元hover */
.cw-input-select_options li:hover {
  background-color: #f5f7fa;
}
</style>