<script setup lang="ts">
import { ref } from 'vue';
import { useToast } from 'primevue';
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import DatePicker from 'primevue/datepicker';
import Select from 'primevue/select';
import InputNumber from 'primevue/inputnumber';
import FileUpload, { type FileUploadSelectEvent } from 'primevue/fileupload';
import Button from 'primevue/button';
import type { Event } from '@/types/event';

const toast = useToast();

const title = ref('');
const description = ref('');
const datetime = ref<Date | null>(null);
const location = ref('');
const category = ref('');
const maxAttendees = ref(1);

const categoryOptions = [
  'Club',
  'Culture',
];

const image = ref<string | null>(null);

function uploadFile(event: FileUploadSelectEvent) {
  const file = event.files[0];
  const reader = new FileReader();

  reader.onload = async (e) => {
    if (e.target === null) {
      return;
    }
    const result = e.target.result;
    if (result === null) {
      toast.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Failed to read file.',
        life: 3000,
      });
      return;
    }
    if (typeof result !== 'object') {
      toast.add({
        severity: 'error',
        summary: 'Error',
        detail: 'File format not supported.',
        life: 3000,
      });
      return;
    }
    // Assuming the file is an image, we can convert it to ArrayBuffer
    const arrayBuffer = new Uint8Array(result as ArrayBuffer);
    const blob = new Blob([arrayBuffer], { type: file.type });
    const url = URL.createObjectURL(blob);
    image.value = url;
    toast.add({
      severity: 'info',
      summary: 'File Uploaded',
      detail: `File ${file.name} uploaded successfully.`,
      life: 3000,
    });
  };

  reader.readAsDataURL(file);
}

function createEvent() {
  if (!title.value || !description.value || !datetime.value || !location.value || !category.value || maxAttendees.value < 1) {
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Please fill in all fields correctly.',
      life: 3000,
    });
    return;
  }

  const eventData: Event = {
    id: 0,
    title: title.value,
    description: description.value,
    datetime: datetime.value,
    location: location.value,
    category: category.value,
    maxAttendees: maxAttendees.value,
    image: image.value || undefined,
  };

  console.log('Event Created:', eventData);
  toast.add({
    severity: 'success',
    summary: 'Success',
    detail: 'Event created successfully!',
    life: 3000,
  });
}
</script>

<template>
  <div class="create-event-view">
    <h1>Create Event</h1>
    <div class="fields">
      <FloatLabel variant="on">
        <InputText v-model="title" />
        <label>Title</label>
      </FloatLabel>
      <FloatLabel variant="on">
        <Textarea v-model="description" rows="5" cols="30" />
        <label>Description</label>
      </FloatLabel>
      <DatePicker id="calendar-12h" v-model="datetime" showTime showIcon hourFormat="12" />
      <FloatLabel variant="on">
        <InputText v-model="location" />
        <label>Location</label>
      </FloatLabel>
      <Select v-model="category" :options="categoryOptions" placeholder="Select a category" />
      <FloatLabel variant="on">
        <InputNumber v-model="maxAttendees" showButtons :min="1" />
        <label>Max Attendees</label>
      </FloatLabel>
      <FileUpload mode="basic" accept="image/*" :maxFileSize="10485760" chooseLabel="Event Image"
        @select="uploadFile" />
    </div>
    <Button label="Create Event" icon="pi pi-check" severity="success" @click="createEvent" />
  </div>
</template>

<style scoped>
.create-event-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 0 auto;
}

.create-event-view h1 {
  margin-bottom: 1rem;
}

.fields {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 30%;
}
</style>
