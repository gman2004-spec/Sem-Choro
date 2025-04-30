import style from "./Contact.module.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { Menu } from "./Menu"; // Corrigido o caminho do Menu, ajuste conforme sua estrutura

function Contact() {
  const position = [51.505, -0.09]; // Coordenadas para Londres

  return (
    <>
      <Menu option01="Voltar à página principal" />
      <div className={style.container}>
        <h2 className={style.tt}>Mapa</h2>
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          style={{ width: "100%", height: "500px" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              Aqui está o marcador! <br /> Personalize como quiser.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
}

export default Contact;
