import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = ({type}) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      if(type === "music") {
        const resMusic = await axios.get(`/videos/tags?tags=${type}`);
        setVideos(resMusic?.data);
      } else if(type === "sports") {
        const resSports = await axios.get(`/videos/tags?tags=${type}`);
        setVideos(resSports?.data);
      } else if(type === "gaming") {
        const resGaming = await axios.get(`/videos/tags?tags=${type}`);
        setVideos(resGaming?.data);
      } else if(type === "movies") {
        const resMovies = await axios.get(`/videos/tags?tags=${type}`);
        setVideos(resMovies?.data);
      } else if(type === "news") {
        const resNews = await axios.get(`/videos/tags?tags=${type}`);
        setVideos(resNews?.data);
      } else if(type === "live") {
        const resLive = await axios.get(`/videos/tags?tags=${type}`);
        setVideos(resLive?.data);
      } else {
        const resType = await axios.get(`/videos/${type}`);
        setVideos(resType?.data);
      }      
    };

    fetchVideos();
  }, [type]);

  return (
    <Container>
      {videos.map((video) => (
        <Card key={video._id} video={video} />
      ))}
    </Container>
  )
}

export default Home;
