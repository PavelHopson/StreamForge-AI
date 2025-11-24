
import { DesignType, AspectRatio } from '../types';

interface AssetSpec {
  id: DesignType;
  label: {
    en: string;
    ru: string;
  };
  techPrompt: string; // Technical description for the AI
  aspectRatio: AspectRatio;
}

export const ASSET_SPECS: Record<DesignType, AssetSpec> = {
  [DesignType.YOUTUBE_BANNER]: {
    id: DesignType.YOUTUBE_BANNER,
    label: { en: 'YouTube Channel Banner (2048x1152)', ru: 'Шапка YouTube канала (2048x1152)' },
    techPrompt: 'YouTube Channel Banner, 2048x1152 resolution. CRITICAL: All text, logos, and main focal points MUST be in the exact center "safe zone" (1546x423px). Background should extend to full edges with textures/gradients but no essential content on edges. Professional branding style matching reference.',
    aspectRatio: '16:9',
  },
  [DesignType.THUMBNAIL]: {
    id: DesignType.THUMBNAIL,
    label: { en: 'Video Thumbnail (1920x1080)', ru: 'Превью видео / YouTube (1920x1080)' },
    techPrompt: 'YouTube Video Thumbnail, 1920x1080. High contrast, exciting composition, clear focus on main subject, blurred background depth, space for text overlay, clickbait style lighting.',
    aspectRatio: '16:9',
  },
  [DesignType.OFFLINE_BANNER]: {
    id: DesignType.OFFLINE_BANNER,
    label: { en: 'Twitch Offline Banner (1920x1080)', ru: 'Оффлайн баннер (1920x1080)' },
    techPrompt: 'Twitch Offline Banner, 1920x1080 resolution, high detail',
    aspectRatio: '16:9',
  },
  [DesignType.STARTING_SOON]: {
    id: DesignType.STARTING_SOON,
    label: { en: 'Starting Soon Screen (1920x1080)', ru: 'Экран "Скоро начало" (1920x1080)' },
    techPrompt: 'Stream "Starting Soon" screen, 1920x1080, centered typography, engaging background',
    aspectRatio: '16:9',
  },
  [DesignType.BRB]: {
    id: DesignType.BRB,
    label: { en: 'Be Right Back Screen (1920x1080)', ru: 'Экран "Скоро вернусь" (1920x1080)' },
    techPrompt: 'Stream "Be Right Back" screen, 1920x1080, waiting mode atmosphere',
    aspectRatio: '16:9',
  },
  [DesignType.ENDING]: {
    id: DesignType.ENDING,
    label: { en: 'Stream Ending Screen (1920x1080)', ru: 'Экран "Стрим окончен" (1920x1080)' },
    techPrompt: 'Stream "Stream Ending" screen, 1920x1080, closing credits vibe',
    aspectRatio: '16:9',
  },
  [DesignType.HEADER]: {
    id: DesignType.HEADER,
    label: { en: 'Twitch Profile Banner (1200x480)', ru: 'Шапка профиля Twitch (1200x480)' },
    techPrompt: 'Twitch Profile Header Banner, 1200x480, branding focused',
    aspectRatio: '16:9', // Best fit for 2.5:1
  },
  [DesignType.AVATAR]: {
    id: DesignType.AVATAR,
    label: { en: 'Profile Picture / Logo', ru: 'Аватарка / Логотип' },
    techPrompt: 'Twitch Profile Picture logo, square aspect ratio, centered icon',
    aspectRatio: '1:1',
  },
  [DesignType.WEBCAM_16_9]: {
    id: DesignType.WEBCAM_16_9,
    label: { en: 'Webcam Overlay 16:9 (Transparent)', ru: 'Рамка веб-камеры 16:9 (Прозрачная)' },
    techPrompt: 'Webcam frame overlay 16:9 ratio. IMPORTANT: Create a frame with a solid black or green center for easy transparency removal. The border should be decorative.',
    aspectRatio: '16:9',
  },
  [DesignType.WEBCAM_CIRCLE]: {
    id: DesignType.WEBCAM_CIRCLE,
    label: { en: 'Circular Webcam (Transparent)', ru: 'Круглая веб-камера (Прозрачная)' },
    techPrompt: 'Circular webcam frame. IMPORTANT: Create a ring frame with a solid black or green center for easy transparency removal.',
    aspectRatio: '1:1',
  },
  [DesignType.ALERTS_PACK]: {
    id: DesignType.ALERTS_PACK,
    label: { en: 'Alerts Pack (4 variants)', ru: 'Набор алертов (4 варианта)' },
    techPrompt: 'Set of 4 distinct stream alert graphics (New Follower, Donation, Subscriber, Raid) arranged on a grid. Isolated on solid background.',
    aspectRatio: '1:1',
  },
  [DesignType.LOWER_THIRD]: {
    id: DesignType.LOWER_THIRD,
    label: { en: 'Lower Third (Transparent)', ru: 'Бегущая строка (Lower Third)' },
    techPrompt: 'Lower third broadcast overlay bar, 1920x200 ratio. Isolated on solid background for transparency.',
    aspectRatio: '16:9',
  },
  [DesignType.PANELS_PACK]: {
    id: DesignType.PANELS_PACK,
    label: { en: 'Panels Pack (Socials + Donate)', ru: 'Набор панелей (Соцсети + Донат)' },
    techPrompt: 'Set of matching Twitch panels (About, Rules, Donate, Socials, Specs). 600x200 equivalent ratio each. Clean typography.',
    aspectRatio: '16:9',
  },
  [DesignType.PANEL]: {
    id: DesignType.PANEL,
    label: { en: 'Info Panel (Generic)', ru: 'Инфо-панель (Общая)' },
    techPrompt: 'Twitch Info Panel header, 320x160, containing text area',
    aspectRatio: '16:9',
  },
  // Specific Single Panels
  [DesignType.PANEL_SUBSCRIBE]: {
    id: DesignType.PANEL_SUBSCRIBE,
    label: { en: 'Panel: Subscribe', ru: 'Панель: Подписаться' },
    techPrompt: 'Twitch Info Panel button with clearly visible text "SUBSCRIBE" or "SUB". 320x160 ratio. Professional graphics.',
    aspectRatio: '16:9',
  },
  [DesignType.PANEL_DONATE]: {
    id: DesignType.PANEL_DONATE,
    label: { en: 'Panel: Donate', ru: 'Панель: Донат' },
    techPrompt: 'Twitch Info Panel button with clearly visible text "DONATE" or dollar sign icon. 320x160 ratio. Professional graphics.',
    aspectRatio: '16:9',
  },
  [DesignType.PANEL_DISCORD]: {
    id: DesignType.PANEL_DISCORD,
    label: { en: 'Panel: Discord', ru: 'Панель: Дискорд' },
    techPrompt: 'Twitch Info Panel button with Discord logo and text "DISCORD". 320x160 ratio. Professional graphics.',
    aspectRatio: '16:9',
  },
  [DesignType.PANEL_YOUTUBE]: {
    id: DesignType.PANEL_YOUTUBE,
    label: { en: 'Panel: YouTube', ru: 'Панель: Ютуб' },
    techPrompt: 'Twitch Info Panel button with YouTube logo and text "YOUTUBE". 320x160 ratio. Professional graphics.',
    aspectRatio: '16:9',
  },
  [DesignType.PANEL_ABOUT]: {
    id: DesignType.PANEL_ABOUT,
    label: { en: 'Panel: About Me', ru: 'Панель: Обо мне' },
    techPrompt: 'Twitch Info Panel button with text "ABOUT ME" or user icon. 320x160 ratio. Professional graphics.',
    aspectRatio: '16:9',
  },
  [DesignType.PANEL_SPECS]: {
    id: DesignType.PANEL_SPECS,
    label: { en: 'Panel: PC Specs', ru: 'Панель: ПК конфигурация' },
    techPrompt: 'Twitch Info Panel button with text "PC SPECS" or "GEAR" or computer chip icon. 320x160 ratio. Professional graphics.',
    aspectRatio: '16:9',
  },
  [DesignType.PANEL_TELEGRAM]: {
    id: DesignType.PANEL_TELEGRAM,
    label: { en: 'Panel: Telegram', ru: 'Панель: Телеграм канал' },
    techPrompt: 'Twitch Info Panel button with Telegram logo and text "TELEGRAM". 320x160 ratio. Professional graphics.',
    aspectRatio: '16:9',
  },
  [DesignType.PANEL_SCHEDULE]: {
    id: DesignType.PANEL_SCHEDULE,
    label: { en: 'Panel: Schedule', ru: 'Панель: Расписание' },
    techPrompt: 'Twitch Info Panel button with calendar or clock icon and text "SCHEDULE". 320x160 ratio. Professional graphics.',
    aspectRatio: '16:9',
  },
  [DesignType.PANEL_RULES]: {
    id: DesignType.PANEL_RULES,
    label: { en: 'Panel: Rules', ru: 'Панель: Правила' },
    techPrompt: 'Twitch Info Panel button with shield or checkmark icon and text "RULES". 320x160 ratio. Professional graphics.',
    aspectRatio: '16:9',
  },
  [DesignType.PANEL_MERCH]: {
    id: DesignType.PANEL_MERCH,
    label: { en: 'Panel: Merch', ru: 'Панель: Магазин / Мерч' },
    techPrompt: 'Twitch Info Panel button with t-shirt or shopping bag icon and text "MERCH" or "STORE". 320x160 ratio. Professional graphics.',
    aspectRatio: '16:9',
  },
  [DesignType.PANEL_CLIPS]: {
    id: DesignType.PANEL_CLIPS,
    label: { en: 'Panel: Clips', ru: 'Панель: Клипы' },
    techPrompt: 'Twitch Info Panel button with scissors or film strip icon and text "CLIPS". 320x160 ratio. Professional graphics.',
    aspectRatio: '16:9',
  },
  [DesignType.PANEL_CONTACT]: {
    id: DesignType.PANEL_CONTACT,
    label: { en: 'Panel: Contact', ru: 'Панель: Контакты / Бизнес' },
    techPrompt: 'Twitch Info Panel button with envelope or letter icon and text "CONTACT". 320x160 ratio. Professional graphics.',
    aspectRatio: '16:9',
  },
  [DesignType.PANEL_SUPPORT]: {
    id: DesignType.PANEL_SUPPORT,
    label: { en: 'Panel: Support', ru: 'Панель: Поддержать' },
    techPrompt: 'Twitch Info Panel button with heart or hands icon and text "SUPPORT". 320x160 ratio. Professional graphics.',
    aspectRatio: '16:9',
  },
};
