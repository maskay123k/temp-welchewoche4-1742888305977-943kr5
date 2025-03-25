import type { FAQ } from '../types';

    export const calendarWeekFAQs: Record<string, FAQ[]> = {
      de: {
        general: [
          {
            question: 'Was ist eine Kalenderwoche?',
            answer: 'Eine Kalenderwoche (KW) ist eine fortlaufende Nummerierung der Wochen eines Jahres. Sie wird oft in der Planung und Organisation verwendet.'
          },
          {
            question: 'Wie wird die Kalenderwoche berechnet?',
            answer: 'Die Kalenderwoche wird nach der ISO 8601 Norm berechnet. Die erste Kalenderwoche eines Jahres ist diejenige, die den ersten Donnerstag des Jahres enthält.'
          },
          {
            question: 'Warum ist die Kalenderwoche wichtig?',
            answer: 'Die Kalenderwoche ist wichtig für die Planung von Terminen, Projekten und Veranstaltungen, da sie eine einheitliche und international verständliche Zeitangabe ermöglicht.'
          },
          {
            question: 'Wie viele Kalenderwochen hat ein Jahr?',
            answer: 'Ein Jahr hat in der Regel 52 Kalenderwochen, aber manchmal auch 53, abhängig davon, wie die Tage auf die Wochen verteilt sind.'
          },
          {
            question: 'Wie kann ich die Kalenderwoche für ein bestimmtes Datum berechnen?',
            answer: 'Sie können die Kalenderwoche für ein bestimmtes Datum mit verschiedenen Online-Tools oder Kalenderanwendungen berechnen. Diese Seite zeigt Ihnen die aktuelle Kalenderwoche.'
          },
          {
            question: 'Was ist der Unterschied zwischen einer Kalenderwoche und einer normalen Woche?',
            answer: 'Eine Kalenderwoche ist eine standardisierte Methode zur Nummerierung von Wochen innerhalb eines Jahres, während eine normale Woche einfach eine Periode von sieben Tagen ist.'
          },
          {
            question: 'Wie finde ich die Kalenderwoche für das nächste Jahr?',
            answer: 'Sie können die Kalenderwoche für das nächste Jahr berechnen, indem Sie das Datum des ersten Donnerstags des nächsten Jahres ermitteln und die Wochen ab diesem Datum zählen.'
          },
          {
            question: 'Gibt es eine einfache Methode, um die aktuelle Kalenderwoche zu bestimmen?',
            answer: 'Ja, diese Seite bietet Ihnen eine einfache und schnelle Möglichkeit, die aktuelle Kalenderwoche zu bestimmen, ohne dass Sie selbst rechnen müssen.'
          }
        ],
        technical: [
          {
            question: 'Wie genau ist die Berechnung der Kalenderwoche auf dieser Seite?',
            answer: 'Die Berechnung der Kalenderwoche auf dieser Seite erfolgt nach der ISO 8601 Norm und ist daher sehr genau.'
          },
          {
            question: 'Kann ich die Kalenderwoche für vergangene oder zukünftige Daten anzeigen?',
            answer: 'Diese Seite zeigt die aktuelle Kalenderwoche an. Für vergangene oder zukünftige Daten können Sie andere Kalenderanwendungen oder Online-Tools verwenden.'
          },
          {
            question: 'Welche Algorithmen werden zur Berechnung der Kalenderwoche verwendet?',
            answer: 'Die Berechnung der Kalenderwoche erfolgt nach dem ISO 8601 Algorithmus, der sicherstellt, dass die erste Kalenderwoche eines Jahres den ersten Donnerstag des Jahres enthält.'
          },
          {
            question: 'Wie werden Schaltjahre bei der Berechnung der Kalenderwoche berücksichtigt?',
            answer: 'Schaltjahre werden bei der Berechnung der Kalenderwoche automatisch berücksichtigt, da die Berechnung auf dem Datum des ersten Donnerstags des Jahres basiert.'
          }
        ]
      },
      en: {
        general: [
          {
            question: 'What is a calendar week?',
            answer: 'A calendar week (CW) is a continuous numbering of the weeks of a year. It is often used in planning and organization.'
          },
          {
            question: 'How is the calendar week calculated?',
            answer: 'The calendar week is calculated according to the ISO 8601 standard. The first calendar week of a year is the one that contains the first Thursday of the year.'
          },
          {
            question: 'Why is the calendar week important?',
            answer: 'The calendar week is important for planning appointments, projects, and events, as it provides a uniform and internationally understandable time indication.'
          },
          {
            question: 'How many calendar weeks does a year have?',
            answer: 'A year usually has 52 calendar weeks, but sometimes 53, depending on how the days are distributed over the weeks.'
          },
          {
            question: 'How can I calculate the calendar week for a specific date?',
            answer: 'You can calculate the calendar week for a specific date using various online tools or calendar applications. This page shows you the current calendar week.'
          },
          {
            question: 'What is the difference between a calendar week and a normal week?',
            answer: 'A calendar week is a standardized method for numbering weeks within a year, while a normal week is simply a period of seven days.'
          },
          {
            question: 'How do I find the calendar week for next year?',
            answer: 'You can calculate the calendar week for next year by determining the date of the first Thursday of the next year and counting the weeks from that date.'
          },
          {
            question: 'Is there an easy way to determine the current calendar week?',
            answer: 'Yes, this page provides you with an easy and quick way to determine the current calendar week without having to calculate it yourself.'
          }
        ],
        technical: [
          {
            question: 'How accurate is the calculation of the calendar week on this page?',
            answer: 'The calculation of the calendar week on this page is done according to the ISO 8601 standard and is therefore very accurate.'
          },
          {
            question: 'Can I display the calendar week for past or future dates?',
            answer: 'This page shows the current calendar week. For past or future dates, you can use other calendar applications or online tools.'
          },
          {
            question: 'What algorithms are used to calculate the calendar week?',
            answer: 'The calendar week is calculated according to the ISO 8601 algorithm, which ensures that the first calendar week of a year contains the first Thursday of the year.'
          },
          {
            question: 'How are leap years taken into account when calculating the calendar week?',
            answer: 'Leap years are automatically taken into account when calculating the calendar week, as the calculation is based on the date of the first Thursday of the year.'
          }
        ]
      }
    } as const;
