export type NavItem = {
  label: string;
  href: string;
};

export type Feature = {
  icon: string;
  title: string;
  description: string;
  highlight?: boolean;
};

export type Stat = {
  value: string;
  label: string;
  suffix?: string;
};

export type Testimonial = {
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
};

export type PricingPlan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};
