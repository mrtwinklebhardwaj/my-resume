'use client';


import { motion } from 'framer-motion';
import { TooltipProvider } from './components/Tooltip';
import { Card, CardContent } from './components/CardComponents';
import { Button } from './components/Buttons';
import FloatingNavbar from './components/FloatingNavbar';
import SocialLinks from './components/SocialLinks';
import LeftSideSection from './components/LeftSideSection';
import RightSideContent from './components/RightSideContent';

export default function Portfolio() {
  return (
    <TooltipProvider>
      <div className="min-h-screen p-8 flex flex-col height-100vh">
        <FloatingNavbar />

        <div className="min-h-screen p-8 grid grid-cols-[420px_auto] gap-6">
          
        <LeftSideSection className="sticky top-[80px] self-start" />


         <RightSideContent />
          
        </div>
      </div>
    </TooltipProvider>
  );
}
