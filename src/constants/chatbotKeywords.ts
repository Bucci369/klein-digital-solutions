// src/constants/chatbotKeywords.ts

export const containsAny = (message: string, keywords: string[]): boolean => {
  return keywords.some(keyword => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'i');
    if (regex.test(message)) return true;
    if (message.includes(keyword) && keyword.length > 3) return true;
    if (keyword === 'website' && (message.includes('websit') || message.includes('webside') || message.includes('webseite'))) return true;
    // ... deine anderen manuellen Korrekturen ...
    return false;
  });
};

// --- KEYWORD LISTS (Deutsche Inhalte, englische Variablennamen) ---
export const greetings = ['hallo', 'hi', 'guten tag', 'servus', 'moin', 'hey'];
export const goodbyes = ['tschüss', 'bye', 'auf wiedersehen', 'bis dann'];
export const thanks = ['danke', 'vielen dank', 'merci', 'super', 'top'];
export const helpKeywords = ['hilfe', 'problem', 'unterstützung', 'frage', 'faq'];
export const confirmYes = ['ja', 'gerne', 'sicher', 'logo', 'auf jeden fall', 'klar', 'bitte', 'bestätigen'];
export const confirmNo = ['nein', 'nicht jetzt', 'vielleicht später', 'noch nicht', 'abbrechen'];
export const projectInquiry = ['brauche eine website', 'website erstellen', 'projekt starten'];
export const servicesGeneral = ['services', 'dienstleistungen', 'was bietet ihr an', 'leistungen'];
export const webDevDetails = ['web development', 'web dev', 'webentwicklung'];
export const frontendDetails = ['frontend', 'benutzeroberfläche'];
export const backendDetails = ['backend', 'server', 'datenbanken'];
export const performanceSeoDetails = ['performance', 'seo', 'geschwindigkeit'];
export const techStackGeneral = ['tech stack', 'technologien', 'programmiersprachen'];
export const techReact = ['react', 'reakt'];
export const techNextJs = ['next.js', 'nextjs'];
export const techTypeScript = ['typescript', 'ts'];
export const impressum = ['impressum', 'pflichtangaben', 'anbieterkennzeichnung'];
export const jokeTriggers = ['erzähl einen witz', 'witz erzählen', 'lustig'];
export const strongInsults = ['hurensohn', 'fick dich', 'arschloch'];
export const techTailwind = ['tailwind', 'tailwind css'];
// ... usw. für ALLE deine Keyword-Listen.