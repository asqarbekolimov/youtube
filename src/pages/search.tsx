import React, { useEffect, useState } from 'react';
import Layout from '../layout/layout';
import { useParams } from 'react-router-dom';
import { VideoType } from '../interfaces/video.interface';
import { ApiService } from '../service/api.service';
import { Grid, GridItem, Skeleton } from '@chakra-ui/react';
import VideoCard from '../components/card/card';
import { ChannelCard } from '../components';

const Search = () => {
  const [videos, setVideos] = useState<VideoType[]>([]);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      try {
        const data = await ApiService.fetching(`search?part=snippet&q=${id}`);
        setVideos(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(true);
      }
    };

    getData();
  }, [id]);
  console.log(videos);

  return (
    <Layout>
      <Grid
        templateColumns={{
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
        }}
        pt={30}
        gap={5}
      >
        {/* {isLoading && <div>loading...</div>} */}
        {videos?.map((item, idx) => (
          <Skeleton key={idx} isLoaded={!isLoading}>
            <GridItem key={idx}>
              {item.id.videoId && (
                <VideoCard video={item.snippet} isLoading={!isLoading} />
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

export default Search;
