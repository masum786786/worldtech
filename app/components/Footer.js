import React from 'react';

// Reusable component for each footer column
const FooterColumn = ({ title, links }) => (
  <div className="mb-8 lg:mb-0">
    <h3 className="text-white text-lg font-bold mb-4 tracking-wider uppercase">
      {title}
    </h3>
    <ul className="space-y-3">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.href || '#'}
            className="text-gray-400 hover:text-teal-400 text-sm transition-colors"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

// Component for the special 'ABOUT' column (with the accent line)
const AboutColumn = ({ title, links }) => (
  <div className="mb-8 lg:mb-0">
    <h3 className="text-white text-lg font-bold mb-4 tracking-wider uppercase">
      {title}
    </h3>
    <ul className="space-y-3">
      {links.map((link, index) => (
        <li key={index} className="flex items-center">
          {/* Accent Line (Teal/White) */}
          <span
            className={`w-1 h-5 mr-3 rounded-full ${
              index === 0 ? 'bg-teal-400' : 'bg-white/50'
            }`}
          ></span>
          <a
            href={link.href || '#'}
            className="text-gray-400 hover:text-teal-400 text-sm transition-colors"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);


const Footer = () => {
  // Define the data structure for the columns
  const footerData = [
    {
      title: 'Services',
      links: [
        { name: 'Digital Transformation' },
        { name: 'eGov Consultancy' },
        { name: 'Cloud Engineering' },
        { name: 'Software Development' },
        { name: 'Product Implementations with R&D' },
        { name: 'CRM with 360 Degree Connect' },
        { name: 'Modern Technologies' },
      ],
      component: FooterColumn,
    },
    {
      title: 'Verticals',
      links: [
        { name: 'Government' },
        { name: 'Social Sectors and Green Initiatives' },
        { name: 'Telecom' },
        { name: 'Energy and Utility' },
        { name: 'Travel and Hospitality' },
        { name: 'Healthcare' },
        { name: 'Banking and Finance' },
      ],
      component: FooterColumn,
    },
    {
      title: 'Technologies',
      links: [
        { name: 'Mobile Development' },
        { name: 'Software Development' },
        { name: 'Blockchain and Cryptocurrency' },
        { name: 'Datafication' },
        { name: 'Robotic Process Automation (RPA)' },
        { name: 'Edge Computing' },
        { name: 'Quantum Computing' },
      ],
      component: FooterColumn,
    },
    {
      title: 'About',
      links: [
        { name: 'Company Overview' },
        { name: 'Whitepapers' },
        { name: 'Solution Briefs' },
        { name: 'Blog Posts' },
        { name: 'Webinars' },
        { name: 'Podcasts' },
        { name: 'Case Studies' },
      ],
      component: AboutColumn, // Use the special column for "About"
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Main Links Grid --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 border-b border-gray-700/50 pb-12">
          {footerData.map((col, index) => (
            <col.component key={index} title={col.title} links={col.links} />
          ))}
        </div>

        {/* --- Logo and Copyright Section --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8">
          
          {/* Logo Section */}
          <div className="flex items-center mb-4 md:mb-0">
            {/* The provided logo image is a blue icon with 'inventix Technologies' text */}
            {/* Placeholder for the logo image/text */}
            <div className="flex items-end">
                {/* Replace with your actual image component e.g. <Image src="/inventix-logo.svg" alt="Inventix Logo" width={32} height={32} /> */}
                <span className="text-3xl font-extrabold text-teal-400 ">World</span>
                {/* <span className="text-2xl font-bold text-white">orld</span> */}
                <span className="text-xs font-normal text-gray-400 ml-1">Tech</span>
            </div>
          </div>
          
          {/* Copyright */}
          <p className="text-sm text-gray-500">
            Copyright &copy; 2025 worldTech. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;