
export interface GenerationState {
  isAnalyzing: boolean;
  isGenerating: boolean;
  step: 'idle' | 'analyzing' | 'generating' | 'complete' | 'error';
  error: string | null;
}

export interface StyleAnalysis {
  description: string;
  rawResponse: string;
}

export interface GeneratedAsset {
  imageUrl: string;
  promptUsed: string;
  styleUsed: string;
}

export type Language = 'en' | 'ru';

export type AspectRatio = '1:1' | '16:9' | '9:16' | '4:3' | '3:4';

export enum DesignType {
  OFFLINE_BANNER = 'OFFLINE_BANNER',
  YOUTUBE_BANNER = 'YOUTUBE_BANNER', // New YouTube Banner
  THUMBNAIL = 'THUMBNAIL', 
  PANEL = 'PANEL', 
  HEADER = 'HEADER',
  AVATAR = 'AVATAR',
  STARTING_SOON = 'STARTING_SOON',
  BRB = 'BRB',
  ENDING = 'ENDING',
  WEBCAM_16_9 = 'WEBCAM_16_9',
  WEBCAM_CIRCLE = 'WEBCAM_CIRCLE',
  ALERTS_PACK = 'ALERTS_PACK',
  PANELS_PACK = 'PANELS_PACK',
  LOWER_THIRD = 'LOWER_THIRD',
  // Specific Panels
  PANEL_SUBSCRIBE = 'PANEL_SUBSCRIBE',
  PANEL_DONATE = 'PANEL_DONATE',
  PANEL_DISCORD = 'PANEL_DISCORD',
  PANEL_YOUTUBE = 'PANEL_YOUTUBE',
  PANEL_ABOUT = 'PANEL_ABOUT',
  PANEL_SPECS = 'PANEL_SPECS',
  PANEL_TELEGRAM = 'PANEL_TELEGRAM',
  PANEL_SCHEDULE = 'PANEL_SCHEDULE',
  PANEL_RULES = 'PANEL_RULES',
  PANEL_MERCH = 'PANEL_MERCH',
  PANEL_CLIPS = 'PANEL_CLIPS',
  PANEL_CONTACT = 'PANEL_CONTACT',
  PANEL_SUPPORT = 'PANEL_SUPPORT',
}