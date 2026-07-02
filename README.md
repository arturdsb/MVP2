# Montês Café ☕

### Projeto de apresentação Front-End em React

<p>Foi criada uma Página da marca de café especial Montês Café, o objetivo foi tentar aproximar ao máximo de um produto real, tendo sido criado o branding, identidade visual e produtos da marca.</p>

Para o desenvolvimento do projeto foram utilizados os seguintes Hooks:

✅ useState → gerenciamento de estado (lista de produtos e quantidade).

✅ useEffect → carregamento inicial da página (loading).

✅ useNavigate → navegação programática (botão "Voltar").

✅ useParams → captura do ID do produto pela URL.

✅ useLocation → transporte dos dados do produto entre páginas sem necessidade de nova consulta.

Esses recursos foram combinados com os componentes reutilizáveis (Header, Footer, ProductInfo, QuantityBuy e Item), para demonstrar uma arquitetura organizada e aderente às boas práticas exigidas em projetos React.

Foi criada a página de Erro 404 Not Found personalizada para trazer maior identificação do usuário com a aplicação.

### Quanto aos itens de usabilidade:
+ Tooltips explicativas nos botões de adicionar, remover e finalizar compra.

+ Implementada tela de carregamento.

+ Tratamento no feedback visual de confirmação de compra.

### Como executar:

Após clonar o repositório, é necessário ir ao diretório raiz desse projeto pelo terminal para poder executar os comandos descritos abaixo.

>$ npm install

Este comando instala as dependências/bibliotecas, descritas no arquivo package.json. Uma pasta chamada node_modules será criada.

Para executar a interface basta executar o comando:

>$ npm start

Abra o http://localhost:3000/#/ no navegador.
