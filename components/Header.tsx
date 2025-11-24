import React from 'react';
import { Wand2 } from './Icons';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants/translations';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, setLang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <header className="bg-twitch-darker border-b border-twitch-dark py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-twitch rounded-lg">
            <Wand2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white">{t.app_name}</h1>
            <p className="text-xs text-gray-400">{t.powered_by}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center bg-twitch-black rounded-lg border border-gray-700 p-1">
            <button 
              onClick={() => setLang('en')}
              className={`px-3 py-1 rounded-md text-xs font-bold transition-colors ${lang === 'en' ? 'bg-twitch text-white' : 'text-gray-400 hover:text-white'}`}
            >
              EN
            </button>
            <button 
              onClick={() => setLang('ru')}
              className={`px-3 py-1 rounded-md text-xs font-bold transition-colors ${lang === 'ru' ? 'bg-twitch text-white' : 'text-gray-400 hover:text-white'}`}
            >
              RU
            </button>
          </div>
          <div className="text-sm text-gray-400 font-medium hidden sm:block border-l border-gray-700 pl-4">
            {t.subtitle}
          </div>
        </div>
      </div>
    </header>
  );
};
