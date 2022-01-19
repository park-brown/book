<template>
  <n-card class="gridItem">
    <template #cover>
      <div class="overlay" />
      <img
        class="cover"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/16.png"
      >
    </template>
    <template #action>
      <n-button class="read" :bordered="false" @click="goToReadOnlyPage">
        阅读
      </n-button>
      <n-button class="edit" :bordered="false" @click="goToEditablePage">
        编辑
      </n-button>
    </template>
    <template #footer>
      <n-ellipsis class="footer h5">
        {{ bookName }}
      </n-ellipsis>
    </template>
  </n-card>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { bookStore } from '~/composables/useBookStorage'

const router = useRouter()
interface Props {
  bookContent: string
  bookId: string
  bookName: string
}
const props = defineProps<Props>()
const goToReadOnlyPage = () => {
  router.push('readonly')
}
const goToEditablePage = () => {
  bookStore.value.bookId = props.bookId
  bookStore.value.bookName = props.bookName
  bookStore.value.bookContent = props.bookContent
  router.push('editable')
}
</script>
<style lang="scss" scoped>
.gridItem {
  box-shadow: $shadow-1;
  z-index: 0;
  border-radius: $border-radius * 2;
  transition: transform $duration-standard $easing-easeInOut;
  &:hover {
    box-shadow: $shadow-4;
    transform: translateY($spacing * -0.5);
  }
  & ::v-deep(.n-card-cover) {
    flex-shrink: 0;
    position: relative;
    z-index: 1;
    min-height: 17.8rem;
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
  }
  & ::v-deep(.n-card__content) {
    flex: 0;
  }
  & ::v-deep(.n-card__footer) {
    text-align: center;
  }
  & ::v-deep(.n-card__action) {
    position: absolute;
    top: 45%;
    left: 0;
    right: 0;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    background-color: transparent;
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
  & .cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
}

</style>
