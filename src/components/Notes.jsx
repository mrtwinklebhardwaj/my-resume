import React, { useState } from 'react';

const Notes = () => {
  const [activeTab, setActiveTab] = useState('react');

  const tabs = [
    { id: 'react', label: 'React.js', icon: <i className="ri-reactjs-line text-xl sm:text-2xl" /> },
    { id: 'javascript', label: 'JavaScript', icon: <i className="ri-javascript-line text-xl sm:text-2xl" /> },
    { id: 'typescript', label: 'TypeScript', icon: <i className="ri-code-s-slash-line text-xl sm:text-2xl" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-8 xs:py-12 sm:py-20">
        <div className="container mx-auto px-3 xs:px-4">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-2 xs:mb-4">Developer Notes</h1>
          <p className="text-base xs:text-lg sm:text-xl text-blue-100">Collection of important concepts and best practices</p>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="container mx-auto px-3 xs:px-4 py-4 xs:py-6 sm:py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <nav className="flex flex-col xs:flex-row -mb-px">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center justify-center xs:justify-start px-3 xs:px-4 sm:px-6 py-2 xs:py-3 sm:py-4 text-xs xs:text-sm font-medium w-full xs:w-auto ${
                    activeTab === tab.id
                      ? 'border-b-2 xs:border-b-2 border-blue-500 text-blue-600'
                      : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <span className="mr-1 xs:mr-2">{tab.icon}</span>
                  <span className="hidden xs:inline">{tab.label}</span>
                  <span className="xs:hidden">{tab.label.split('.')[0]}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-3 xs:p-4 sm:p-6">
            {activeTab === 'react' && (
              <div>
                <h2 className="text-lg xs:text-xl sm:text-2xl font-semibold mb-2 xs:mb-4">React.js Notes</h2>
                <p className="text-sm xs:text-base text-gray-600">Coming soon...</p>
              </div>
            )}
            {activeTab === 'javascript' && (
              <div>
                <h2 className="text-lg xs:text-xl sm:text-2xl font-semibold mb-2 xs:mb-4">JavaScript Notes</h2>
                <p className="text-sm xs:text-base text-gray-600">Coming soon...</p>
              </div>
            )}
            {activeTab === 'typescript' && (
              <div>
                <h2 className="text-lg xs:text-xl sm:text-2xl font-semibold mb-2 xs:mb-4">TypeScript Notes</h2>
                <p className="text-sm xs:text-base text-gray-600">Coming soon...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes; 