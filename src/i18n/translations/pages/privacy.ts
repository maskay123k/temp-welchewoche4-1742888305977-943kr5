export const privacyTranslations = {
  de: {
    title: 'Datenschutzerklärung',
    general: {
      title: 'Allgemeine Informationen',
      description: 'Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003).'
    },
    data: {
      title: 'Datenerfassung',
      items: [
        'IP-Adresse (anonymisiert)',
        'Datum und Uhrzeit der Anfrage',
        'Browsertyp und Betriebssystem',
        'Besuchte Seiten auf unserer Website',
        'Herkunftsland des Zugriffs'
      ]
    },
    cookies: {
      title: 'Cookies',
      description: 'Unsere Website verwendet Cookies, um unseren Service für Sie zu verbessern.',
      types: {
        title: 'Arten von Cookies',
        items: [
          {
            name: 'Notwendige Cookies',
            description: 'Erforderlich für die Grundfunktionen der Website'
          },
          {
            name: 'Präferenz-Cookies',
            description: 'Speichern Ihre Einstellungen wie Sprache und Theme'
          },
          {
            name: 'Analyse-Cookies',
            description: 'Helfen uns zu verstehen, wie Besucher mit der Website interagieren'
          }
        ]
      }
    },
    analytics: {
      title: 'Google Analytics',
      description: 'Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. Die IP-Adressen werden anonymisiert.'
    },
    rights: {
      title: 'Ihre Rechte',
      items: [
        'Recht auf Auskunft',
        'Recht auf Berichtigung',
        'Recht auf Löschung',
        'Recht auf Einschränkung der Verarbeitung',
        'Recht auf Datenübertragbarkeit',
        'Recht auf Widerspruch'
      ]
    }
  },
  en: {
    title: 'Privacy Policy',
    general: {
      title: 'General Information',
      description: 'The protection of your personal data is very important to us. We process your data exclusively based on legal regulations (GDPR).'
    },
    data: {
      title: 'Data Collection',
      items: [
        'IP address (anonymized)',
        'Date and time of request',
        'Browser type and operating system',
        'Pages visited on our website',
        'Country of origin of access'
      ]
    },
    cookies: {
      title: 'Cookies',
      description: 'Our website uses cookies to improve our service for you.',
      types: {
        title: 'Types of Cookies',
        items: [
          {
            name: 'Essential Cookies',
            description: 'Required for basic website functionality'
          },
          {
            name: 'Preference Cookies',
            description: 'Store your settings like language and theme'
          },
          {
            name: 'Analytics Cookies',
            description: 'Help us understand how visitors interact with the website'
          }
        ]
      }
    },
    analytics: {
      title: 'Google Analytics',
      description: 'This website uses Google Analytics, a web analytics service provided by Google Inc. IP addresses are anonymized.'
    },
    rights: {
      title: 'Your Rights',
      items: [
        'Right to information',
        'Right to rectification',
        'Right to erasure',
        'Right to restriction of processing',
        'Right to data portability',
        'Right to object'
      ]
    }
  }
} as const;
