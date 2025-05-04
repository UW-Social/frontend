<script lang="ts" setup>
import { defineProps } from "vue";
import Card from "primevue/card";
import Button from "primevue/button";
import type { Event } from "../types/event.ts";

defineProps<{
  event: Event;
}>();

function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" };
  return date.toLocaleDateString(undefined, options);
}

const baseUrl = import.meta.env.BASE_URL;
const imageUrl = (image: string) => {
  return image.startsWith("http") ? image : `${baseUrl}${image}`;
};
</script>

<template>
  <Card style="width: 20rem; overflow: hidden">
    <template #header>
      <img alt="Event Image" :src="imageUrl(event.image || '/event.jpg')" class="event-img" />
    </template>
    <template #title>{{ event.title }}</template>
    <template #subtitle>
      {{ formatDate(event.datetime) }}
      <br />
      {{ event.location }}
    </template>
    <template #content>
      <p>{{ event.description }}</p>
    </template>
    <template #footer>
      <div>
        <Button label="Details" severity="secondary" outlined />
        <Button label="Join" />
      </div>
    </template>
  </Card>
</template>

<style scoped>
.event-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
</style>
