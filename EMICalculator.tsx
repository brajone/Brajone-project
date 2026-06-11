"use client";

import { useState } from "react";

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

  const calculateEMI = () => {
    const r = interestRate / (12 * 100);
    const n = tenure * 12;
    const emi = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi);
  };

  return (
    <div className="bg-luxury-charcoal border border-gold/20 p-8 space-y-6">
      <h3 className="text-2xl font-serif font-bold text-gold mb-6">EMI Calculator</h3>
      
      <div className="space-y-4">
        <div>
          <label className="text-xs uppercase tracking-widest text-gray-400 block mb-2">Loan Amount (₹)</label>
          <input 
            type="number" 
            value={loanAmount} 
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-full bg-black border border-white/10 px-4 py-2 text-white focus:border-gold outline-none"
          />
        </div>
        
        <div>
          <label className="text-xs uppercase tracking-widest text-gray-400 block mb-2">Interest Rate (%)</label>
          <input 
            type="number" 
            step="0.1"
            value={interestRate} 
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full bg-black border border-white/10 px-4 py-2 text-white focus:border-gold outline-none"
          />
        </div>

        <div>
          <label className="text-xs uppercase tracking-widest text-gray-400 block mb-2">Tenure (Years)</label>
          <input 
            type="number" 
            value={tenure} 
            onChange={(e) => setTenure(Number(e.target.value))}
            className="w-full bg-black border border-white/10 px-4 py-2 text-white focus:border-gold outline-none"
          />
        </div>
      </div>

      <div className="pt-6 border-t border-white/5">
        <p className="text-sm text-gray-400 uppercase tracking-widest mb-1">Estimated Monthly EMI</p>
        <p className="text-4xl font-serif font-bold text-gold">₹{calculateEMI().toLocaleString()}</p>
      </div>
    </div>
  );
}
