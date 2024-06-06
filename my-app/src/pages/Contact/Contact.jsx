import React from "react";
import styles from "../Contact/contact.module.scss";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
function Contact() {
  const containerStyle = {
    width: "100%",
    height: "500px",
  };
  const center = {
    lat: 40.4093,
    lng: 49.8671,
  };
  return (
    <section id={styles.contacts}>
      <div className={styles.container}>
        <LoadScript googleMapsApiKey="AIzaSyBLvSM2XPaO72DVM7qgwDd-fkFlRPT8DoI">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          ></GoogleMap>
        </LoadScript>
        <div className={styles.formimagepart}>
          <div className={styles.imagepart}>
            <img
              src="https://i.pinimg.com/564x/24/87/18/248718fd0ed5a0ffa56b50d64acd1f51.jpg"
              alt=""
            />
          </div>
          <div className={styles.formparts}>
            <h1>Contact Us</h1>
            <form>
              <div className={styles.formpart}>
                <label htmlFor="Name">Ad</label>
                <input
                  type="text"
                  name="Name"
                  id="name"
                  placeholder="Adınızı daxil edin"
                />
              </div>
              <div className={styles.formpart}>
                <label htmlFor="surname">Soyad</label>
                <input
                  type="text"
                  name="surname"
                  id="surname"
                  placeholder="Soyadınızı daxil edin"
                />
              </div>
              <div className={styles.formpart}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email daxil edin"
                />
              </div>
              <div className={styles.formpart}>
                <label htmlFor="number">Əlaqə nömrəsi</label>
                <input
                  type="number"
                  name="number"
                  id="number"
                  placeholder="Əlaqə nömrəsi daxil edin"
                />
              </div>
              <div className={styles.formpart}>
                <label htmlFor="notice">Qeyd</label>
                <textarea
                  name="notice"
                  id="notice"
                  cols="10"
                  rows="5"
                  placeholder
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
