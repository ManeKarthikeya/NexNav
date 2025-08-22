import React, { useEffect, useRef } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl, { Marker } from 'mapbox-gl';
import { Activity, Itinerary } from './ChatBox';
import { useTripDetail } from '@/app/provider';

function GlobalMap() {
    const mapContainerRef = useRef<HTMLDivElement | null>(null);
    const mapRef = useRef<mapboxgl.Map | null>(null);
    //@ts-ignore
    const {tripDetailInfo} = useTripDetail();
    
    useEffect(()=>{
        if (!mapContainerRef.current) return;
        
        mapboxgl.accessToken = process?.env?.NEXT_PUBLIC_MAPBOX_API_KEY || "";
        
        if(!mapRef.current){
            mapRef.current = new mapboxgl.Map({
                container: mapContainerRef.current,
                style: 'mapbox://styles/mapbox/streets-v12',
                center: [0, 20], // Better initial center for global view
                zoom: 1.5, // Better zoom level for global view
                projection: 'globe'
            });

            // Handle map resize when container changes
            const resizeObserver = new ResizeObserver(() => {
                mapRef.current?.resize();
            });
            
            if (mapContainerRef.current) {
                resizeObserver.observe(mapContainerRef.current);
            }

            return () => {
                resizeObserver.disconnect();
            };
        }

        const markers: mapboxgl.Marker[] = [];

        if(tripDetailInfo?.itinerary){
            tripDetailInfo.itinerary.forEach((itinerary: Itinerary)=>{
                itinerary.activities.forEach((activity: Activity)=>{
                    if(activity?.geo_coordinates?.longitude && activity?.geo_coordinates?.latitude){
                        const marker = new mapboxgl.Marker({color: 'red'})
                            .setLngLat([activity.geo_coordinates.longitude, activity.geo_coordinates.latitude])
                            .setPopup(new mapboxgl.Popup({ offset: 25 }).setText(activity.place_name))
                            .addTo(mapRef.current!);
                        markers.push(marker);
                    }
                });
            });

            // Fit map to show all markers if there are any
            if (markers.length > 0) {
                const bounds = new mapboxgl.LngLatBounds();
                markers.forEach(marker => {
                    // @ts-ignore
                    bounds.extend(marker.getLngLat());
                });
                mapRef.current.fitBounds(bounds, { padding: 50, maxZoom: 10 });
            }
        }

        return () => {
            markers.forEach(marker => marker.remove());
        };
    },[tripDetailInfo]);

  return (
    <div className="w-full h-full relative">
      <div 
        ref={mapContainerRef}
        className="w-full h-full rounded-lg"
      />
    </div>
  )
}

export default GlobalMap