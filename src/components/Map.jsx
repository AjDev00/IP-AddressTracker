import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./css/addressdetails.module.css";

export default function Map({ location, latitude, longitude }) {
  //a conditional statement to display a loading message if the latitude and longitude is still undefined.
  if (latitude === undefined || longitude === undefined) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div>
      <div>
        <MapContainer
          center={[latitude, longitude]}
          zoom={13}
          className={styles.mapp}
          style={{ height: "400px", marginTop: "135px", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[latitude, longitude]}>
            <Popup>
              IP Address Location: {location.region}, {location.city}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
