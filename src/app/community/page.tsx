"use client"

import { Component } from '@/components/footer/footer'
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

      <div>
        <h1>Community</h1>
      </div>
      
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Join our community</h1>
        <p className="text-gray-600">Connect with like-minded individuals and share your knowledge.</p> 
      </div>
      <div className="mt-4">
        <Button className="bg-blue-500 text-white px-4 py-2 rounded">Join Now</Button>
      </div>

      <Component />
    </div>
  )
}
