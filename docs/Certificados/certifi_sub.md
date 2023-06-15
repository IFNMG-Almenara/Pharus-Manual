---
sidebar_position: 4
id: certifi_sub
title: Certificado De Submissão
sidebar_label: Certificado De Submissão
---
## Quando emitir um certificado de submissão
O certificado de submissão é emitido para comprovar que o participante submeteu um trabalho para um evento específico, seja ele um artigo científico, pôster ou outra modalidade de trabalho.

No sistema PHARUS do IFNMG, é possível emitir certificados de submissão para eventos que foram previamente cadastrados no sistema e nos quais o participante submeteu o trabalho de forma adequada, seguindo as diretrizes do evento.

Portanto, é recomendável emitir um certificado de submissão sempre que o participante submeter um trabalho para um evento, independente de ser aceito ou não.

**Lembre-se:** A emissão do certificado é de responsabilidade do organizador do evento e que o mesmo deve seguir as normas e diretrizes estabelecidas pelo IFNMG.

## Configuração do certificado de submissão

1. Após acessar a [opção de emissão de certificados](/docs/Certificados/visao_geral#acessando-opção-de-emissão-de-certificados). Selecione a opção "Certificado de submissão" na lista de opções de certificados disponíveis.

![Submissão](/img/screenshots/sub1.png "Submissão")

2. Na página de edição do certificado, você poderá atualizar as informações necessárias.
    - **<font color="red">1</font> Identificador do Certificado:*** Insira o "Identificador do Certificado" para identificar o certificado que está sendo configurado.
    - **<font color="red">2</font> Layoud do Certificado:** Clique em "choose file" e faça o upload do "Layoud do Certificado" desejado, que deve ter o tamanho de 1240x1754 pixels.
    - **<font color="red">3</font> TAGs disponiveis:** Para adicionar partes textuais dinâmicas ao certificado, utilize as seguintes TAGs:
        - [participante.nome]: Nome do participante que submeteu o trabalho.
        - [evento.nome]: Nome do evento no qual o trabalho foi submetido.
        - [evento.carga_horaria]: Carga horária do evento.
        - [evento.cidade]: Cidade onde o evento ocorreu.
        - [evento.estado]: Estado onde o evento ocorreu.
        - [evento.inicio]: Data de início do evento.
        - [evento.termino]: Data de término do evento.
        - [submissao.titulo]: Título do trabalho submetido.
        - [submissao.autores]: Lista de autores do trabalho submetido.
        - [submissao.modalidade]: Modalidade de apresentação do trabalho submetido.
        - [submissao.area_tematica]: Área temática do trabalho submetido.
    - **<font color="red">4</font> Texto para o certificado:** No campo "Texto para o Certificado", defina o texto do certificado de submissão. Este texto deve ser claro e objetivo.
        Exemplo de texto para o Certificado de submissão:
        
        "Certificamos que [participante.nome] submeteu o trabalho intitulado [submissao.titulo] no [evento.nome], realizado em [evento.cidade], [evento.estado], no período de [evento.inicio] a [evento.termino], com carga horária de [evento.carga_horaria] horas. O trabalho foi apresentado na modalidade [submissao.modalidade] e estava inserido na área temática de [submissao.area_tematica]."
    
    ![Preencher Dados Submissão](/img/screenshots/sub2.png "Preencher Dados Submissão")
