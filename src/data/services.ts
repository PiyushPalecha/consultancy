import { 
  ShieldCheck, 
  PiggyBank, 
  Coins, 
  Umbrella, 
  LineChart, 
  GraduationCap, 
  PlusCircle, 
  Users 
} from 'lucide-react';

export const services = [
  {
    id: 'life-insurance',
    title: 'Life Insurance & Family Protection',
    description: 'Build financial protection for your family and loved ones with life insurance solutions aligned to your responsibilities and long-term needs.',
    features: ['Term Protection', 'Whole Life Protection', 'Family Financial Security', 'Life Cover Planning'],
    cta: 'Discuss Your Protection Needs',
    icon: ShieldCheck,
    isFeatured: true
  },
  {
    id: 'savings-endowment',
    title: 'Savings & Endowment Planning',
    description: 'Plan for important future milestones while combining insurance protection with disciplined long-term savings.',
    features: ['Endowment Plans', 'Savings-Oriented Plans', 'Long-Term Goal Planning', 'Maturity Planning'],
    cta: 'Discuss Your Savings Goals',
    icon: PiggyBank,
    isFeatured: true
  },
  {
    id: 'retirement',
    title: 'Retirement & Pension Planning',
    description: 'Create a structured approach to retirement income and long-term financial independence.',
    features: ['Pension Plans', 'Annuity Planning', 'Retirement Income Planning', 'Post-Retirement Security'],
    cta: 'Discuss Your Retirement',
    icon: Umbrella,
    isFeatured: true
  },
  {
    id: 'money-back',
    title: 'Money Back & Periodic Benefit Planning',
    description: 'For customers looking for structured benefits during the policy term while maintaining life protection.',
    features: ['Money Back Plans', 'Periodic Benefit Planning', 'Goal-Based Planning'],
    cta: 'Explore Money Back Options',
    icon: Coins,
    isFeatured: false
  },
  {
    id: 'market-linked',
    title: 'Market-Linked / Unit Linked Planning',
    description: 'For customers considering insurance solutions that include market-linked investment components and understand associated market risks.',
    features: ['ULIP / Unit Linked Plans', 'Long-Term Investment Planning', 'Fund Selection Discussion', 'Risk & Goal Discussion'],
    cta: 'Discuss Market-Linked Plans',
    icon: LineChart,
    isFeatured: false
  },
  {
    id: 'child-future',
    title: 'Child Future Planning',
    description: 'Plan ahead for your child\'s education, milestones and future financial needs.',
    features: ['Education Planning', 'Future Goal Planning', 'Child-Oriented Insurance Solutions'],
    cta: 'Discuss Child Planning',
    icon: GraduationCap,
    isFeatured: false
  },
  {
    id: 'riders',
    title: 'Riders & Additional Protection',
    description: 'Explore additional protection options that may complement a base insurance plan.',
    features: ['Accident-related protection', 'Additional risk coverage', 'Applicable riders'],
    cta: 'Explore Additional Protection',
    icon: PlusCircle,
    isFeatured: false
  },
  {
    id: 'micro-insurance',
    title: 'Micro Insurance / Accessible Protection',
    description: 'Explore insurance solutions designed for customers seeking accessible protection options.',
    features: ['Accessible Term', 'Basic Protection'],
    cta: 'Explore Micro Insurance',
    icon: ShieldCheck,
    isFeatured: false
  },
  {
    id: 'group-solutions',
    title: 'Group Insurance & Employee Benefits',
    description: 'B2B solutions including group insurance, employee benefit planning, and superannuation-related discussions.',
    features: ['Group Insurance', 'Group Term Protection', 'Employee Benefit Planning', 'Gratuity-related solutions', 'Superannuation', 'Group pension discussions'],
    cta: 'Discuss Group Solutions',
    icon: Users,
    isFeatured: true, // displayed differently as a wide banner
    isB2B: true
  }
];
