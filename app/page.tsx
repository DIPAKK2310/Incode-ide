import { Button } from '@/components/ui/button'
import { link } from 'fs'
import React from 'react'

export default function Home (){
 

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Button className='cursor-pointer'>Click to Edit</Button>
    </div>
  )
}
