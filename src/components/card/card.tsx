import {
  Box,
  Flex,
  Heading,
  Image,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { CardProps } from './card.props';
import { Link } from 'react-router-dom';

const VideoCard = ({ video, isLoading }: CardProps) => {
  return (
    <VStack>
      <Skeleton isLoaded={isLoading}>
        <Box>
          <Image
            w={'2xl'}
            h={'3xs'}
            borderRadius={8}
            objectFit={'cover'}
            src={video.thumbnails.medium.url}
          />
        </Box>
      </Skeleton>
      <Flex w={'full'} align={'center'} gap={'5'}>
        <Box>
          <SkeletonCircle isLoaded={isLoading} size="50">
            <Image
              src={video.thumbnails.default.url}
              w={'50px'}
              h={'50px'}
              borderRadius={'full'}
            />
          </SkeletonCircle>
        </Box>
        <SkeletonText isLoaded={isLoading}>
          <Box>
            <Heading fontSize={'16px'} as={'h3'}>
              {video.title}
            </Heading>
            <Link to={`channel/${video.channelId}`}>
              <Box opacity={'.5'}>{video.channelTitle}</Box>
            </Link>
          </Box>
        </SkeletonText>
      </Flex>
    </VStack>
  );
};

export default VideoCard;
