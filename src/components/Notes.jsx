import React, { useState } from 'react';

const Notes = () => {
  const [activeTab, setActiveTab] = useState('react');

  const tabs = [
    { id: 'react', label: 'React.js', icon: <i className="ri-reactjs-line text-xl" /> },
    { id: 'javascript', label: 'JavaScript', icon: <i className="ri-javascript-line text-xl" /> },
    { id: 'typescript', label: 'TypeScript', icon: <i className="ri-code-s-slash-line text-xl" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div className="bg-gradient-to-r from-[#1e40af] to-[#010319] text-white py-12 sm:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#e3ecff]">Developer Notes</h1>
          <p className="text-lg md:text-xl text-[#e3ecff]">Collection of important concepts and best practices</p>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">

          {/* Tab Navigation as Chips */}
          <div className="border-b border-gray-200 px-4 py-4">
            <div className="flex gap-3 flex-wrap justify-start">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100 hover:text-blue-600'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'react' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">React.js Notes</h2>
                <p className="text-base text-gray-600">Coming soon...</p>
              </div>
            )}
            {activeTab === 'javascript' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">JavaScript Notes</h2>
                <p className="text-base text-gray-600">Coming soon...</p>
              </div>
            )}
            {activeTab === 'typescript' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">TypeScript Notes</h2>
                <p className="text-base text-gray-600">Coming soon...</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Notes;
