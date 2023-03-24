import React from 'react';
import { useParams } from 'react-router-dom';

export default function Vidios() {
  const { keyword } = useParams();
  return <div>Vidios {keyword ? `🔎${keyword}` : `🔥`}</div>;
}
