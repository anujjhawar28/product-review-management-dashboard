<template>
  <Dialog
    :visible="modelValue"
    :modal="true"
    :closable="false"
    :dismissableMask="true"
    header="Please Confirm"
    class="!mx-auto"
    :style="{ width: '100%', maxWidth: '500px' }"
    :breakpoints="{ '640px': '95vw' }"
    @update:visible="$emit('update:modelValue', false)"
  >
    <p class="text-lg mb-4 text-center">
      {{ message }}
    </p>

    <template #footer>
      <div class="flex justify-end gap-2">
        <Button
          label="Cancel"
          icon="pi pi-times"
          class="p-button-text"
          @click="$emit('update:modelValue', false); $emit('cancel')"
        />
        <Button
          label="Confirm"
          icon="pi pi-check"
          class="p-button-danger"
          @click="$emit('confirm')"
        />
      </div>
    </template>
  </Dialog>
</template>

<script lang="ts" setup>
defineProps<{
  modelValue: boolean
  message: string
}>()

const emit = defineEmits(['update:modelValue', 'confirm', 'cancel'])
</script>
