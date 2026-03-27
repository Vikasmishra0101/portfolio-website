import { useState } from 'react';

interface DataPoint {
  label: string;
  value: number;
  color: string;
}

interface InteractiveChartProps {
  data: DataPoint[];
  title: string;
  maxValue?: number;
}

export function InteractiveChart({ data, title, maxValue = 100 }: InteractiveChartProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const max = Math.max(...data.map(d => d.value), maxValue);

  return (
    <div className="w-full">
      <h4 className="text-sm font-semibold text-slate-200 mb-4">{title}</h4>
      <div className="space-y-3">
        {data.map((item, idx) => (
          <div key={idx} className="group">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-medium text-slate-300">{item.label}</span>
              {hoveredIndex === idx && (
                <span className={`text-xs font-bold ${item.color}`}>{item.value}%</span>
              )}
            </div>
            <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`h-full rounded-full transition-all duration-300 ${item.color}`}
                style={{ width: `${(item.value / max) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
