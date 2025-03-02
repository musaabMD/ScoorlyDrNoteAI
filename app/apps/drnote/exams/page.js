'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function ExamsPage() {
  const [exams, setExams] = useState([])
  const searchParams = useSearchParams()

  useEffect(() => {
    // Fetch exams data here
    const fetchExams = async () => {
      try {
        const response = await fetch('/api/exams')
        const data = await response.json()
        setExams(data)
      } catch (error) {
        console.error('Error fetching exams:', error)
      }
    }

    fetchExams()
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Exams</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {exams.map((exam) => (
          <div key={exam.id} className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold">{exam.title}</h2>
            <p className="text-gray-600">{exam.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}