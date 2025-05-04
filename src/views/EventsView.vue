<script lang="ts" setup>
import { ref } from 'vue';

import EventCard from '../components/EventCard.vue';
import type { Event } from '../types/event.ts';

const events = ref<Event[]>([
  {
    id: 1,
    title: 'Hackathon',
    datetime: new Date('2023-10-15'),
    location: 'Seattle, WA',
    description: 'Join us for a weekend of coding and innovation!',
    maxAttendees: 100,
    category: 'Tech',
  },
  {
    id: 2,
    title: 'Hackathon',
    datetime: new Date('2023-10-15'),
    location: 'Seattle, WA',
    description: 'Join us for a weekend of coding and innovation!',
    maxAttendees: 100,
    category: 'Tech',
  },
  {
    id: 3,
    title: 'Hackathon',
    datetime: new Date('2023-10-15'),
    location: 'Seattle, WA',
    description: 'Join us for a weekend of coding and innovation!',
    maxAttendees: 100,
    category: 'Tech',
  },
  {
    id: 4,
    title: 'Hackathon',
    datetime: new Date('2023-10-15'),
    location: 'Seattle, WA',
    description: 'Join us for a weekend of coding and innovation!',
    maxAttendees: 100,
    category: 'Tech',
  },
  {
    id: 5,
    title: 'Hackathon',
    datetime: new Date('2023-10-15'),
    location: 'Seattle, WA',
    description: 'Join us for a weekend of coding and innovation!',
    maxAttendees: 100,
    category: 'Tech',
  },
]);
</script>

<template>
  <main>
    <h1>Events</h1>
    <div class="event-list">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 75vw;
  margin: 0 auto;
}

.event-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  gap: 2rem;
}
</style>
