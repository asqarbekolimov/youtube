import React from 'react';
import { ChannelCardProps } from './channel-card.props';
import { Box, Heading, Image, VStack } from '@chakra-ui/react';

const ChannelCard = ({ channel }: ChannelCardProps) => {
  return (
    <VStack>
      <Image
        src={channel.thumbnails.default.url}
        w={150}
        h={150}
        borderRadius={'full'}
      />
      <Heading fontSize={'2xl'}>{channel.channelTitle}</Heading>
      <Box fontSize={'small'}>{channel.description}</Box>
    </VStack>
  );
};

export default ChannelCard;
