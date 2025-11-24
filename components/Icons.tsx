import React from 'react';
import { Loader2, UploadCloud, Wand2, Image as ImageIcon, Download, AlertCircle } from 'lucide-react';

export const Spinner = ({ className }: { className?: string }) => (
  <Loader2 className={`animate-spin ${className}`} />
);

export { UploadCloud, Wand2, ImageIcon, Download, AlertCircle };