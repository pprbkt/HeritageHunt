export type HeritageCategory = 'all' | 'royal' | 'sacred' | 'cultural' | 'architectural' | 'living';

export interface HeritageSite {
  id: string;
  name: string;
  category: HeritageCategory;
  categoryLabel: string;
  era: string;
  yearBuilt: string;
  architect?: string;
  dynasty: string;
  tagline: string;
  description: string;
  historicalNote: string;
  image: string;
  gallery: string[];
  rating: number;
  reviewCount: number;
  entryFee: {
    indian: number;
    foreign: number;
    camera?: number;
  };
  timings: string;
  illuminationTimings?: string;
  duration: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  distanceFromCenterKm: number;
  address: string;
  highlights: string[];
  audioGuideAvailable: boolean;
  audioDurationMinutes: number;
  tags: string[];
}

export interface Experience {
  id: string;
  title: string;
  category: string;
  duration: string;
  priceINR: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  description: string;
  includes: string[];
  timeSlot: string;
  meetingPoint: string;
}

export interface ItineraryStop {
  id: string;
  time: string;
  siteId: string;
  name: string;
  duration: string;
  activity: string;
  distanceFromPrev: string;
  travelTime: string;
  transportMode: 'walk' | 'auto' | 'car';
  tip: string;
}

export interface TravelerStory {
  id: string;
  author: string;
  origin: string;
  avatar: string;
  rating: number;
  siteVisited: string;
  date: string;
  comment: string;
  photoUrl: string;
  tag: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  progress: number;
  total: number;
  badgeColor: string;
}
