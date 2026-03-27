import { useState } from 'react';
import { Delete, RotateCcw } from 'lucide-react';

export function PlaygroundCalculator({ accentColor, buttonColor, buttonHover }: { accentColor: string; buttonColor: string; buttonHover: string }) {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [newNumber, setNewNumber] = useState(true);

  const handleNumber = (num: string) => {
    if (newNumber) {
      setDisplay(num);
      setNewNumber(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const handleOperation = (op: string) => {
    const currentValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(currentValue);
    } else if (operation) {
      const result = calculate(previousValue, currentValue, operation);
      setDisplay(String(result));
      setPreviousValue(result);
    }

    setOperation(op);
    setNewNumber(true);
  };

  const calculate = (prev: number, current: number, op: string): number => {
    switch (op) {
      case '+': return prev + current;
      case '-': return prev - current;
      case '*': return prev * current;
      case '/': return prev / current;
      default: return current;
    }
  };

  const handleEquals = () => {
    if (operation && previousValue !== null) {
      const result = calculate(previousValue, parseFloat(display), operation);
      setDisplay(String(result));
      setPreviousValue(null);
      setOperation(null);
      setNewNumber(true);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setNewNumber(true);
  };

  const handleBackspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
    }
  };

  const buttons = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+']
  ];

  return (
    <div className="bg-slate-800 p-4 rounded-lg border border-cyan-500/30 max-w-sm">
      <div className="mb-4">
        <div className={`${accentColor} text-2xl font-bold text-right p-3 bg-slate-900 rounded border border-cyan-500/30 overflow-hidden truncate`}>
          {display}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 mb-3">
        {buttons.map((row) => (
          row.map((btn) => (
            <button
              key={btn}
              onClick={() => {
                if (btn === '=') handleEquals();
                else if (['+', '-', '*', '/'].includes(btn)) handleOperation(btn);
                else handleNumber(btn);
              }}
              className={`py-3 rounded font-semibold transition-all ${
                ['+', '-', '*', '/'].includes(btn)
                  ? `bg-cyan-500/30 text-cyan-300 hover:bg-cyan-500/50`
                  : btn === '='
                  ? `${buttonColor} ${buttonHover}`
                  : `bg-slate-700 text-white hover:bg-slate-600`
              }`}
            >
              {btn}
            </button>
          ))
        ))}
      </div>

      <div className="flex gap-2">
        <button
          onClick={handleBackspace}
          className="flex-1 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded font-semibold transition-all flex items-center justify-center gap-1"
        >
          <Delete className="w-4 h-4" /> Back
        </button>
        <button
          onClick={handleClear}
          className="flex-1 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded font-semibold transition-all flex items-center justify-center gap-1"
        >
          <RotateCcw className="w-4 h-4" /> Clear
        </button>
      </div>
    </div>
  );
}
