'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function ExamsPage() {
  const [exams, setExams] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchExams = async () => {
      try {
        setLoading(true)
        const response = await fetch('/api/exams')
        if (!response.ok) throw new Error('Failed to fetch exams')
        const data = await response.json()
        setExams(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchExams()
  }, [])

  if (loading) return <div className="p-4">Loading exams...</div>
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Medical Exams</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {exams.map((exam) => (
          <Link 
            href={`/apps/drnote/exams/${exam.id}`} 
            key={exam.id}
            className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold">{exam.title}</h2>
            <p className="text-gray-600 mt-2">{exam.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}