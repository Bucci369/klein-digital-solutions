// src/services/chatService.ts
import { BotState, ChatContext, BotResponseObject, Intent } from '../types/chatbot';
import { matchIntent } from './intentMatcher';
import { flowMap } from './flowMap';
import { getTechResponse, getSarcasticResponse, getGenericResponse } from './responseGenerator';

/**
 * Verarbeitet die Benutzernachricht und gibt ein vollständiges Antwortobjekt zurück.
 * @param userMessage Die rohe Nachricht des Benutzers.
 * @param currentState Der aktuelle Zustand des Bots.
 * @param context Der bisherige Chat-Kontext.
 * @returns Ein BotResponseObject mit der Antwort und den nächsten Zuständen.
 */
export const processMessage = (
  userMessage: string,
  currentState: BotState,
  context: ChatContext
): BotResponseObject => {
  const lowerCaseMessage = userMessage.toLowerCase().trim();
  const intent = matchIntent(lowerCaseMessage);

  const currentFlowState = flowMap[currentState];

  // Prüfe, ob es eine definierte Transition für den erkannten Intent gibt
  if (currentFlowState.transitions[intent]) {
    const nextState = currentFlowState.transitions[intent]!;
    const nextFlowState = flowMap[nextState];
    const response = nextFlowState.onEnter({ ...context, lastIntent: intent });
    
    // Spezifische Antworten für Intents, die im selben State bleiben (z.B. Tech-Fragen)
    if (nextState === 'awaiting_tech_choice' && intent.startsWith('TECH_')) {
        const techKey = intent.replace('TECH_', '').toLowerCase() as any;
        return getTechResponse(techKey);
    }
    
    return response;
  }
  
  // Wenn es keine Transition gibt, prüfe, ob es eine direkte Antwort für den Intent gibt
  const directResponse = getGenericResponse(intent);
  if (intent !== 'UNKNOWN') {
      return directResponse;
  }

  // Wenn alles fehlschlägt, nutze den Fallback des aktuellen Zustands
  if (currentFlowState.fallback) {
    return currentFlowState.fallback({ ...context, lastIntent: intent });
  }

  // Absoluter Notfall-Fallback
  return {
    responseText: "Entschuldigung, da bin ich gerade überfragt. Versuchen Sie es mit 'Hilfe'.",
    nextBotState: 'initial',
    nextContext: { lastIntent: null },
  };
};