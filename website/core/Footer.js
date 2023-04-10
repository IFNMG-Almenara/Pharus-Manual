/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    return `${baseUrl}${docsPart}${doc}`;
  }

  render() {
    return (
      <footer className="nav-footer pharus-footer" id="footer">
        <section className="sitemap row">
          <div class="col-lg-4">
            <div class="d-flex flex-row align-items-center">
              <a href={this.props.config.baseUrl} className="fa-solid fa-layer-group fa-xl">
                {this.props.config.footerIcon && (
                  <img
                    src={this.props.config.baseUrl + this.props.config.footerIcon}
                    alt={this.props.config.title}
                    width="27"
                    height="24"
                  />
                )}
              </a>
              <h2 class="Pharus">
                Pharus
              </h2>
            </div>
            <div>
              <strong>
              Gestão de Eventos
              </strong>
            </div>
          </div>
          
          <div>
            {/* <h5>Docs</h5> */}
            <a href="https://eventos.ifnmg.edu.br/#eventos">
              Outros Eventos
            </a>
            <a href="https://eventos.ifnmg.edu.br/#certificados">
              Validação de Certificados
              </a>
            <a href="https://eventos.ifnmg.edu.br/area-do-participante/meus-eventos">
              Área do Participante
            </a>
          </div>
          <div>
            <a>Desenvolvido pelo IFNMG - Campus Almenara</a>
            <a
              href="mailto:pharus@ifnmg.edu.br">
              pharus@ifnmg.edu.br
            </a>
          </div>
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
