import React, { useState, useEffect } from 'react'
import { Box, Container, Stack, Typography } from '@mui/material'
import { colors } from '../../constants/colors'
import { Category, Videos } from '../'
import { ApiService } from '../../constants/api.services'


function Main() {
  const [selectCategory, setSelectCategory] = useState('New')
  const [videos, setVideos] = useState([])

  const selectCategoryHandler = (category) => setSelectCategory(category)
  console.log(process.env.REACT_APP_PUBLIC_KEY);

  useEffect(() => {

    const getData = async () => {
      try {
        const data = await ApiService.fetching('search')
        setVideos(data)
      } catch (error) {
        console.log(error);
      }

    }
    getData()

    // ApiService.fetching('search').then(data => setVideos(data))
  }, [])

  return (
    <Stack>
      <Category selectCategoryHandler={selectCategoryHandler} selectCategory={selectCategory} />
      <Box p={'2'} sx={{ height: "90vh" }}>
        <Container maxWidth={'90%'}>
          <Typography variant='h4' fontWeight={'bold'} mb={3}>
            {selectCategory} <span style={{ color: colors.secondary }}>videos</span>
          </Typography>
          <Videos videos={videos} />
        </Container>
      </Box>
    </Stack>
  )
}

export default Main