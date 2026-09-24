import { HeritageSite } from '../types';

export const HERITAGE_SITES: HeritageSite[] = [
  {
    id: 'mysuru-palace',
    name: 'Mysuru Palace (Amba Vilas)',
    category: 'royal',
    categoryLabel: 'Palace • Royal Heritage',
    era: 'Wadiyar Dynasty',
    yearBuilt: '1912 CE',
    architect: 'Henry Irwin (Indo-Saracenic)',
    dynasty: 'Wadiyar Royal Dynasty (Maharaja Krishnaraja Wadiyar IV)',
    tagline: 'The crown jewel of Indian royal architecture and seat of the Wadiyar dynasty.',
    description: 'Commissioned by Maharani Kempananjammanni Vani Vilasa Sannidhana and designed by British architect Henry Irwin, Amba Vilas Palace is a three-story stone structure with marble domes and a 145-foot tower. Renowned for its Durbar Hall, Golden Royal Throne (Chinnada Simhasana), and stained glass ceilings imported from Glasgow.',
    historicalNote: 'Built after the old wooden palace burned down during a royal wedding in 1897, combining Rajput, Mughal, and Gothic styles in indestructible stone.',
    image: '/assets/images/landmarks/site_amba_vilas_palace.jpg',
    gallery: [
      '/assets/images/landmarks/site_amba_vilas_palace.jpg',
      '/assets/images/landmarks/site_amba_vilas_durbar.jpg',
      '/assets/images/hero/hero_mysuru_palace_night.jpg'
    ],
    rating: 4.8,
    reviewCount: 48200,
    entryFee: {
      indian: 100,
      foreign: 1000,
      camera: 50
    },
    timings: '10:00 AM – 05:30 PM (Daily)',
    illuminationTimings: 'Sundays & Public Holidays: 07:00 PM – 07:45 PM',
    duration: '2.5 to 3 Hours',
    coordinates: {
      lat: 12.3051,
      lng: 76.6551
    },
    distanceFromCenterKm: 0.0,
    address: 'Sayyaji Rao Road, Agrahara, Chamrajpura, Mysuru, Karnataka 570001',
    highlights: [
      'Over 97,000 electric bulbs illuminated on festive occasions',
      'Golden Howdah (750 kg pure gold Ambari)',
      'Kalyana Mantapa (Octagonal Marriage Pavilion with Belgian stained glass)',
      'Gombe Thotti (Doll Pavilion) housing ceremonial palanquins'
    ],
    audioGuideAvailable: true,
    audioDurationMinutes: 45,
    tags: ['Palace', 'Royal', 'Wadiyar', 'Architecture', 'Must-Visit']
  },
  {
    id: 'chamundi-hill',
    name: 'Chamundi Hill & Sri Chamundeshwari Temple',
    category: 'sacred',
    categoryLabel: 'Sacred • Spiritual Landmark',
    era: '12th Century (Hoysala & Vijayanagara)',
    yearBuilt: '12th Century CE / 1827 (Gopuram)',
    dynasty: 'Hoysalas, Vijayanagara Empire & Wadiyars',
    tagline: 'The sacred guardian peak overlooking the Mysuru plateau.',
    description: 'Perched at an elevation of 1,062 meters (3,489 ft), Chamundi Hill is the spiritual heartbeat of Mysuru. The temple is dedicated to Goddess Chamundeshwari who slayed the demon king Mahishasura. Features a 7-tier Dravidian Gopuram built in 1827 and 1,008 stone steps leading up the hillside.',
    historicalNote: 'En route to the temple atop the hill stands a massive 16-foot tall monolith of Nandi Bull carved in 1659 CE under Dodda Devaraja Wadiyar.',
    image: '/assets/images/landmarks/site_chamundi_hill_temple.jpg',
    gallery: [
      '/assets/images/landmarks/site_chamundi_hill_temple.jpg',
      '/assets/images/landmarks/site_chamundi_nandi_monolith.jpg',
      '/assets/images/hero/hero_chamundi_hill_gopuram.jpg'
    ],
    rating: 4.7,
    reviewCount: 32400,
    entryFee: {
      indian: 0,
      foreign: 0,
      camera: 0
    },
    timings: '07:30 AM – 02:00 PM | 03:30 PM – 06:00 PM | 07:30 PM – 09:00 PM',
    duration: '2 to 3 Hours',
    coordinates: {
      lat: 12.2724,
      lng: 76.6715
    },
    distanceFromCenterKm: 12.0,
    address: 'Chamundi Hill Road, Mysuru, Karnataka 570010',
    highlights: [
      '1,008 heritage stone steps constructed in 1659 CE',
      'Colossal Monolithic Nandi (16 ft high x 25 ft long)',
      'Statue of demon Mahishasura holding a sword and cobra',
      'Panoramic view of entire Mysuru city from Viewpoint'
    ],
    audioGuideAvailable: true,
    audioDurationMinutes: 30,
    tags: ['Sacred', 'Temple', 'Viewpoint', 'Trekking', 'Spiritual']
  },
  {
    id: 'jaganmohan-palace',
    name: 'Jaganmohan Palace & Art Gallery',
    category: 'cultural',
    categoryLabel: 'Palace • Art & Museum',
    era: '1861 CE',
    yearBuilt: '1861 CE',
    architect: 'Traditional Royal Craftsmen',
    dynasty: 'Mummadi Krishnaraja Wadiyar',
    tagline: 'The cradle of royal paintings housing masterpieces of Raja Ravi Varma.',
    description: 'Built in 1861 as an alternate residence for the Wadiyar monarchs, Jaganmohan Palace was converted into the Sri Jayachamarajendra Art Gallery in 1915. It houses over 2,000 royal artifacts, musical instruments, miniature paintings, and original oil paintings by Raja Ravi Varma including "Glow of Hope" (Lady with the Lamp) by S.L. Haldankar.',
    historicalNote: 'It was the site of early sessions of the Mysore Legislative Council (the first representative assembly in India).',
    image: '/assets/images/landmarks/site_jaganmohan_art_gallery.jpg',
    gallery: [
      '/assets/images/landmarks/site_jaganmohan_art_gallery.jpg',
      '/assets/images/landmarks/site_jaganmohan_ravi_varma.jpg'
    ],
    rating: 4.6,
    reviewCount: 14800,
    entryFee: {
      indian: 75,
      foreign: 300,
      camera: 0
    },
    timings: '08:30 AM – 05:30 PM (Daily)',
    duration: '1.5 to 2 Hours',
    coordinates: {
      lat: 12.3072,
      lng: 76.6492
    },
    distanceFromCenterKm: 0.8,
    address: 'Deshika Road, Chamrajpura, Mysuru, Karnataka 570024',
    highlights: [
      'Original Raja Ravi Varma masterpieces (Harischandra, Shakuntala)',
      'S.L. Haldankar’s world-famous watercolor "Lady with the Lamp"',
      'Royal French musical clocks with marching miniature soldiers',
      'Traditional Mysore style gold leaf (Gesso work) paintings'
    ],
    audioGuideAvailable: true,
    audioDurationMinutes: 35,
    tags: ['Art', 'Museum', 'Ravi Varma', 'Royal', 'History']
  },
  {
    id: 'devaraja-market',
    name: 'Devaraja Market',
    category: 'living',
    categoryLabel: 'Living Heritage • 130-Year Market',
    era: '1886 CE',
    yearBuilt: '1886 CE',
    dynasty: 'Chamaraja Wadiyar IX',
    tagline: 'A vibrant kaleidoscope of fragrant jasmine flowers, Mysore sandalwood, and spices.',
    description: 'Operating since the late 19th century, Devaraja Market stretches along Sayyaji Rao Road with over 800 vendors under heritage wooden rafters. It represents the breathing pulse of Mysuru daily culture, selling Mysuru Mallige (GI tagged Jasmine), Nanjangud Rasabale bananas, natural attar perfumes, and fresh sugarcane juice.',
    historicalNote: 'Built with open-air rectangular aisles and central fountains to promote air cooling in pre-electricity era.',
    image: '/assets/images/landmarks/site_devaraja_market.jpg',
    gallery: [
      '/assets/images/landmarks/site_devaraja_market.jpg',
      '/assets/images/landmarks/site_devaraja_jasmine_market.jpg',
      '/assets/images/hero/hero_devaraja_market_day.jpg'
    ],
    rating: 4.6,
    reviewCount: 21500,
    entryFee: {
      indian: 0,
      foreign: 0,
      camera: 0
    },
    timings: '06:00 AM – 09:30 PM (Daily)',
    duration: '1 to 1.5 Hours',
    coordinates: {
      lat: 12.3119,
      lng: 76.6521
    },
    distanceFromCenterKm: 1.4,
    address: 'Sayyaji Rao Road, Shivarampet, Mysuru, Karnataka 570001',
    highlights: [
      'Mysuru Mallige (GI-tagged royal jasmine) flower garland section',
      'Cones of multi-colored natural kumkum powders',
      'Traditional Ayurvedic remedies and natural attar perfumeries',
      'Authentic local Mysore Pak & filter coffee kiosks nearby'
    ],
    audioGuideAvailable: true,
    audioDurationMinutes: 20,
    tags: ['Market', 'Living Heritage', 'Street Life', 'Flowers', 'Sandalwood']
  },
  {
    id: 'st-philomenas-cathedral',
    name: "St. Philomena's Cathedral",
    category: 'architectural',
    categoryLabel: 'Architecture • Neo-Gothic Landmark',
    era: '1936 CE',
    yearBuilt: '1936 CE',
    architect: 'Daly (French Architect) / Inspired by Cologne Cathedral',
    dynasty: 'Nalwadi Krishnaraja Wadiyar (Patronized)',
    tagline: 'One of the tallest churches in Asia, soaring 175 feet in Neo-Gothic grace.',
    description: 'Constructed under the patronage of Nalwadi Krishnaraja Wadiyar for the Christian community of Mysuru, St. Philomena’s Cathedral features 175-foot twin spires reminiscent of Cologne Cathedral. The subterranean crypt preserves a third-century relic of Saint Philomena brought from Rome.',
    historicalNote: 'Maharaja Krishnaraja Wadiyar IV laid the foundation stone in October 1933, showcasing inter-faith royal harmony.',
    image: '/assets/images/landmarks/site_st_philomena_cathedral.jpg',
    gallery: [
      '/assets/images/landmarks/site_st_philomena_cathedral.jpg',
      '/assets/images/landmarks/site_st_philomena_stained_glass.jpg',
      '/assets/images/hero/hero_st_philomena_cathedral.jpg'
    ],
    rating: 4.6,
    reviewCount: 19800,
    entryFee: {
      indian: 0,
      foreign: 0,
      camera: 0
    },
    timings: '05:00 AM – 06:00 PM (Daily)',
    duration: '45 mins to 1 Hour',
    coordinates: {
      lat: 12.3209,
      lng: 76.6578
    },
    distanceFromCenterKm: 2.8,
    address: 'Lashkar Mohalla, Ashoka Road, Mysuru, Karnataka 570001',
    highlights: [
      'Twin spires rising 175 feet into the Mysuru skyline',
      'French stained glass panels depicting biblical parables',
      'Subterranean crypt preserving 3rd-century holy relic',
      'Cruciform layout with seating capacity of 800+ worshippers'
    ],
    audioGuideAvailable: true,
    audioDurationMinutes: 25,
    tags: ['Architecture', 'Gothic', 'Cathedral', 'Sacred', 'Heritage']
  },
  {
    id: 'karanji-lake',
    name: 'Karanji Lake & Nature Park',
    category: 'living',
    categoryLabel: 'Nature • Royal Lake Sanctuary',
    era: 'Early 20th Century',
    yearBuilt: 'Circa 1900 CE',
    dynasty: 'Wadiyar Royal Dynasty',
    tagline: 'A serene 90-acre wetland oasis nestled at the foot of Chamundi Hill.',
    description: 'Originally built by the King of Mysore as a percolation reservoir, Karanji Lake spans 90 acres with lush surrounding woodlands. Today it houses India’s largest walk-through aviary (20 meters high), a butterfly park with over 45 species, and pedal boating on tranquil waters.',
    historicalNote: 'Maintained by the Mysuru Zoo Authority as an eco-heritage wetland reserve.',
    image: '/assets/images/landmarks/site_karanji_lake_nature.jpg',
    gallery: [
      '/assets/images/landmarks/site_karanji_lake_nature.jpg'
    ],
    rating: 4.5,
    reviewCount: 16200,
    entryFee: {
      indian: 50,
      foreign: 100,
      camera: 25
    },
    timings: '08:30 AM – 05:30 PM (Closed on Tuesdays)',
    duration: '1.5 to 2 Hours',
    coordinates: {
      lat: 12.3023,
      lng: 76.6710
    },
    distanceFromCenterKm: 3.5,
    address: 'Near Mysuru Zoo, Chamundi Hill Road, Mysuru, Karnataka 570010',
    highlights: [
      "India's largest walk-through aviary with exotic birds",
      'Observation watchtower for birdwatchers',
      'Lush butterfly park on island sanctuary',
      'Pedal boating with reflections of Chamundi Hill'
    ],
    audioGuideAvailable: false,
    audioDurationMinutes: 0,
    tags: ['Nature', 'Lake', 'Birds', 'Eco-Tourism', 'Chamundi View']
  },
  {
    id: 'railway-museum',
    name: 'Mysuru Railway Museum',
    category: 'cultural',
    categoryLabel: 'Heritage Museum • Steam Era',
    era: '1979 CE',
    yearBuilt: '1979 CE',
    dynasty: 'Mysore State Railway (MSR) & Southern Railway',
    tagline: 'The second railway museum in India preserving vintage steam locomotives.',
    description: 'Established in 1979 by Indian Railways, the Mysuru Railway Museum chronicles the historic Mysore State Railway (MSR). Highlights include the opulent 1899 Maharani Saloon coach with dining parlor and vintage steam locomotives.',
    historicalNote: 'Mysore State was among the earliest princely states to pioneer its own railway network in 1879.',
    image: '/assets/images/landmarks/site_railway_museum_maharani.jpg',
    gallery: [
      '/assets/images/landmarks/site_railway_museum_maharani.jpg'
    ],
    rating: 4.5,
    reviewCount: 11400,
    entryFee: {
      indian: 50,
      foreign: 100,
      camera: 30
    },
    timings: '10:00 AM – 05:30 PM (Closed on Tuesdays)',
    duration: '1 to 1.5 Hours',
    coordinates: {
      lat: 12.3168,
      lng: 76.6437
    },
    distanceFromCenterKm: 2.1,
    address: 'KRS Road, Medar Block, Yadavagiri, Mysuru, Karnataka 570005',
    highlights: [
      'Maharani Saloon Carriage (1899) with teakwood interior',
      'ES 506 Narrow Gauge Steam Engine built in 1920',
      'Austin Rail Motor Car',
      'Mini Train ride for families around the heritage yard'
    ],
    audioGuideAvailable: true,
    audioDurationMinutes: 20,
    tags: ['Museum', 'Railways', 'Vintage', 'Family', 'History']
  },
  {
    id: 'lalitha-mahal-palace',
    name: 'Lalitha Mahal Palace',
    category: 'royal',
    categoryLabel: 'Royal Residence • Italian Renaissance',
    era: '1921 CE',
    yearBuilt: '1921 CE',
    architect: 'E.W. Fritchley',
    dynasty: 'Krishnaraja Wadiyar IV',
    tagline: 'A gleaming white Italian Renaissance palace designed for the Viceroy of India.',
    description: 'Built in 1921 by Maharaja Krishnaraja Wadiyar IV to host the Viceroy of India, Lalitha Mahal is modeled after St. Paul’s Cathedral in London. Built in pure Italian marble with Belgian crystal chandeliers and a double-flight marble staircase.',
    historicalNote: 'Positioned on an elevated ridge directly facing Chamundi Hill, providing cooling breezes and panoramic valley vistas.',
    image: '/assets/images/landmarks/site_lalitha_mahal_palace.jpg',
    gallery: [
      '/assets/images/landmarks/site_lalitha_mahal_palace.jpg'
    ],
    rating: 4.6,
    reviewCount: 8900,
    entryFee: {
      indian: 100,
      foreign: 500,
      camera: 0
    },
    timings: '10:00 AM – 06:00 PM (Daily)',
    duration: '1 to 2 Hours',
    coordinates: {
      lat: 12.2980,
      lng: 76.6900
    },
    distanceFromCenterKm: 5.5,
    address: 'Lalitha Mahal Nagar, Siddhartha Layout, Mysuru, Karnataka 570011',
    highlights: [
      'Twin Italian marble staircases and central dome cupola',
      'Crystal chandeliers and Venetian mirrors',
      'Panoramic view of Chamundi Hill from palace lawns'
    ],
    audioGuideAvailable: true,
    audioDurationMinutes: 25,
    tags: ['Palace', 'White Palace', 'Renaissance', 'Luxury', 'Royal']
  }
];
