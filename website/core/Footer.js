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
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <div class="col-lg-4">
            <div class="d-flex flex-row align-items-center">
              <a href={this.props.config.baseUrl} className="nav-home fa-solid fa-layer-group fa-xl">
                {this.props.config.footerIcon && (
                  <img
                    src={this.props.config.baseUrl + this.props.config.footerIcon}
                    alt={this.props.config.title}
                    width="66"
                    height="58"
                  />
                )}
              </a>
              <h2 class="Pharus">
                Pharus
              </h2>
            </div>
            <div>
              <p>
                Gestão de Eventos
              </p>
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
          {/* <div>
            <h5>More</h5>
            <a href={`${this.props.config.baseUrl}blog`}>Blog</a>
            <a href="https://github.com/">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/facebook/docusaurus/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
            {this.props.config.twitterUsername && (
              <div className="social">
                <a
                  href={`https://twitter.com/${this.props.config.twitterUsername}`}
                  className="twitter-follow-button">
                  Follow @{this.props.config.twitterUsername}
                </a>
              </div>
            )}
            {this.props.config.facebookAppId && (
              <div className="social">
                <div
                  className="fb-like"
                  data-href={this.props.config.url}
                  data-colorscheme="dark"
                  data-layout="standard"
                  data-share="true"
                  data-width="225"
                  data-show-faces="false"
                />
              </div>
            )}
          </div> */}
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
