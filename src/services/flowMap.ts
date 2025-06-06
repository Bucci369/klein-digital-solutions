// src/services/flowMap.ts
import { BotState, ChatContext, FlowStateDefinition } from '../types/chatbot';
import { getSarcasticResponse, getTechResponse, getGenericResponse } from './responseGenerator';

// Die Map, die unsere Konversation steuert
export const flowMap: Record<BotState, FlowStateDefinition> = {

  // === INITIAL STATE ===
  initial: {
    onEnter: () => ({
      responseText: "Hallo! Ich bin Ihr digitaler Assistent von Klein Digital Solutions. Was liegt Ihnen auf dem Herzen?",
      quickReplies: ['Unsere Services', 'Portfolio', 'Projekt anfragen', 'Was kostet eine Website?'],
    }),
    transitions: {
      SERVICES_GENERAL: 'awaiting_service_choice',
      PROJECT_INQUIRY: 'awaiting_project_confirmation',
      TECH_STACK_GENERAL: 'awaiting_tech_choice',
      PORTFOLIO_GENERAL: 'showing_portfolio',
      CONTACT_GENERAL: 'contact_offered',
      PRICING_INQUIRY: 'initial', // Wird direkt beantwortet, State ändert sich nicht
      OWNER_INQUIRY: 'initial',
      JOKE_TRIGGER: 'initial',
      GREETING: 'initial',
    },
    fallback: (context) => getGenericResponse(context.lastIntent || 'UNKNOWN'),
  },

  // === SERVICE DIALOG ===
  awaiting_service_choice: {
    onEnter: () => ({
      responseText: "Absolut! Wir bieten ganzheitliche Webentwicklung, fokussiert auf Frontend, Backend sowie Performance & SEO. Welcher Bereich interessiert Sie am meisten?",
      quickReplies: ['Web Development', 'Frontend', 'Backend', 'Performance & SEO', 'Zurück'],
      nextContext: { lastIntent: 'SERVICES_GENERAL', lastTopic: 'services' },
    }),
    transitions: {
      WEB_DEV_DETAILS: 'initial', // Antwort wird direkt gegeben, dann zurück zum Start
      FRONTEND_DETAILS: 'initial',
      BACKEND_DETAILS: 'initial',
      PERFORMANCE_SEO_DETAILS: 'initial',
      GREETING: 'initial', // Wenn der User wieder "hallo" sagt
    },
    fallback: () => ({
      responseText: "Ich bin mir nicht sicher, welchen Service Sie meinen. Bitte wählen Sie einen aus der Liste oder fragen Sie etwas anderes.",
      quickReplies: ['Web Development', 'Frontend', 'Backend', 'Zurück'],
    }),
  },

  // === PROJECT DIALOG ===
  awaiting_project_confirmation: {
    onEnter: () => ({
      responseText: "Das ist ja fantastisch! Ein neues Projekt ist immer aufregend. Sollen wir direkt über die Details sprechen oder möchten Sie erst unsere Kontaktinformationen?",
      quickReplies: ['Ja, Details besprechen', 'Nur Kontaktinfos', 'Nein, danke'],
      nextContext: { lastIntent: 'PROJECT_INQUIRY', lastTopic: 'project' },
    }),
    transitions: {
      CONFIRM_YES: 'contact_offered',
      CONFIRM_NO: 'initial',
    },
  },
  
  // === TECH STACK DIALOG ===
  awaiting_tech_choice: {
      onEnter: () => ({
          responseText: "Unser Tech Stack ist modern und zukunftssicher. Wir setzen auf React, Next.js, TypeScript und mehr. Zu welcher Technologie hätten Sie gerne mehr Infos?",
          quickReplies: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
          nextContext: { lastIntent: 'TECH_STACK_GENERAL', lastTopic: 'tech' }
      }),
      transitions: {
          TECH_REACT: 'awaiting_tech_choice', // Bleibe im Zustand für weitere Fragen
          TECH_NEXTJS: 'awaiting_tech_choice',
          TECH_TYPESCRIPT: 'awaiting_tech_choice',
          TECH_TAILWIND: 'awaiting_tech_choice',
      }
  },

  // === EINFACHE INFO-ZUSTÄNDE ===
  showing_portfolio: {
    onEnter: () => ({
        responseText: "Sehr gerne! In unserem Portfolio finden Sie eine Auswahl unserer Arbeiten. Jedes Projekt ist ein Beweis für unsere Leidenschaft und Kompetenz!",
        htmlText: "Sehr gerne! In unserem Portfolio finden Sie eine Auswahl unserer Arbeiten. Besuchen Sie doch mal unsere <a href='/#portfolio' target='_blank'>Portfolio-Sektion</a>.",
        nextBotState: 'initial',
        quickReplies: ['Projekt anfragen', 'Unsere Services']
    }),
    transitions: {}
  },
  contact_offered: {
    onEnter: () => ({
        responseText: "Sie können uns jederzeit per E-Mail erreichen, um Ihr Projekt zu besprechen. Wir freuen uns darauf, von Ihnen zu hören!",
        htmlText: "Sie können uns jederzeit per E-Mail an <a href='mailto:info@kleindigitalsolutions.de'>info@kleindigitalsolutions.de</a> erreichen, um Ihr Projekt zu besprechen.",
        nextBotState: 'initial',
        quickReplies: ['Portfolio ansehen', 'Unsere Services']
    }),
    transitions: {}
  }
};