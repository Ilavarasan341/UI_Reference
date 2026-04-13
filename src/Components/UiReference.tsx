import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, Plus, Calendar, Eye, FileText, Mail, Shield, 
  CheckCircle2, XCircle, Database, Edit2, Trash2, 
  MoreHorizontal, Sparkles, Building2, SlidersHorizontal,
  UserCircle, Loader2, X,
  AlertCircle, AlertTriangle, Info, Check, Globe, Upload,
  Clock, RefreshCw, Users, TrendingUp, Zap, ShieldAlert, BarChart3,
  ShieldCheck, Cloud, Rocket, Factory
} from 'lucide-react';

// ============================================
// DESIGN SYSTEM COMPONENTS (INLINE)
// ============================================

// Typography Components
const H1: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className = '', id }) => (
  <h1 id={id} className={`text-3xl md:text-4xl font-bold text-[#1b2559] tracking-tight ${className}`}>
    {children}
  </h1>
);

const H2: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className = '', id }) => (
  <h2 id={id} className={`text-2xl md:text-3xl font-semibold text-[#1b2559] tracking-tight ${className}`}>
    {children}
  </h2>
);

const Body: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className = '', id }) => (
  <p id={id} className={`text-base text-[#1b2559] leading-relaxed ${className}`}>
    {children}
  </p>
);

const Caption: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <span className={`text-sm text-gray-500 ${className}`}>
    {children}
  </span>
);

// Button Component
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants: Record<ButtonVariant, string> = {
    primary: 'bg-[#150b70] text-white hover:bg-[#0d0847] focus:ring-[#150b70] shadow-sm',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-300',
    outline: 'border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-gray-200',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-400 shadow-sm',
  };

  const sizes: Record<ButtonSize, string> = {
    sm: 'px-3 py-1.5 text-sm rounded-sm',
    md: 'px-4 py-2 text-sm rounded-md',
    lg: 'px-6 py-3 text-base rounded-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Loading...
        </>
      ) : (
        children
      )}
    </button>
  );
};

// Input Components
const Label: React.FC<{ children: React.ReactNode; className?: string; htmlFor?: string }> = ({ children, className = '', htmlFor }) => (
  <label htmlFor={htmlFor} className={`block text-sm font-medium text-[#1b2559] mb-1.5 ${className}`}>
    {children}
  </label>
);

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input: React.FC<InputProps> = ({ error, className = '', ...props }) => (
  <div className="w-full">
    <input
      className={`
        block w-full px-3 py-2 bg-white border rounded-md text-sm transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-[#150b70]/20 focus:border-[#150b70]
        disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
        ${error 
          ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
          : 'border-gray-300 hover:border-gray-400'
        }
        ${className}
      `}
      {...props}
    />
    {error && (
      <p className="mt-1 text-xs text-red-600 font-medium">{error}</p>
    )}
  </div>
);

// MUI Button Component
type MUIButtonVariant = "primary" | "secondary" | "whiteButton";

interface MUIButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: MUIButtonVariant;
  icon?: React.ComponentType<{ className?: string }>;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const MUIButton: React.FC<MUIButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  icon: Icon,
  className = "",
  type = "button",
  disabled = false,
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-sm transition-all duration-200";

  const variants: Record<MUIButtonVariant, string> = {
    primary:
      "text-white font-medium bg-gradient-to-r from-indigo-600 to-blue-900 hover:from-indigo-700 hover:to-blue-950 shadow-md cursor-pointer",
    secondary:
      "text-gray-600 font-medium bg-white hover:bg-zinc-100 border border-gray-300 cursor-pointer",
    whiteButton:
      "bg-white border border-[#10009A] text-[#10009A] font-semibold cursor-pointer",
  };

  const disabledStyles = "opacity-50 cursor-not-allowed";

  return (
    <button
      type={type}
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${disabled ? disabledStyles : ""} group ${className}`}
    >
      {Icon && <Icon className="w-4 h-4 text-inherit" />}
      {children}
    </button>
  );
};

// Card Components
const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-sm ${className}`}>
      {children}
    </div>
  );
};

const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`px-6 py-4 border-b border-zinc-100 ${className}`}>
    {children}
  </div>
);

const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

// ============================================
// MAIN UI REFERENCE PAGE
// ============================================

