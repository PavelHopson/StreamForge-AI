import React, { useState } from 'react';
import { Header } from './components/Header';
import { UploadZone } from './components/UploadZone';
import { Spinner, Wand2, AlertCircle, Download } from './components/Icons';
import { analyzeImageStyle, generateTwitchAsset } from './services/geminiService';
import { GenerationState, DesignType, Language } from './types';
import { TRANSLATIONS } from './constants/translations';
import { ASSET_SPECS } from './constants/assets';

function App() {
  const [lang, setLang] = useState<Language>('ru'); // Default to RU as requested
  const [referenceImage, setReferenceImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [designType, setDesignType] = useState<DesignType>(DesignType.OFFLINE_BANNER);
  const [extractedStyle, setExtractedStyle] = useState<string>('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  
  const [state, setState] = useState<GenerationState>({
    isAnalyzing: false,
    isGenerating: false,
    step: 'idle',
    error: null,
  });

  const t = TRANSLATIONS[lang];

  const handleGenerate = async () => {
    if (!referenceImage || !prompt) return;

    try {
      setState({ isAnalyzing: true, isGenerating: false, step: 'analyzing', error: null });
      setGeneratedImage(null);
      setExtractedStyle('');

      // Step 1: Extract Style
      const styleDesc = await analyzeImageStyle(referenceImage, lang);
      setExtractedStyle(styleDesc);
      
      setState({ isAnalyzing: false, isGenerating: true, step: 'generating', error: null });

      // Step 2: Generate Asset
      // Use the technical English prompt for the AI from ASSET_SPECS
      const assetSpec = ASSET_SPECS[designType];
      const techPrompt = assetSpec.techPrompt;
      
      const resultImage = await generateTwitchAsset(prompt, techPrompt, styleDesc, referenceImage, assetSpec.aspectRatio);
      
      setGeneratedImage(resultImage);
      setState({ isAnalyzing: false, isGenerating: false, step: 'complete', error: null });

    } catch (err: any) {
      setState({ 
        isAnalyzing: false, 
        isGenerating: false, 
        step: 'error', 
        error: err.message || t.error_generic 
      });
    }
  };

  return (
    <div className="min-h-screen bg-twitch-darker flex flex-col font-sans">
      <Header lang={lang} setLang={setLang} />

      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Error Banner */}
        {state.error && (
          <div className="mb-8 bg-red-900/30 border border-red-500/50 rounded-lg p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-red-200 font-medium">{t.error_title}</h3>
              <p className="text-red-300 text-sm mt-1">{state.error}</p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Controls */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Step 1: Upload */}
            <section>
              <UploadZone 
                onImageSelected={setReferenceImage} 
                selectedImage={referenceImage}
                disabled={state.step === 'analyzing' || state.step === 'generating'}
                lang={lang}
              />
            </section>

            {/* Step 2: Configuration */}
            <section className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {t.asset_type_label}
                </label>
                <select 
                  value={designType}
                  onChange={(e) => setDesignType(e.target.value as DesignType)}
                  disabled={state.step === 'analyzing' || state.step === 'generating'}
                  className="w-full bg-twitch-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-twitch focus:border-transparent outline-none appearance-none"
                >
                  {Object.values(ASSET_SPECS).map((spec) => (
                    <option key={spec.id} value={spec.id}>
                      {spec.label[lang]}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {t.vision_label}
                </label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder={t.vision_placeholder}
                  disabled={state.step === 'analyzing' || state.step === 'generating'}
                  className="w-full bg-twitch-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 h-32 focus:ring-2 focus:ring-twitch focus:border-transparent outline-none resize-none"
                />
              </div>
            </section>

            {/* Action Button */}
            <button
              onClick={handleGenerate}
              disabled={!referenceImage || !prompt || state.step === 'analyzing' || state.step === 'generating'}
              className={`
                w-full flex items-center justify-center gap-2 py-4 rounded-lg font-bold text-lg shadow-lg transition-all transform
                ${(!referenceImage || !prompt) 
                  ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                  : state.step === 'analyzing' || state.step === 'generating'
                    ? 'bg-twitch-dark text-white cursor-wait'
                    : 'bg-twitch hover:bg-twitch-light text-white hover:scale-[1.02] shadow-twitch/20'
                }
              `}
            >
              {state.step === 'analyzing' ? (
                <>
                  <Spinner className="w-5 h-5" /> {t.btn_analyzing}
                </>
              ) : state.step === 'generating' ? (
                <>
                  <Spinner className="w-5 h-5" /> {t.btn_generating}
                </>
              ) : (
                <>
                  <Wand2 className="w-5 h-5" /> {t.btn_generate}
                </>
              )}
            </button>
            
            {/* Status Indicators */}
            {extractedStyle && state.step !== 'analyzing' && (
              <div className="bg-twitch-black rounded-lg p-4 border border-gray-800">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{t.detected_style}</h4>
                <p className="text-sm text-gray-300 italic leading-relaxed">
                  "{extractedStyle.slice(0, 150)}..."
                </p>
              </div>
            )}
          </div>

          {/* Right Column: Results */}
          <div className="lg:col-span-8">
            <div className="bg-twitch-black border border-gray-800 rounded-2xl h-full min-h-[600px] flex flex-col overflow-hidden relative">
              
              {/* Result Header */}
              <div className="p-4 border-b border-gray-800 flex justify-between items-center bg-twitch-darker">
                <span className="font-medium text-gray-300">{t.preview_canvas}</span>
                {generatedImage && (
                   <a 
                     href={generatedImage} 
                     download={`twitch-asset-${Date.now()}.png`}
                     className="flex items-center gap-2 text-sm font-medium text-twitch-light hover:text-white transition-colors"
                   >
                     <Download className="w-4 h-4" /> {t.download_png}
                   </a>
                )}
              </div>

              {/* Canvas Area */}
              <div className="flex-grow flex items-center justify-center p-8 bg-grid-pattern relative">
                {/* Background Grid Effect */}
                <div className="absolute inset-0 opacity-[0.02]" 
                     style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
                </div>

                {generatedImage ? (
                  <div className="relative group w-full h-full flex items-center justify-center">
                    <img 
                      src={generatedImage} 
                      alt="Generated Design" 
                      className="max-w-full max-h-full rounded-lg shadow-2xl shadow-twitch/20 object-contain"
                    />
                  </div>
                ) : state.step === 'analyzing' || state.step === 'generating' ? (
                   <div className="flex flex-col items-center gap-6 max-w-sm text-center animate-pulse">
                      <div className="w-24 h-24 rounded-full bg-twitch/20 flex items-center justify-center">
                        <Spinner className="w-10 h-10 text-twitch" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-white">
                          {state.step === 'analyzing' ? t.state_analyzing_title : t.state_generating_title}
                        </h3>
                        <p className="text-gray-400">
                          {state.step === 'analyzing' 
                            ? t.state_analyzing_desc
                            : t.state_generating_desc}
                        </p>
                      </div>
                   </div>
                ) : (
                  <div className="text-center space-y-4 opacity-30 max-w-md">
                    <div className="w-full aspect-video bg-gray-800 rounded-lg flex items-center justify-center mb-4 border-2 border-dashed border-gray-600">
                      <div className="w-32 h-2 bg-gray-700 rounded"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-white">{t.state_idle_title}</h3>
                    <p className="text-gray-400">
                      {t.state_idle_desc}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;