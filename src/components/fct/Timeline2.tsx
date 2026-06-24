import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import MapIcon from '@mui/icons-material/Map';
import PublicIcon from '@mui/icons-material/Public';
import SchoolIcon from '@mui/icons-material/School';
import ScienceIcon from '@mui/icons-material/Science';
import TimelineIcon from '@mui/icons-material/Timeline';
import MuiThemeClientProvider from '@site/src/theme/MuiThemeProvider';

interface TimelineContentItem {
  title: string;
  body: string;
}

interface TimelineItemData {
  year: string;
  content: TimelineContentItem[];
}

interface TimelineAccent {
  label: string;
  color: string;
  background: string;
  Icon: typeof SchoolIcon;
}

const accents: TimelineAccent[] = [
  {
    label: 'Fundação',
    color: '#006ec9',
    background: '#d9ecff',
    Icon: ApartmentIcon,
  },
  {
    label: 'Graduação',
    color: '#2f7d32',
    background: '#dff2df',
    Icon: SchoolIcon,
  },
  {
    label: 'Reorganização',
    color: '#a64000',
    background: '#ffe5ce',
    Icon: ChangeCircleIcon,
  },
  {
    label: 'Cartografia',
    color: '#7a4ab8',
    background: '#ede3ff',
    Icon: MapIcon,
  },
  {
    label: 'Pós-graduação',
    color: '#00796b',
    background: '#d8f2ed',
    Icon: ScienceIcon,
  },
  {
    label: 'Geografia',
    color: '#6c7a00',
    background: '#eef2cc',
    Icon: PublicIcon,
  },
  {
    label: 'Comunidade',
    color: '#b02f63',
    background: '#ffe1ed',
    Icon: Diversity3Icon,
  },
  {
    label: 'Movimento',
    color: '#5c6bc0',
    background: '#e5e8ff',
    Icon: TimelineIcon,
  },
];

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

function getAccentFromText(searchableText: string): TimelineAccent {
  if (searchableText.includes('criação') || searchableText.includes('faculdade de filosofia')) {
    return accents[0];
  }

  if (
    searchableText.includes('unesp') ||
    searchableText.includes('denominação') ||
    searchableText.includes('extintos')
  ) {
    return accents[2];
  }

  if (searchableText.includes('cartográfica')) {
    return accents[3];
  }

  if (
    searchableText.includes('pós-graduação') ||
    searchableText.includes('mestrado') ||
    searchableText.includes('doutorado')
  ) {
    if (searchableText.includes('geografia')) {
      return accents[5];
    }

    return accents[4];
  }

  if (searchableText.includes('educação física') || searchableText.includes('fisioterapia')) {
    return {
      ...accents[6],
      Icon: FitnessCenterIcon,
    };
  }

  if (
    searchableText.includes('pedagogia') ||
    searchableText.includes('licenciatura') ||
    searchableText.includes('curso')
  ) {
    return {
      ...accents[1],
      Icon: AutoStoriesIcon,
    };
  }

  return accents[1];
}

function getContentAccent(content: TimelineContentItem): TimelineAccent {
  return getAccentFromText(`${content.title} ${content.body}`.toLocaleLowerCase('pt-BR'));
}

function getTimelineAccent(item: TimelineItemData): TimelineAccent {
  if (item.content.length > 1) {
    return accents[7];
  }

  return getContentAccent(item.content[0]);
}

