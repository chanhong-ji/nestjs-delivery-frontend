import { useEffect, useRef, useState } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import variables from '../variables';

interface ICoords {
    lat: number;
    lng: number;
}

const DEFAULT_CENTER_LAT = 36.5;
const DEFAULT_CENTER_LNG = 127.5;

export default function Dashboard() {
    const ref = useRef<HTMLDivElement>(null);
    const [driverCoords, setDriverCoords] = useState<ICoords>();
    const [map, setMap] = useState<google.maps.Map>();
    const [marker, setMarker] = useState<google.maps.Marker>();

    const render = (status: Status) => {
        if (status === Status.FAILURE) {
            return <div>render status failure</div>;
        }
        return <div id='spinner'></div>;
    };

    const createMap = (element: HTMLDivElement) => {
        const newMap = new window.google.maps.Map(element, {
            center: driverCoords,
            zoom: 15,
        });
        setMap(newMap);
        return newMap;
    };

    const createMarker = (map: google.maps.Map) => {
        if (!driverCoords || !map) return null;

        const image = {
            url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            size: new google.maps.Size(20, 32),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 32),
        };

        const newMarker = new google.maps.Marker({
            position: { lat: driverCoords.lat, lng: driverCoords.lng },
            icon: image,
            map,
        });

        setMarker(newMarker);
    };

    const getDirection = () => {
        if (map && driverCoords) {
            const mapRenderer = new google.maps.DirectionsRenderer();
            const mapService = new google.maps.DirectionsService();

            mapRenderer.setMap(map);
            mapService.route(
                {
                    origin: {
                        location: new google.maps.LatLng(
                            driverCoords.lat,
                            driverCoords.lng
                        ),
                    },

                    destination: {
                        location: new google.maps.LatLng(
                            driverCoords.lat + 0.05,
                            driverCoords.lng + 0.05
                        ),
                    },
                    travelMode: google.maps.TravelMode.TRANSIT,
                },
                (result) => {
                    mapRenderer.setDirections(result);
                }
            );
        }
    };

    const watchPosition = () => {
        navigator.geolocation.watchPosition(
            (position) => {
                setDriverCoords({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
            },
            (error) => {
                setDriverCoords({
                    lat: DEFAULT_CENTER_LAT,
                    lng: DEFAULT_CENTER_LNG,
                });
            },
            { enableHighAccuracy: true }
        );
    };

    useEffect(() => {
        watchPosition();
    }, []);

    useEffect(() => {
        if (!ref.current) return;

        const map = createMap(ref.current);
        createMarker(map);
    }, [ref.current]);

    useEffect(() => {
        if (driverCoords && map && marker) {
            map.panTo(driverCoords);
            marker.setPosition(driverCoords);
        }
    }, [driverCoords]);

    return (
        <>
            <div className='h-2/3 w-full '>
                <Wrapper apiKey={variables.googleMap.apiKey} render={render}>
                    <div id='map' ref={ref} className='w-full h-full'></div>
                </Wrapper>
            </div>
        </>
    );
}
