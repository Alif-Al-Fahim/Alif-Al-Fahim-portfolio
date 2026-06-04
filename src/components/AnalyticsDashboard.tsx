import { useState, useMemo } from "react";
import { BarChart, TrendingUp, Filter, Users, DollarSign, Database, Map, ThumbsUp, RefreshCw, AlertTriangle, Wind } from "lucide-react";

// Mock SaaS Sales dataset
const SAAS_SALES_DATA = [
  { id: 1, company: "Acme Corp", plan: "Enterprise", mrr: 1200, status: "Active", region: "Americas", month: "Jan" },
  { id: 2, company: "Globex Industries", plan: "Enterprise", mrr: 1500, status: "Active", region: "Europe", month: "Jan" },
  { id: 3, company: "Cyberdyne Systems", plan: "Pro", mrr: 450, status: "Active", region: "Asia", month: "Feb" },
  { id: 4, company: "Wayne Enterprises", plan: "Pro", mrr: 450, status: "Churned", region: "Americas", month: "Feb" },
  { id: 5, company: "Umbrella Corp", plan: "Starter", mrr: 150, status: "Active", region: "Europe", month: "Mar" },
  { id: 6, company: "Initech", plan: "Starter", mrr: 150, status: "Churned", region: "Americas", month: "Mar" },
  { id: 7, company: "Soylent Corp", plan: "Pro", mrr: 450, status: "Active", region: "Asia", month: "Apr" },
  { id: 8, company: "Hooli Inc", plan: "Enterprise", mrr: 1800, status: "Active", region: "Asia", month: "Apr" },
  { id: 9, company: "Stark Industries", plan: "Enterprise", mrr: 2100, status: "Active", region: "Americas", month: "May" },
  { id: 10, company: "Tyrell Bio", plan: "Pro", mrr: 450, status: "Active", region: "Europe", month: "May" },
  { id: 11, company: "Prestige Worldwide", plan: "Starter", mrr: 150, status: "Active", region: "Americas", month: "Jun" },
  { id: 12, company: "Ve利 Corp", plan: "Pro", mrr: 450, status: "Churned", region: "Europe", month: "Jun" }
];

// Mock Flood Risk stats for Districts
const FLOOD_RISK_DATA = [
  { district: "Sylhet", dangerFactor: 92, riskLevel: "Extreme", rainfall: 820, elevation: 12, status: "Active Watch" },
  { district: "Sunamganj", dangerFactor: 95, riskLevel: "Extreme", rainfall: 910, elevation: 8, status: "Active Watch" },
  { district: "Kurigram", dangerFactor: 88, riskLevel: "High", rainfall: 650, elevation: 17, status: "Alert" },
  { district: "Netrokona", dangerFactor: 84, riskLevel: "High", rainfall: 580, elevation: 14, status: "Alert" },
  { district: "Gaibandha", dangerFactor: 76, riskLevel: "Moderate", rainfall: 510, elevation: 19, status: "Stable" },
  { district: "Sirajganj", dangerFactor: 79, riskLevel: "High", rainfall: 480, elevation: 21, status: "Stable" },
  { district: "Bogra", dangerFactor: 58, riskLevel: "Moderate", rainfall: 420, elevation: 25, status: "Stable" },
  { district: "Dhaka", dangerFactor: 42, riskLevel: "Low", rainfall: 350, elevation: 34, status: "Stable" }
];

