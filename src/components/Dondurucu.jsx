import React, { useState } from 'react';

export default function Dondurucu() {
  const [dondurucu, setDondurucu] = useState(true);

  const toggleDondurucu = () => {
    dondurucu === true ? setDondurucu(false) : setDondurucu(true);
  };

  return (
    <div className="widget-spinner container">
      <h2>Döndürücü</h2>
      {dondurucu && <div className="spinner">--+--</div>}

      <button id="toggleDondurucu" onClick={toggleDondurucu}>
        {dondurucu === true ? 'Gizle' : 'Göster'}
      </button>
    </div>
  );
}
