import React, { useState, useEffect } from 'react';

const roles = [
  'Full Stack Developer',
  'QA Specialist',
  'Web3 Developer',
];

export default function RoleAnimation() {
  const [currentRole, setCurrentRole] = useState(roles[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const animationDelay = setTimeout(() => {
      setIsAnimating(true);
      setCurrentRole('');
    }, 2500); // Start animation after 2 seconds

    return () => clearTimeout(animationDelay);
  }, []);

  useEffect(() => {
    if (!isAnimating) return;

    const timeout = setTimeout(() => {
      if (!isDeleting && currentRole === roles[currentIndex]) {
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }

      if (isDeleting && currentRole === '') {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
        return;
      }

      setCurrentRole((prevRole) => {
        if (isDeleting) {
          return prevRole.slice(0, -1);
        } else {
          return roles[currentIndex].slice(0, prevRole.length + 1);
        }
      });
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentRole, isDeleting, currentIndex, isAnimating]);

  return (
    <div className="inline-block w-full md:w-96 h-10 overflow-hidden">
      <span 
        className="font-mono text-xl md:text-2xl lg:text-3xl font-bold text-blue-600 dark:text-blue-400"
        aria-label={roles.join(', ')}
      >
        {isAnimating ? currentRole : roles[0]}
      </span>
      {isAnimating && (
        <span className="animate-blink text-xl md:text-2xl lg:text-3xl font-bold text-blue-600 dark:text-blue-400" aria-hidden="true">|</span>
      )}
    </div>
  );
}