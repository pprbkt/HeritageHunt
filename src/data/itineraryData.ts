import { ItineraryStop, TravelerStory, Achievement } from '../types';

export const DEFAULT_ITINERARY: ItineraryStop[] = [
  {
    id: 'stop-1',
    time: '09:00 AM',
    siteId: 'mysuru-palace',
    name: 'Mysuru Palace (Amba Vilas)',
    duration: '2.5 Hours',
    activity: 'Explore the Durbar Hall, Kalyana Mantapa, and royal weapon armory before crowds peak.',
    distanceFromPrev: '0.0 km',
    travelTime: 'Starting Point',
    transportMode: 'walk',
    tip: 'Book electronic audio guide at entry gate for royal historical anecdotes.'
  },
  {
    id: 'stop-2',
    time: '11:45 AM',
    siteId: 'jaganmohan-palace',
    name: 'Jaganmohan Palace & Art Gallery',
    duration: '1.5 Hours',
    activity: 'View original Raja Ravi Varma oil paintings and S.L. Haldankar’s "Glow of Hope".',
    distanceFromPrev: '0.8 km',
    travelTime: '4 min drive / 10 min walk',
    transportMode: 'walk',
    tip: 'Visit the upper floor to listen to the French musical clock chime on the hour.'
  },
  {
    id: 'stop-3',
    time: '01:30 PM',
    siteId: 'devaraja-market',
    name: 'Devaraja Market & Mysore Pak Tasting',
    duration: '1.5 Hours',
    activity: 'Experience Mysore jasmine fragrance, spices, and lunch with authentic Mysore Masala Dosa.',
    distanceFromPrev: '1.4 km',
    travelTime: '6 min drive',
    transportMode: 'auto',
    tip: 'Buy genuine Mysore Pak warm from Guru Sweets (heritage creators since Wadiyar era).'
  },
  {
    id: 'stop-4',
    time: '03:30 PM',
    siteId: 'st-philomenas-cathedral',
    name: "St. Philomena's Cathedral",
    duration: '1 Hour',
    activity: 'Marvel at the 175-ft Neo-Gothic twin spires and descend into the sacred underground crypt.',
    distanceFromPrev: '2.8 km',
    travelTime: '8 min drive',
    transportMode: 'auto',
    tip: 'Observe the sunlight reflecting through French stained glass onto the nave.'
  },
  {
    id: 'stop-5',
    time: '05:00 PM',
    siteId: 'chamundi-hill',
    name: 'Chamundi Hill & Sunset Viewpoint',
    duration: '2 Hours',
    activity: 'Pay homage at Sri Chamundeshwari Temple and watch the golden sunset over Mysuru valley.',
    distanceFromPrev: '12.0 km',
    travelTime: '22 min drive',
    transportMode: 'car',
    tip: 'Stop at the monolithic Nandi Bull midway during your descent.'
  },
  {
    id: 'stop-6',
    time: '07:15 PM',
    siteId: 'mysuru-palace',
    name: 'Mysuru Palace Grand Illumination',
    duration: '45 Mins',
    activity: 'Witness nearly 100,000 bulbs burst into golden radiance as the palace band plays.',
    distanceFromPrev: '12.0 km',
    travelTime: '20 min drive back to city center',
    transportMode: 'car',
    tip: 'Stand near the central lawn fountain for the best symmetry and photography.'
  }
];

export const TRAVELER_STORIES: TravelerStory[] = [
  {
    id: 'story-1',
    author: 'Ananya Sharma',
    origin: 'Bengaluru, India',
    avatar: '/assets/images/landmarks/site_amba_vilas_palace.jpg',
    rating: 5,
    siteVisited: 'Mysuru Palace & Devaraja Market',
    date: 'February 2026',
    comment: 'The palace was grand beyond words, but finding the century-old flower stalls in Devaraja Market through Heritage Hunt made the journey unforgettable!',
    photoUrl: '/assets/images/landmarks/site_amba_vilas_palace.jpg',
    tag: 'Royal & Living Heritage'
  },
  {
    id: 'story-2',
    author: 'Marcus Weber',
    origin: 'Munich, Germany',
    avatar: '/assets/images/landmarks/site_st_philomena_cathedral.jpg',
    rating: 5,
    siteVisited: "St. Philomena's Cathedral",
    date: 'January 2026',
    comment: 'As someone from Germany, seeing Cologne Cathedral’s architectural sibling right in the middle of Karnataka was breathtaking. The audio guide was stellar.',
    photoUrl: '/assets/images/landmarks/site_st_philomena_cathedral.jpg',
    tag: 'Architecture'
  },
  {
    id: 'story-3',
    author: 'Dr. Praveen Kumar',
    origin: 'Mysuru, Karnataka',
    avatar: '/assets/images/landmarks/site_jaganmohan_art_gallery.jpg',
    rating: 5,
    siteVisited: 'Jaganmohan Palace & Lalitha Mahal',
    date: 'March 2026',
    comment: 'Even as a lifelong Mysorean, Heritage Hunt gave me historical details about the Wadiyar royal lineages that I had never heard before. Truly world class.',
    photoUrl: '/assets/images/landmarks/site_jaganmohan_art_gallery.jpg',
    tag: 'Local Heritage'
  }
];

export const INITIAL_ACHIEVEMENTS: Achievement[] = [
  {
    id: 'ach-1',
    title: 'Palace Explorer',
    description: 'Visited both Amba Vilas and Jaganmohan Palaces',
    icon: 'Crown',
    unlocked: true,
    progress: 2,
    total: 2,
    badgeColor: 'text-amber-400 bg-amber-950/40 border-amber-500/40'
  },
  {
    id: 'ach-2',
    title: 'Heritage Walker',
    description: 'Walked 5+ km through historic Agraharas & markets',
    icon: 'Footprints',
    unlocked: true,
    progress: 5.2,
    total: 5.0,
    badgeColor: 'text-emerald-400 bg-emerald-950/40 border-emerald-500/40'
  },
  {
    id: 'ach-3',
    title: 'Mysuru Historian',
    description: 'Listened to 5 audio guides on Wadiyar dynasty',
    icon: 'BookOpen',
    unlocked: false,
    progress: 3,
    total: 5,
    badgeColor: 'text-mysuru-gold bg-yellow-950/40 border-mysuru-gold/40'
  },
  {
    id: 'ach-4',
    title: 'Culture Seeker',
    description: 'Sampled GI-tagged Mysore Mallige & Mysore Pak',
    icon: 'Sparkles',
    unlocked: true,
    progress: 2,
    total: 2,
    badgeColor: 'text-rose-400 bg-rose-950/40 border-rose-500/40'
  },
  {
    id: 'ach-5',
    title: 'Dasara Master',
    description: 'Experienced the 100,000 bulb Grand Illumination',
    icon: 'Flame',
    unlocked: false,
    progress: 0,
    total: 1,
    badgeColor: 'text-amber-500 bg-amber-950/40 border-amber-500/40'
  }
];
