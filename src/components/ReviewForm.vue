<template>
  <form @submit.prevent="submitForm" class="p-fluid space-y-4">
    <div class="p-field">
      <label for="name">Reviewer Name</label>
      <InputText id="name" v-model="form.name" :class="{ 'p-invalid': errors.name }" />
      <small v-if="errors.name" class="p-error">Name is required.</small>
    </div>

    <div class="p-field">
      <label for="email">Email</label>
      <InputText id="email" v-model="form.email" :class="{ 'p-invalid': errors.email }" />
      <small v-if="errors.email" class="p-error">Valid email is required.</small>
    </div>

    <div class="p-field">
      <label for="rating">Rating</label>
      <Rating id="rating" v-model="form.rating" :cancel="false" />
      <small v-if="errors.rating" class="p-error">Please give a rating (1–5).</small>
    </div>

    <div class="p-field">
      <label for="date">Date</label>
      <Calendar id="date" v-model="form.date" dateFormat="yy-mm-dd" showIcon />
      <small v-if="errors.date" class="p-error">Date is required.</small>
    </div>

    <div class="p-field">
      <label for="status">Status</label>
      <Select
        id="status"
        v-model="form.status"
        :options="statusOptions"
        placeholder="Select a Status"
      />
      <small v-if="errors.status" class="p-error">Status is required.</small>
    </div>

    <div class="p-field">
      <label for="comment">Comment</label>
      <Textarea id="comment" v-model="form.comment" autoResize rows="3" />
    </div>

    <div class="flex justify-end space-x-2">
      <Button label="Cancel" class="p-button-text" @click="$emit('cancel')" />
      <Button label="Submit" type="submit" class="p-button-primary" />
    </div>
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
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
  return !Object.values(errors.value).some((e) => e)
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
</script>
