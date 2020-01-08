<template>
  <span>
    <i :class="play === false ? stopIcon: playingIcon" @click="handlePlay"></i>
  </span>
</template>

<script>
export default {
  props: {
    id: String,
    playId: String,
    url: String,
    handlePlayVoice: Function
  },
  data() {
    return {
      play: false,
      playingIcon: "el-icon-video-pause",
      stopIcon: "el-icon-video-play"
    };
  },
  watch: {
    playId(val) {
      if (val === this.id) {
        this.play = true;
      } else {
        this.play = false;
      }
    }
  },
  methods: {
    handlePlay() {
      this.play = !this.play;

      this.handlePlayVoice(this.id);
    }
  }
};
</script>

<style lang="scss" scoped>
i {
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  margin: 0 5px;
}
i:hover {
  background-color: #333;
  color: #fff;
  border-radius: 50px;
  cursor: pointer;
}
</style>