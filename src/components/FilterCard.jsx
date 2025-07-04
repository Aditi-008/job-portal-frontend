import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'

const filterData = [
  {
    filterType: 'Location',
    array: ['Delhi NCR', 'Bangalore', 'Hyderabad', 'Pune', 'Mumbai'],
  },
  {
    filterType: 'Industry',
    array: ['Frontend Developer', 'Backend Developer', 'FullStack Developer'],
  },
  {
    filterType: 'Salary',
    array: ['0-40k', '42-1lakh', '1lakh to 5lakh'],
  },
]

const FilterCard = () => {
  const [selectedValue, setSelectedValue] = useState('')
  const dispatch = useDispatch()

  const changeHandler = (value) => {
    setSelectedValue(value)
  }

  useEffect(() => {
    dispatch(setSearchedQuery(selectedValue))
  }, [selectedValue, dispatch])

  return (
    <div className='w-full bg-white p-4 rounded-md shadow-md'>
      <h1 className='font-bold text-xl mb-4'>Filter Jobs</h1>
      <RadioGroup value={selectedValue} onValueChange={changeHandler} className='space-y-6'>
        {filterData.map((data, index) => (
          <div key={index} className='border-b pb-4'>
            <h2 className='font-semibold text-gray-700 mb-2'>{data.filterType}</h2>
            <div className='space-y-2'>
              {data.array.map((item, idx) => {
                const itemId = `id${index}-${idx}`
                return (
                  <div key={itemId} className='flex items-center space-x-2'>
                    <RadioGroupItem value={item} id={itemId} />
                    <Label htmlFor={itemId}>{item}</Label>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}

export default FilterCard
