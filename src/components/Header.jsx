import { Category } from '@syncfusion/ej2-react-charts'
import React from 'react'

const Header = ({category,title}) => {
  return (
    <div className="mb-10 p-5 ">
      <p className='text-lg font-semibold text-gray-400 dark:text-gray-200'>
        {category}
      </p>
      <p className='text-3xl text-gray-800 dark:text-gray-400'>
        {title}
      </p>
    </div>
  )
}

export default Header