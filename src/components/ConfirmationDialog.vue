<template>
  <Dialog
    :visible="modelValue"
    :modal="true"
    :closable="false"
    :dismissableMask="true"
    header="Please Confirm"
    style="width: 30vw"
    @update:visible="$emit('update:modelValue', false)"
  >
    <p class="text-lg mb-4">
      {{ message }}
    </p>

    <template #footer>
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
