import React from 'react'
import { BsWhatsapp } from "react-icons/bs"
export default function WhatsappButton() {
  return (
    <button className='bg-green-400 fixed bottom-10 right-10 p-4 rounded-full'>
        <a href="https://chat.whatsapp.com/EXOUVkzOGcv3xPeYtHUlAQ">
            <BsWhatsapp className='text-white' size="35px" />
        </a>
    </button>
  )
}
