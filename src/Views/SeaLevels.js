import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import BottomMenu from '../Components/BottomMenu';
import GlobalHeader from "../Components/GlobalHeader";


export function SeaLevels() {
  return (
    <div>
      <GlobalHeader/>
      <BottomMenu/>
     
    </div>
  );
}

export default SeaLevels;