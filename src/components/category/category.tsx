import { Box, Button, HStack, Text } from '@chakra-ui/react';
import { Catogories } from '../../config/constants';
import { CateogryProps } from './category.props';

const Category = ({ selected, setSelected }: CateogryProps) => {
  const selectedHandler = (item: string) => {
    setSelected(item);
  };

  return (
    <Box
      w={'100%'}
      overflowX={'auto'}
      css={{
        '&::-webkit-scrollbar': { width: '1px' },
        '&::-webkit-scrollbar-track': { width: '1px' },
        '&::-webkit-scrollbar-thumb': { background: 'transparent' },
      }}
    >
      <HStack w={'1200px'}>
        {Catogories.map((item) => {
          return (
            <Button
              key={item.name}
              backgroundColor={selected === item.name ? 'facebook.500' : ''}
              onClick={() => selectedHandler(item.name)}
            >
              <Text color={selected === item.name ? 'white' : ''} px={5}>
                {item.title}
              </Text>
            </Button>
          );
        })}
      </HStack>
    </Box>
  );
};

export default Category;