function TimelineMuiContent(): React.JSX.Element {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{
        px: { xs: 0, md: 2 },
        py: { xs: 1, md: 3 },
        overflow: 'visible',
      }}>
      <Timeline
        position={isSmallScreen ? 'right' : 'alternate-reverse'}
        sx={{
          p: 0,
          m: 0,
          [`& .MuiTimelineItem-root:before`]: {
            flex: isSmallScreen ? 0 : undefined,
            padding: isSmallScreen ? 0 : undefined,
          },
        }}>
        {data.map((item, index) => {
          const accent = getTimelineAccent(item);
          const Icon = accent.Icon;
          const connectorColor = isDarkMode ? alpha(accent.color, 0.52) : alpha(accent.color, 0.32);

          return (
            <TimelineItem key={`${item.year}-${index}`} sx={{ alignItems: 'stretch', minHeight: 112 }}>
              <TimelineOppositeContent
                sx={{
                  display: { xs: 'none', sm: 'block' },
                  m: '0',
                  px: 2,
                }}>
                <Chip
                  label={item.year}
                  size="small"
                  sx={{
                    borderColor: alpha(accent.color, 0.35),
                    bgcolor: isDarkMode ? alpha(accent.color, 0.2) : alpha(accent.background, 0.8),
                    color: isDarkMode ? theme.palette.common.white : accent.color,
                    fontFamily: 'Source Code Pro, monospace',
                    fontWeight: 800,
                    mt: 1.75,
                    position: 'sticky',
                    top: 88,
                    zIndex: 1,
                  }}
                  variant="outlined"
                />
              </TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineDot
                  aria-hidden
                  sx={{
                    p: 1.1,
                    my: 1.5,
                    border: `3px solid ${isDarkMode ? alpha(theme.palette.common.white, 0.18) : theme.palette.common.white}`,
                    bgcolor: accent.color,
                    boxShadow: `0 0 0 6px ${alpha(accent.color, isDarkMode ? 0.2 : 0.13)}`,
                  }}>
                  <Icon fontSize="small" />
                </TimelineDot>
                {index !== data.length - 1 && (
                  <TimelineConnector
                    sx={{
                      width: 3,
                      borderRadius: 999,
                      bgcolor: connectorColor,
                    }}
                  />
                )}
              </TimelineSeparator>

              <TimelineContent sx={{ py: 1, px: { xs: 1.5, sm: 2.5 } }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  {item.content.map((content, ci) => {
                    const contentAccent = getContentAccent(content);

                    return (
                      <Paper
                        key={ci}
                        elevation={0}
                        sx={{
                          position: 'relative',
                          overflow: 'hidden',
                          p: { xs: 2, sm: 2.5 },
                          border: `1px solid ${alpha(contentAccent.color, isDarkMode ? 0.32 : 0.16)}`,
                          borderRadius: 2,
                          bgcolor: isDarkMode
                            ? alpha(theme.palette.background.paper, 0.78)
                            : alpha(theme.palette.background.paper, 0.96),
                          boxShadow: isDarkMode
                            ? `0 18px 40px ${alpha(theme.palette.common.black, 0.22)}`
                            : `0 18px 40px ${alpha(contentAccent.color, 0.1)}`,
                          '&:before': {
                            content: '""',
                            position: 'absolute',
                            inset: 0,
                            background: `linear-gradient(135deg, ${alpha(contentAccent.background, isDarkMode ? 0.08 : 0.45)}, transparent 52%)`,
                            pointerEvents: 'none',
                          },
                        }}>
                        <Box sx={{ position: 'relative' }}>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 1,
                              mb: 1.25,
                              flexWrap: 'wrap',
                            }}>
                            <Typography
                              component="span"
                              sx={{
                                display: { xs: 'inline-flex', sm: 'none' },
                                px: 1,
                                py: 0.25,
                                borderRadius: 999,
                                bgcolor: isDarkMode
                                  ? alpha(contentAccent.color, 0.24)
                                  : alpha(contentAccent.background, 0.9),
                                color: isDarkMode ? theme.palette.common.white : contentAccent.color,
                                fontFamily: 'Source Code Pro, monospace',
                                fontSize: '0.78rem',
                                fontWeight: 800,
                              }}>
                              {item.year}
                            </Typography>
                            <Typography
                              component="span"
                              sx={{
                                px: 1,
                                py: 0.25,
                                borderRadius: 999,
                                bgcolor: isDarkMode
                                  ? alpha(contentAccent.color, 0.18)
                                  : alpha(contentAccent.background, 0.82),
                                color: isDarkMode ? alpha(theme.palette.common.white, 0.9) : contentAccent.color,
                                fontSize: '0.72rem',
                                fontWeight: 800,
                                textTransform: 'uppercase',
                              }}>
                              {contentAccent.label}
                            </Typography>
                          </Box>

                          {content.title && (
                            <Typography
                              variant="subtitle1"
                              sx={{
                                whiteSpace: 'pre-line',
                                color: isDarkMode ? theme.palette.common.white : theme.palette.text.primary,
                                fontWeight: 800,
                                lineHeight: 1.35,
                                textAlign: 'left',
                              }}>
                              {content.title}
                            </Typography>
                          )}
                          {content.body && (
                            <Typography
                              variant="body2"
                              sx={{
                                whiteSpace: 'pre-line',
                                mt: content.title ? 0.75 : 0,
                                color: 'text.secondary',
                                lineHeight: 1.72,
                                textAlign: 'left',
                              }}>
                              {content.body}
                            </Typography>
                          )}
                        </Box>
                      </Paper>
                    );
                  })}
                </Box>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </Box>
  );
}

export default function TimelineMui(): React.JSX.Element {
  return (
    <MuiThemeClientProvider>
      <TimelineMuiContent />
    </MuiThemeClientProvider>
  );
}
