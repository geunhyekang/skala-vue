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
  <div class="chat-search">
    <input
      :value="searchQuery"
      type="text"
      placeholder="검색할 도시 이름을 입력해보세요"
      @input="handleInput"
    />
    <button class="send-btn" type="button" aria-label="검색">
      <i class="pi pi-search" />
    </button>
  </div>
</template>
