import React from 'react';
import './InfoMe.css';

interface InfoMe {
  label: string;
  value: string;
}

const InfoItem: React.FC<InfoMe> = ({ label, value }) => {
  return (
    <div className="info-item">
      <span className="info-label">{label}:</span>
      <span className="info-value underline">{value}</span>
    </div>
  );
}

export default InfoItem;