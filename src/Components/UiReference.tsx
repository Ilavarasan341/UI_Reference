import React from 'react';
import { 
  Search, Plus, Calendar, Eye, FileText, Mail, Shield, 
  CheckCircle2, XCircle, Database, Edit2, Trash2, 
  MoreHorizontal, Sparkles, Building2, SlidersHorizontal,
  ChevronLeft, ChevronRight, UserCircle, Loader2
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
      <section className="space-y-8 pb-20">
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
    </div>
  );
};

export default UiReference;
