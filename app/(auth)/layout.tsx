import React from 'react'

export default function DashboardLayout({children} : {children : React.ReactNode}
  ) {
    return (
      <main className='flex-center min-h-screen w-full bg-purple-100'>
        {children}
      </main>
    )
  }