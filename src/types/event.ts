type Event = {
  id: number;
  title: string;
  datetime: Date;
  location: string;
  description: string;
  maxAttendees: number;
  category: string;
  image?: string;
};

export type { Event };
