import React, { useEffect, useRef } from "react";
import OLMap from "ol/Map";
import View from "ol/View";
import OSM from "ol/source/OSM";
import { useGeographic } from "ol/proj";
import VectorSource from "ol/source/Vector";
import Overlay from "ol/Overlay";
import GeoJSON from "ol/format/GeoJSON";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { Icon, Stroke, Style } from "ol/style";
import { FullScreen, defaults as defaultControls } from "ol/control.js";
import "ol/ol.css";

export default function Mapa(): React.JSX.Element {
  const mapRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<OLMap | null>(null);

  useEffect(() => {
    if (!mapRef.current || !popupRef.current) return;

    // Initialize map
    useGeographic();

    const rasterLayer = new TileLayer({
      source: new OSM(),
    });

    const map = new OLMap({
      controls: defaultControls().extend([new FullScreen()]),
      view: new View({
        center: [-51.40775, -22.12103],
        zoom: 15,
        maxZoom: 19,
        projection: "EPSG:3857",
      }),
      layers: [rasterLayer],
      target: mapRef.current,
    });

    mapInstanceRef.current = map;

    // Icon styles
    const createIconStyle = (color: string, strokeColor: string) =>
      new Style({
        image: new Icon({
          anchor: [0.5, 1],
          scale: 0.5,
          anchorXUnits: "fraction",
          anchorYUnits: "fraction",
          src: `https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-2x-${color}.png`,
        }),
        stroke: new Stroke({
          color: strokeColor,
          width: 7,
        }),
      });

    const iconStyles: Record<string, Style> = {
      mercados: createIconStyle("blue", "#3274A3"),
      compras: createIconStyle("gold", "#C1A32D"),
      hospitais: createIconStyle("red", "#982E40"),
      farmacias: createIconStyle("orange", "#98652E"),
      autoridades: createIconStyle("grey", "#6B6B6B"),
    };

    const layers = ["mercados", "compras", "hospitais", "farmacias", "autoridades"];

    const popup = popupRef.current;
    const popupOverlay = new Overlay({
      element: popup,
      /*autoPan: true,
        autoPanAnimation: {
          duration: 250,
        },*/
    });

    map.addOverlay(popupOverlay);

    // Add layers
    layers.forEach((layer) => {
      const vectorSource = new VectorSource({
        url: `https://cdn.jsdelivr.net/gh/cacic-fct/manual-do-calouro@main/map/${layer}.geojson`,
        format: new GeoJSON(),
      });

      const vectorLayer = new VectorLayer({
        source: vectorSource,
        style: iconStyles[layer],
      });

      map.addLayer(vectorLayer);
    });

    // Popup interactions
    map.on("singleclick", (event) => {
      map.forEachFeatureAtPixel(
        event.pixel,
        (feature) => {
          const name = feature.get("name");
          const description = feature.get("description") || "";
          const maps = feature.get("maps");

          let content = `<span>${name}</span>`;
          if (description) {
            content += `<br>${description}`;
          }
          if (maps) {
            content += `<br><a href="https://goo.gl/maps/${maps}" target="_blank">Mais informações</a>`;
          }

          popup.innerHTML = content;
          popup.hidden = false;
          popupOverlay.setPosition(event.coordinate);
        },
        { hitTolerance: 6 }
      );
    });

    map.on("movestart", () => {
      popup.hidden = true;
    });

    map.on("pointermove", (e) => {
      const pixel = map.getEventPixel(e.originalEvent);
      const hit = map.hasFeatureAtPixel(pixel);
      const target = map.getTarget() as HTMLElement;

      if (target) {
        target.style.cursor = hit ? "pointer" : "";
      }
    });

    // Cleanup
    return () => {
      map.setTarget(undefined);
    };
  }, []);

  return (
    <>
      <style>{`
        .map-container {
          width: 100%;
          height: 80vh;
          padding-top: 20px;
          padding-bottom: 20px;
        }

        .popup {
          border-radius: 5px;
          border: 1px solid #808080;
          background-color: #ffffffee;
          padding: 10px 15px;
          display: block;
          color: #000;
          max-width: 200px;
          min-height: 50px;
          line-height: 1;
        }

        .popup span {
          font-weight: 700;
        }
      `}</style>
      <div className="map-container">
        <div ref={mapRef} style={{ width: "100%", height: "100%" }}>
          <div ref={popupRef} className="popup" hidden></div>
        </div>
      </div>
    </>
  );
}
