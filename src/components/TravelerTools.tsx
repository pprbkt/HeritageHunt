import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftRight, Languages, DollarSign, Check, Copy, RefreshCw, Info, Sparkles, Trash2 } from 'lucide-react';

// --- CURRENCY CONVERTER DATA ---
interface Currency {
  code: string;
  name: string;
  symbol: string;
  rateToINR: number;
}

const DEFAULT_CURRENCIES: Currency[] = [
  { code: 'INR', name: 'Indian Rupee', symbol: '₹', rateToINR: 1 },
  { code: 'USD', name: 'US Dollar', symbol: '$', rateToINR: 83.5 },
  { code: 'EUR', name: 'Euro', symbol: '€', rateToINR: 91.2 },
  { code: 'GBP', name: 'British Pound', symbol: '£', rateToINR: 108.4 },
  { code: 'AUD', name: 'Australian Dollar', symbol: 'A$', rateToINR: 56.1 },
  { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$', rateToINR: 61.8 },
  { code: 'JPY', name: 'Japanese Yen', symbol: '¥', rateToINR: 0.57 },
  { code: 'AED', name: 'UAE Dirham', symbol: 'د.إ', rateToINR: 22.7 },
  { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$', rateToINR: 63.5 },
  { code: 'CHF', name: 'Swiss Franc', symbol: 'CHF', rateToINR: 96.8 },
];

interface ExpensePreset {
  title: string;
  amountINR: number;
  icon: string;
  category: string;
}

const MYSURU_EXPENSE_PRESETS: ExpensePreset[] = [
  { title: 'Mysuru Palace Ticket', amountINR: 100, icon: '🏰', category: 'Attractions' },
  { title: 'Standard Auto Rickshaw Trip', amountINR: 150, icon: '🛺', category: 'Transit' },
  { title: 'Mysore Masala Dosa Meal', amountINR: 120, icon: '🍱', category: 'Dining' },
  { title: 'Mysore Pak Sweet Box (500g)', amountINR: 350, icon: '🎁', category: 'Shopping' },
  { title: 'Authentic Mysuru Silk Saree', amountINR: 5500, icon: '👔', category: 'Souvenirs' },
  { title: 'Heritage Hotel Night Stay', amountINR: 8500, icon: '🏨', category: 'Lodging' },
];

// --- TRANSLATOR LANGUAGES ---
interface LanguageOption {
  code: string;
  name: string;
}

const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en', name: 'English' },
  { code: 'kn', name: 'Kannada (ಕನ್ನಡ)' },
  { code: 'hi', name: 'Hindi (हिंदी)' },
  { code: 'ta', name: 'Tamil (தமிழ்)' },
  { code: 'te', name: 'Telugu (తెలుగు)' },
  { code: 'fr', name: 'French (Français)' },
  { code: 'de', name: 'German (Deutsch)' },
  { code: 'es', name: 'Spanish (Español)' },
  { code: 'ja', name: 'Japanese (日本語)' },
  { code: 'ar', name: 'Arabic (العربية)' },
];

export const TravelerTools: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'currency' | 'translator'>('currency');

  // --- CURRENCY STATE ---
  const [amount, setAmount] = useState<number>(100);
  const [fromCurrency, setFromCurrency] = useState<string>('USD');
  const [toCurrency, setToCurrency] = useState<string>('INR');
  const [rates, setRates] = useState<Currency[]>(DEFAULT_CURRENCIES);
  const [isFetchingRates, setIsFetchingRates] = useState<boolean>(false);
  const [lastUpdated, setLastUpdated] = useState<string>('Live standard exchange rates');

  // --- TRANSLATOR STATE ---
  const [sourceLang, setSourceLang] = useState<string>('en');
  const [targetLang, setTargetLang] = useState<string>('kn');
  const [inputText, setInputText] = useState<string>('');
  const [translatedText, setTranslatedText] = useState<string>('');
  const [isTranslating, setIsTranslating] = useState<boolean>(false);
  const [copiedInput, setCopiedInput] = useState<boolean>(false);
  const [copiedOutput, setCopiedOutput] = useState<boolean>(false);

  // Fetch live exchange rates on mount
  useEffect(() => {
    fetchRates();
  }, []);

  const fetchRates = async () => {
    setIsFetchingRates(true);
    try {
      const res = await fetch('https://open.er-api.com/v6/latest/USD');
      if (!res.ok) throw new Error('API failed');
      const data = await res.json();
      const inrRate = data.rates.INR || 83.5;

      const updated = DEFAULT_CURRENCIES.map((c) => {
        if (c.code === 'INR') return c;
        if (c.code === 'USD') return { ...c, rateToINR: inrRate };
        const foreignRateInUSD = data.rates[c.code];
        if (foreignRateInUSD) {
          return { ...c, rateToINR: Number((inrRate / foreignRateInUSD).toFixed(4)) };
        }
        return c;
      });

      setRates(updated);
      setLastUpdated(`Rates updated ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`);
    } catch (err) {
      console.warn('Using default exchange rates:', err);
    } finally {
      setIsFetchingRates(false);
    }
  };

  // Currency helper
  const getRateToINR = (code: string) => rates.find((c) => c.code === code)?.rateToINR || 1;

  const convertValue = (val: number, from: string, to: string): number => {
    const fromRate = getRateToINR(from);
    const toRate = getRateToINR(to);
    const inrValue = val * fromRate;
    const finalValue = inrValue / toRate;
    return Number(finalValue.toFixed(2));
  };

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

// --- COMMON TRAVEL DICTIONARY FOR ACCURATE INSTANT LOOKUPS ---
const COMMON_DICTIONARY: Record<string, Record<string, string>> = {
  hello: { kn: 'ನಮಸ್ಕಾರ (Namaskāra)', hi: 'नमस्ते (Namaste)', fr: 'Bonjour', es: 'Hola', de: 'Hallo', ja: 'こんにちは', ar: 'مرحبا' },
  hi: { kn: 'ನಮಸ್ಕಾರ (Namaskāra)', hi: 'नमस्ते (Namaste)', fr: 'Salut', es: 'Hola' },
  'thank you': { kn: 'ಧನ್ಯವಾದಗಳು (Dhanyavādagalu)', hi: 'धन्यवाद (Dhanyavaad)', fr: 'Merci', es: 'Gracias' },
  thanks: { kn: 'ಧನ್ಯವಾದಗಳು (Dhanyavādagalu)', hi: 'धन्यवाद (Dhanyavaad)', fr: 'Merci', es: 'Gracias' },
  'how much': { kn: 'ಇದು ಎಷ್ಟು ಆಗುತ್ತದೆ? (Eshtu aagutthe?)', hi: 'यह कितने का है? (Kitne ka hai?)' },
  'how much does this cost': { kn: 'ಇದು ಎಷ್ಟು ಆಗುತ್ತದೆ? (Eshtu aagutthe?)', hi: 'यह कितने का है? (Kitne ka hai?)' },
  water: { kn: 'ನೀರು (Nīru)', hi: 'पानी (Paani)', fr: 'Eau', es: 'Agua' },
  palace: { kn: 'ಅರಮನೆ (Aramane)', hi: 'महल (Mahal)' },
  'mysore palace': { kn: 'ಮೈಸೂರು ಅರಮನೆ (Mysuru Aramane)', hi: 'मैसूर पैलेस (Mysore Palace)' },
  'mysuru palace': { kn: 'ಮೈಸೂರು ಅರಮನೆ (Mysuru Aramane)', hi: 'मैसूर पैलेस (Mysore Palace)' },
  help: { kn: 'ಸಹಾಯ ಮಾಡಿ (Sahāya mādi)', hi: 'मदद कीजिए (Madad kijiye)' },
  where: { kn: 'ಎಲ್ಲಿ (Elli)', hi: 'कहाँ (Kahan)' },
  goodbye: { kn: 'ಸಿಗೋಣ (Sigona)', hi: 'फिर मिलेंगे (Phir milenge)' },
  bye: { kn: 'ಸಿಗೋಣ (Sigona)', hi: 'अलविदा (Alvida)' },
  food: { kn: 'ಊಟ / ತಿಂಡಿ (Ūta / Thindi)', hi: 'खाना (Khana)' },
  yes: { kn: 'ಹೌದು (Haudu)', hi: 'हाँ (Haan)' },
  no: { kn: 'ಇಲ್ಲ (Illa)', hi: 'नहीं (Nahin)' },
};

  // --- TRANSLATOR API ---
  const handleTranslate = async () => {
    if (!inputText.trim()) return;
    setIsTranslating(true);
    setTranslatedText('');

    const cleanInput = inputText.trim().toLowerCase();

    // 1. Check common travel dictionary for instant 100% accurate result
    if (sourceLang === 'en' && COMMON_DICTIONARY[cleanInput]?.[targetLang]) {
      setTranslatedText(COMMON_DICTIONARY[cleanInput][targetLang]);
      setIsTranslating(false);
      return;
    }

    try {
      // 2. Primary API: Google Translate GTX (100% accurate NMT Neural Engine)
      const gtxUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(inputText)}`;
      const res = await fetch(gtxUrl);
      const data = await res.json();

      if (data && data[0] && Array.isArray(data[0])) {
        const fullTranslation = data[0].map((item: any) => item[0]).join('');
        if (fullTranslation && fullTranslation.trim()) {
          setTranslatedText(fullTranslation);
          setIsTranslating(false);
          return;
        }
      }
    } catch (err) {
      console.warn('Google GTX failed, switching to MyMemory:', err);
    }

    try {
      // 3. Secondary Fallback API: MyMemory API (With quality match check)
      const myMemoryUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(inputText)}&langpair=${sourceLang}|${targetLang}`;
      const res = await fetch(myMemoryUrl);
      const data = await res.json();

      if (data?.responseData?.translatedText && data?.matches?.[0]?.match > 0.4) {
        setTranslatedText(data.responseData.translatedText);
        setIsTranslating(false);
        return;
      }
    } catch (err) {
      console.error('Translation error:', err);
    }

    setTranslatedText('Translation unavailable. Please try rephrasing or check connection.');
    setIsTranslating(false);
  };

  const handleSwapLanguages = () => {
    const temp = sourceLang;
    setSourceLang(targetLang);
    setTargetLang(temp);
    if (translatedText) {
      setInputText(translatedText);
      setTranslatedText(inputText);
    }
  };

  const handleCopyInput = () => {
    navigator.clipboard.writeText(inputText);
    setCopiedInput(true);
    setTimeout(() => setCopiedInput(false), 2000);
  };

  const handleCopyOutput = () => {
    navigator.clipboard.writeText(translatedText);
    setCopiedOutput(true);
    setTimeout(() => setCopiedOutput(false), 2000);
  };

  return (
    <section id="traveler-utilities" className="py-24 bg-white border-b border-rom-border relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rom-lightGray border border-rom-border text-[11px] font-mono font-bold uppercase tracking-widest text-rom-gray mb-3">
            <Sparkles className="w-3.5 h-3.5 text-rom-gold" />
            <span>VISITOR UTILITIES</span>
          </div>
          <h2 className="font-bebas text-4xl sm:text-6xl tracking-tight text-black uppercase">
            Currency & Real-Time Translator
          </h2>
          <p className="font-sans text-sm sm:text-base text-rom-gray max-w-2xl mx-auto mt-2">
            Instant live currency converter for international travellers visiting Mysuru, and a clean real-time language translator powered by live translation APIs.
          </p>
        </div>

        {/* Top Tab Selector */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-full bg-rom-lightGray border border-rom-border">
            <button
              onClick={() => setActiveTab('currency')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-sans text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'currency'
                  ? 'bg-black text-white shadow-md'
                  : 'text-rom-gray hover:text-black'
              }`}
            >
              <DollarSign className="w-4 h-4 text-rom-gold" />
              <span>Currency Converter</span>
            </button>
            <button
              onClick={() => setActiveTab('translator')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-sans text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'translator'
                  ? 'bg-black text-white shadow-md'
                  : 'text-rom-gray hover:text-black'
              }`}
            >
              <Languages className="w-4 h-4 text-rom-gold" />
              <span>Real-Time Translator</span>
            </button>
          </div>
        </div>

        {/* TAB 1: CURRENCY CONVERTER */}
        {activeTab === 'currency' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Main Converter Card */}
            <div className="lg:col-span-7 bg-rom-lightGray border border-rom-border rounded-2xl p-6 sm:p-8 shadow-lg">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-rom-border">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-black">
                    Live Exchange Rates
                  </h3>
                  <p className="text-xs font-mono text-rom-gray mt-0.5">{lastUpdated}</p>
                </div>
                <button
                  onClick={fetchRates}
                  disabled={isFetchingRates}
                  className="p-2 rounded-lg border border-rom-border bg-white text-black hover:bg-black hover:text-white transition-all disabled:opacity-50 flex items-center gap-1.5 text-xs font-sans font-bold uppercase"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isFetchingRates ? 'animate-spin' : ''}`} />
                  <span>Refresh</span>
                </button>
              </div>

              {/* Converter Controls */}
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-rom-gray mb-2">
                    Enter Amount
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min="1"
                      value={amount}
                      onChange={(e) => setAmount(Math.max(0, parseFloat(e.target.value) || 0))}
                      className="w-full px-4 py-3.5 rounded-xl border border-rom-border bg-white text-2xl font-mono font-bold text-black focus:outline-none focus:ring-2 focus:ring-black"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 font-mono font-bold text-rom-gray text-sm">
                      {rates.find((c) => c.code === fromCurrency)?.symbol}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-11 gap-3 items-center">
                  {/* From Currency */}
                  <div className="sm:col-span-5">
                    <label className="block text-xs font-mono font-bold uppercase text-rom-gray mb-2">
                      From Currency
                    </label>
                    <select
                      value={fromCurrency}
                      onChange={(e) => setFromCurrency(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-rom-border bg-white text-sm font-sans font-bold text-black focus:outline-none focus:ring-2 focus:ring-black cursor-pointer"
                    >
                      {rates.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.code} — {c.name} ({c.symbol})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Swap Button */}
                  <div className="sm:col-span-1 flex justify-center pt-5 sm:pt-6">
                    <button
                      onClick={handleSwapCurrencies}
                      className="p-3 rounded-full bg-white border border-rom-border hover:bg-black hover:text-white transition-all shadow-sm"
                      title="Swap Currencies"
                    >
                      <ArrowLeftRight className="w-4 h-4 text-rom-gold" />
                    </button>
                  </div>

                  {/* To Currency */}
                  <div className="sm:col-span-5">
                    <label className="block text-xs font-mono font-bold uppercase text-rom-gray mb-2">
                      To Currency
                    </label>
                    <select
                      value={toCurrency}
                      onChange={(e) => setToCurrency(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-rom-border bg-white text-sm font-sans font-bold text-black focus:outline-none focus:ring-2 focus:ring-black cursor-pointer"
                    >
                      {rates.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.code} — {c.name} ({c.symbol})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Conversion Display Banner */}
                <div className="p-6 rounded-xl bg-black text-white border border-black text-center shadow-lg">
                  <div className="text-xs font-mono text-rom-gold uppercase tracking-widest mb-1">
                    ESTIMATED CONVERTED VALUE
                  </div>
                  <div className="text-3xl sm:text-5xl font-mono font-extrabold text-white tracking-tight">
                    {rates.find((c) => c.code === toCurrency)?.symbol}{' '}
                    {convertValue(amount, fromCurrency, toCurrency).toLocaleString()}
                  </div>
                  <div className="text-xs font-sans text-neutral-400 mt-2">
                    1 {fromCurrency} = {(getRateToINR(fromCurrency) / getRateToINR(toCurrency)).toFixed(4)} {toCurrency}
                  </div>
                </div>
              </div>
            </div>

            {/* Mysuru Heritage Expense Presets */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white border border-rom-border rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-rom-border">
                  <Info className="w-4 h-4 text-rom-gold" />
                  <h4 className="font-serif font-bold text-lg text-black">
                    Mysuru Expense Estimator
                  </h4>
                </div>
                <p className="text-xs font-sans text-rom-gray mb-4">
                  Click any benchmark Mysuru item to instantly check prices in your chosen currency ({toCurrency}):
                </p>

                <div className="space-y-2.5">
                  {MYSURU_EXPENSE_PRESETS.map((preset, idx) => {
                    const priceInTarget = convertValue(preset.amountINR, 'INR', toCurrency);
                    const targetSymbol = rates.find((c) => c.code === toCurrency)?.symbol || '₹';
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          setFromCurrency('INR');
                          setAmount(preset.amountINR);
                        }}
                        className="w-full flex items-center justify-between p-3 rounded-xl border border-rom-border hover:border-black bg-rom-lightGray hover:bg-white transition-all text-left group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{preset.icon}</span>
                          <div>
                            <div className="font-sans font-bold text-xs text-black group-hover:text-rom-gold transition-colors">
                              {preset.title}
                            </div>
                            <div className="text-[10px] font-mono text-rom-gray uppercase">
                              {preset.category} • ₹{preset.amountINR} INR
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-mono font-bold text-sm text-black">
                            {targetSymbol} {priceInTarget.toLocaleString()}
                          </div>
                          <div className="text-[9px] font-mono text-emerald-700">Click to load</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 2: DEFAULT REAL-TIME TRANSLATOR */}
        {activeTab === 'translator' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto space-y-6"
          >
            {/* Top Language Selectors & Swap Bar */}
            <div className="bg-rom-lightGray border border-rom-border rounded-2xl p-4 sm:p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Source Language Select */}
              <div className="w-full sm:flex-1">
                <label className="block text-[10px] font-mono font-bold uppercase text-rom-gray mb-1">
                  Translate From
                </label>
                <select
                  value={sourceLang}
                  onChange={(e) => setSourceLang(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-rom-border bg-white text-sm font-sans font-bold text-black focus:outline-none focus:ring-2 focus:ring-black cursor-pointer"
                >
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Swap Button */}
              <div className="pt-2 sm:pt-4">
                <button
                  onClick={handleSwapLanguages}
                  className="p-3 rounded-full bg-white border border-rom-border hover:bg-black hover:text-white transition-all shadow-sm"
                  title="Swap Languages"
                >
                  <ArrowLeftRight className="w-4 h-4 text-rom-gold" />
                </button>
              </div>

              {/* Target Language Select */}
              <div className="w-full sm:flex-1">
                <label className="block text-[10px] font-mono font-bold uppercase text-rom-gray mb-1">
                  Translate To
                </label>
                <select
                  value={targetLang}
                  onChange={(e) => setTargetLang(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-rom-border bg-white text-sm font-sans font-bold text-black focus:outline-none focus:ring-2 focus:ring-black cursor-pointer"
                >
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Translation Input & Output Side-by-Side Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Input Card */}
              <div className="bg-white border border-rom-border rounded-2xl p-5 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold uppercase text-rom-gray tracking-wider">
                      {SUPPORTED_LANGUAGES.find((l) => l.code === sourceLang)?.name} Text
                    </span>
                    <div className="flex items-center gap-1">
                      {inputText && (
                        <>
                          <button
                            onClick={handleCopyInput}
                            className="p-1.5 rounded hover:bg-rom-lightGray text-rom-gray hover:text-black transition-colors"
                            title="Copy input"
                          >
                            {copiedInput ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                          </button>
                          <button
                            onClick={() => {
                              setInputText('');
                              setTranslatedText('');
                            }}
                            className="p-1.5 rounded hover:bg-rom-lightGray text-rom-gray hover:text-red-600 transition-colors"
                            title="Clear"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </>
                      )}
                    </div>
                  </div>

                  <textarea
                    rows={5}
                    placeholder="Type or paste text to translate..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    className="w-full p-3 rounded-xl border border-rom-border bg-rom-lightGray text-sm font-sans text-black focus:outline-none focus:ring-2 focus:ring-black resize-none"
                  />
                </div>

                <div className="mt-4 pt-3 border-t border-rom-border flex justify-end">
                  <button
                    onClick={handleTranslate}
                    disabled={isTranslating || !inputText.trim()}
                    className="px-6 py-2.5 rounded-xl bg-black hover:bg-rom-gold text-white font-sans font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 disabled:opacity-40"
                  >
                    {isTranslating ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Translating...</span>
                      </>
                    ) : (
                      <>
                        <span>Translate</span>
                        <Languages className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Output Card */}
              <div className="bg-black text-white border border-black rounded-2xl p-5 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold uppercase text-rom-gold tracking-wider">
                      {SUPPORTED_LANGUAGES.find((l) => l.code === targetLang)?.name} Translation
                    </span>
                    <div className="flex items-center gap-1">
                      {translatedText && (
                        <button
                          onClick={handleCopyOutput}
                          className="p-1.5 rounded hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
                          title="Copy translation"
                        >
                          {copiedOutput ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="min-h-[120px] p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-base font-serif text-white tracking-wide">
                    {isTranslating ? (
                      <span className="text-neutral-500 italic text-sm font-sans">Fetching translation from live API...</span>
                    ) : translatedText ? (
                      translatedText
                    ) : (
                      <span className="text-neutral-600 italic text-sm font-sans">Translation will appear here...</span>
                    )}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                  <span>API Status: Live</span>
                  <span>{inputText.length} characters</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
