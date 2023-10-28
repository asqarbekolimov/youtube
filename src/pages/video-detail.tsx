import React, { useEffect, useState } from 'react';
import Layout from '../layout/layout';
import { useParams } from 'react-router-dom';
import { ApiService } from '../service/api.service';
import { VideoItem } from '../interfaces/video.interface';
import { Box, Flex, HStack, Heading } from '@chakra-ui/react';
import ReactPlayer from 'react-player';
import { FcLike } from 'react-icons/fc';
import { AiOutlineComment } from 'react-icons/ai';
import { GrFormView } from 'react-icons/gr';

const VideoDetail = () => {
  const { id } = useParams();
  const [detailVideo, setDetailVideo] = useState<VideoItem>();
  const [relatedVideo, setRelatedVideo] = useState<VideoItem>();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(
          `videos?part=snippet,statistics&id=${id}`
        );
        const realtedData = await ApiService.fetching(
          `search?part=snippet&relatedToVideoId=${id}&type=video`
        );
        setDetailVideo(data[0]);
        setRelatedVideo(realtedData);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);
  console.log(relatedVideo);

  return (
    <Layout Navtoggle={true}>
      <Box minH={'90vh'}>
        <Flex direction={{ base: 'column', md: 'row' }}>
          <Box w={'full'}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              width={'full'}
              height={'70vh'}
            />
            <Heading fontSize={'2xl'} as={'h3'} mt={5}>
              {detailVideo?.snippet.localized?.title}
            </Heading>
            <HStack justify={'space-between'} mt={2}>
              <Box>{detailVideo?.snippet.channelTitle}</Box>
              <Flex gap={15}>
                <Flex align={'center'}>
                  <FcLike size={20} />
                  <Box>{detailVideo?.statistics.likeCount}</Box>
                </Flex>
                <Flex align={'center'}>
                  <GrFormView size={30} fill={'#fff'} />
                  <Box>{detailVideo?.statistics.viewCount}</Box>
                </Flex>
                <Flex align={'center'}>
                  <AiOutlineComment size={20} />
                  <Box>{detailVideo?.statistics.commentCount}</Box>
                </Flex>
              </Flex>
            </HStack>
            <Box mt={5}>{detailVideo?.snippet.description}</Box>
          </Box>
        </Flex>
      </Box>
    </Layout>
  );
};

export default VideoDetail;
