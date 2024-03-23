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
        <span className="curso">
          <p>
            Análise e Desenvolvimento de Sistemas
            <br />
            Centro Universitário Internacional Uninter
          </p>
        </span>
      </div>
    </div>
  );
}
