import { Stack } from '@mui/material'
import React from 'react'
import { category } from '../../constants'
import { colors } from '../../constants/colors'

function Category() {
  return (
    <Stack direction={'row'} sx={{ overflowX: 'scroll' }}>
      {category.map((item) => (
        <button key={item.name} className='category-btn' style={{ borderRadius: '0' }}>
          <span style={{ color: colors.secondary, marginRight: '15px' }}>{item.icon}</span>
          <span style={{ opacity: '1' }}>{item.name}</span>
        </button>
      ))}
    </Stack>
  )
}

export default Category