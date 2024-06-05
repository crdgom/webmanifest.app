//* Offline Service Worker component
//* Since: 0.0.0
//* Author: @crdgom
//* Description: Offline Service Worker component, its main propose is register and
//* validate if the app user has internet connectivity if not it presents a component
//* indicating the offline state.

import { useEffect } from "react";

export const ServiceWorkerRegistration = () => {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("./Workers/OfflineServiceWorker.js")
          .then((registration) => {
            console.log(
              "ServiceWorker registration successful with scope: ",
              registration.scope
            );
          })
          .catch((error) => {
            console.error("ServiceWorker registration failed: ", error);
          });
      });
    }
  }, []);

  return null;
};
