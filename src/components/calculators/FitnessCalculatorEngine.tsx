'use client';

import React, { useState, useMemo } from 'react';
import CalculatorLayout from './CalculatorLayout';
import { 
  PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';
import { Activity, HeartPulse, Flame } from 'lucide-react';

export default function FitnessCalculatorEngine({ title, description }: { title: string, description: string }) {
  const [age, setAge] = useState(30);
  const [weight, setWeight] = useState(70); // kg
  const [height, setHeight] = useState(170); // cm
  const [gender, setGender] = useState('male');
  const [activity, setActivity] = useState(1.2); // Sedentary

  const results = useMemo(() => {
    // BMI = weight(kg) / height(m)^2
    const heightM = height / 100;
    const bmi = weight / (heightM * heightM);
    
    let bmiCategory = '';
    let bmiColor = '';
    let needleRotation = 0;

    if (bmi < 18.5) {
      bmiCategory = 'Underweight';
      bmiColor = '#3b82f6'; // blue
      needleRotation = -60;
    } else if (bmi >= 18.5 && bmi < 24.9) {
      bmiCategory = 'Normal Weight';
      bmiColor = '#10b981'; // green
      needleRotation = -20 + ((bmi - 18.5) / 6.4) * 40;
    } else if (bmi >= 25 && bmi < 29.9) {
      bmiCategory = 'Overweight';
      bmiColor = '#f59e0b'; // yellow
      needleRotation = 20 + ((bmi - 25) / 4.9) * 40;
    } else {
      bmiCategory = 'Obese';
      bmiColor = '#ef4444'; // red
      needleRotation = 60 + Math.min(((bmi - 30) / 10) * 30, 30);
    }

    // BMR (Mifflin-St Jeor Equation)
    let bmr = 0;
    if (gender === 'male') {
      bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
      bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }

    // TDEE
    const tdee = bmr * activity;

    return {
      bmi: Number(bmi.toFixed(1)),
      bmiCategory,
      bmiColor,
      needleRotation,
      bmr: Math.round(bmr),
      tdee: Math.round(tdee)
    };
  }, [age, weight, height, gender, activity]);

  const gaugeData = [
    { name: 'Underweight', value: 18.5, color: '#3b82f6' },
    { name: 'Normal', value: 6.5, color: '#10b981' },
    { name: 'Overweight', value: 5, color: '#f59e0b' },
    { name: 'Obese', value: 10, color: '#ef4444' }
  ];

  return (
    <CalculatorLayout title={title} description={description}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-slate-200">
        
        {/* Input Section */}
        <div className="p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-slate-200 lg:col-span-5 bg-white">
          <div className="space-y-8">
            <div className="flex space-x-4">
              <label className="flex-1 cursor-pointer">
                <input 
                  type="radio" name="gender" value="male" className="sr-only"
                  checked={gender === 'male'} onChange={(e) => setGender(e.target.value)}
                />
                <div className={`py-2 text-center rounded-lg border font-semibold transition-colors ${gender === 'male' ? 'bg-primary text-white border-primary' : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'}`}>
                  Male
                </div>
              </label>
              <label className="flex-1 cursor-pointer">
                <input 
                  type="radio" name="gender" value="female" className="sr-only"
                  checked={gender === 'female'} onChange={(e) => setGender(e.target.value)}
                />
                <div className={`py-2 text-center rounded-lg border font-semibold transition-colors ${gender === 'female' ? 'bg-primary text-white border-primary' : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'}`}>
                  Female
                </div>
              </label>
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="font-semibold text-slate-700">Age</label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded px-3 py-1">
                  <input 
                    type="number" value={age} onChange={(e) => setAge(Number(e.target.value))}
                    className="w-12 bg-transparent outline-none font-bold text-primary text-right"
                  />
                  <span className="text-primary font-bold ml-1">Yr</span>
                </div>
              </div>
              <input 
                type="range" min="15" max="100" step="1" 
                value={age} onChange={(e) => setAge(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="font-semibold text-slate-700">Height (cm)</label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded px-3 py-1">
                  <input 
                    type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))}
                    className="w-16 bg-transparent outline-none font-bold text-primary text-right"
                  />
                  <span className="text-primary font-bold ml-1">cm</span>
                </div>
              </div>
              <input 
                type="range" min="100" max="250" step="1" 
                value={height} onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="font-semibold text-slate-700">Weight (kg)</label>
                <div className="flex items-center bg-slate-50 border border-slate-200 rounded px-3 py-1">
                  <input 
                    type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))}
                    className="w-16 bg-transparent outline-none font-bold text-primary text-right"
                  />
                  <span className="text-primary font-bold ml-1">kg</span>
                </div>
              </div>
              <input 
                type="range" min="30" max="200" step="1" 
                value={weight} onChange={(e) => setWeight(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>

            <div>
              <label className="font-semibold text-slate-700 block mb-4">Activity Level</label>
              <select 
                value={activity} 
                onChange={(e) => setActivity(Number(e.target.value))}
                className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 font-medium text-slate-700 outline-none"
              >
                <option value={1.2}>Sedentary (Little or no exercise)</option>
                <option value={1.375}>Lightly active (Exercise 1-3 days/week)</option>
                <option value={1.55}>Moderately active (Exercise 3-5 days/week)</option>
                <option value={1.725}>Very active (Exercise 6-7 days/week)</option>
                <option value={1.9}>Super active (Physical job or hard exercise 2x/day)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Output Section */}
        <div className="p-6 md:p-8 bg-slate-50 lg:col-span-7 flex flex-col justify-between items-center">
          
          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8 mb-10">
            {/* BMI Gauge */}
            <div className="relative w-64 h-32">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={gaugeData}
                    cx="50%" cy="100%"
                    startAngle={180} endAngle={0}
                    innerRadius={70} outerRadius={100}
                    paddingAngle={0} dataKey="value" stroke="none"
                  >
                    {gaugeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div 
                className="absolute bottom-0 left-1/2 w-1 h-20 bg-slate-800 origin-bottom rounded-full shadow-md transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-50%) rotate(${results.needleRotation}deg)` }}
              >
                <div className="w-4 h-4 bg-slate-800 rounded-full absolute -bottom-2 -left-1.5 border-2 border-white shadow-sm"></div>
              </div>
              <div className="absolute -bottom-8 left-0 right-0 text-center">
                <span className="text-3xl font-black" style={{ color: results.bmiColor }}>{results.bmi}</span>
                <p className="text-sm font-semibold text-slate-600 mt-1">{results.bmiCategory}</p>
              </div>
            </div>
          </div>

          <div className="w-full mt-16 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start space-x-4">
              <div className="p-3 bg-rose-100 rounded-xl">
                <HeartPulse className="w-8 h-8 text-rose-500" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-semibold mb-1">Basal Metabolic Rate (BMR)</p>
                <p className="text-2xl font-bold text-slate-800">{results.bmr} <span className="text-sm text-slate-500 font-normal">kcal/day</span></p>
                <p className="text-xs text-slate-400 mt-1">Calories burned at rest</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start space-x-4">
              <div className="p-3 bg-orange-100 rounded-xl">
                <Flame className="w-8 h-8 text-orange-500" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-semibold mb-1">Total Energy Exp. (TDEE)</p>
                <p className="text-2xl font-bold text-slate-800">{results.tdee} <span className="text-sm text-slate-500 font-normal">kcal/day</span></p>
                <p className="text-xs text-slate-400 mt-1">Calories needed to maintain weight</p>
              </div>
            </div>
          </div>

          <div className="w-full mt-8 bg-blue-50 border border-blue-100 rounded-xl p-5 text-sm text-blue-800">
            <strong>Goal Guide:</strong> To lose 0.5kg per week, aim for a daily intake of <strong>{results.tdee - 500}</strong> calories. To gain weight safely, aim for <strong>{results.tdee + 500}</strong> calories.
          </div>
        </div>
      </div>
    </CalculatorLayout>
  );
}
