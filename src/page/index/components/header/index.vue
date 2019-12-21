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
$primary-color: #53b667;

.header-block {
  line-height: $header-height + 5;
}

.isClossTab {
  display: inline-block;
}

.clossTabIcon {
  color: $primary-color;
  font-size: 26px;
  cursor: pointer;
}
</style>