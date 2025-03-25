export const contactTranslations = {
  de: {
    title: 'Kontakt',
    form: {
      title: 'Kontaktformular',
      name: {
        label: 'Name',
        placeholder: 'Ihr Name'
      },
      email: {
        label: 'E-Mail',
        placeholder: 'ihre.email@beispiel.de'
      },
      message: {
        label: 'Nachricht',
        placeholder: 'Ihre Nachricht an uns'
      },
      submit: 'Nachricht senden'
    },
    info: {
      title: 'Kontaktinformationen',
      address: {
        label: 'Adresse',
        street: 'Dorfstr. 18',
        city: '93449 Waldmünchen',
        country: 'Deutschland'
      },
      email: {
        label: 'E-Mail',
        value: 'info@smileys.lol'
      }
    },
    social: {
      title: 'Social Media',
      links: [
        { name: 'Twitter', url: 'https://twitter.com/example' },
        { name: 'GitHub', url: 'https://github.com/example' },
        { name: 'LinkedIn', url: 'https://linkedin.com/company/example' }
      ]
    }
  },
  en: {
    title: 'Contact',
    form: {
      title: 'Contact Form',
      name: {
        label: 'Name',
        placeholder: 'Your name'
      },
      email: {
        label: 'Email',
        placeholder: 'your.email@example.com'
      },
      message: {
        label: 'Message',
        placeholder: 'Your message to us'
      },
      submit: 'Send Message'
    },
    info: {
      title: 'Contact Information',
      address: {
        label: 'Address',
        street: 'Dorfstr. 18',
        city: '93449 Waldmünchen',
        country: 'Germany'
      },
      email: {
        label: 'Email',
        value: 'info@smileys.lol'
      }
    },
    social: {
      title: 'Social Media',
      links: [
        { name: 'Twitter', url: 'https://twitter.com/example' },
        { name: 'GitHub', url: 'https://github.com/example' },
        { name: 'LinkedIn', url: 'https://linkedin.com/company/example' }
      ]
    }
  }
} as const;
