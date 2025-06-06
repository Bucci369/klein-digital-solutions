// src/types/chatbot.ts

export type BotState =
  | 'initial'
  | 'asking_service_details'
  | 'asking_project_details'
  | 'providing_contact_info'
  | 'asking_tech_details'
  | 'asking_privacy_details'
  | 'asking_agb_details'
  | 'joke_time';

export type Intent =
  | 'GREETING' | 'GOODBYE' | 'THANKS' | 'HELP'
  | 'BOT_STATUS' | 'BOT_IDENTITY' | 'BOT_ABILITY' | 'LANGUAGE' | 'HUMAN_SUPPORT'
  | 'PROJECT_INQUIRY' | 'PROJECT_WORKFLOW'
  | 'ABOUT_US' | 'WHAT_WE_DO' | 'WHY_US'
  | 'SERVICES_GENERAL' | 'WEB_DEV_DETAILS' | 'FRONTEND_DETAILS' | 'BACKEND_DETAILS' | 'PERFORMANCE_SEO_DETAILS'
  | 'TECH_STACK_GENERAL' | 'TECH_REACT' | 'TECH_NEXTJS' | 'TECH_TYPESCRIPT'
  | 'PORTFOLIO_GENERAL'
  | 'CONTACT_GENERAL' | 'PRICING_INQUIRY'
  | 'PRIVACY_GENERAL' | 'IMPRESSUM_INQUIRY' | 'AGB_GENERAL'
  | 'CONFIRM_YES' | 'CONFIRM_NO'
  | 'JOKE_TRIGGER'
  | 'STRONG_INSULT' | 'MEDIUM_INSULT'
  // --- HIER DIE VOLLSTÄNDIGEN ANPASSUNGEN ---
  | 'INFORMAL_GREETING'
  | 'DIRECT_BOT_GREETING'
  | 'AI_PROVOCATION'
  | 'DESIGN_INSULT'
  | 'UNFRIENDLY'
  // ---
  | 'UNKNOWN' // Fallback
  | null;

export interface BotResponseObject {
  responseText: string;
  htmlText?: string;
  nextBotState?: BotState;
  nextLastUserIntent?: Intent;
  quickReplies?: string[];
  shouldCloseChat?: boolean;
}