import image from "./images/pattern-bg-desktop.png";
import image1 from "./images/pattern-bg-mobile.png";
import styles from "./css/header.module.css";
import Title from "./Title";
import AddressDetails from "./AddressDetails";
import { useEffect, useState } from "react";

export default function Header() {
  //state variable to store user input.
  const [inputValue, setInputValue] = useState("8.8.8.8");

  //state variable to store user clicks.
  const [clicked, setClicked] = useState(0);

  //state variable to store the object data we are getting from the API.
  const [addressDetails, setAddressDetails] = useState({});

  //state variable to store the location data of the API in an array.
  const [location, setLocation] = useState([]);

  //state variable to store error.
  const [error, setError] = useState("");

  const URL = `https://geo.ipify.org/api/v2/country,city`;
  const API_KEY = "at_AfVXdvnJ9YpbK4fAgSpltsPAOCbio";

  //function to handle change in user input.
  function handleChange(e) {
    setInputValue(e.target.value);
  }

  //function to increase user click by 1.
  function handleClick() {
    setClicked((clicked) => clicked + 1);
  }

  useEffect(() => {
    async function getAddress() {
      try {
        //fetch data.
        const res = await fetch(
          `${URL}?apiKey=${API_KEY}&ipAddress=${inputValue}`
        );

        //handle error.
        if (!res.ok) {
          throw Error("Could not fetch data");
        }

        //get data.
        const data = await res.json();
        console.log(data);
        setAddressDetails(data);
        setLocation(data.location);
      } catch (error) {
        console.log("Error fetching data:", error.message);
        setError("Error fetching data: " + error.message);
      }
    }

    getAddress();
  }, [clicked]);

  return (
    <div>
      <div className={styles.headerContainer}>
        <img className={styles.image} src={image} alt="" />
        <Title
          handleClick={handleClick}
          inputValue={inputValue}
          handleChange={handleChange}
        />
        <span className={styles.error}>
          {error ? (
            error
          ) : (
            <AddressDetails
              error={error}
              location={location}
              addressDetails={addressDetails}
            />
          )}
        </span>
      </div>
    </div>
  );
}
