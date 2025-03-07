"use client"

export default function ExamStats({ exam }) {
  if (!exam) return null;

  return (
    <>
      {/* Exam Stats */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 mb-8 border border-slate-200 dark:border-slate-700 shadow-sm">
        <h2 className="text-xl font-semibold mb-5 text-slate-900 dark:text-white">Exam Stats</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-slate-600 dark:text-slate-400">Difficulty</span>
            <span className="font-medium text-slate-900 dark:text-white">{exam.difficulty}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-600 dark:text-slate-400">Average Time</span>
            <span className="font-medium text-slate-900 dark:text-white">{exam.duration}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-600 dark:text-slate-400">Pass Rate</span>
            <span className="font-medium text-slate-900 dark:text-white">72%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-600 dark:text-slate-400">Last Updated</span>
            <span className="font-medium text-slate-900 dark:text-white">3 weeks ago</span>
          </div>
        </div>
      </div>
      
      {/* Overall Score Circle */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
        <h2 className="text-xl font-semibold mb-5 text-slate-900 dark:text-white">Overall Score</h2>
        <div className="relative pt-1 px-4">
          <div className="flex items-center justify-center mb-2">
            <div className="w-32 h-32 rounded-full border-8 border-blue-100 dark:border-blue-900 flex items-center justify-center">
              <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                {exam.progress?.score || 0}%
              </span>
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm font-medium text-slate-900 dark:text-white">
              {(exam.progress?.score || 0) >= parseInt(exam.passingScore) ? 'Passing' : 'Needs Improvement'}
            </div>
            
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Based on {exam.progress?.completed || 0} completed questions
            </p>
          </div>
        </div>
      </div>
    </>
  );
}