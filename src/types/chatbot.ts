// src/types/chatbot.ts
// Kompletter und finaler Inhalt. Bitte den gesamten Dateiinhalt hiermit ersetzen.

// --- 1. GRUNDLEGENDE TYPEN (müssen zuerst definiert werden) ---

export type BotState =
  | 'initial'
  | 'awaiting_service_choice'
  | 'awaiting_project_confirmation'
  | 'awaiting_tech_choice'
  | 'showing_portfolio'
  | 'contact_offered';

export type Intent =
  | 'GREETING' | 'GOODBYE' | 'THANKS' | 'HELP' | 'BOT_IDENTITY'
  | 'PROJECT_INQUIRY' | 'PROJECT_WORKFLOW'
  | 'ABOUT_US' | 'OWNER_INQUIRY' | 'WHAT_WE_DO' | 'WHY_US'
  | 'SERVICES_GENERAL' | 'WEB_DEV_DETAILS' | 'FRONTEND_DETAILS' | 'BACKEND_DETAILS' | 'PERFORMANCE_SEO_DETAILS'
  | 'TECH_STACK_GENERAL' | 'TECH_REACT' | 'TECH_NEXTJS' | 'TECH_TYPESCRIPT' | 'TECH_TAILWIND'
  | 'PORTFOLIO_GENERAL'
  | 'CONTACT_GENERAL' | 'PRICING_INQUIRY'
  | 'IMPRESSUM_INQUIRY'
  | 'CONFIRM_YES' | 'CONFIRM_NO'
  | 'JOKE_TRIGGER'
  | 'STRONG_INSULT' | 'MEDIUM_INSULT' | 'AI_PROVOCATION'
  | 'UNKNOWN' | null;


// --- 2. ZUSAMMENGESETZTE TYPEN (verwenden die obigen Typen) ---

export interface ChatContext {
  lastIntent: Intent;
  lastTopic?: 'services' | 'tech' | 'project';
}

export interface BotResponseObject {
  responseText: string;
  htmlText?: string;
  nextBotState?: BotState;
  nextContext?: ChatContext;
  quickReplies?: string[];
  shouldCloseChat?: boolean;
}

export interface FlowStateDefinition {
  onEnter: (context: ChatContext) => BotResponseObject;
  transitions: Partial<Record<Intent, BotState>>; // 'Intent' wird jetzt definitiv gefunden
  fallback?: (context: ChatContext) => BotResponseObject;
}