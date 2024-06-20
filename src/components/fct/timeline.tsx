import ReactVerticalTimelineComponent from 'react-vertical-timeline-component';
const { VerticalTimeline, VerticalTimelineElement } = ReactVerticalTimelineComponent;
import 'react-vertical-timeline-component/style.min.css';
import { Info, FastForward, Sparkles, Pin } from 'lucide-react';

export default function Timeline(): JSX.Element {
  const currentYear: string = new Date().getFullYear().toString();

  // TODO: Atualizar cores quando o tema for alterado
  // TODO: Fix css
  const colorMode: string = localStorage.getItem('starlight-theme') || 'light';

  const css = `
  .timeline-text-date {
    color: ${colorMode === 'dark' ? '#fff' : '#000'};
    font-size: 1.5rem !important;
    padding: .35em .3em !important;

    @media (max-width: 1169px) {
        color: #000;
    }
  }

  .timeline-text-container {
    color : #000 !important;
    background-color: #DBF363;
  }

  .timeline-text-container-info {
    color : #000 !important;
    background-color: #e4a6ff;
  }

  @define-mixin timeline-icon-box-shadow $className {
    $(className) {
      box-shadow: 0 0 0 4px ${
        colorMode === 'dark' ? '#fff' : '#000'
      }, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05) !important;
      @mixin-content;
    }
  }

  @mixin timeline-icon-box-shadow .timeline-icon {
    background-color: #DBF363;
    color: #000;
  }

  @mixin timeline-icon-box-shadow .timeline-icon-info {
    background-color: #e4a6ff;
    color: #000;
  }



  .timeline-timeline-black-text {
    color: #000 !important;
  }

  .timeline-white-text {
    color: #fff !important;
  }
  `;

  return (
    <>
      <style>{css}</style>
      <VerticalTimeline animate={false} lineColor={colorMode === 'dark' ? '#fff' : '#000'}>
        <VerticalTimelineElement
          className="timeline-vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: '7px solid  #C1D364' }}
          date="1957"
          icon={<Sparkles />}
          iconClassName="timeline-icon-info"
          dateClassName="timeline-text-date"
          textClassName="timeline-text-container-info">
          <p>Criação da Faculdade de Filosofia Ciências e Letras de Presidente Prudente</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="timeline-vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: '7px solid  #C1D364' }}
          date="3 de maio de 1959"
          iconClassName="timeline-icon"
          dateClassName="timeline-text-date"
          textClassName="timeline-text-container">
          <h3 className="timeline-vertical-timeline-element-title timeline-black-text">Pedagogia</h3>
          <h3 className="timeline-vertical-timeline-element-title timeline-black-text">Geografia</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="timeline-vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: '7px solid  #C1D364' }}
          date="1963"
          iconClassName="timeline-icon"
          dateClassName="timeline-text-date"
          textClassName="timeline-text-container">
          <h3 className="timeline-vertical-timeline-element-title timeline-black-text">Matemática</h3>
          <h3 className="timeline-vertical-timeline-element-title timeline-black-text">Ciências sociais</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="timeline-vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: '7px solid  #C1D364' }}
          date="1969"
          iconClassName="timeline-icon"
          dateClassName="timeline-text-date"
          textClassName="timeline-text-container">
          <h3 className="timeline-vertical-timeline-element-title timeline-black-text">Licenciatura em Ciências</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="timeline-vertical-timeline-element--education"
          contentArrowStyle={{ borderRight: '7px solid  #C1D364' }}
          date="1970"
          icon={<Info />}
          iconClassName="timeline-icon-info"
          dateClassName="timeline-text-date"
          textClassName="timeline-text-container-info">
          <p>
            A faculdade se torna uma Autarquia de Regime Especial junto com mais 14 instituitos isolados de Ensino
            Superior
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="timeline-vertical-timeline-element--education"
          contentArrowStyle={{ borderRight: '7px solid  #C1D364' }}
          date="1975"
          iconClassName="timeline-icon"
          dateClassName="timeline-text-date"
          textClassName="timeline-text-container">
          <h3 className="timeline-vertical-timeline-element-title timeline-black-text">Estudos Sociais</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="timeline-vertical-timeline-element--education"
          contentStyle={{ background: 'rgb(0,147,221)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #C1D364' }}
          date="1976"
          iconStyle={{ background: 'rgb(0,147,221)', color: '#fff' }}
          dateClassName="timeline-text-date">
          <h3 className="timeline-vertical-timeline-element-title timeline-white-text">Unesp</h3>
          <p>
            A Lei nº 952 criou a Universidade Estadual Paulista "Júlio de Mesquita Filho". A faculdade passa a se chamar
            Instituto de Planejamento e Estudos Ambientais - IPEA.
          </p>
          <p>
            São extintos os Cursos de Pedagogia, Ciências Sociais e as licenciaturas em Ciências e em Estudos Sociais.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="timeline-vertical-timeline-element--education"
          contentArrowStyle={{ borderRight: '7px solid  #C1D364' }}
          date="1977"
          iconClassName="timeline-icon"
          dateClassName="timeline-text-date"
          textClassName="timeline-text-container">
          <h3 className="timeline-vertical-timeline-element-title timeline-black-text">Engenharia Cartográfica</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="timeline-vertical-timeline-element--education"
          contentArrowStyle={{ borderRight: '7px solid  #C1D364' }}
          date="1984"
          iconClassName="timeline-icon"
          dateClassName="timeline-text-date"
          textClassName="timeline-text-container">
          <h3 className="timeline-vertical-timeline-element-title timeline-black-text">Estatistica</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="timeline-vertical-timeline-element--education"
          contentArrowStyle={{ borderRight: '7px solid  #C1D364' }}
          date="1984"
          iconClassName="timeline-icon"
          dateClassName="timeline-text-date"
          textClassName="timeline-text-container">
          <h3 className="timeline-vertical-timeline-element-title timeline-black-text">Pós-graduação em Geografia</h3>
          <p>Mestrado na área de concentração "Ambiente e Sociedade"</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="timeline-vertical-timeline-element--education"
          contentArrowStyle={{ borderRight: '7px solid  #C1D364' }}
          date="1988"
          iconClassName="timeline-icon"
          dateClassName="timeline-text-date"
          textClassName="timeline-text-container">
          <h3 className="timeline-vertical-timeline-element-title timeline-black-text">Educação Física</h3>
          <h3 className="timeline-vertical-timeline-element-title timeline-black-text">Fisioterapia</h3>
          <h3 className="timeline-vertical-timeline-element-title timeline-black-text">Pedagogia</h3>
          <p>Incorporou o Instituto Municipal de Ensino Superior de Presidente Prudente (IMESPP)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="timeline-vertical-timeline-element--education"
          contentArrowStyle={{ borderRight: '7px solid  #C1D364' }}
          date="1989"
          icon={<Info />}
          iconClassName="timeline-icon-info"
          dateClassName="timeline-text-date"
          textClassName="timeline-text-container-info">
          <p className="timeline-mt-0">
            A denominação "Instituto de Planejamento e Estudos Ambientais - IPEA" foi alterada para "Faculdade de
            Ciências e Tecnologia" - FCT
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="timeline-vertical-timeline-element--education"
          contentArrowStyle={{ borderRight: '7px solid  #C1D364' }}
          date="1994"
          iconClassName="timeline-icon"
          dateClassName="timeline-text-date"
          textClassName="timeline-text-container">
          <h3 className="timeline-vertical-timeline-element-title timeline-black-text">Pós-graduação em Geografia</h3>
          <p>Doutorado na área de "Desenvolvimento Regional e Planejamento Ambiental"</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="timeline-vertical-timeline-element--education"
          contentArrowStyle={{ borderRight: '7px solid  #C1D364' }}
          date="1997"
          iconClassName="timeline-icon"
          dateClassName="timeline-text-date"
          textClassName="timeline-text-container">
          <h3 className="timeline-vertical-timeline-element-title timeline-black-text">
            Pós-graduação em Ciências Cartográficas
          </h3>
          <p>Mestrado na área de "Aquisição Análise e Representação de Informações Espaciais"</p>
          <p>O único do país com essa denominação!</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="timeline-vertical-timeline-element--education"
          contentArrowStyle={{ borderRight: '7px solid  #C1D364' }}
          date="2000"
          iconClassName="timeline-icon"
          dateClassName="timeline-text-date"
          textClassName="timeline-text-container">
          <h3 className="timeline-vertical-timeline-element-title timeline-black-text">Pós-graduação em Geografia</h3>
          <p>Mestrado na área de concentração "Formação Inicial e Continuada de Professores"</p>
          <h3 className="timeline-vertical-timeline-element-title timeline-black-text">
            Pós-graduação em Ciências Cartográficas
          </h3>
          <p>Doutorado</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="timeline-vertical-timeline-element--education"
          contentArrowStyle={{ borderRight: '7px solid  #C1D364' }}
          date="2002"
          iconClassName="timeline-icon"
          dateClassName="timeline-text-date"
          textClassName="timeline-text-container">
          <h3 className="timeline-vertical-timeline-element-title timeline-black-text">Arquitetura e Urbanismo</h3>
          <h3 className="timeline-vertical-timeline-element-title timeline-black-text">Química</h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="timeline-vertical-timeline-element--education"
          contentArrowStyle={{ borderRight: '7px solid  #C1D364' }}
          date="2004"
          iconClassName="timeline-icon"
          dateClassName="timeline-text-date"
          textClassName="timeline-text-container">
          <h3 className="timeline-vertical-timeline-element-title timeline-black-text">
            Pós-graduação em Ciência e Tecnologia de Materiais
          </h3>
          <p className="timeline-vertical-timeline-element-title">Mestrado e Doutorado</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="timeline-vertical-timeline-element--education"
          contentArrowStyle={{ borderRight: '7px solid  #C1D364' }}
          date="2008"
          iconClassName="timeline-icon"
          dateClassName="timeline-text-date"
          textClassName="timeline-text-container">
          <h3 className="timeline-vertical-timeline-element-title timeline-black-text">
            Pós-graduação em Fisioterapia
          </h3>
          <p>Na área de concentração "Avaliação e Intervenção em Fisioterapia"</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="timeline-vertical-timeline-element--education"
          contentArrowStyle={{ borderRight: '7px solid  #C1D364' }}
          icon={<FastForward />}
          iconStyle={{ background: '#F9DA66', color: '#000' }}
          dateClassName="timeline-text-date"
          textClassName="timeline-text-container"
        />

        <VerticalTimelineElement
          className="timeline-vertical-timeline-element--education"
          contentStyle={{ background: '#F0975C', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  #C1D364' }}
          icon={<Pin />}
          iconStyle={{ background: '#F0975C', color: '#000' }}
          dateClassName="timeline-text-date"
          date={currentYear}>
          <h3 className="timeline-vertical-timeline-element-title timeline-black-text">Você está aqui!</h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
}
