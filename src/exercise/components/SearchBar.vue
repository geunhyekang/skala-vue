<script setup>
import InputText from 'primevue/inputtext'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'

defineProps({
  searchQuery: { type: String, default: '' },
})

const emit = defineEmits(['update-query'])

function handleInput(event) {
  emit('update-query', event.target.value)
}
</script>

<template>
  <div>
    <IconField>
      <InputIcon class="pi pi-search" />
      <InputText
        :model-value="searchQuery"
        placeholder="검색할 도시 이름 입력"
        class="w-full"
        @input="handleInput"
      />
    </IconField>
    <p class="text-sm text-color-secondary mt-2">검색 중인 도시: {{ searchQuery || '없음' }}</p>
  </div>
</template>
