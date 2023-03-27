import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import VidioCard from '../components/VidioCard';

export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], async () => {
    return fetch(`/videos/${keyword ? 'search' : 'popular'}.json`)
      .then((res) => res.json())
      .then((data) => data.items);
  });

  return (
    <>
      <div>Vidios {keyword ? `🔎${keyword}` : `🔥`}</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong</p>}
      {videos && (
        <ul>
          {videos.map((vidio) => (
            <VidioCard key={vidio.id} vidio={vidio} />
          ))}
        </ul>
      )}
    </>
  );
}
