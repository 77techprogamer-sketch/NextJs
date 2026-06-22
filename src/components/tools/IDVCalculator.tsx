"use client";

import React, { useState, useMemo } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Car, Bike, Info, IndianRupee, AlertCircle, CheckCircle2 } from 'lucide-react';

type VehicleType = 'car' | 'bike';

interface DepreciationRow {
  age: string;
  rate: number;
  idvPercent: number;
}

const DEPRECIATION_TABLE_CAR: DepreciationRow[] = [
  { age: '0-6 months', rate: 5, idvPercent: 95 },
  { age: '6 months - 1 year', rate: 15, idvPercent: 85 },
  { age: '1-2 years', rate: 20, idvPercent: 80 },
  { age: '2-3 years', rate: 30, idvPercent: 70 },
  { age: '3-4 years', rate: 40, idvPercent: 60 },
  { age: '4-5 years', rate: 50, idvPercent: 50 },
  { age: '5+ years', rate: 50, idvPercent: 50 },
];

const DEPRECIATION_TABLE_BIKE: DepreciationRow[] = [
  { age: '0-6 months', rate: 5, idvPercent: 95 },
  { age: '6 months - 1 year', rate: 15, idvPercent: 85 },
  { age: '1-2 years', rate: 20, idvPercent: 80 },
  { age: '2-3 years', rate: 30, idvPercent: 70 },
  { age: '3-4 years', rate: 40, idvPercent: 60 },
  { age: '4-5 years', rate: 50, idvPercent: 50 },
  { age: '5+ years', rate: 50, idvPercent: 50 },
];

const POPULAR_CAR_MODELS: Record<string, number> = {
  'Maruti Swift': 650000,
  'Maruti Baleno': 750000,
  'Hyundai i20': 850000,
  'Tata Nexon': 950000,
  'Hyundai Creta': 1200000,
  'Maruti Brezza': 950000,
  'Kia Seltos': 1100000,
  'Toyota Innova Crysta': 2200000,
  'Honda City': 1200000,
  'Mahindra XUV700': 1500000,
  'Tata Harrier': 1600000,
  'Hyundai Verna': 1100000,
  'Other': 0,
};

const POPULAR_BIKE_MODELS: Record<string, number> = {
  'Hero Splendor': 80000,
  'Honda Activa': 85000,
  'TVS Apache RTR 160': 120000,
  'Bajaj Pulsar 150': 110000,
  'Royal Enfield Classic 350': 210000,
  'KTM Duke 200': 200000,
  'Yamaha R15': 190000,
  'Honda Shine': 85000,
  'Suzuki Access 125': 95000,
  'Royal Enfield Himalayan': 280000,
  'Other': 0,
};

function getVehicleAgeYears(registrationYear: number): number {
  const currentYear = new Date().getFullYear();
  return currentYear - registrationYear;
}

function getDepreciationRate(vehicleType: VehicleType, ageYears: number): number {
  const table = vehicleType === 'car' ? DEPRECIATION_TABLE_CAR : DEPRECIATION_TABLE_BIKE;
  if (ageYears < 0.5) return table[0].rate;
  if (ageYears < 1) return table[1].rate;
  if (ageYears < 2) return table[2].rate;
  if (ageYears < 3) return table[3].rate;
  if (ageYears < 4) return table[4].rate;
  if (ageYears < 5) return table[5].rate;
  return table[6].rate;
}

function formatCurrency(amt: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amt);
}

