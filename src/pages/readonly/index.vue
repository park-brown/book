<template>
  <div class="pageContainer">
    <div class="bottomNavigationBar">
      <ul class="bottomNavigationBarInner">
        <n-button :bordered="false">
          <i-akar-icons-arrow-left />
        </n-button>
        <n-button :bordered="false">
          <i-akar-icons-arrow-right />
        </n-button>
        <n-statistic :value="1">
          <template #prefix>
            {{ 1 }} /
          </template>
        </n-statistic>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">

</script>
<style lang="scss" scoped>
.pageContainer {
  @include laptop {
    width:100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
  }
}
.editorContainer {
  @include laptop {
    max-width: 108rem;
    margin: 0 auto;
    padding: $spacing*15 0 0 0;
    height: 100%;
    width: 100%;
  }
}
.bottomNavigationBar {
  width:100%;
  background-color: transparent;
  height:$spacing*15;
  padding:$spacing*2;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  display:flex;
  transition: opacity $duration-standard $easing-easeInOut;
  &:hover {
    opacity:1;
  }
}
.bottomNavigationBarInner {
  height:100%;
  flex-grow:0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 $spacing*4;
  gap:$spacing*3;
  border: 1px solid $black;
  border-radius:$border-radius*2;
  box-shadow: $shadow-2;
  & ::v-deep(.n-statistic) {
    display:flex;
    align-items: center;
    justify-content: flex-start;
    gap:$spacing*2;
  }
  & ::v-deep(.n-statistic-value) {
   margin:0
  }
  & ::v-deep(.n-statistic-value__prefix) {
   @include h6
  }
  & ::v-deep(.n-statistic-value__content) {
   @include h6
  }
}
</style>
