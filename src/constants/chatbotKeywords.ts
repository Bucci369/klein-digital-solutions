// src/constants/chatbotKeywords.ts

export const containsAny = (message: string, keywords: string[]): boolean => {
  return keywords.some(keyword => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'i');
    if (regex.test(message)) return true;
    if (message.includes(keyword) && keyword.length > 3) return true;
    if (keyword === 'website' && (message.includes('websit') || message.includes('webside') || message.includes('webseite'))) return true;
    if (keyword === 'kontakt' && (message.includes('kontact') || message.includes('conact') || message.includes('konntakt'))) return true;
    return false;
  });
};

// --- KEYWORD LISTS (Deutsche Inhalte, englische Variablennamen) ---
export const greetings = ['hallo', 'hi', 'guten tag', 'servus', 'moin', 'hey', 'na'];
export const goodbyes = ['tschüss', 'bye', 'auf wiedersehen', 'bis dann', 'ciao'];
export const thanks = ['danke', 'vielen dank', 'merci', 'super', 'top', 'klasse', 'dankeschön'];
export const helpKeywords = ['hilfe', 'problem', 'unterstützung', 'frage', 'faq', 'was kannst du'];
export const confirmYes = ['ja', 'gerne', 'sicher', 'logo', 'auf jeden fall', 'klar', 'bitte', 'bestätigen', 'jup', 'jo'];
export const confirmNo = ['nein', 'nicht jetzt', 'vielleicht später', 'noch nicht', 'abbrechen', 'nö'];

export const botIdentity = ['wer bist du', 'dein name', 'was bist du'];
export const ownerInquiry = ['besitzer', 'inhaber', 'geschäftsführer', 'ceo', 'wer leitet die firma', 'wem gehört die firma', 'chef'];

export const projectInquiry = ['brauche eine website', 'website erstellen', 'neue website', 'projekt starten', 'webseite brauche', 'webseite machen', 'app entwickeln', 'web anwendung', 'online-präsenz'];
export const projectWorkflow = ['projekt workflow', 'ablauf projekt', 'prozess', 'wie arbeitet ihr', 'vorgehen'];

export const servicesGeneral = ['services', 'dienstleistungen', 'was bietet ihr an', 'leistungen', 'angebote', 'was könnt ihr machen'];
export const webDevDetails = ['web development', 'web dev', 'webentwicklung', 'ganzheitliche webentwicklung'];
export const frontendDetails = ['frontend', 'benutzeroberfläche', 'ui/ux', 'user interface'];
export const backendDetails = ['backend', 'server', 'datenbanken', 'api', 'systeme'];
export const performanceSeoDetails = ['performance', 'seo', 'optimierung', 'sichtbarkeit', 'geschwindigkeit', 'ladezeiten'];

export const techStackGeneral = ['tech stack', 'technologien', 'programmiersprachen', 'frameworks', 'welche tools'];
export const techReact = ['react', 'reakt'];
export const techNextJs = ['next.js', 'nextjs'];
export const techTypeScript = ['typescript', 'ts'];
export const techTailwind = ['tailwind', 'tailwind css'];

export const portfolioGeneral = ['portfolio', 'projekte', 'beispiele', 'referenzen', 'arbeiten', 'eure projekte'];
export const contactGeneral = ['kontakt', 'e-mail', 'telefon', 'anrufen', 'angebot', 'projekt besprechen'];
export const pricing = ['preis', 'preise', 'kosten', 'kostenvoranschlag', 'was kostet', 'wie teuer', 'was verlangt ihr'];
export const impressum = ['impressum', 'pflichtangaben', 'anbieterkennzeichnung'];

export const jokeTriggers = ['erzähl einen witz', 'witz erzählen', 'lustig', 'mach mich lachen'];
export const strongInsults = ['hurensohn', 'fick dich', 'arschloch', 'missgeburt', 'wichser'];
export const mediumInsults = ['dumm', 'blöd', 'idiot', 'nutzlos', 'schlecht', 'keine ahnung', 'doof'];
export const aiProvocations = ['roboter', 'maschine', 'bot bist', 'ki bist', 'automat'];
export const informalGreetings = ['was geht bro', 'was geht', 'sup bro', 'yo', 'na du', 'alles klar'];