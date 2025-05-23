import { useEffect, useRef } from 'react';
import "./CustomPopUp.css";

// ngl I chat this one


export default function MapPopup({ map, position, content }) {
  const popupRef = useRef();

  useEffect(() => {
    if (!map || !window.google || !position) return;

    class Popup extends window.google.maps.OverlayView {
      constructor(position, content) {
        super();
        this.position = position;
        content.classList.add("popup-bubble");

        const bubbleAnchor = document.createElement("div");
        bubbleAnchor.classList.add("popup-bubble-anchor");
        bubbleAnchor.appendChild(content);

        this.containerDiv = document.createElement("div");
        this.containerDiv.classList.add("popup-container");
        this.containerDiv.appendChild(bubbleAnchor);

        Popup.preventMapHitsAndGesturesFrom(this.containerDiv);
      }

      onAdd() {
        this.getPanes().floatPane.appendChild(this.containerDiv);
      }

      onRemove() {
        if (this.containerDiv.parentElement) {
          this.containerDiv.parentElement.removeChild(this.containerDiv);
        }
      }

      draw() {
        const divPosition = this.getProjection().fromLatLngToDivPixel(this.position);
        const display =
          Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000
            ? "block"
            : "none";

        if (display === "block") {
          // const offSetX=30;
          // const offSetY=-20;

          this.containerDiv.style.left = divPosition.x + "px";
          this.containerDiv.style.top = divPosition.y + "px";
        }

        if (this.containerDiv.style.display !== display) {
          this.containerDiv.style.display = display;
        }
      }
    }

    const popup = new Popup(position, content);
    popup.setMap(map);

    popupRef.current = popup;

    return () => {
      popup.setMap(null);
    };
  }, [map, position, content]);

  return null; // No JSX rendered
}