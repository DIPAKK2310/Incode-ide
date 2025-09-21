"use-client"
import { Avatar,AvatarFallback, AvatarImage } from '../ui/avatar'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
        <ul>
            <li>Navbar</li>
        </ul>
    </div>
  )
}

export default Navbar