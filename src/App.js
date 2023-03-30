import logo from "./logo.svg";
import "./App.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";
import { useState } from "react";

function App() {
  const [branch, setBranch] = useState();
  const getAllBranch = async () => {
    try {
      const result = await axios.get("http://localhost:8009/restaurant");
      setBranch(result.data.restaurant);
    } catch (err) {
      console.log("err", err);
    }
  };
  return (
    <div className="App">
      <h1>map</h1>
      <div>
        <button onClick={getAllBranch}>bugdig haruul</button>
        <button>oirin zaig harul</button>
      </div>
      <div>
        <MapContainer
          center={[47.92386099022857, 106.93396174685603]}
          zoom={17}
          scrollWheelZoom={false}
          style={{ width: "100%", height: "90vh" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[47.92386099022857, 106.93396174685603]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default App;
