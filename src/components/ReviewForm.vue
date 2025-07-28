<template>
  <form @submit.prevent="submitForm" class="space-y-2 p-1 sm:p-2">
    <!-- Reviewer Name -->
    <div>
      <label for="name" class="block text-sm font-medium mb-1">Reviewer Name</label>
      <InputText id="name" v-model="form.name" :invalid="!!errors.name" class="w-full" />
      <small v-if="errors.name" class="text-red-500 block mt-1">Name is required.</small>
    </div>

    <!-- Email -->
    <div>
      <label for="email" class="block text-sm font-medium mb-1">Email</label>
      <InputText id="email" v-model="form.email" :invalid="!!errors.email" class="w-full" />
      <small v-if="errors.email" class="text-red-500 block mt-1">Valid email is required.</small>
    </div>

    <!-- Rating -->
    <div>
      <label for="rating" class="block text-sm font-medium mb-1">Rating</label>
      <Rating id="rating" v-model="form.rating" :cancel="false" class="text-sm" />
      <small v-if="errors.rating" class="text-red-500 block mt-1">Please give a rating (1–5).</small>
    </div>

    <!-- Date -->
    <div>
      <label for="date" class="block text-sm font-medium mb-1">Date</label>
      <DatePicker
        id="date"
        v-model="form.date"
        :invalid="!!errors.date"
        dateFormat="yy-mm-dd"
        showIcon
        class="w-full"
        inputClass="w-full"
      />
      <small v-if="errors.date" class="text-red-500 block mt-1">Date is required.</small>
    </div>

    <!-- Status -->
    <div>
      <label for="status" class="block text-sm font-medium mb-1">Status</label>
      <Select
        id="status"
        v-model="form.status"
        :invalid="!!errors.status"
        :options="statusOptions"
        placeholder="Select a Status"
        class="w-full"
        inputClass="w-full"
      />
      <small v-if="errors.status" class="text-red-500 block mt-1">Status is required.</small>
    </div>

    <!-- Comment -->
    <div>
      <label for="comment" class="block text-sm font-medium mb-1">Comment</label>
      <Textarea id="comment" v-model="form.comment" rows="3" autoResize class="w-full" />
    </div>

    <!-- Buttons -->
    <div class="flex justify-end gap-2 pt-4">
      <Button label="Cancel" class="p-button-text" @click="$emit('cancel')" />
      <Button label="Submit" type="submit" class="p-button-primary" />
    </div>
  </form>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import type { Review } from '../types/review'

const emit = defineEmits(['submit', 'cancel'])

const form = ref<Partial<Review>>({
  name: '',
  email: '',
  rating: 0,
  date: '',
  status: 'Pending',
  comment: '',
})

const errors = ref({
  name: false,
  email: false,
  rating: false,
  date: false,
  status: false,
})

const statusOptions = ['Approved', 'Pending', 'Flagged']

function validate() {
  errors.value = {
    name: !form.value.name,
    email: !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.value.email || ''),
    rating: !form.value.rating || form.value.rating < 1,
    date: !form.value.date,
    status: !form.value.status,
  }
  return !Object.values(errors.value).some(Boolean)
}

function submitForm() {
  if (validate()) {
    const review: Review = {
      id: Date.now(),
      name: form.value.name!,
      email: form.value.email!,
      rating: form.value.rating!,
      date: typeof form.value.date === 'string'
        ? form.value.date
        : form.value.date?.toISOString().split('T')[0] ?? '',
      status: form.value.status as Review['status'],
      comment: form.value.comment || '',
    }
    emit('submit', review)
  }
}

// Reactive error clearing when user fixes fields
watch(() => form.value.name, (val) => {
  if (val && errors.value.name) errors.value.name = false
})

watch(() => form.value.email, (val) => {
  if (/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(val || '') && errors.value.email) {
    errors.value.email = false
  }
})

watch(() => form.value.rating, (val) => {
  if (val && val >= 1 && errors.value.rating) errors.value.rating = false
})

watch(() => form.value.date, (val) => {
  if (val && errors.value.date) errors.value.date = false
})

watch(() => form.value.status, (val) => {
  if (val && errors.value.status) errors.value.status = false
})
</script>

