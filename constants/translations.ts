import { Language } from '../types';

type TranslationKey = 
  | 'app_name'
  | 'powered_by'
  | 'subtitle'
  | 'upload_title'
  | 'upload_click'
  | 'upload_sub'
  | 'change_ref'
  | 'config_title'
  | 'asset_type_label'
  | 'vision_label'
  | 'vision_placeholder'
  | 'btn_generate'
  | 'btn_analyzing'
  | 'btn_generating'
  | 'detected_style'
  | 'error_title'
  | 'preview_canvas'
  | 'download_png'
  | 'state_analyzing_title'
  | 'state_analyzing_desc'
  | 'state_generating_title'
  | 'state_generating_desc'
  | 'state_idle_title'
  | 'state_idle_desc'
  | 'error_generic';

export const TRANSLATIONS: Record<Language, Record<TranslationKey, string>> = {
  en: {
    app_name: 'StreamForge AI',
    powered_by: 'Powered by Gemini NanoBanana',
    subtitle: 'Twitch Design Generator',
    upload_title: '1. Reference Image (Style Source)',
    upload_click: 'Click or drop an image',
    upload_sub: 'Upload a visual reference for style, colors, and mood.',
    change_ref: 'Change Reference',
    config_title: '2. Configuration',
    asset_type_label: 'Asset Type',
    vision_label: '3. Describe your vision',
    vision_placeholder: 'e.g., A futuristic city skyline with neon signs, dark atmosphere, centered text area...',
    btn_generate: 'Generate Design',
    btn_analyzing: 'Analyzing Style...',
    btn_generating: 'Generating Asset...',
    detected_style: 'Detected Style',
    error_title: 'Generation Error',
    preview_canvas: 'Preview Canvas',
    download_png: 'Download PNG',
    state_analyzing_title: 'Studying Art Style',
    state_analyzing_desc: 'Gemini is deconstructing the reference image...',
    state_generating_title: 'Creating Masterpiece',
    state_generating_desc: 'Applying style vectors to your prompt...',
    state_idle_title: 'Ready to Create',
    state_idle_desc: 'Upload a reference and enter a prompt to generate professional Twitch assets instantly.',
    error_generic: 'An unexpected error occurred.',
  },
  ru: {
    app_name: 'StreamForge AI',
    powered_by: 'На базе Gemini NanoBanana',
    subtitle: 'Генератор дизайна для Twitch',
    upload_title: '1. Референс (Источник стиля)',
    upload_click: 'Нажмите или перетащите',
    upload_sub: 'Загрузите изображение для анализа стиля, цветов и атмосферы.',
    change_ref: 'Изменить референс',
    config_title: '2. Настройки',
    asset_type_label: 'Тип ассета',
    vision_label: '3. Опишите идею',
    vision_placeholder: 'например, Футуристичный город, неон, темная атмосфера, место под текст по центру...',
    btn_generate: 'Создать дизайн',
    btn_analyzing: 'Анализ стиля...',
    btn_generating: 'Генерация...',
    detected_style: 'Определенный стиль',
    error_title: 'Ошибка генерации',
    preview_canvas: 'Предпросмотр',
    download_png: 'Скачать PNG',
    state_analyzing_title: 'Изучаем стиль',
    state_analyzing_desc: 'Gemini декомпозирует ваше изображение...',
    state_generating_title: 'Создаем шедевр',
    state_generating_desc: 'Применяем стилевые векторы к вашему запросу...',
    state_idle_title: 'Готов к работе',
    state_idle_desc: 'Загрузите референс и опишите задачу, чтобы создать профессиональное оформление.',
    error_generic: 'Произошла непредвиденная ошибка.',
  }
};
