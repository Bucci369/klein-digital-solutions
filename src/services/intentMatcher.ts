// src/services/intentMatcher.ts
import { Intent } from '../types/chatbot';          // <-- Pfad zu /types/chatbot.ts
import * as KW from '../constants/chatbotKeywords'; // <-- Pfad zu /constants/...

const intentDefinitions: { intent: Intent; keywords: string[] }[] = [
  // Spezifische vor allgemeinen Intents
  { intent: 'GOODBYE', keywords: KW.goodbyes },
  { intent: 'PROJECT_INQUIRY', keywords: KW.projectInquiry },
  { intent: 'WEB_DEV_DETAILS', keywords: KW.webDevDetails },
  { intent: 'FRONTEND_DETAILS', keywords: KW.frontendDetails },
  { intent: 'SERVICES_GENERAL', keywords: KW.servicesGeneral },
  { intent: 'TECH_REACT', keywords: KW.techReact },
  { intent: 'TECH_NEXTJS', keywords: KW.techNextJs },
  { intent: 'TECH_STACK_GENERAL', keywords: KW.techStackGeneral },
  { intent: 'IMPRESSUM_INQUIRY', keywords: KW.impressum },
  { intent: 'JOKE_TRIGGER', keywords: KW.jokeTriggers },
  { intent: 'STRONG_INSULT', keywords: KW.strongInsults },
  { intent: 'HELP', keywords: KW.helpKeywords },
  { intent: 'THANKS', keywords: KW.thanks },
  { intent: 'GREETING', keywords: KW.greetings },
  // ... hier alle anderen Definitionen einfügen ...
];

export const matchIntent = (message: string): Intent => {
  for (const def of intentDefinitions) {
    if (KW.containsAny(message, def.keywords)) {
      return def.intent;
    }
  }
  return 'UNKNOWN';
};