const UiReference: React.FC = () => {
  return (
    <div className="max-w-[1400px] mx-auto p-8 pb-24 space-y-16 bg-[#f8f9fa] min-h-screen">
      {/* Header */}
      <section>
        <div className="flex justify-between items-center border-b border-zinc-200 pb-8">
          <div>
            <H1 className="mb-2">UI Reference Showcase</H1>
            <Body className="text-secondary-600">
              A collection of every visual pattern and component used in the AI Analyst application.
            </Body>
          </div>
          <div className="flex gap-3">
             <MUIButton variant="secondary" icon={FileText}>Export Guide</MUIButton>
             <MUIButton variant="primary" icon={Plus}>Add Component</MUIButton>
          </div>
        </div>
      </section>

      {/* Typography Section */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="h-8 w-1 bg-indigo-600 rounded-full"></div>
          <H2>Typography & Headings</H2>
        </div>
        <div className="grid gap-10 bg-white p-10 rounded-3xl border border-zinc-100 shadow-sm">
          <div className="space-y-2">
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">H1 Heading</span>
            <H1>The quick brown fox jumps over the lazy dog</H1>
          </div>
          <div className="space-y-2">
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">H2 Heading</span>
            <H2>The quick brown fox jumps over the lazy dog</H2>
          </div>
          <div className="space-y-2">
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">H3 Style (Custom)</span>
            <h3 className="text-[20px] font-black text-[#1b2559] tracking-tight">The quick brown fox jumps over the lazy dog</h3>
          </div>
          <div className="space-y-2">
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Body Text</span>
            <Body className="max-w-3xl">
              Experience seamless workflow with our AI-powered analyst workspace. 
              Standardize your investment thesis, analyze data rooms, and generate 
              comprehensive reports in record time.
            </Body>
          </div>
          <div className="space-y-2">
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Caption / Small Text</span>
            <Caption>Last updated: April 12, 2026 • Version 2.4.0</Caption>
          </div>
        </div>
      </section>

      {/* Buttons Section */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="h-8 w-1 bg-indigo-600 rounded-full"></div>
          <H2>Button Variants</H2>
        </div>
        <div className="bg-white p-10 rounded-3xl border border-zinc-100 shadow-sm space-y-12">
          {/* Design System Buttons */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-zinc-800">Standard Action Buttons (Not used in app yet)</h4>
            <div className="flex flex-wrap gap-4 items-end">
              <div className="space-y-2">
                <Caption>Primary</Caption>
                <Button variant="primary">Primary Action</Button>
              </div>
              <div className="space-y-2">
                <Caption>Secondary</Caption>
                <Button variant="secondary">Secondary Action</Button>
              </div>
              <div className="space-y-2">
                <Caption>Outline</Caption>
                <Button variant="outline">Outline Action</Button>
              </div>
              <div className="space-y-2">
                <Caption>Danger</Caption>
                <Button variant="danger">Danger Action</Button>
            </div>
          </div>

          <hr className="border-zinc-100" />

          {/* MUI Specialized Buttons */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-zinc-800">MUI Brand Buttons (Specialized) (Used in app)</h4>
            <div className="flex flex-wrap gap-4 items-end">
              <div className="space-y-2">
                <Caption>MUI Primary (Gradient)</Caption>
                <MUIButton variant="primary" icon={Plus}>Start Evaluation</MUIButton>
              </div>
              <div className="space-y-2">
                <Caption>MUI Secondary</Caption>
                <MUIButton variant="secondary" icon={Search}>Global Search</MUIButton>
              </div>
              <div className="space-y-2">
                <Caption>MUI White Button</Caption>
                <MUIButton variant="whiteButton">View Details</MUIButton>
              </div>
              <div className="space-y-2">
                <Caption>Disabled State</Caption>
                <MUIButton variant="primary" disabled icon={Shield}>Protected</MUIButton>
              </div>

                </div>
              <div className="space-y-2">
                <Caption>Loading</Caption>
                <Button isLoading>Processing</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Elements Section */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="h-8 w-1 bg-indigo-600 rounded-full"></div>
          <H2>Input Fields & Forms</H2>
        </div>
        <div className="bg-white p-10 rounded-3xl border border-zinc-100 shadow-sm">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div>
                <Label htmlFor="ref-input">Default Text Input</Label>
                <Input id="ref-input" placeholder="Enter company name..." />
              </div>
              <div>
                <Label htmlFor="ref-error">Input with Error</Label>
                <Input id="ref-error" placeholder="info@example.com" error="Please enter a valid email address." />
              </div>
              <div>
                <Label htmlFor="ref-disabled">Disabled Input</Label>
                <Input id="ref-disabled" disabled value="System generated ID" />
              </div>
            </div>

            <div className="space-y-4">
              <Label>Search Input Pattern</Label>
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="text"
                  placeholder="Search deal name..."
                  className="w-full bg-[#f8fafc] text-sm font-medium text-gray-700 rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#150b70]/20 border border-zinc-200 placeholder-gray-400"
                />
              </div>
              <Caption>Used in Recent Deals filter bar</Caption>
            </div>

            <div className="space-y-4">
              <Label>Select Dropdown Pattern</Label>
              <select className="w-full bg-white border border-secondary-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500">
                <option>Select an option...</option>
                <option>Investment Ready</option>
                <option>Under Review</option>
                <option>Passed</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="h-8 w-1 bg-indigo-600 rounded-full"></div>
          <H2>Card Patterns</H2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Standard Card */}
          <div className="space-y-4">
            <Caption className="px-2">Standard UI Component Card</Caption>
            <Card>
              <CardHeader>
                <h3 className="font-bold text-lg">Card Title</h3>
              </CardHeader>
              <CardContent>
                <Body>This is the standard base card used for generic content wrapping.</Body>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" size="sm">Action</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Premium Deal Card */}
          <div className="space-y-4">
            <Caption className="px-2">Premium Item Card (Recent Deals Pattern)</Caption>
            <div className="bg-white border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-[24px] p-7 pt-8 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-500 group relative overflow-hidden">
                <div className="flex justify-between items-start mb-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="bg-[#5b6efc] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                                SUBMITTED
                            </span>
                            <span className="text-gray-400 text-[11px] font-bold tracking-tight">
                                • Analyzed 2h ago
                            </span>
                        </div>
                        <div>
                            <h3 className="text-[24px] font-black text-[#1b2559] leading-[1.1] mb-1.5 tracking-tight">
                                TechNova Solutions
                            </h3>
                            <p className="text-gray-400 text-[14px] font-bold tracking-wide">
                                SaaS • Enterprise
                            </p>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-indigo-600 to-blue-900 rounded-[18px] p-3 flex flex-col items-center justify-center min-w-[72px] min-h-[72px] shadow-lg shadow-purple-900/10">
                        <span className="text-[9px] font-black text-white/60 uppercase tracking-[0.1em] mb-0.5">SCORE</span>
                        <span className="text-[28px] font-black text-white leading-none">84</span>
                    </div>
                </div>
                <div className="mt-6 flex items-center justify-between pt-5 border-t border-gray-50">
                    <button className="text-[13px] font-black text-[#1b2559] hover:opacity-70 transition-opacity flex items-center gap-2">
                        <Edit2 size={14} /> Edit Analysis
                    </button>
                    <div className="flex gap-2">
                        <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center">
                            <MoreHorizontal size={14} />
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table Section */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="h-8 w-1 bg-indigo-600 rounded-full"></div>
          <H2>Table Layout</H2>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-lg">
            <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200/80">
                    <tr>
                        <th className="px-6 py-4 text-left">
                            <span className="text-[11px] font-mono font-semibold text-slate-400 uppercase tracking-[0.2em]">User</span>
                        </th>
                        <th className="px-6 py-4 text-left">
                            <span className="text-[11px] font-mono font-semibold text-slate-400 uppercase tracking-[0.2em]">Role</span>
                        </th>
                        <th className="px-6 py-4 text-left">
                            <span className="text-[11px] font-mono font-semibold text-slate-400 uppercase tracking-[0.2em]">Status</span>
                        </th>
                        <th className="px-6 py-4 text-right">
                            <span className="text-[11px] font-mono font-semibold text-slate-400 uppercase tracking-[0.2em]">Actions</span>
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {[
                        { name: 'Sarah Wilson', role: 'Admin', status: 'Active', color: 'bg-purple-100 text-purple-700' },
                        { name: 'James Chen', role: 'Analyst', status: 'Active', color: 'bg-blue-100 text-blue-700' },
                        { name: 'Elena Rodriguez', role: 'Partner', status: 'Inactive', color: 'bg-gray-100 text-gray-700' }
                    ].map((row, i) => (
                        <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm">
                                        {row.name.charAt(0)}
                                    </div>
                                    <span className="font-semibold text-slate-800">{row.name}</span>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold ${row.color}`}>
                                    <Shield className="w-3 h-3" />
                                    {row.role}
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold ${row.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                    {row.status === 'Active' ? <CheckCircle2 className="w-3 h-3" /> : <XCircle className="w-3 h-3" />}
                                    {row.status}
                                </span>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <button className="p-2 text-slate-300 hover:text-indigo-600 transition-colors">
                                    <Edit2 className="w-4 h-4" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </section>

      {/* Badges & Tags */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="h-8 w-1 bg-indigo-600 rounded-full"></div>
          <H2>Badges & Tags</H2>
        </div>
        <div className="bg-white p-10 rounded-3xl border border-zinc-100 shadow-sm">
          <div className="flex flex-wrap gap-8">
            <div className="space-y-4">
              <Caption>Status Pills (Solid)</Caption>
              <div className="flex gap-2">
                <span className="bg-[#5b6efc] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">Submitted</span>
                <span className="bg-[#10b981] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">Completed</span>
                <span className="bg-[#f59e0b] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">Pending</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <Caption>Role Badges (Tinted)</Caption>
              <div className="flex gap-2">
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">Admin</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">Analyst</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">Guest</span>
              </div>
            </div>

            <div className="space-y-4">
              <Caption>Filter Chips (Interactive)</Caption>
              <div className="flex items-center bg-white border border-zinc-200 pl-2.5 pr-1 py-1 rounded-full shadow-sm">
                  <div className="flex items-center gap-2 mr-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Industry</span>
                      <span className="text-[11px] font-bold text-[#150b70]">SaaS</span>
                  </div>
                  <button className="p-1 rounded-full text-zinc-300 hover:text-red-500 transition-colors">
                      <Trash2 size={13} />
                  </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Icons Section */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="h-8 w-1 bg-indigo-600 rounded-full"></div>
          <H2>Iconography Library</H2>
        </div>
        <div className="bg-white p-10 rounded-3xl border border-zinc-100 shadow-sm">
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8">
            {[
              { icon: Search, name: 'Search' },
              { icon: Plus, name: 'Plus' },
              { icon: Calendar, name: 'Calendar' },
              { icon: Building2, name: 'Building' },
              { icon: Shield, name: 'Shield' },
              { icon: Mail, name: 'Mail' },
              { icon: Eye, name: 'Eye' },
              { icon: FileText, name: 'Page' },
              { icon: CheckCircle2, name: 'Check' },
              { icon: XCircle, name: 'Cross' },
              { icon: Sparkles, name: 'AI' },
              { icon: SlidersHorizontal, name: 'Filter' },
              { icon: Database, name: 'Database' },
              { icon: Edit2, name: 'Edit' },
              { icon: Trash2, name: 'Delete' },
              { icon: UserCircle, name: 'User' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2 group transition-all">
                <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center text-[#1b2559] group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                  <item.icon size={22} />
                </div>
                <span className="text-[11px] font-bold text-zinc-400 group-hover:text-zinc-800">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alerts & Toast Notifications */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="h-8 w-1 bg-indigo-600 rounded-full"></div>
          <H2>Alert & Toast Types</H2>
        </div>
        <div className="bg-white p-10 rounded-3xl border border-zinc-100 shadow-sm">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Caption>Success Toast</Caption>
              <div className="bg-purple-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                <div className="flex-1 text-sm font-medium">Configuration saved successfully!</div>
                <button className="flex-shrink-0 text-white/80 hover:text-white transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="space-y-4">
              <Caption>Error Toast</Caption>
              <div className="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-white flex-shrink-0" />
                <div className="flex-1 text-sm font-medium">Failed to save configuration.</div>
                <button className="flex-shrink-0 text-white/80 hover:text-white transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="space-y-4">
              <Caption>Warning Toast</Caption>
              <div className="bg-amber-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-white flex-shrink-0" />
                <div className="flex-1 text-sm font-medium">Please review your settings.</div>
                <button className="flex-shrink-0 text-white/80 hover:text-white transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="space-y-4">
              <Caption>Info Toast</Caption>
              <div className="bg-indigo-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3">
                <Info className="w-5 h-5 text-white flex-shrink-0" />
                <div className="flex-1 text-sm font-medium">New updates available.</div>
                <button className="flex-shrink-0 text-white/80 hover:text-white transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stepper Component */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="h-8 w-1 bg-indigo-600 rounded-full"></div>
          <H2>Stepper (Wizard Navigation)</H2>
        </div>
        <div className="bg-white p-10 rounded-3xl border border-zinc-100 shadow-sm">
          <Caption className="mb-6 block">Horizontal Stepper (Create Thesis Flow)</Caption>
          <div className="flex items-center justify-center space-x-4 mb-8">
            {/* Step 1: Completed */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-semibold bg-[#10009A] text-white">
                <Check className="w-5 h-5" />
              </div>
              <span className="mt-2 text-sm font-medium text-[#10009A]">Category</span>
            </div>
            <div className="h-[2px] w-16 bg-[#10009A]"></div>
            {/* Step 2: Completed */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-semibold bg-[#10009A] text-white">
                <Check className="w-5 h-5" />
              </div>
              <span className="mt-2 text-sm font-medium text-[#10009A]">Source</span>
            </div>
            <div className="h-[2px] w-16 bg-[#10009A]"></div>
            {/* Step 3: Active */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-semibold bg-[#10009A] text-white shadow-md scale-110">
                3
              </div>
              <span className="mt-2 text-sm font-medium text-[#10009A]">Generate</span>
            </div>
            <div className="h-px w-16 bg-gray-200"></div>
            {/* Step 4: Pending */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-semibold bg-white border border-gray-300 text-gray-400">
                4
              </div>
              <span className="mt-2 text-sm font-medium text-gray-500">Review</span>
            </div>
          </div>

          <hr className="border-zinc-100 my-8" />

          <Caption className="mb-6 block">Vertical Stepper</Caption>
          <div className="flex flex-col relative w-[240px] mx-auto">
            {[
              { id: '1', number: 1, label: 'Step 1', title: 'Category Selection', completed: true, current: false },
              { id: '2', number: 2, label: 'Step 2', title: 'Choose Source', completed: true, current: false },
              { id: '3', number: 3, label: 'Step 3', title: 'Generate Thesis', completed: false, current: true },
            ].map((step, index) => {
              const isLast = index === 2;
              return (
                <div key={step.id} className="relative flex items-start group">
                  {!isLast && (
                    <div className={`absolute left-[19px] top-[40px] bottom-[-20px] w-[2px] ${step.completed ? 'bg-[#150b70]' : 'bg-gray-100'}`} />
                  )}
                  <div className="flex items-start gap-4 mb-10 cursor-pointer w-full">
                    <div className="relative z-10 flex flex-col items-center">
                      <div className={`w-[40px] h-[40px] rounded-[14px] flex items-center justify-center font-bold text-sm transition-all duration-300 ${step.current ? 'bg-[#150b70] text-white shadow-md scale-110' : step.completed ? 'bg-[#150b70] text-white' : 'bg-[#f1f5f9] text-gray-400'}`}>
                        {step.completed && !step.current ? <Check className="w-5 h-5 text-white" strokeWidth={3} /> : step.number}
                      </div>
                    </div>
                    <div className="flex flex-col pt-1">
                      <span className={`text-[10px] font-bold tracking-widest uppercase mb-1 ${step.current || step.completed ? 'text-[#3b36e4]' : 'text-gray-400'}`}>
                        {step.label}
                      </span>
                      <span className={`text-[15px] font-bold ${step.current ? 'text-gray-900' : step.completed ? 'text-gray-900' : 'text-gray-500'}`}>
                        {step.title}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Thesis Flow Components */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="h-8 w-1 bg-indigo-600 rounded-full"></div>
          <H2>Thesis Flow Components</H2>
        </div>
        <div className="space-y-8">
          {/* Section Card Pattern */}
          <div className="bg-white p-10 rounded-3xl border border-zinc-100 shadow-sm">
            <Caption className="mb-4 block">Section Card (Review Step)</Caption>
            <div className="bg-white p-8 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.02)] border border-gray-100 mb-2 relative overflow-hidden group hover:shadow-[0_12px_48px_rgba(16,0,154,0.06)] transition-shadow duration-300">
              <div className="absolute -right-6 -top-6 w-32 h-32 bg-gradient-to-br from-[#10009A]/5 to-[#10009A]/5 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-1000"></div>
              <div className="absolute top-0 right-0 px-5 py-2 bg-gradient-to-r from-[#10009A] to-[#10009A] text-[10px] font-black text-white rounded-bl-3xl shadow-lg z-10 flex items-center gap-2">
                <Sparkles size={12} className="animate-pulse" />
                AI INFERRED
              </div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-8 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100/50 group-hover:border-[#10009A]/20 transition-colors duration-300">
                  <Shield className="w-3 h-3 text-[#10009A] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-sm font-black text-gray-900 tracking-wider uppercase font-sans decoration-[#10009A]/20 underline-offset-8 decoration-2">Risk Profile</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-[0.1em] mb-2.5 ml-1">Stage Preference</label>
                  <div className="w-full px-5 py-4 rounded-2xl border border-transparent bg-gray-50 text-sm font-medium text-gray-700">Series A - Series C</div>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-[0.1em] mb-2.5 ml-1">Location Preference</label>
                  <div className="w-full px-5 py-4 rounded-2xl border border-transparent bg-gray-50 text-sm font-medium text-gray-700">North America, Europe</div>
                </div>
              </div>
            </div>
          </div>

          {/* Category Selection Cards */}
          <div className="bg-white p-10 rounded-3xl border border-zinc-100 shadow-sm">
            <Caption className="mb-4 block">Category Selection Grid</Caption>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {[
                { name: 'SaaS', icon: Database, bg: 'bg-indigo-100', color: 'text-indigo-600', selected: true },
                { name: 'Healthcare', icon: Shield, bg: 'bg-green-100', color: 'text-green-600', selected: false },
                { name: 'Fintech', icon: Building2, bg: 'bg-cyan-100', color: 'text-cyan-600', selected: false },
                { name: 'AI/ML', icon: Sparkles, bg: 'bg-purple-100', color: 'text-purple-600', selected: false },
                { name: 'Cybersecurity', icon: Shield, bg: 'bg-red-100', color: 'text-red-500', selected: false },
                { name: 'Consumer', icon: UserCircle, bg: 'bg-pink-100', color: 'text-pink-600', selected: false },
              ].map((cat, i) => (
                <div key={i} className={`group cursor-pointer p-3 rounded-xl border transition-all duration-200 flex flex-col items-start text-left ${cat.selected ? 'border-[#10009A] bg-[#10009A]/5 shadow-sm' : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'}`}>
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-2 ${cat.bg} transition-all duration-300 group-hover:rotate-45`}>
                    <cat.icon className={`w-4 h-4 ${cat.color}`} />
                  </div>
                  <p className="text-xs font-medium text-gray-900 leading-tight">{cat.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Source Selection Cards */}
          <div className="bg-white p-10 rounded-3xl border border-zinc-100 shadow-sm">
            <Caption className="mb-4 block">Source Selection Cards</Caption>
            <div className="grid grid-cols-3 gap-6">
              <button className="p-6 rounded-2xl text-left transition-all relative border-2 border-[#10009A] bg-[#10009A]/5">
                <span className="inline-block px-3 py-1 bg-[#10009A]/10 text-[#10009A] text-xs font-medium rounded-full mb-4">Recommended</span>
                <div className="absolute top-6 right-6 w-6 h-6 bg-[#10009A] rounded-full flex items-center justify-center">
                  <Check size={14} className="text-white" />
                </div>
                <Globe className="w-8 h-8 mb-4 text-[#10009A]" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Web Data</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Use auto-populated data from web search</p>
              </button>
              <button className="p-6 rounded-2xl text-left transition-all relative border border-gray-200 bg-white hover:border-[#10009A]/30 hover:shadow-md">
                <Upload className="w-8 h-8 mb-4 mt-8 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload Document</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Upload thesis doc or strategy paper</p>
              </button>
              <button className="p-6 rounded-2xl text-left transition-all relative border border-gray-200 bg-white hover:border-[#10009A]/30 hover:shadow-md">
                <span className="inline-block px-3 py-1 bg-[#10009A]/10 text-[#10009A] text-xs font-medium rounded-full mb-4 border border-[#10009A]/20">Quick Start</span>
                <FileText className="w-8 h-8 mb-4 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Preset Template</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Start from a proven sector template</p>
              </button>
            </div>
          </div>

          {/* Tag Input Pattern */}
          <div className="bg-white p-10 rounded-3xl border border-zinc-100 shadow-sm">
            <Caption className="mb-4 block">Tag Input Pattern</Caption>
            <div className="group/tags">
              <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-[0.1em] mb-2.5 ml-1 transition-colors group-focus-within/tags:text-[#10009A] leading-none">Primary Sectors</label>
              <div className="flex flex-wrap gap-2.5 mb-3 p-1">
                {['Enterprise Software', 'Fintech', 'Healthcare'].map(tag => (
                  <span key={tag} className="px-5 py-2.5 bg-white text-gray-700 text-[11px] font-bold rounded-2xl flex items-center border border-gray-100 shadow-sm hover:border-[#10009A]/20 hover:text-[#10009A] hover:-translate-y-0.5 transition-all duration-300 group/tag cursor-default">
                    {tag}
                    <button className="ml-3 p-1 rounded-lg hover:bg-red-50 hover:text-red-500 transition-colors opacity-30 group-hover/tag:opacity-100">
                      <X size={12} />
                    </button>
                  </span>
                ))}
              </div>
              <div className="relative group/add">
                <input
                  type="text"
                  placeholder="Type and press Enter to add..."
                  className="w-full p-4 pl-12 rounded-2xl border border-transparent bg-gray-50 text-[13px] font-medium focus:bg-white focus:border-[#10009A]/20 focus:ring-4 focus:ring-[#10009A]/5 transition-all placeholder:text-gray-300"
                />
                <Plus className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within/add:text-[#10009A] transition-colors" size={18} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deal Flow Components */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="h-8 w-1 bg-indigo-600 rounded-full"></div>
          <H2>Deal Flow Components</H2>
        </div>
        <div className="space-y-8">
          {/* Skeleton Loader */}
          <div className="bg-white p-10 rounded-3xl border border-zinc-100 shadow-sm">
            <Caption className="mb-4 block">Skeleton Loader (Table Loading State)</Caption>
            <div className="space-y-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-white p-4 border-b border-gray-100 animate-pulse">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg" />
                    <div className="flex-1 flex items-center gap-8">
                      <div className="h-4 bg-gray-100 rounded w-48" />
                      <div className="h-4 bg-gray-100 rounded w-24" />
                      <div className="h-4 bg-gray-100 rounded w-20" />
                      <div className="h-4 bg-gray-100 rounded w-24" />
                    </div>
                    <div className="h-8 w-20 bg-gray-100 rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sync Status Badges */}
          <div className="bg-white p-10 rounded-3xl border border-zinc-100 shadow-sm">
            <Caption className="mb-4 block">Sync Status Badges (CRM Deals)</Caption>
            <div className="flex flex-wrap gap-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-emerald-600 bg-emerald-50">
                <CheckCircle2 className="w-3.5 h-3.5" /> Synced
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-amber-600 bg-amber-50">
                <Clock className="w-3.5 h-3.5" /> Pending
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-red-600 bg-red-50">
                <AlertCircle className="w-3.5 h-3.5" /> Failed
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-blue-600 bg-blue-50">
                <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Syncing
              </span>
            </div>
          </div>

          {/* Document Upload Card */}
          <div className="bg-white p-10 rounded-3xl border border-zinc-100 shadow-sm">
            <Caption className="mb-4 block">Document Upload Item</Caption>
            <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-between text-left">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-10 h-10 bg-white rounded-lg border border-gray-100 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-[#10009A]" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">Startup_Pitch_Deck_2024.pdf</p>
                  <div className="flex items-center gap-3 mt-0.5">
                    <span className="text-[10px] text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded uppercase font-bold">PDF</span>
                    <span className="text-[10px] text-gray-500">2.4 MB</span>
                    <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded text-green-600 bg-green-50">Ready</span>
                  </div>
                </div>
              </div>
              <button className="text-gray-300 hover:text-red-500 p-2 transition-colors flex-shrink-0">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Page Loader / Spinner */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="h-8 w-1 bg-indigo-600 rounded-full"></div>
          <H2>Loading States</H2>
        </div>
        <div className="bg-white p-10 rounded-3xl border border-zinc-100 shadow-sm">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4 text-center">
              <Caption>Modern Progress Dots</Caption>
              <div className="flex justify-center gap-3 mt-8">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="w-2 h-2 bg-[#10009A] rounded-full animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                ))}
              </div>
            </div>
            <div className="space-y-4 text-center">
              <Caption>Spinner with Text</Caption>
              <div className="flex flex-col items-center justify-center py-8">
                <div className="w-12 h-12 border-4 border-[#10009A]/20 border-t-[#10009A] rounded-full animate-spin mb-4"></div>
                <p className="text-sm font-bold text-gray-900">Loading...</p>
              </div>
            </div>
            <div className="space-y-4 text-center">
              <Caption>Button Loading State</Caption>
              <button className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-sm bg-gradient-to-r from-indigo-600 to-blue-900 text-white opacity-50 cursor-not-allowed">
                <Loader2 className="w-4 h-4 animate-spin" />
                Processing...
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Streaming Response Cards */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="h-8 w-1 bg-indigo-600 rounded-full"></div>
          <H2>Streaming Response Cards</H2>
        </div>
        <div className="space-y-8">
          {/* Agent Status Card */}
          <div className="bg-white p-10 rounded-3xl border border-zinc-100 shadow-sm">
            <Caption className="mb-4 block">Agent Analysis Card (StreamingResponseColumn)</Caption>
            <div className="space-y-3">
              {/* Active Agent */}
              <div className="p-4 border rounded-lg border-zinc-200 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                      <Users className="w-4 h-4 text-zinc-600" />
                    </div>
                    <span className="text-sm font-medium text-zinc-900">Competitive Intelligence</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 text-zinc-500 animate-spin" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-zinc-500 rounded-full animate-pulse" />
                  <span className="text-xs text-zinc-600">Processing request...</span>
                </div>
              </div>
              {/* Pending Agent */}
              <div className="p-4 border rounded-lg border-zinc-200 bg-zinc-50 transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-zinc-100 text-zinc-400 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-zinc-400">Sentiment Analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-zinc-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Memo Components */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="h-8 w-1 bg-indigo-600 rounded-full"></div>
          <H2>Memo Components</H2>
        </div>
        <div className="space-y-8">
          {/* Memo Section Header */}
          <div className="bg-white p-10 rounded-3xl border border-zinc-100 shadow-sm">
            <Caption className="mb-4 block">Memo Section Header (MemoSection)</Caption>
            <div className="text-center space-y-6 mb-12">
              <h1 className="text-4xl font-black text-zinc-900 tracking-tight sm:text-5xl px-4">
                Investment Diligence Report
              </h1>
            </div>

            {/* Section with Icon */}
            <div className="space-y-12">
              {[
                { title: 'Executive Summary', icon: FileText, color: 'text-indigo-500' },
                { title: 'Market Opportunity', icon: TrendingUp, color: 'text-green-500' },
                { title: 'Product & Technology', icon: Zap, color: 'text-yellow-500' },
                { title: 'Team & Founders', icon: Users, color: 'text-purple-500' },
                { title: 'Financial Analysis', icon: BarChart3, color: 'text-blue-500' },
                { title: 'Risk Assessment', icon: ShieldAlert, color: 'text-red-500' },
              ].map((section, i) => (
                <div key={i} className="group">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center text-zinc-500 group-hover:border-indigo-200 group-hover:text-indigo-600 transition-all duration-300">
                      <section.icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h2 className="text-2xl font-black text-zinc-900 tracking-tight">{section.title}</h2>
                      <div className="h-1 w-12 bg-indigo-500/10 rounded-full group-hover:w-24 group-hover:bg-indigo-500/30 transition-all duration-500" />
                    </div>
                  </div>
                  <div className="border border-zinc-200/60 overflow-hidden shadow-sm hover:shadow-md transition-shadow rounded-2xl p-8">
                    <div className="flex gap-3 mb-3 items-start group/item">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500/40 group-hover/item:bg-indigo-500 transition-colors shrink-0" />
                      <span className="text-zinc-700 leading-relaxed">
                        Sample content with <strong className="text-zinc-900 font-bold">bold text</strong> for emphasis.
                      </span>
                    </div>
                    <p className="mb-4 text-zinc-700 leading-relaxed">
                      This is a paragraph demonstrating the memo content styling with proper spacing and typography.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="pt-5 border-t border-zinc-100 flex flex-col items-center justify-center space-y-4 mt-12">
              <div className="flex items-center gap-2 text-zinc-300">
                <Zap className="w-4 h-4 fill-current" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">AI Analyst</span>
                <Zap className="w-4 h-4 fill-current" />
              </div>
              <p className="text-zinc-400 text-xs">Proprietary scoring and synthesis engine. Confidential for Internal Use Only.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Thesis Cards */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="h-8 w-1 bg-indigo-600 rounded-full"></div>
          <H2>Thesis Cards (My Fund)</H2>
        </div>
        <div className="bg-white p-10 rounded-3xl border border-zinc-100 shadow-sm">
          <Caption className="mb-4 block">Investment Thesis Card (VCFundDashboard)</Caption>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative h-full min-h-[300px] bg-white border border-gray-200 rounded-xl p-6 pb-20 transition-all duration-200 hover:shadow-md cursor-pointer">
              {/* TOP BADGE */}
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] px-2 py-1 rounded bg-purple-100 text-purple-700 font-semibold">
                  WEB
                </span>
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-gray-900 mb-6 group-hover:text-[#10009A] transition-colors duration-200">
                Enterprise SaaS Fund
              </h3>

              {/* CONTENT */}
              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                    <Rocket className="w-5 h-5 text-[#10009A]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase">Stage</p>
                    <p className="text-gray-800 font-medium">Series A - Series C</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                    <Globe className="w-5 h-5 text-[#10009A]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase">Region</p>
                    <p className="text-gray-800 font-medium">North America, Europe</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                    <Factory className="w-5 h-5 text-[#10009A]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase">Sectors</p>
                    <p className="text-gray-800 font-medium">Enterprise Software, Fintech</p>
                  </div>
                </div>
              </div>

              {/* FOOTER */}
              <div className="absolute bottom-0 left-0 w-full px-6 pb-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                <span>Last updated: Jan 15, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Deals Components */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="h-8 w-1 bg-indigo-600 rounded-full"></div>
          <H2>Recent Deals Components</H2>
        </div>
        <div className="space-y-8">
          {/* Filter Bar */}
          <div className="bg-white p-10 rounded-3xl border border-zinc-100 shadow-sm">
            <Caption className="mb-4 block">Filter Bar with Chips</Caption>
            <div className="flex flex-wrap items-center gap-3 mb-6 bg-white p-2.5 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.03)] border border-gray-100">
              <div className="relative flex-grow md:flex-grow-0 md:w-[350px]">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="text"
                  placeholder="Search deal name..."
                  className="w-full bg-[#f8fafc] text-sm font-medium text-gray-700 rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#150b70]/20 border-transparent placeholder-gray-400"
                />
              </div>

              {/* Active Filter Chips */}
              <div className="flex flex-wrap items-center gap-2.5 px-2">
                <div className="group flex items-center bg-white border border-zinc-200 pl-2.5 pr-1 py-1 rounded-full shadow-sm hover:border-indigo-200 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-2 mr-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.5)]"></div>
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Status</span>
                    <span className="text-[11px] font-bold text-[#150b70]">Ready</span>
                  </div>
                  <button className="p-1 rounded-full text-zinc-300 hover:text-red-500 hover:bg-red-50 transition-all duration-200">
                    <X size={13} />
                  </button>
                </div>

                <div className="group flex items-center bg-white border border-zinc-200 pl-2.5 pr-1 py-1 rounded-full shadow-sm hover:border-indigo-200 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-2 mr-1">
                    <Calendar size={12} className="text-indigo-500" />
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Date</span>
                    <span className="text-[11px] font-bold text-[#150b70]">Jan 1 - Jan 31</span>
                  </div>
                  <button className="p-1 rounded-full text-zinc-300 hover:text-red-500 hover:bg-red-50 transition-all duration-200">
                    <X size={13} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Analysis Card Skeleton */}
          <div className="bg-white p-10 rounded-3xl border border-zinc-100 shadow-sm">
            <Caption className="mb-4 block">Analysis Card Skeleton Loader</Caption>
            <div className="bg-white border-none shadow-[0_2px_10px_rgba(0,0,0,0.06)] rounded-xl p-5 animate-pulse min-h-[300px] flex flex-col">
              <div className="flex justify-between items-start mb-5">
                <div className="flex gap-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg shrink-0"></div>
                  <div>
                    <div className="h-5 bg-gray-200 rounded w-24 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-12"></div>
                  </div>
                </div>
                <div className="w-[70px] h-[50px] bg-gray-200 rounded-xl shrink-0"></div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 h-16 mb-5"></div>
              <div className="flex gap-2 mb-6">
                <div className="h-7 w-20 bg-gray-200 rounded-md"></div>
                <div className="h-7 w-20 bg-gray-200 rounded-md"></div>
                <div className="h-7 w-20 bg-gray-200 rounded-md"></div>
              </div>
              <div className="flex gap-3 mt-auto">
                <div className="flex-grow h-10 bg-gray-200 rounded-lg"></div>
                <div className="w-20 h-10 bg-gray-200 rounded-lg"></div>
              </div>
            </div>
          </div>

          {/* Modern Empty State */}
          <div className="bg-white p-10 rounded-3xl border border-zinc-100 shadow-sm">
            <Caption className="mb-4 block">Empty State (RecentDeals)</Caption>
            <div className="flex flex-col items-center justify-center py-20 px-4 rounded-xl border border-gray-100">
              <div className="relative mb-8">
                <div className="w-32 h-32 bg-indigo-50 rounded-full flex items-center justify-center animate-pulse">
                  <Search className="w-12 h-12 text-[#150b70]" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-100 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-100 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-center">No analyses yet</h3>
              <p className="text-gray-500 mb-8 text-center max-w-sm">Get started by running an AI-driven evaluation on a new company.</p>
              <button className="group relative inline-flex items-center gap-2 bg-[#150b70] text-white px-8 py-3 rounded-lg text-sm font-semibold hover:bg-[#0f0851] transition-all shadow-md">
                <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-200" />
                <span>Start your first analysis</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Document Upload Patterns */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="h-8 w-1 bg-indigo-600 rounded-full"></div>
          <H2>Document Upload Patterns</H2>
        </div>
        <div className="space-y-8">
          {/* Upload Drop Zone */}
          <div className="bg-white p-10 rounded-3xl border border-zinc-100 shadow-sm">
            <Caption className="mb-4 block">Document Upload Drop Zone</Caption>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-[#10009A]/30 hover:bg-gray-50/50 transition-all cursor-pointer">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 flex items-center justify-center">
                <Upload className="w-8 h-8 text-[#10009A]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Drop files here</h3>
              <p className="text-sm text-gray-500 mb-4">or click to browse from your computer</p>
              <p className="text-xs text-gray-400">Supports PDF, DOCX, XLSX up to 10MB</p>
            </div>
          </div>

          {/* Cloud Sync Loader */}
          <div className="bg-white p-10 rounded-3xl border border-zinc-100 shadow-sm">
            <Caption className="mb-4 block">Cloud Sync Loader</Caption>
            <div className="flex flex-col items-center justify-center py-12 px-8 bg-gradient-to-br from-indigo-50/50 to-white rounded-3xl border border-indigo-100/50 shadow-sm relative overflow-hidden">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-indigo-100/30 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

              {/* Main Visual Core */}
              <div className="relative mb-12">
                <motion.div
                  animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-24 h-24 rounded-3xl bg-white shadow-xl shadow-indigo-100 border border-indigo-50 flex items-center justify-center"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <Cloud className="w-10 h-10 text-indigo-600" />
                    <motion.div
                      animate={{ y: [0, 8, 0], opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="absolute -bottom-2 right-0 left-0 flex justify-center"
                    >
                      <Zap className="w-4 h-4 text-indigo-400 fill-current" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Message */}
              <div className="text-center z-10 max-w-sm">
                <h3 className="text-lg font-bold text-zinc-900 tracking-tight">Syncing Documents</h3>
                <p className="mt-2 text-sm text-zinc-500 leading-relaxed">Connecting to your secure documents and analyzing content...</p>
              </div>

              {/* Stage Indicators */}
              <div className="mt-10 flex items-center gap-2 w-full max-w-[280px]">
                {[
                  { id: 'syncing', label: 'Connecting', icon: Globe, status: 'completed' },
                  { id: 'fetching', label: 'Syncing', icon: Cloud, status: 'active' },
                  { id: 'processing', label: 'Retrieving', icon: Database, status: 'pending' },
                ].map((s, idx) => (
                  <React.Fragment key={s.id}>
                    <div className="flex flex-col items-center gap-1.5 flex-1 group">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 border ${s.status === 'active' ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200 border-indigo-600 scale-110" : s.status === 'completed' ? "bg-indigo-50 text-indigo-600 border-indigo-100" : "bg-zinc-50 text-zinc-400 border-zinc-100"}`}>
                        {s.status === 'completed' ? <ShieldCheck className="w-5 h-5" /> : <s.icon className="w-5 h-5" />}
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-widest text-center ${s.status === 'active' ? "text-indigo-600" : "text-zinc-400"}`}>
                        {s.label}
                      </span>
                    </div>
                    {idx < 2 && (
                      <div className="h-0.5 w-6 mb-4 bg-zinc-100 rounded-full overflow-hidden">
                        <div className={`h-full ${s.status === 'completed' || s.status === 'active' ? 'bg-indigo-600' : 'bg-zinc-100'}`} style={{ width: s.status === 'completed' ? '100%' : s.status === 'active' ? '50%' : '0%' }} />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Security Badge */}
              <div className="mt-10 flex items-center gap-2 px-3 py-1.5 bg-zinc-50 border border-zinc-100 rounded-lg">
                <ShieldCheck className="w-3.5 h-3.5 text-green-600" />
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-tighter">End-to-End Encryption Active</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Empty States */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="h-8 w-1 bg-indigo-600 rounded-full"></div>
          <H2>Empty States</H2>
        </div>
        <div className="bg-white p-10 rounded-3xl border border-zinc-100 shadow-sm">
          <Caption className="mb-4 block">Thesis Empty State (VCFundDashboard)</Caption>
          <div className="flex flex-col items-center justify-center py-16 px-4">
            <div className="relative mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-full flex items-center justify-center animate-pulse">
                <Search className="w-12 h-12 text-purple-400" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-200 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-200 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              <div className="absolute -bottom-4 right-4 w-4 h-4 bg-indigo-200 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0.6s' }}></div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-center">No analyses yet</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 w-full max-w-2xl">
              <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
                <Sparkles className="w-4 h-4 text-purple-500" />
                <span className="text-xs text-gray-600">AI-powered insights</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
                <FileText className="w-4 h-4 text-purple-500" />
                <span className="text-xs text-gray-600">Comprehensive analysis</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
                <Sparkles className="w-4 h-4 text-purple-500" />
                <span className="text-xs text-gray-600">Real-time collaboration</span>
              </div>
            </div>

                <MUIButton>
              <Sparkles className="w-4 h-4" />
              Create your first thesis
            </MUIButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UiReference;
