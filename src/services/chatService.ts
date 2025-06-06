// src/services/chatService.ts
import { BotState, ChatContext, BotResponseObject, Intent } from '../models/chatbot';
import { matchIntent } from './intentMatcher';
import { flowMap } from './flowMap';
import { getTechResponse, getSarcasticResponse, getGenericResponse } from './responseGenerator';

export const processMessage = (
  userMessage: string,
  currentState: BotState,
  context: ChatContext
): BotResponseObject => {
  const lowerCaseMessage = userMessage.toLowerCase().trim();
  const intent = matchIntent(lowerCaseMessage);

  // KORREKTUR FÜR ts(7053): Sicherheitsprüfung, ob der State in der flowMap existiert.
  if (!(currentState in flowMap)) {
    console.error(`Unbekannter BotState: ${currentState}`);
    return getGenericResponse('UNKNOWN');
  }
  const currentFlowState = flowMap[currentState];

  // KORREKTUR FÜR ts(2538): Prüfen, ob ein gültiger Intent (nicht null) gefunden wurde.
  if (intent) {
    // Prüfe, ob es eine definierte Transition für den erkannten Intent gibt
    if (intent in currentFlowState.transitions) {
      const nextState = currentFlowState.transitions[intent]!;
      
      // KORREKTUR FÜR ts(7053): Erneute Sicherheitsprüfung für den nächsten State.
      if (!(nextState in flowMap)) {
        console.error(`Unbekannter nächster BotState in flowMap: ${nextState}`);
        return getGenericResponse('UNKNOWN');
      }
      
      const nextFlowState = flowMap[nextState];
      const response = nextFlowState.onEnter({ ...context, lastIntent: intent });
      
      // Spezifische Antworten für Intents, die im selben State bleiben
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