import { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Filter } from 'lucide-react';

const monthlyData = [
  { month: 'Jan', commits: 12, projects: 2, contributions: 45 },
  { month: 'Feb', commits: 19, projects: 3, contributions: 52 },
  { month: 'Mar', commits: 25, projects: 4, contributions: 68 },
  { month: 'Apr', commits: 22, projects: 2, contributions: 71 },
  { month: 'May', commits: 28, projects: 5, contributions: 85 },
  { month: 'Jun', commits: 32, projects: 3, contributions: 92 },
];

const skillsData = [
  { skill: 'React', proficiency: 88, category: 'Frontend' },
  { skill: 'Python', proficiency: 85, category: 'Backend' },
  { skill: 'Django', proficiency: 82, category: 'Backend' },
  { skill: 'JavaScript', proficiency: 90, category: 'Frontend' },
  { skill: 'SQL', proficiency: 78, category: 'Database' },
  { skill: 'HTML/CSS', proficiency: 92, category: 'Frontend' },
];

interface MiniInsightsDashboardProps {
  theme: 'cyber' | 'sunset' | 'synth';
}

export function MiniInsightsDashboard({ theme }: MiniInsightsDashboardProps) {
  const [activeTab, setActiveTab] = useState<'activity' | 'skills'>('activity');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredSkills = selectedCategory
    ? skillsData.filter(s => s.category === selectedCategory)
    : skillsData;

  const categories = [...new Set(skillsData.map(s => s.category))];

  const lineColor = theme === 'cyber' ? '#06b6d4' : theme === 'sunset' ? '#f97316' : '#ec4899';
  const barColor = theme === 'cyber' ? '#0ea5e9' : theme === 'sunset' ? '#fb923c' : '#f43f5e';

  return (
    <div className="w-full">
      <div className="flex gap-4 mb-6 flex-wrap">
        <button
          onClick={() => setActiveTab('activity')}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            activeTab === 'activity'
              ? `${theme === 'cyber' ? 'bg-cyan-500/30 text-cyan-300 border border-cyan-500' : theme === 'sunset' ? 'bg-orange-500/30 text-orange-300 border border-orange-500' : 'bg-pink-500/30 text-pink-300 border border-pink-500'}`
              : `bg-slate-700 text-slate-300 hover:bg-slate-600`
          }`}
        >
          <TrendingUp className="inline w-4 h-4 mr-2" />
          Activity Timeline
        </button>
        <button
          onClick={() => setActiveTab('skills')}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            activeTab === 'skills'
              ? `${theme === 'cyber' ? 'bg-cyan-500/30 text-cyan-300 border border-cyan-500' : theme === 'sunset' ? 'bg-orange-500/30 text-orange-300 border border-orange-500' : 'bg-pink-500/30 text-pink-300 border border-pink-500'}`
              : `bg-slate-700 text-slate-300 hover:bg-slate-600`
          }`}
        >
          <Filter className="inline w-4 h-4 mr-2" />
          Skills & Proficiency
        </button>
      </div>

      {activeTab === 'activity' && (
        <div className="space-y-6">
          <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
            <h4 className="text-sm font-semibold text-slate-200 mb-4">Monthly Development Activity</h4>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px' }}
                  labelStyle={{ color: '#f3f4f6' }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="commits"
                  stroke={lineColor}
                  strokeWidth={2}
                  dot={{ fill: lineColor, r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="contributions"
                  stroke={theme === 'cyber' ? '#06b6d4' : theme === 'sunset' ? '#fbbf24' : '#f472b6'}
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={{ fill: theme === 'cyber' ? '#06b6d4' : theme === 'sunset' ? '#fbbf24' : '#f472b6', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className={`p-4 rounded-lg border ${theme === 'cyber' ? 'bg-cyan-500/10 border-cyan-500/30' : theme === 'sunset' ? 'bg-orange-500/10 border-orange-500/30' : 'bg-pink-500/10 border-pink-500/30'}`}>
              <p className="text-xs text-slate-400 mb-1">Total Commits</p>
              <p className={`text-2xl font-bold ${theme === 'cyber' ? 'text-cyan-400' : theme === 'sunset' ? 'text-orange-400' : 'text-pink-400'}`}>138</p>
            </div>
            <div className={`p-4 rounded-lg border ${theme === 'cyber' ? 'bg-cyan-500/10 border-cyan-500/30' : theme === 'sunset' ? 'bg-orange-500/10 border-orange-500/30' : 'bg-pink-500/10 border-pink-500/30'}`}>
              <p className="text-xs text-slate-400 mb-1">Projects</p>
              <p className={`text-2xl font-bold ${theme === 'cyber' ? 'text-cyan-400' : theme === 'sunset' ? 'text-orange-400' : 'text-pink-400'}`}>19</p>
            </div>
            <div className={`p-4 rounded-lg border ${theme === 'cyber' ? 'bg-cyan-500/10 border-cyan-500/30' : theme === 'sunset' ? 'bg-orange-500/10 border-orange-500/30' : 'bg-pink-500/10 border-pink-500/30'}`}>
              <p className="text-xs text-slate-400 mb-1">Avg. Contrib/Month</p>
              <p className={`text-2xl font-bold ${theme === 'cyber' ? 'text-cyan-400' : theme === 'sunset' ? 'text-orange-400' : 'text-pink-400'}`}>77%</p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'skills' && (
        <div className="space-y-6">
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-3 py-1 rounded text-sm font-medium transition-all ${
                selectedCategory === null
                  ? `${theme === 'cyber' ? 'bg-cyan-500 text-slate-900' : theme === 'sunset' ? 'bg-orange-500 text-white' : 'bg-pink-500 text-white'}`
                  : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            >
              All Skills
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? `${theme === 'cyber' ? 'bg-cyan-500 text-slate-900' : theme === 'sunset' ? 'bg-orange-500 text-white' : 'bg-pink-500 text-white'}`
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
            <h4 className="text-sm font-semibold text-slate-200 mb-4">Skill Proficiency</h4>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={filteredSkills}
                margin={{ top: 20, right: 30, left: 0, bottom: 60 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis
                  dataKey="skill"
                  stroke="#9ca3af"
                  angle={-45}
                  textAnchor="end"
                  height={100}
                />
                <YAxis stroke="#9ca3af" domain={[0, 100]} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px' }}
                  labelStyle={{ color: '#f3f4f6' }}
                  formatter={(value) => `${value}%`}
                />
                <Bar
                  dataKey="proficiency"
                  fill={barColor}
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredSkills.map((skill) => (
              <div key={skill.skill} className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                <div className="flex justify-between items-center mb-2">
                  <h5 className="font-medium text-slate-200">{skill.skill}</h5>
                  <span className={`text-sm font-bold ${theme === 'cyber' ? 'text-cyan-400' : theme === 'sunset' ? 'text-orange-400' : 'text-pink-400'}`}>{skill.proficiency}%</span>
                </div>
                <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${theme === 'cyber' ? 'bg-cyan-500' : theme === 'sunset' ? 'bg-orange-500' : 'bg-pink-500'}`}
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
                <p className="text-xs text-slate-400 mt-2">{skill.category}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
