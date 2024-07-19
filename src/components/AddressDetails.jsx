import Map from "./Map";
import styles from "./css/addressdetails.module.css";

export default function AddressDetails({ location, addressDetails }) {
  const latitude = location.lat;
  const longitude = location.lng;

  return (
    <div>
      <div className={styles.mapContainer}>
        <Map location={location} latitude={latitude} longitude={longitude} />
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.first}>
          <h4>IP ADDRESS</h4>
          <p>{addressDetails.ip}</p>
        </div>
        <div className={styles.verticalBar}></div>
        <div className={styles.second}>
          <h4 className={styles.one}>LOCATION</h4>
          <p className={styles.two}>
            {location.region ? location.region : "---"}, {location.country}{" "}
            <br />
            {location.geonameId}
          </p>
        </div>
        <div className={styles.verticalBar}></div>
        <div className={styles.third}>
          <h4 className={styles.one}>TIMEZONE</h4>
          <p className={styles.two}>{location.timezone}</p>
        </div>
        <div className={styles.verticalBar}></div>
        <div className={styles.fourth}>
          <h4 className={styles.one}>ISP</h4>
          <p className={styles.two}>
            {addressDetails.isp ? addressDetails.isp : "Unkwown ISP"}
          </p>
        </div>
      </div>
    </div>
  );
}
