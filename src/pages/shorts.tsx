import React, { useEffect, useState } from 'react';
import Layout from '../layout/layout';
import { Grid, GridItem, Skeleton } from '@chakra-ui/react';
import { VideoType } from '../interfaces/video.interface';
import VideoCard from '../components/card/card';
import { ApiService } from '../service/api.service';

const Shorts = () => {
  const [videos, setVideos] = useState<VideoType[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      try {
        const data = await ApiService.fetching(`search?part=snippet&q=shorts`);
        setVideos(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(true);
      }
    };

    getData();
  }, []);

  return (
    <Layout>
      <Grid
        templateColumns={{
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
        }}
        pt={10}
        gap={5}
      >
        {videos?.map((item, idx) => (
          <Skeleton key={idx} isLoaded={!isLoading}>
            <GridItem key={idx}>
              <VideoCard
                videoId={item.id.videoId}
                video={item.snippet}
                isLoading={!isLoading}
              />
            </GridItem>
          </Skeleton>
        ))}
      </Grid>
    </Layout>
  );
};

export default Shorts;
