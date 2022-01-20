<template>
  <div class="pageManagerEditPanelContainer">
    <div class="thumbnailContainer">
      <div class="thumbnail" />
      <label class="pageLabel">1</label>
      <div class="thumbnailControlsOverlay">
        <n-button :bordered="false" @click="toggle">
          <i-akar-icons-more-horizontal />
        </n-button>
        <div v-if="value" ref="target" class="controlOptions">
          <n-p>添加页面</n-p>
          <div class="controlOptionItem" @click="addNewPageAfterCurrent">
            <i-gg-insert-before-r />
            <n-p>在下方插入空白页</n-p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const [value, toggle] = useToggle()
const target = ref()
onClickOutside(target, () => {
  toggle()
})
const addNewPageAfterCurrent = () => {
  console.log('add-new-page-after')
  value.value = false
}
</script>
<style lang="scss" scoped>
.pageManagerEditPanelContainer {
    width:100%;
    height:100%;
    overflow:auto;
    position:relative;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    gap:$spacing*4;
}
.thumbnailContainer {
    width:15rem;
    height:21.4rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    gap:$spacing*2;
    position:relative;
    z-index:0;
    cursor: pointer;

}
.thumbnail {
  width:15rem;
  height:15rem;
  background-color:$white;
  border-radius:$border-radius*2;
  box-shadow: $shadow-2
}
.thumbnailControlsOverlay {
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  position: relative;
}
.controlOptions {
  width:20rem;
  position: absolute;
  top:50%;
  left:50%;
  background-color: $white;
  border-radius:$border-radius*2;
  box-shadow: $shadow-2;
  display: flex;
  flex-direction: column;
  align-items:flex-start;
  justify-content:flex-start;
  padding:$spacing*4
}
.controlOptionItem {
  width:100%;
  display:flex;
  align-items:center;
  gap:$spacing*2;
  justify-content:flex-start;
  cursor:pointer;
  &:hover {
    background-color: $grey-200;
  }
}
</style>
