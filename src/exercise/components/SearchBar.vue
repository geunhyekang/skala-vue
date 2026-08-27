<script setup>
defineProps({
  searchQuery: { type: String, default: '' },
})

const emit = defineEmits(['update-query'])

function handleInput(value) {
  emit('update-query', value)
}
</script>

<template>
  <div>
    <v-text-field
      label="검색할 도시 이름 입력"
      prepend-inner-icon="mdi-magnify"
      :model-value="searchQuery"
      density="comfortable"
      variant="outlined"
      clearable
      @update:model-value="handleInput"
    />
    <p class="text-body-2 text-medium-emphasis">검색 중인 도시: {{ searchQuery || '없음' }}</p>
  </div>
</template>
