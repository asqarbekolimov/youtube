import React, { useState } from 'react'
import { Box, Container, Stack, Typography } from '@mui/material'
import { colors } from '../../constants/colors'
import { Category } from '../'


function Main() {
  const [selectCategory, setSelectCategory] = useState('New')

  const selectCategoryHandler = (category) => setSelectCategory(category)

  return (
    <Stack>
      <Category selectCategoryHandler={selectCategoryHandler} selectCategory={selectCategory} />
      <Box p={'2'} sx={{ height: "90vh" }}>
        <Container maxWidth={'90%'}>
          <Typography variant='h4' fontWeight={'bold'} mb={3}>
            {selectCategory} <span style={{ color: colors.secondary }}>videos</span>
          </Typography>
          Videos
        </Container>
      </Box>
    </Stack>
  )
}

export default Main