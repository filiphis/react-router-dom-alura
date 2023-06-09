# Roteiro do curso

## Aula01

- [x] Design no Figma: https://www.figma.com/file/q5gVD0nRChoaf05iTE3xTT/Ol%C3%A1%2C-Mundo!---Projeto-React%3A-router-(Copy)?type=design&node-id=38-716&t=Q3YBqZMzfo3FYGox-0
- [x] Iniciar o projeto com o npx create-react-app.
- [x] Excluir os arquivos e imports que não serão utilizados.
- [x] Copiar o CSS do curso.
- [x] Importar as fonts do google no index.html.
- [x] Instalar o react-router-dom.
- [x] Adicionar o componente `BrowserRouter` no component `App`.
- [x] Criar o componente `Routes` que é responsável por definir qual rota será mostrada.
- [x] Criar o componente <Route path='' element={page} /> para cada rota da aplicação.
- [x] O <Route path='*' /> serve para listar uma page que nao combinou com as anteriores.

## Aula02

- [x] Criar o componente `<Menu />` com os links Home e Sobre Mim com a `className={navegacao}`
- [x] Importar os estilos do `<Menu />`
- [x] Utilizar o `<Menu />` dentro do **BrowserRouter** mas fora de **Router**
- [x] Invés de utilizar as tags `a` utilizar o componente do react-router `<MenuLink to='href'>`
- [x]Criar o componente `<NavLink />` com a `className={link}`
- [x] Utilizar o estilo da `className={linkDestacado}` no link ativo/active
- [x] Criar o componente `<Banner />` e importar o seu css disponibilizado.

## Aula03 - Rotas Aninhadas

- [x] Criar o componente `<Posts />` e importar o seu css disponibilizado.
- [ ] Criar o componente `<Rodape />` e importar o seu css disponibilizado.
- [x] Importar um svg para o Rodape utilizando `import {ReactComponent as MarcaRegistrada}`.
- [x] Criar o componente `<PaginaPadrao />` para agrupar a estrutura que se repete em várias páginas ( main e Banner)
- [x] Criar uma nova rota `<Route path="/" element={<PaginaPadrao />} />` para mostrar o novo componente criado
- [ ] Utilizar o componente do ReactRouterDom `<Outlet />` na `<PaginaPadrao />` para renderizar o conteúdo de cada rota.
- [x] Utilizar rotas index na rota aninhada home.
- [x] Criar o componente `<PostModelo />` e importar o seu css disponibilizado.
- [x] Importar o `<PostModelo />` na pagina `<Sobremim />` e também os estilos da página.

## Aula04 - Rotas dinâmicas

- [x] Alterar o nome do componente `Post` para `PostCard`.
- [x] Criar uma página `Post`.
- [x] Criar a rota `post:id` apontando para a página `Post`
- [x] O id da rota `post:id` será passado para a página `Post`, onde na página Post utilizaremos o hook `useParams` para receber este valor.
- [x] Criar um `Link` para cada `postCard` da página home fazendo com que cada `postCard` aponte para sua rota `post/:id`
- [x] Importar o json de posts na página `Post`.
- [x] Render cada post conforme seus dados utilizando a componente `PostModelo`.
- [x] Instalar o pacote `react-markdown`.
- [x] Utilizar o react-markdown para listar o conteudo do post que está salvo no json como markdown.
- [x] Criar um arquivo de estilo para a pagina `Post` que será utilizado para estilizar o conteúdo markdown do post.
- [x] Realizar um if para renderizar outra tela caso o post digitado na rota não exista.
- [x] Criar a página `NaoEncontrada` e importar seus estilos.

## Aula05 - Finalizando o projeto

- [x] Criar o componente `BotaoPrincipal` e importar seus estilos.
- [x] Adicionar um `BotaoPrincipal` na página de error404.
- [x] No `BotaoPrincipal` utilizar o hook `useNavigate` para retornar para a rota anterior ao erro.
- [x] Também utilizar o hook `useNavigate` e componente `BotaoPrincipal` quando uma rota incorreta for digitada ná pagina `posts`.
