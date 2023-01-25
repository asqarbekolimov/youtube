import { Stack } from '@mui/material'
import React from 'react'
import { category } from '../../constants'
import { colors } from '../../constants/colors'

function Category({ selectCategoryHandler, selectCategory }) {
  return (
    <Stack direction={'row'} sx={{ overflowX: 'scroll' }}>
      {category.map((item) => (
        <button key={item.name}
          className='category-btn'
          style={{
            borderRadius: '0',
            background: item.name === selectCategory && colors.secondary,
            color: item.name === selectCategory && '#fff'
          }}>
          <span style={{ color: item.name === selectCategory ? '#fff' : colors.secondary, marginRight: '15px' }}
            onClick={() => selectCategoryHandler(item.name)}
          >{item.icon}</span>
          <span style={{ opacity: '1' }}>{item.name}</span>
        </button>
      ))}
    </Stack>
  )
}

export default Category