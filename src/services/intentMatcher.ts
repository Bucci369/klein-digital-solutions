// src/services/intentMatcher.ts
import { Intent } from '../models/chatbot';
import * as KW from '../constants/chatbotKeywords';

// Definitionen mit Gewichtung/Priorität
const intentDefinitions: { intent: Intent; keywords: string[]; priority: number }[] = [
  // Höchste Priorität für Aktionen, die immer gelten sollen
  { intent: 'GOODBYE', keywords: KW.goodbyes, priority: 10 },
  { intent: 'HELP', keywords: KW.helpKeywords, priority: 10 },
  { intent: 'STRONG_INSULT', keywords: KW.strongInsults, priority: 10 },

  // Spezifische Fragen
  { intent: 'OWNER_INQUIRY', keywords: KW.ownerInquiry, priority: 8 },
  { intent: 'PRICING_INQUIRY', keywords: KW.pricing, priority: 8 },
  { intent: 'PROJECT_WORKFLOW', keywords: KW.projectWorkflow, priority: 7 },
  { intent: 'PROJECT_INQUIRY', keywords: KW.projectInquiry, priority: 6 },
  
  // Detail-Intents
  { intent: 'WEB_DEV_DETAILS', keywords: KW.webDevDetails, priority: 5 },
  { intent: 'FRONTEND_DETAILS', keywords: KW.frontendDetails, priority: 5 },
  { intent: 'BACKEND_DETAILS', keywords: KW.backendDetails, priority: 5 },
  { intent: 'PERFORMANCE_SEO_DETAILS', keywords: KW.performanceSeoDetails, priority: 5 },
  { intent: 'TECH_REACT', keywords: KW.techReact, priority: 5 },
  { intent: 'TECH_NEXTJS', keywords: KW.techNextJs, priority: 5 },

  // Allgemeine Kategorien
  { intent: 'SERVICES_GENERAL', keywords: KW.servicesGeneral, priority: 4 },
  { intent: 'TECH_STACK_GENERAL', keywords: KW.techStackGeneral, priority: 4 },
  { intent: 'PORTFOLIO_GENERAL', keywords: KW.portfolioGeneral, priority: 4 },
  { intent: 'CONTACT_GENERAL', keywords: KW.contactGeneral, priority: 4 },
  { intent: 'IMPRESSUM_INQUIRY', keywords: KW.impressum, priority: 4 },

  // Konversationelle Elemente mit niedrigerer Priorität
  { intent: 'THANKS', keywords: KW.thanks, priority: 3 },
  { intent: 'INFORMAL_GREETING', keywords: KW.informalGreetings, priority: 2 },
  { intent: 'GREETING', keywords: KW.greetings, priority: 1 },
  { intent: 'MEDIUM_INSULT', keywords: KW.mediumInsults, priority: 1 },

  // Bestätigungen sind speziell und werden oft im Kontext behandelt
  { intent: 'CONFIRM_YES', keywords: KW.confirmYes, priority: 0 },
  { intent: 'CONFIRM_NO', keywords: KW.confirmNo, priority: 0 },
];

/**
 * Findet den besten Intent basierend auf einem Scoring-System.
 * @param message Die normalisierte Benutzernachricht.
 * @returns Der am besten bewertete Intent oder 'UNKNOWN'.
 */
export const matchIntent = (message: string): Intent => {
  let bestMatch: { intent: Intent; score: number } = { intent: 'UNKNOWN', score: 0 };

  for (const def of intentDefinitions) {
    let currentScore = 0;
    for (const keyword of def.keywords) {
      if (message.includes(keyword)) {
        currentScore += keyword.length; // Längere Keywords geben mehr Punkte
      }
    }

    if (currentScore > 0) {
      const finalScore = currentScore * def.priority; // Multipliziere mit der Priorität
      if (finalScore > bestMatch.score) {
        bestMatch = { intent: def.intent, score: finalScore };
      }
    }
  }

  return bestMatch.intent;
};