"use client"

import { Button } from '@/components/ui/button'
import React from 'react'

export default function page() {

  function back() {
    window.history.back()
  }

  return (
    <div className="flex items-center justify-center min-h-screen flex-col bg-gray-100">
      <div>
        <Button onClick={back} className=''>Back</Button>
      </div>

      <h1 className="text-4xl font-bold text-gray-800">Coming Soon</h1>
    </div>
  )
}
