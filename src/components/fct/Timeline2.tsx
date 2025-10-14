import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MuiThemeClientProvider from '@site/src/theme/MuiThemeProvider';

interface TimelineContentItem {
  title: string;
  body: string;
}

interface TimelineItemData {
  year: string;
  content: TimelineContentItem[];
}

const data: TimelineItemData[] = [
  {
    year: '1957',
    content: [
      {
        title: '',
        body: 'Criação da Faculdade de Filosofia Ciências e Letras de Presidente Prudente',
      },
    ],
  },
  {
    year: '1959',
    content: [
      {
        title: '3 de maio de 1959\nPedagogia, Geografia',
        body: '',
      },
    ],
  },
  {
    year: '1963',
    content: [
      {
        title: 'Matemática, Ciências sociais',
        body: '',
      },
    ],
  },
  {
    year: '1969',
    content: [
      {
        title: 'Licenciatura em Ciências',
        body: '',
      },
    ],
  },
  {
    year: '1975',
    content: [
      {
        title: 'Estudos Sociais',
        body: '',
      },
    ],
  },
  {
    year: '1976',
    content: [
      {
        title: 'Unesp',
        body: 'A Lei nº 952 criou a Universidade Estadual Paulista "Júlio de Mesquita Filho". A faculdade passa a se chamar Instituto de Planejamento e Estudos Ambientais - IPEA.\nSão extintos os Cursos de Pedagogia, Ciências Sociais e as licenciaturas em Ciências e em Estudos Sociais.',
      },
    ],
  },
  {
    year: '1977',
    content: [
      {
        title: 'Engenharia Cartográfica',
        body: '',
      },
    ],
  },
  {
    year: '1984',
    content: [
      {
        title: 'Estatística',
        body: '',
      },
      {
        title: 'Pós-graduação em Geografia',
        body: 'Mestrado na área de concentração "Ambiente e Sociedade"',
      },
    ],
  },
  {
    year: '1988',
    content: [
      {
        title: 'Educação Física\nFisioterapia\nPedagogia',
        body: 'Incorporou o Instituto Municipal de Ensino Superior de Presidente Prudente (IMESPP)',
      },
    ],
  },
  {
    year: '1989',
    content: [
      {
        title: '',
        body: 'A denominação "Instituto de Planejamento e Estudos Ambientais - IPEA" foi alterada para "Faculdade de Ciências e Tecnologia" - FCT',
      },
    ],
  },
  {
    year: '1994',
    content: [
      {
        title: 'Pós-graduação em Geografia',
        body: 'Doutorado na área de "Desenvolvimento Regional e Planejamento Ambiental"',
      },
    ],
  },
  {
    year: '1997',
    content: [
      {
        title: 'Pós-graduação em Ciências Cartográficas',
        body: 'Mestrado na área de "Aquisição Análise e Representação de Informações Espaciais"\nO único do país com essa denominação!',
      },
    ],
  },
  {
    year: '2000',
    content: [
      {
        title: 'Pós-graduação em Geografia',
        body: 'Mestrado na área de concentração "Formação Inicial e Continuada de Professores"',
      },
      {
        title: 'Pós-graduação em Ciências Cartográficas',
        body: 'Doutorado',
      },
    ],
  },
  {
    year: '2002',
    content: [
      {
        title: 'Pós-graduação em Geografia',
        body: 'Doutorado na área de concentração "Geografia Humana"',
      },
    ],
  },
  {
    year: '2004',
    content: [
      {
        title: 'Pós-graduação em Ciência e Tecnologia de Materiais',
        body: 'Mestrado e Doutorado',
      },
    ],
  },
  {
    year: '2008',
    content: [
      {
        title: 'Pós-graduação em Fisioterapia',
        body: 'Na área de concentração "Avaliação e Intervenção em Fisioterapia"',
      },
    ],
  },
];

export default function TimelineMui(): React.JSX.Element {
  return (
    <MuiThemeClientProvider>
      <Box sx={{ p: { xs: 1, md: 4 } }}>
        <Timeline position="alternate-reverse">
          {data.map((item, index) => (
            <TimelineItem key={`${item.year}-${index}`}>
              <TimelineOppositeContent sx={{ m: 'auto 0' }}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontFamily: 'monospace', fontStyle: 'italic' }}>
                  {item.year}
                </Typography>
              </TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineDot aria-hidden>
                  <CheckCircleIcon fontSize="small" />
                </TimelineDot>
                {index !== data.length - 1 && <TimelineConnector />}
              </TimelineSeparator>

              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Paper elevation={3} sx={{ p: 2 }}>
                  {item.content.map((content, ci) => (
                    <Box key={ci} sx={{ mb: ci < item.content.length - 1 ? 1.5 : 0 }}>
                      {content.title && (
                        <Typography
                          variant="subtitle1"
                          sx={{ whiteSpace: 'pre-line', fontWeight: 600, textAlign: 'left' }}>
                          {content.title}
                        </Typography>
                      )}
                      {content.body && (
                        <Typography
                          variant="body2"
                          sx={{ whiteSpace: 'pre-line', mt: content.title ? 0.5 : 0, textAlign: 'justify' }}>
                          {content.body}
                        </Typography>
                      )}
                    </Box>
                  ))}
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    </MuiThemeClientProvider>
  );
}
