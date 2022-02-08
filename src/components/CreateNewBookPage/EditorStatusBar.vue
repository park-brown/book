<template>
  <div class="status-bar">
    <div class="inner">
      <div class="leftSide">
        <i-bi-cloud-check />
        <n-p class="subtitle-2">
          同步
        </n-p>
      </div>
      <div class="rightSide">
        <div class="wordCount">
          <n-p class="subtitle-2">
            123字
          </n-p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

</script>
<style lang="scss" scoped>
.status-bar {
  position: absolute;
  bottom:0;
  left:0;
  right:0;
  height:3.6rem;
  background-color: $grey-400;
}
.inner {
  width:100%;
  height:100%;
  display:flex;
  align-items: center;
  justify-content: space-between;
  padding:0 $spacing*4
}
.leftSide {
  display:flex;
  align-items: center;
  justify-content: flex-start;
  gap:$spacing*2
}
.rightSide {
  display:flex;
  align-items: center;
  justify-content: flex-start;
  gap:$spacing*2
}
</style>
