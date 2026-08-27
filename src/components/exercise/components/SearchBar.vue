<script setup>
defineProps({
  searchQuery: { type: String, default: '' },
})

const emit = defineEmits(['update-query'])

function handleInput(event) {
  emit('update-query', event.target.value)
}
</script>

<template>
  <div class="search-bar">
    <input
      type="text"
      placeholder="검색할 도시 이름 입력"
      :value="searchQuery"
      @input="handleInput"
    />
    <p>검색 중인 도시: {{ searchQuery || '없음' }}</p>
  </div>
</template>

<style scoped>
.search-bar input {
  width: 100%;
  box-sizing: border-box;
  padding: 6px 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
}
.search-bar p {
  margin: 6px 0 0;
  font-size: 0.85em;
  color: #555;
}
</style>
