import { SectionTitle } from "../sectionTitle/section-title";

import "./information.scss";

export function Info() {
  return (
    <div className="infos">
      <SectionTitle text="Idioma" />
      <div className="Languagens-info">
        <span>PT-BR - Idioma Nativo</span>
      </div>
      <SectionTitle text="Educação" />
      <div className="educational-info">
        <span>🎓</span>
        <span>
          Análise e Desenvolvimento de Sistemas - Centro Universitário
          Internacional Uninter; Mecatrônica - Centro de Formação Profissional
          Serviço Nacional de Aprendizagem Industrial Carlos Tannhauser
        </span>
      </div>
    </div>
  );
}
