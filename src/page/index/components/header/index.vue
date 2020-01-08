<template>
  <div class="header-block">
    <div class="isClossTab" @click="isClossTabFun">
      <i class="clossTabIcon" :class="isCollapse ? ' el-icon-s-unfold' : ' el-icon-s-fold'"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isCollapse: Boolean,
    isClossTabFun: Function
  }
};
</script>

<style lang="scss" scoped>
$header-height: 60px;

.header-block {
  position: relative;
  line-height: $header-height + 5;
}

.isClossTab {
  display: inline-block;
}

.clossTabIcon {
  color: #333;
  font-size: 26px;
  cursor: pointer;
}
</style>