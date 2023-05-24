import { useMap } from 'react-map-gl';

const icons = [
  'attraction_small',
  'attraction_medium',
  'attraction_big',
  'attraction_extra',
  'restaurantPoint',
];

export default function MapImage() {
  const { current: map } = useMap();

  for (const icon of icons) {
    if (!map?.hasImage(icon)) {
      map?.loadImage(`/images/${icon}.png`, (error, image) => {
        if (error) throw error;
        if (!map.hasImage(icon)) map.addImage(icon, image as any, { sdf: false });
      });
    }
  }
  return null;
}
