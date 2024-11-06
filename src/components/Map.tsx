import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { markers } from '../constants/travelPoints';
import { MarkerData } from '../types/markers';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN!;

interface MapProps {
  isDarkMode: boolean;
}

const Map: React.FC<MapProps> = ({ isDarkMode }) => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1200);
  const [showMessage, setShowMessage] = useState<boolean>(false);
  let timeoutId: NodeJS.Timeout | null = null;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1200);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const mapStyle = isDarkMode ? 'mapbox://styles/mapbox/dark-v10' : 'mapbox://styles/mapbox/light-v10';

    const mapbox = new mapboxgl.Map({
      container: 'mapbox',
      style: mapStyle,
      center: [25, 50],
      zoom: isMobile ? 1 : 2,
      scrollZoom: isMobile, // Enable scroll zoom on mobile
      dragPan: isMobile,    // Enable drag pan on mobile
    });

    mapbox.addControl(new mapboxgl.NavigationControl(), 'top-right');
    mapbox.addControl(new mapboxgl.FullscreenControl());
    mapbox.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: { enableHighAccuracy: true },
        trackUserLocation: true,
      })
    );

    // Add markers to the map
    mapbox.on('load', () => {
      markers.forEach((marker: MarkerData) => {
        const imageUrl = marker.imageUrl || 'https://via.placeholder.com/300x200?text=No+Image';

        const popupContent = `
          <div class="popup-content">
            <h3 class="popup-title">${marker.location}</h3>
            <p class="popup-coordinates">Coordinates: ${marker.coords[1].toFixed(2)}, ${marker.coords[0].toFixed(2)}</p>
            <img src="${imageUrl}" alt="${marker.location}" class="popup-image" />
          </div>
        `;

        const popup = new mapboxgl.Popup({ closeButton: false }).setHTML(popupContent);

        new mapboxgl.Marker()
          .setLngLat(marker.coords)
          .setPopup(popup) // Popups are clickable without holding a key
          .addTo(mapbox);
      });
    });

    // Apply restrictions only on desktop
    if (!isMobile) {
      const handleKeydown = (e: KeyboardEvent) => {
        if (e.metaKey || e.ctrlKey) {
          setShowMessage(false); // Hide message if it’s showing
          mapbox.scrollZoom.enable();
          mapbox.dragPan.enable();
        }
      };

      const handleKeyup = () => {
        mapbox.scrollZoom.disable();
        mapbox.dragPan.disable();
      };

      const handleUserAttempt = (event: MouseEvent | WheelEvent) => {
        if (!event.ctrlKey && !event.metaKey) {
          event.preventDefault();
          setShowMessage(true);

          // Clear any existing timeout
          if (timeoutId) clearTimeout(timeoutId);

          // Hide message after 3 seconds of inactivity
          // eslint-disable-next-line react-hooks/exhaustive-deps
          timeoutId = setTimeout(() => setShowMessage(false), 3000);
        }
      };

      document.addEventListener('keydown', handleKeydown);
      document.addEventListener('keyup', handleKeyup);
      mapbox.getContainer().addEventListener('mousedown', handleUserAttempt);
      mapbox.getContainer().addEventListener('wheel', handleUserAttempt);

      // Cleanup listeners on unmount
      return () => {
        document.removeEventListener('keydown', handleKeydown);
        document.removeEventListener('keyup', handleKeyup);
        mapbox.getContainer().removeEventListener('mousedown', handleUserAttempt);
        mapbox.getContainer().removeEventListener('wheel', handleUserAttempt);
        if (timeoutId) clearTimeout(timeoutId);
      };
    }

    return () => mapbox.remove();
  }, [isMobile, isDarkMode]);

  return (
    <div className="flex justify-center p-4 relative">
      <div id="mapbox" style={{ width: '100%', height: isMobile ? '400px' : '700px' }}></div>

      {showMessage && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white font-semibold">
          Hold Command (Mac) or Ctrl (Windows) to interact with the map
        </div>
      )}
    </div>
  );
};

export default Map;
