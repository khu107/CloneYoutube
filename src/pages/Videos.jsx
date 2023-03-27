import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import VidioCard from '../components/VidioCard';
import FakeData from '../api/fakedata';
import Youtube from '../api/youtube';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], () => youtube.search(keyword));

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
