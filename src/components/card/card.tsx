import { Box, Flex, Heading, Image, VStack } from '@chakra-ui/react';
import React from 'react';
import { CardProps } from './card.props';
import { Link } from 'react-router-dom';

const VideoCard = ({ video, id, videoId }: CardProps) => {
  return (
    <Link to={`/video/${id || videoId}`}>
      <VStack>
        <Box>
          <Image
            w={'2xl'}
            h={'3xs'}
            borderRadius={8}
            objectFit={'cover'}
            src={video?.thumbnails?.medium.url}
          />
        </Box>
        <Flex w={'full'} align={'center'} gap={'5'}>
          <Box>
            <Image
              src={video.thumbnails?.default.url || ''}
              w={'50px'}
              h={'50px'}
              borderRadius={'full'}
            />
          </Box>
          <Box>
            <Heading fontSize={'16px'} as={'h3'}>
              {video.title}
            </Heading>
            <Link to={`channel/${video.channelId}`}>
              <Box opacity={'.5'}>{video.channelTitle}</Box>
            </Link>
          </Box>
        </Flex>
      </VStack>
    </Link>
  );
};

export default VideoCard;
