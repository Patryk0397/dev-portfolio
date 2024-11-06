import React, { useState, useEffect, useRef } from 'react';
import { FaRedo } from 'react-icons/fa';

interface SkillsModalProps {
  onClose: () => void;
}

const SkillsModal: React.FC<SkillsModalProps> = ({ onClose }) => {
  const [searchInput, setSearchInput] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [compatibility, setCompatibility] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [checkingText, setCheckingText] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const inputRef = useRef<HTMLDivElement>(null);
  const skills = [
    "React", "Vue", "Angular", "Node.js", "GraphQL", "Google Cloud Platform",
    "MongoDB", "TypeScript", "JavaScript", "CSS", "SQL", "REST APIs",
    "Tailwind CSS", "NuxtJS", "Bootstrap", "NestJS", "Microservices", "Serverless",
    "BunJS", "Firebase", "Spanner", "Express", "GCP", "Python", "HTML"
  ];

  const getCompatibilityMessage = (compatibility: number): string => {
    if (compatibility === 100) return "Perfect match! 🎉 It's like we were coded to work together!";
    else if (compatibility >= 80) return "Almost perfect! 🔥 We’re a strong pair, just a few tweaks, and we’re there!";
    else if (compatibility >= 60) return "Pretty solid! 👍 We’re on the same page, just a few missing puzzle pieces.";
    else if (compatibility >= 40) return "We’ve got some overlap! 👀 A bit of learning, and we’ll be unstoppable.";
    else if (compatibility >= 20) return "There’s potential here! 🌱 We just need to work on a few things.";
    else return "Well, opposites attract, right? 😅 I may need a crash course to catch up!";
  };

  const filteredSkills = skills.filter(skill => skill.toLowerCase().includes(searchInput) && !selectedSkills.includes(skill));

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSkillSelection = (skill: string) => {
    const formattedSkill = skill.charAt(0).toUpperCase() + skill.slice(1).toLowerCase();
    if (!selectedSkills.includes(formattedSkill)) {
      setSelectedSkills((prev) => [...prev, formattedSkill]);
    }
    setSearchInput('');
    setShowSuggestions(false);
  };

  const handleEnterKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (highlightedIndex >= 0 && filteredSkills[highlightedIndex]) {
        handleSkillSelection(filteredSkills[highlightedIndex]);
      } else if (searchInput) {
        handleSkillSelection(searchInput);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex((prevIndex) => (prevIndex + 1) % filteredSkills.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex((prevIndex) => (prevIndex - 1 + filteredSkills.length) % filteredSkills.length);
    }
  };

  const handleCompatibilityCheck = () => {
    setLoading(true);
    setCompatibility(null);
    setCheckingText('');

    const typingText = "Checking...";
    let typingIndex = 0;
    const typingInterval = setInterval(() => {
      setCheckingText(typingText.slice(0, typingIndex + 1));
      typingIndex += 1;
      if (typingIndex === typingText.length) clearInterval(typingInterval);
    }, 150);

    setTimeout(() => {
      const matchedSkills = selectedSkills.filter(skill => skills.map(s => s.toLowerCase()).includes(skill.toLowerCase()));
      const compatibilityScore = Math.round((matchedSkills.length / selectedSkills.length) * 100);
      setCompatibility(compatibilityScore);
      setLoading(false);
    }, 2000);
  };

  const removeSkill = (skill: string) => setSelectedSkills(selectedSkills.filter(selected => selected !== skill));

  const resetSkills = () => {
    setSearchInput('');
    setSelectedSkills([]);
    setCompatibility(null);
    setLoading(false);
    setCheckingText('');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg w-full max-w-lg mx-4 relative min-h-[250px]">
        <button onClick={onClose} className="absolute top-2 right-2 mr-2 text-gray-500 dark:text-gray-400">✕</button>
        <h2 className="text-2xl font-bold mb-4">Are we a match made in heaven?</h2>

        {/* Input and Suggestions - Hide when compatibility result is displayed */}
        {(compatibility === null && !loading) && (
          <div className="relative mb-4" ref={inputRef}>
            <input
              type="text"
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value.toLowerCase());
                setShowSuggestions(true);
                setHighlightedIndex(-1);
              }}
              onKeyDown={handleEnterKey}
              onClick={() => setShowSuggestions(true)}
              placeholder="Type a technology..."
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:text-white text-black dark:bg-gray-900"
            />

            {/* Suggested Skills Dropdown */}
            {showSuggestions && filteredSkills.length > 0 && (
              <div className="absolute z-10 bg-white dark:bg-gray-700 rounded shadow-lg p-2 mt-1 w-full max-h-40 overflow-y-auto">
                {filteredSkills.map((skill, index) => (
                  <div
                    key={skill}
                    className={`cursor-pointer p-2 hover:bg-blue-100 dark:hover:bg-gray-600 ${
                      index === highlightedIndex ? 'bg-blue-100 dark:bg-gray-600' : ''
                    }`}
                    onClick={() => handleSkillSelection(skill)}
                    onMouseEnter={() => setHighlightedIndex(index)}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Selected Skills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {selectedSkills.map(skill => (
            <span key={skill} className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm flex items-center">
              {skill}
              {(compatibility === null && !loading) && (
                <button onClick={() => removeSkill(skill)} className="ml-2 text-white">✕</button>
              )}
            </span>
          ))}
        </div>

        {loading ? (
          <div className="mt-4 w-full bg-gray-200 rounded-full h-8 overflow-hidden relative">
            <div className="bg-blue-500 h-8 rounded-full transition-all ease-linear" style={{ width: '100%', transition: 'width 3s ease-in-out' }}></div>
            <span className="absolute inset-0 flex items-center justify-center text-black font-bold typing-animation">{checkingText}</span>
          </div>
        ) : compatibility !== null ? (
          <div className="mt-4 text-center">
            <div className="text-xl font-bold text-black dark:text-white mb-2">
              {compatibility}% - {getCompatibilityMessage(compatibility)}
            </div>
            <button onClick={resetSkills} className="flex items-center text-blue-500 hover:text-blue-700 transition mt-4">
              <FaRedo className="mr-1" /> Try again
            </button>
          </div>
        ) : (
          <div className="flex justify-center">
            <button
              onClick={handleCompatibilityCheck}
              disabled={! selectedSkills.length}
              className="px-6 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600 transition"
            >
              Check our compatibility ❤️
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillsModal;
