<template>
  <n-card class="flexItem">
    <template #cover>
      <div class="overlay" />
      <img
        class="cover"
        src="/bookCoverPlaceHolder.jpg"
      >
    </template>
    <template #action>
      <n-button class="read" :bordered="false">
        阅读
      </n-button>
      <n-button class="edit" :bordered="false">
        编辑
      </n-button>
    </template>
    <template #footer>
      <n-ellipsis class="footer h6">
        《唐诗宋词300首全集
        图文精编版》电子版
      </n-ellipsis>
      <n-ellipsis class="footer h6">
        创建日期：2021/11/10
      </n-ellipsis>
    </template>
  </n-card>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
.flexItem {
  box-shadow: $shadow-1;
  border-radius: $border-radius * 2;
  transition: transform $duration-standard $easing-easeInOut;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: $spacing * 6;
  padding: $spacing * 3;
  &:hover {
    box-shadow: $shadow-4;
    transform: translateY($spacing * -0.5);
  }
  & ::v-deep(.n-card-cover) {
    height: 8rem;
    width: 6rem;
    position: relative;
    & .overlay {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
          156.82deg,
          rgba(0, 0, 0, 0.6) 4.58%,
          rgba(0, 0, 0, 0) 69.61%
        ),
        linear-gradient(
          24.5deg,
          rgba(0, 0, 0, 0.2) 4.71%,
          rgba(0, 0, 0, 0) 71.49%
        );
    }
    & .cover {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
      border-radius: $border-radius;
    }
  }
  & ::v-deep(.n-card__content) {
    display: none;
  }
  & ::v-deep(.n-card__footer) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: $spacing * 3;
    padding: $spacing * 3;
  }
  & ::v-deep(.n-card__action) {
    margin-left: auto;
    background-color: $white;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: $spacing * 4;
    & .read {
      background-color: $red-600;
      color: $white;
      &:hover {
        background-color: $red-700;
      }
    }
    & .edit {
      background-color: $grey-200;
      color: $black;
      &:hover {
        background-color: $grey-300;
      }
    }
  }
}
</style>