export default function IDVCalculator() {
  const [vehicleType, setVehicleType] = useState<VehicleType>('car');
  const [registrationYear, setRegistrationYear] = useState(new Date().getFullYear());
  const [selectedModel, setSelectedModel] = useState('');
  const [showroomPrice, setShowroomPrice] = useState<number>(0);
  const [customPrice, setCustomPrice] = useState<string>('');

  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: 20 }, (_, i) => currentYear - i);

  const models = vehicleType === 'car' ? POPULAR_CAR_MODELS : POPULAR_BIKE_MODELS;

  const handleModelChange = (model: string) => {
    setSelectedModel(model);
    if (model !== 'Other' && models[model]) {
      setShowroomPrice(models[model]);
      setCustomPrice(models[model].toString());
    } else {
      setShowroomPrice(0);
      setCustomPrice('');
    }
  };

  const handleVehicleTypeChange = (type: string) => {
    setVehicleType(type as VehicleType);
    setSelectedModel('');
    setShowroomPrice(0);
    setCustomPrice('');
  };

  const calculatedShowroomPrice = customPrice ? Number(customPrice) : showroomPrice;

  const idvResult = useMemo(() => {
    if (!calculatedShowroomPrice || calculatedShowroomPrice <= 0) return null;
    const ageYears = getVehicleAgeYears(registrationYear);
    const depreciationRate = getDepreciationRate(vehicleType, ageYears);
    const idv = Math.round(calculatedShowroomPrice * (1 - depreciationRate / 100));
    return { idv, depreciationRate, ageYears };
  }, [calculatedShowroomPrice, registrationYear, vehicleType]);

  const depreciationTable = vehicleType === 'car' ? DEPRECIATION_TABLE_CAR : DEPRECIATION_TABLE_BIKE;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div className="lg:col-span-7 space-y-6">
        <Card className="border-t-4 border-t-primary shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              {vehicleType === 'car' ? <Car className="h-6 w-6 text-primary" /> : <Bike className="h-6 w-6 text-primary" />}
              Vehicle Details
            </CardTitle>
            <CardDescription>Enter your vehicle information to calculate IDV</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <Label className="text-base font-bold text-slate-700">Vehicle Type</Label>
              <div className="flex gap-4">
                <button
                  onClick={() => handleVehicleTypeChange('car')}
                  className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl border-2 transition-all font-bold ${vehicleType === 'car' ? 'border-primary bg-primary/5 text-primary' : 'border-slate-200 text-slate-500 hover:border-slate-300'}`}
                >
                  <Car className="h-5 w-5" />
                  Car
                </button>
                <button
                  onClick={() => handleVehicleTypeChange('bike')}
                  className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl border-2 transition-all font-bold ${vehicleType === 'bike' ? 'border-primary bg-primary/5 text-primary' : 'border-slate-200 text-slate-500 hover:border-slate-300'}`}
                >
                  <Bike className="h-5 w-5" />
                  Bike / Two-Wheeler
                </button>
              </div>
            </div>
            <div className="space-y-3">
              <Label className="text-base font-bold text-slate-700">Registration Year</Label>
              <Select value={registrationYear.toString()} onValueChange={(val) => setRegistrationYear(Number(val))}>
                <SelectTrigger className="h-12 text-lg">
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  {yearOptions.map((year) => (
                    <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-3">
              <Label className="text-base font-bold text-slate-700">{vehicleType === 'car' ? 'Car Model' : 'Bike Model'}</Label>
              <Select value={selectedModel} onValueChange={handleModelChange}>
                <SelectTrigger className="h-12 text-lg">
                  <SelectValue placeholder="Select model" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(models).map((model) => (
                    <SelectItem key={model} value={model}>
                      {model}{models[model] > 0 ? ` (~${formatCurrency(models[model])})` : ''}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-3">
              <Label className="text-base font-bold text-slate-700">Ex-Showroom Price (₹)</Label>
              <Input
                type="number"
                value={customPrice}
                onChange={(e) => setCustomPrice(e.target.value)}
                placeholder="Enter ex-showroom price"
                className="h-12 text-lg font-semibold"
              />
              <p className="text-xs text-slate-500">You can adjust the price above to match your vehicle's actual ex-showroom price</p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Info className="h-5 w-5 text-primary" />
              IDV Depreciation Schedule (as per IRDAI)
            </CardTitle>
            <CardDescription>Standard depreciation rates for {vehicleType === 'car' ? 'cars' : 'two-wheelers'}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="text-left py-3 px-4 font-bold text-slate-700">Vehicle Age</th>
                    <th className="text-center py-3 px-4 font-bold text-slate-700">Depreciation</th>
                    <th className="text-right py-3 px-4 font-bold text-slate-700">IDV (% of Price)</th>
                  </tr>
                </thead>
                <tbody>
                  {depreciationTable.map((row, i) => {
                    const ageYears = getVehicleAgeYears(registrationYear);
                    const currentRate = getDepreciationRate(vehicleType, ageYears);
                    const isCurrentRow = currentRate === row.rate && idvResult !== null;
                    return (
                      <tr key={i} className={`border-b border-slate-100 ${isCurrentRow ? 'bg-primary/10 font-bold' : ''}`}>
                        <td className="py-3 px-4">
                          {row.age}
                          {isCurrentRow && <span className="ml-2 text-xs bg-primary text-white px-2 py-0.5 rounded-full">Your Vehicle</span>}
                        </td>
                        <td className="text-center py-3 px-4">{row.rate}%</td>
                        <td className="text-right py-3 px-4 font-semibold">{row.idvPercent}%</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-4 italic">* For vehicles older than 5 years, IDV is determined by the insurer based on the vehicle&apos;s condition and make/model.</p>
          </CardContent>
        </Card>
      </div>
      <div className="lg:col-span-5 relative">
        <Card className="sticky top-24 overflow-hidden border-2 border-primary shadow-xl bg-slate-900 text-white">
          <div className="absolute top-0 right-0 p-3 bg-primary text-[10px] font-black uppercase tracking-tighter">IDV Estimate</div>
          <CardHeader className="pt-10 pb-4 text-center">
            <CardTitle className="text-slate-400 text-sm font-bold uppercase tracking-widest">Insured Declared Value</CardTitle>
            {idvResult ? (
              <>
                <div className="text-5xl font-black mt-4 flex items-baseline justify-center gap-1">
                  <span className="text-2xl text-slate-500">₹</span>
                  {idvResult.idv.toLocaleString('en-IN')}
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm border-t border-white/10 pt-3">
                    <span className="text-slate-400">Ex-Showroom Price</span>
                    <span className="font-bold">{formatCurrency(calculatedShowroomPrice)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Vehicle Age</span>
                    <span className="font-bold">{idvResult.ageYears} year{idvResult.ageYears !== 1 ? 's' : ''}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Depreciation Applied</span>
                    <span className="font-bold text-amber-400">{idvResult.depreciationRate}%</span>
                  </div>
                  <div className="flex justify-between text-sm border-t border-white/10 pt-2">
                    <span className="text-slate-400">IDV (Insurable Amount)</span>
                    <span className="font-bold text-green-400">{formatCurrency(idvResult.idv)}</span>
                  </div>
                </div>
              </>
            ) : (
              <div className="py-8">
                <IndianRupee className="h-16 w-16 mx-auto text-slate-600 mb-4" />
                <p className="text-slate-500 text-sm">Enter vehicle details to see IDV</p>
              </div>
            )}
          </CardHeader>
          {idvResult && (
            <CardContent className="px-8 pb-8 space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-400">This IDV will be the maximum claim amount in case of total loss or theft.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-400">Higher IDV means higher premium, but better coverage.</p>
                </div>
              </div>
            </CardContent>
          )}
        </Card>
        <div className="mt-6 p-6 bg-blue-50 rounded-2xl border border-blue-100 flex gap-4">
          <AlertCircle className="h-6 w-6 text-blue-600 shrink-0" />
          <div>
            <h4 className="font-bold text-blue-900 text-sm">What is IDV?</h4>
            <p className="text-blue-800 text-xs leading-relaxed">IDV (Insured Declared Value) is the maximum amount your insurer will pay if your vehicle is stolen or damaged beyond repair. It&apos;s calculated as the ex-showroom price minus depreciation as per IRDAI guidelines.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
