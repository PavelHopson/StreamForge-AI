import React, { useState, useRef } from 'react';
import { UploadCloud, ImageIcon } from './Icons';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants/translations';

interface UploadZoneProps {
  onImageSelected: (base64: string) => void;
  selectedImage: string | null;
  disabled: boolean;
  lang: Language;
}

export const UploadZone: React.FC<UploadZoneProps> = ({ onImageSelected, selectedImage, disabled, lang }) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const t = TRANSLATIONS[lang];

  const handleFile = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          onImageSelected(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (!disabled) setIsDragging(true);
  };

  const onDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (disabled) return;
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-300 mb-2">
        {t.upload_title}
      </label>
      
      <div
        onClick={() => !disabled && fileInputRef.current?.click()}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        className={`
          relative h-64 rounded-xl border-2 border-dashed transition-all duration-200 ease-in-out cursor-pointer overflow-hidden group
          ${isDragging ? 'border-twitch bg-twitch-dark/20' : 'border-gray-700 hover:border-twitch/50 hover:bg-twitch-darker'}
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
          ${selectedImage ? 'border-twitch' : 'bg-twitch-black'}
        `}
      >
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/*"
          disabled={disabled}
          onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
        />

        {selectedImage ? (
          <div className="w-full h-full relative">
            <img 
              src={selectedImage} 
              alt="Reference" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white font-medium flex items-center gap-2">
                <UploadCloud className="w-5 h-5" />
                {t.change_ref}
              </p>
            </div>
          </div>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            <div className="bg-twitch-dark/30 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-200">
              <ImageIcon className="w-8 h-8 text-twitch-light" />
            </div>
            <p className="text-lg font-medium text-white">{t.upload_click}</p>
            <p className="text-sm text-gray-400 mt-2 max-w-xs">
              {t.upload_sub}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
