export interface PhilosophyPillar {
  id: string;
  number: string;
  title: string;
  description: string;
}

export const philosophyPillars: PhilosophyPillar[] = [
  {
    id: 'open-fire',
    number: '01',
    title: 'Open Fire Cooking',
    description: 'Bold flavors created over live fire.',
  },
  {
    id: 'seasonal',
    number: '02',
    title: 'Seasonal Ingredients',
    description: 'Fresh ingredients chosen with intention.',
  },
  {
    id: 'hospitality',
    number: '03',
    title: 'Thoughtful Hospitality',
    description: 'Warm service from arrival to farewell.',
  },
];