export default function AnalyticsDashboard() {
  const [activeTab, setActiveTab] = useState<"saas" | "flood">("saas");

  // SaaS filters
  const [saasPlanFilter, setSaasPlanFilter] = useState("All");
  const [saasStatusFilter, setSaasStatusFilter] = useState("All");
  const [saasRegionFilter, setSaasRegionFilter] = useState("All");

  // Flood parameters
  const [floodDistrict, setFloodDistrict] = useState("Sunamganj");

  // Compute SaaS Aggregates
  const filteredSaaS = useMemo(() => {
    return SAAS_SALES_DATA.filter(item => {
      const planMatch = saasPlanFilter === "All" || item.plan === saasPlanFilter;
      const statusMatch = saasStatusFilter === "All" || item.status === saasStatusFilter;
      const regionMatch = saasRegionFilter === "All" || item.region === saasRegionFilter;
      return planMatch && statusMatch && regionMatch;
    });
  }, [saasPlanFilter, saasStatusFilter, saasRegionFilter]);

  const saasKPIs = useMemo(() => {
    let mrrTotal = 0;
    let activePlans = 0;
    let totalItems = filteredSaaS.length;
    let churnedCount = 0;

    filteredSaaS.forEach(item => {
      if (item.status === "Active") {
        mrrTotal += item.mrr;
        activePlans++;
      } else {
        churnedCount++;
      }
    });

    const activeRate = totalItems > 0 ? ((activePlans / totalItems) * 100).toFixed(1) : "0.0";
    const churnRate = totalItems > 0 ? ((churnedCount / totalItems) * 100).toFixed(1) : "0.0";

    return { mrrTotal, activePlans, churnRate, activeRate, count: totalItems };
  }, [filteredSaaS]);

  // Compute region allocations for SaaS
  const regionAllocation = useMemo(() => {
    const alloc: Record<string, number> = { Americas: 0, Europe: 0, Asia: 0 };
    filteredSaaS.forEach(item => {
      if (item.status === "Active") {
        alloc[item.region] = (alloc[item.region] || 0) + item.mrr;
      }
    });
    return alloc;
  }, [filteredSaaS]);

  const maxAllocation = useMemo(() => {
    return Math.max(...(Object.values(regionAllocation) as number[]), 1);
  }, [regionAllocation]);

  // Selected Flood Data
  const selectedFlood = useMemo(() => {
    return FLOOD_RISK_DATA.find(item => item.district === floodDistrict) || FLOOD_RISK_DATA[1];
  }, [floodDistrict]);

  return (
    <section id="analytics" className="py-24 bg-[#0d0d0f]/50 relative z-10 border-t border-[rgba(255,82,130,0.15)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left md:flex md:items-center md:justify-between mb-16 border-b border-white/5 pb-6">
          <div>
            <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-[#ff6b9d] block mb-2 uppercase">
              // Live Interactive Data Playground
            </span>
            <h2 className="text-4xl md:text-5xl font-sans font-black text-white tracking-tighter uppercase">
              Data Analytics Portfolio Dashboard
            </h2>
            <p className="text-[#a0a0b0] font-sans mt-3 max-w-2xl text-sm leading-relaxed">
              I've built this interactive section so you can experience how my data and analytical projects work. Adjust the filters below to explore raw calculations instantly!
            </p>
          </div>

          {/* Module Selector Buttons in Premium Style */}
          <div className="flex justify-start sm:justify-center gap-2 mt-6 md:mt-0 bg-[#13131a] p-1.5 border border-white/5 rounded-xl shadow-lg">
            <button
              onClick={() => setActiveTab("saas")}
              className={`flex items-center gap-2 px-4 py-2 font-mono text-[10px] uppercase tracking-wider transition-all duration-200 cursor-pointer rounded-lg ${
                activeTab === "saas"
                  ? "bg-gradient-to-r from-[#ff5252] to-[#f72585] text-white font-black shadow-lg shadow-[rgba(247,37,133,0.25)]"
                  : "text-[#a0a0b0] hover:text-white"
              }`}
            >
              <DollarSign className="h-3.5 w-3.5" />
              SaaS Sales KPI
            </button>
            <button
              onClick={() => setActiveTab("flood")}
              className={`flex items-center gap-2 px-4 py-2 font-mono text-[10px] uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === "flood"
                  ? "bg-gradient-to-r from-[#ff5252] to-[#f72585] text-white font-black shadow-lg shadow-[rgba(rgba(247,37,133,0.25)] rounded-lg"
                  : "text-[#a0a0b0] hover:text-white"
              }`}
            >
              <Map className="h-3.5 w-3.5" />
              Flood Predictive Model
            </button>
          </div>
        </div>

        {activeTab === "saas" ? (
          /* SAAS WORKSPACE */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Controls & raw data (Span 1) */}
            <div className="neon-card p-6 flex flex-col justify-between h-[450px]">
              <div>
                <div className="flex items-center gap-2 text-white font-mono text-[10px] tracking-widest uppercase border-b border-white/5 pb-3 mb-5 font-bold">
                  <Filter className="h-4 w-4 text-[#ff5252]" />
                  Filter Options
                </div>

                <div className="space-y-4">
                  {/* Plan Filter */}
                  <div>
                    <label className="block text-[#a0a0b0] font-mono text-[9px] uppercase tracking-widest mb-1.5 font-bold">PLAN TYPE</label>
                    <select
                      value={saasPlanFilter}
                      onChange={(e) => setSaasPlanFilter(e.target.value)}
                      className="w-full text-xs font-mono bg-[#161622] border border-[rgba(255,82,130,0.2)] py-2 px-3 text-white focus:outline-none focus:border-[#ff6b9d] uppercase tracking-tight rounded-lg hover:border-[#ff5252]/45 transition-all cursor-pointer"
                    >
                      <option value="All">All Plan Types</option>
                      <option value="Enterprise">Enterprise Only</option>
                      <option value="Pro">Pro Only</option>
                      <option value="Starter">Starter Only</option>
                    </select>
                  </div>

                  {/* Status Filter */}
                  <div>
                    <label className="block text-[#a0a0b0] font-mono text-[9px] uppercase tracking-widest mb-1.5 font-bold">ACCOUNT STATUS</label>
                    <select
                      value={saasStatusFilter}
                      onChange={(e) => setSaasStatusFilter(e.target.value)}
                      className="w-full text-xs font-mono bg-[#161622] border border-[rgba(255,82,130,0.2)] py-2 px-3 text-white focus:outline-none focus:border-[#ff6b9d] uppercase tracking-tight rounded-lg hover:border-[#ff5252]/45 transition-all cursor-pointer"
                    >
                      <option value="All">All Customer Accounts</option>
                      <option value="Active">Active Accounts Only</option>
                      <option value="Churned">Cancelled Accounts Only</option>
                    </select>
                  </div>

                  {/* Region Filter */}
                  <div>
                    <label className="block text-[#a0a0b0] font-mono text-[9px] uppercase tracking-widest mb-1.5 font-bold">GEOGRAPHIC REGION</label>
                    <select
                      value={saasRegionFilter}
                      onChange={(e) => setSaasRegionFilter(e.target.value)}
                      className="w-full text-xs font-mono bg-[#161622] border border-[rgba(255,82,130,0.2)] py-2 px-3 text-white focus:outline-none focus:border-[#ff6b9d] uppercase tracking-tight rounded-lg hover:border-[#ff5252]/45 transition-all cursor-pointer"
                    >
                      <option value="All">All Geographic Regions</option>
                      <option value="Americas">Americas Region</option>
                      <option value="Europe">Europe Region</option>
                      <option value="Asia">Asia Region</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Quick Info text */}
              <div className="border-t border-white/5 pt-4 text-[10px] font-mono text-[#a0a0b0]/60 flex items-center gap-1.5 uppercase tracking-wider">
                <Database className="h-4 w-4 text-[#ff5252]" />
                <span>
                  Source: <a href="https://github.com/Alif-Al-Fahim/saas-sales-dashboard" target="_blank" rel="noopener noreferrer" className="text-white hover:underline font-bold">saas-sales-dashboard</a>
                </span>
              </div>
            </div>

            {/* Visual Charts & KPIs (Span 2) */}
            <div className="lg:col-span-2 flex flex-col justify-between h-auto lg:h-[450px] gap-6">
              {/* KPIs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="neon-card p-5 text-left">
                  <p className="text-[#a0a0b0] font-mono text-[9px] uppercase tracking-widest">Estimated Annual Revenue</p>
                  <p className="text-xl font-bold font-mono text-white mt-1.5">
                    ${(saasKPIs.mrrTotal * 12).toLocaleString()}
                  </p>
                  <span className="text-[9px] text-[#ff6b9d]/70 font-mono block mt-1 uppercase tracking-tight">12x Current Monthly Value</span>
                </div>

                <div className="neon-card p-5 text-left">
                  <p className="text-[#a0a0b0] font-mono text-[9px] uppercase tracking-widest">Active Monthly Revenue</p>
                  <p className="text-xl font-bold font-mono text-white mt-1.5">
                    ${saasKPIs.mrrTotal.toLocaleString()}
                  </p>
                  <span className="text-[9px] text-[#ff6b9d]/70 font-mono block mt-1 uppercase tracking-tight">{saasKPIs.activePlans} accounts active</span>
                </div>

                <div className="neon-card p-5 text-left">
                  <p className="text-[#a0a0b0] font-mono text-[9px] uppercase tracking-widest">Active Accounts</p>
                  <p className="text-xl font-bold font-mono text-white mt-1.5">
                    {saasKPIs.count}
                  </p>
                  <span className="text-[9px] text-[#ff6b9d]/70 font-mono block mt-1 uppercase tracking-tight">Matched customers</span>
                </div>

                <div className="neon-card p-5 text-left">
                  <p className="text-[#a0a0b0] font-mono text-[9px] uppercase tracking-widest">Cancellation Rate</p>
                  <p className="text-xl font-bold font-mono text-white mt-1.5">
                    {saasKPIs.churnRate}%
                  </p>
                  <span className="text-[9px] text-[#ff6b9d]/70 font-mono block mt-1 uppercase tracking-tight">Cancellation proportion</span>
                </div>
              </div>

              {/* Center Canvas / SVG visual bar diagram */}
              <div className="neon-card p-6 flex flex-col justify-between flex-1 min-h-[250px]">
                <div className="flex items-center justify-between text-[10px] font-mono text-[#a0a0b0] uppercase tracking-widest mb-4">
                  <div className="flex items-center gap-1.5">
                    <TrendingUp className="h-4 w-4 text-[#ff5252]" />
                    <span>Active Revenue Share (BY REGION)</span>
                  </div>
                  <span className="text-[#ff6b9d]">Currency: USD</span>
                </div>

                <div className="space-y-4">
                  {Object.entries(regionAllocation).map(([region, amount]) => {
                    const percentage = maxAllocation > 0 ? ((amount as number) / maxAllocation) * 100 : 0;
                    return (
                      <div key={region} className="space-y-1">
                        <div className="flex justify-between items-center text-xs font-mono">
                          <span className="text-white font-bold uppercase tracking-wider">{region}</span>
                          <span className="text-[#ff6b9d] font-black">${amount.toLocaleString()}</span>
                        </div>
                        {/* Custom Dynamic Visual Bar */}
                        <div className="h-7 w-full bg-black/40 border border-[#ff5252]/20 overflow-hidden relative flex items-center rounded-lg">
                          <div
                            className="h-full bg-gradient-to-r from-[#ff5252] to-[#f72585] transition-all duration-500 rounded-lg animate-pulse"
                            style={{ width: `${percentage}%` }}
                          />
                          <span className="absolute left-3 text-[9px] font-mono text-white mix-blend-difference uppercase tracking-widest font-bold">
                            Share: {percentage.toFixed(0)}% of max region share
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <p className="text-[8px] font-mono text-[#a0a0b0]/50 mt-4 text-center uppercase tracking-widest">
                  * This interactive dashboard displays processed records instantly based on your choices.
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* CLIMATE DISASTER RISK MODEL */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
            {/* Left Controls (Span 1) */}
            <div className="neon-card p-6 flex flex-col justify-between h-[450px]">
              <div>
                <div className="flex items-center gap-2 text-white font-mono text-[10px] tracking-widest uppercase border-b border-white/5 pb-3 mb-5 font-bold">
                  <Map className="h-4 w-4 text-[#ff5252]" />
                  Select an Area / District
                </div>

                <div className="space-y-5">
                  <p className="text-xs text-[#a0a0b0] font-sans leading-relaxed">
                    Choose any district to see how rainfall, land elevation, and flood risk are analyzed across Bangladesh's most vulnerable areas.
                  </p>

                  <div className="grid grid-cols-2 gap-2">
                    {FLOOD_RISK_DATA.map((fl) => (
                      <button
                        key={fl.district}
                        onClick={() => setFloodDistrict(fl.district)}
                        className={`px-3 py-2 text-[10px] font-mono uppercase tracking-wider border rounded-md text-center transition-all duration-150 cursor-pointer ${
                          floodDistrict === fl.district
                            ? "bg-gradient-to-r from-[#ff5252] to-[#f72585] text-white border-transparent font-black shadow-lg shadow-[rgba(247,37,133,0.2)]"
                            : "bg-[#161622] border-white/5 text-[#a0a0b0] hover:text-white"
                        }`}
                      >
                        {fl.district}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Info text */}
              <div className="border-t border-white/5 pt-4 text-[10px] font-mono text-[#a0a0b0]/60 flex items-center gap-1.5 uppercase tracking-widest">
                <Wind className="h-4 w-4 text-[#ff5252]" />
                <span>
                  Source: <a href="https://github.com/Alif-Al-Fahim/Bangladesh-Flood-Risk-Analytics" target="_blank" rel="noopener noreferrer" className="text-white hover:underline font-bold">flood-risk-analytics</a>
                </span>
              </div>
            </div>

            {/* Model Outputs (Span 2) */}
            <div className="lg:col-span-2 flex flex-col justify-between h-auto lg:h-[450px] gap-6">
              {/* Big Gauge Meter and Indicators */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Gauge Indicator */}
                <div className="neon-card p-6 text-center flex flex-col items-center justify-center md:col-span-1">
                  <p className="text-[#a0a0b0] font-mono text-[9px] uppercase tracking-widest mb-4">Flood Risk Index</p>
                  <div className="relative w-28 h-28 flex items-center justify-center">
                    {/* Retro radial circle indicator */}
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="56"
                        cy="56"
                        r="45"
                        stroke="rgba(247,37,133,0.1)"
                        strokeWidth="8"
                        fill="transparent"
                      />
                      <circle
                        cx="56"
                        cy="56"
                        r="45"
                        stroke="#f72585"
                        strokeWidth="8"
                        strokeOpacity={0.9}
                        fill="transparent"
                        strokeDasharray={2 * Math.PI * 45}
                        strokeDashoffset={2 * Math.PI * 45 * (1 - selectedFlood.dangerFactor / 100)}
                        className="transition-all duration-700 drop-shadow-[0_0_10px_rgba(247,37,133,0.5)]"
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center">
                      <span className="text-2xl font-black font-mono text-[#ff5252]">{selectedFlood.dangerFactor}</span>
                      <span className="text-[9px] text-[#a0a0b0] font-mono uppercase tracking-widest font-bold">Out of 100</span>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono font-black mt-4 px-3 py-1 bg-gradient-to-r from-[#ff5252] to-[#f72585] text-white uppercase tracking-widest rounded-full shadow-lg shadow-[rgba(247,37,133,0.25)]">
                    {selectedFlood.riskLevel} Hazard
                  </span>
                </div>

                {/* Sub Telemetries Cards */}
                <div className="neon-card p-6 md:col-span-2 space-y-5">
                  <div className="flex items-center gap-1.5 border-b border-white/5 pb-3">
                    <AlertTriangle className="h-4.5 w-4.5 text-[#ff5252]" />
                    <span className="text-white font-mono text-[10px] tracking-widest uppercase font-bold">District Statistics: {selectedFlood.district.toUpperCase()}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-1">
                    <div>
                      <p className="text-[#a0a0b0] font-mono text-[9px] uppercase tracking-widest">Seasonal Rainfall</p>
                      <p className="text-2xl font-bold font-mono text-[#ff6b9d] mt-1">{selectedFlood.rainfall} mm</p>
                      <span className="text-[9px] text-[#a0a0b0]/55 font-mono uppercase tracking-tight">Average Peak Volume</span>
                    </div>
                    <div>
                      <p className="text-[#a0a0b0] font-mono text-[9px] uppercase tracking-widest">Land Elevation</p>
                      <p className="text-2xl font-bold font-mono text-[#ff6b9d] mt-1">{selectedFlood.elevation} meters</p>
                      <span className="text-[9px] text-[#a0a0b0]/55 font-mono uppercase tracking-tight">Height Above Sea Level</span>
                    </div>
                  </div>

                  <div className="p-3 bg-[#161622] border border-white/5 flex items-center gap-2.5 text-xs text-[#a0a0b0] rounded-lg">
                    <span className="inline-block w-2.5 h-2.5 bg-gradient-to-r from-[#ff5252] to-[#f72585] rounded-full animate-ping" />
                    <span className="font-mono text-[10px] uppercase tracking-wider leading-relaxed text-left">
                      Action Protocol: <span className="text-white font-black">{
                        selectedFlood.status === "Active Watch" ? "Evacuate low basins immediately" :
                        selectedFlood.status === "Alert" ? "Aggregate local safety supplies & monitor feeds" : "Normal standby operations"
                      }</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Research summary card */}
              <div className="neon-card p-6 flex flex-col justify-center flex-1">
                <p className="text-[10px] font-mono text-[#ff6b9d] font-bold mb-2 uppercase tracking-widest">// Research and Project Context</p>
                <p className="text-xs text-[#a0a0b0] font-sans leading-relaxed text-justify">
                  This analytical project helps predict seasonal flood hazards by analyzing weather records and rainfall volumes. It provides a simple, interactive way for emergency services, volunteers, and researchers to look up district-specific safety alerts and help local communities prepare for natural disasters.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
