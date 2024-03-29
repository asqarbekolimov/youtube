import React, { useEffect, useState } from 'react';
import Layout from '../layout/layout';
import { Category, ChannelCard } from '../components';
import { ApiService } from '../service/api.service';
import { VideoType } from '../interfaces/video.interface';
import VideoCard from '../components/card/card';
import { Grid, GridItem, Skeleton } from '@chakra-ui/react';

const Main = () => {
  const [selected, setSelected] = useState('programming');
  const [videos, setVideos] = useState<VideoType[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      try {
        const data = await ApiService.fetching(
          `search?part=snippet&q=${selected}`
        );
        setVideos(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(true);
      }
    };

    getData();
  }, [selected]);

  return (
    <Layout>
      <Category selected={selected} setSelected={setSelected} />
      <Grid
        templateColumns={{
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
        }}
        mt={10}
        gap={5}
      >
        {/* {isLoading && <div>loading...</div>} */}
        {videos?.map((item, idx) => (
          <Skeleton key={idx} isLoaded={!isLoading}>
            <GridItem key={idx}>
              {item.id.videoId && (
                <VideoCard
                  id={item.id.videoId}
                  video={item.snippet}
                  isLoading={!isLoading}
                />
              )}
              {item.id.channelId && (
                <ChannelCard channel={item.snippet} isLoading={!isLoading} />
              )}
            </GridItem>
          </Skeleton>
        ))}
      </Grid>
    </Layout>
  );
};

export default Main;
