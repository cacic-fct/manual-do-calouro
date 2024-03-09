# Manual do calouro

O "manual do calouro" apresenta a FCT-Unesp e a cidade de Presidente Prudente para os novos ingressantes.  
Estão reunidas as informações que todos os calouros precisam saber para entender seus novos espaços e aproveitar tudo que oferecem.

## Contribuindo

Todos podem contribuir com o manual do calouro.

Leia o [guia de contribuição do CACiC](https://github.com/cacic-fct/.github/blob/main/Contributing.md).

### Seções

As seções são cada tópico do manual do calouro.  
Cada seção possui seu próprio arquivo Markdown (`.md`).  
Para contribuir com imagens ou artes, disponibilize-as em um serviço de hospedagem que não faça a sua compressão, como o Google Drive.

### Mapa

Os pontos no mapa são gerados através de arquivos `.geojson`.  
Cada categoria de lugar deve possuir seu próprio arquivo (ex: mercados, compras, lazer).  
Para editar estes arquivos, abra-os no [geojson.io](https://geojson.io) ou outra ferramenta de sua preferência.

Ao criar um novo ponto ou polígono:

- Inclua os campos `name` e `description`;
- No geojson.io, desmarque a caixa "Show style properties".

`name` é o nome do estabelecimento ou local de interesse público.  
`description` é uma breve descrição do local. Este campo pode ser deixado em branco.

![](https://i.imgur.com/9RdkBMr.png)

### Direitos autorais e direito de imagem

Utilize apenas material de sua própria autoria ou que você possui autorização de uso concedida pelo autor por escrito.  
Quando uma pessoa aparece em uma imagem, você deve haver autorização de uso de imagem concedida por ela por escrito.

## Website

O website é construído com [Docusaurus](https://docusaurus.io/) e pode ser acessado em [cacic-fct.github.io/manual-do-calouro](https://cacic-fct.github.io/manual-do-calouro).

### Desenvolvimento

Para iniciar o website localmente, primeiro instale as dependências:

```bash
npm install
```

Depois, inicie o servidor de desenvolvimento:

```bash
npm start
```

# Política de submissão de ideias não solicitadas

A finalidade desta política é esclarecer a posição do CACiC sobre ideias não solicitadas e evitar quaisquer possíveis disputas ou ações legais caso produtos, serviços ou recursos do CACiC desenvolvidos independentemente pareçam ser semelhantes ou idênticos às ideias enviadas.

Se, depois de ler atenciosamente esta política, você decidir enviar suas ideias, independentemente do que você possa dizer em sua comunicação, consideraremos que você a leu e entendeu e que os seguintes termos devem ser aplicados a suas submissões.

Termos de submissão de ideias:

- Suas submissões e seu conteúdo se tornarão automaticamente propriedade do CACiC, sem nenhuma compensação para você ou para terceiros.
- O CACiC não tem obrigações em relação às submissões, incluindo, mas sem limitação, obrigações de manter suas submissões confidenciais ou proprietárias, e não seremos responsabilizados pelo uso ou pela divulgação das submissões.
- O CACiC pode usar ou redistribuir as submissões e seu conteúdo para qualquer finalidade, seja ela comercial ou qualquer outra, sem qualquer restrição.
- O CACiC não tem obrigação de revisar, manter, confirmar ou responder sobre as submissões ou qualquer material relacionado.

### Feedback e informações

Qualquer feedback fornecido é considerado não confidencial e não proprietário. O CACiC está livre para usar tais informações para qualquer finalidade que considere apropriada, em uma base irrestrita, e sem nenhuma compensação para você ou para qualquer terceiro.
