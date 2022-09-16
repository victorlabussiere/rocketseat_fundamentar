### Curso HTTP - RocketSeat ###

>> Conceitos:
- Simplicidade: 
    -- Legível
    -- Para qualquer pessoa
- Cliente / Servidor: 
    -- Requisição / Resposta
    -- Como pedir um lanche
- Stateless
    -- Não guarda informações
    -- Não existe relação entre conexões
    -- Jogar uma moeda
    -- Sessões
        --- possível armazenar informações das sessões através de:
            ---- Cookies
            ---- Storages
- Extensível
    -- Através do cabeçalhos, podemos fazer diversas trocas de informçãoes entre o cliente-servidor, conforme a necessidade
    -- Headers
        --- Informações para a comunicação
    -- Body
        --- Corpo do pedido ou da resposta

>>> Cliente 
- User Agente
    -- Quem é o cliente?
        --- Browser
        --- cURL
    -- Entidade que dá início à comunicação
- Pedidios 
    -- Métodos HTTP
        --- GET
        --- POST
        --- PUT
        --- DELET

>>> Servidor 
- Se apresenta como uma máquina
- Preparado para ouvir e processar 
- Vários servidores em um computador
- Resposta:
    -- Status Code (exemplos abaixo)
        --- 404 
        --- 500
    -- body

>>> Proxies
- Representantes
- Fica entre o cliente e o servidor
- Ajudam a fazer o transporte dos dados
- Diversas funções
    -- Cache
    -- Filtro (tipo um antivírus ou controle parental)
    -- Load balancing (distribuição de carga)
    -- Autenticação
    -- Autorização

>> URI 
- Conceito -> Uniforme Resource Identifier 
    -- Identificar um recurso
    -- Nome ou Localização
    -- Exemplo
        --- Você é um recurso 
            --- Seu nome é um ponto exigido para identificar
            --- Sua localização é o outro ponto exigido para identificar
- Resource 
    -- O alvo do pedido (alvo HTTP -> endereço do site)
    -- Qualquer coisa identificável
        --- Digital -> email é um recurso -> acessado pelo protocolo mailto:email@email.com
        --- Abstrata -> logar o gmail por exemplo
            ---- Sessão -> primeiro se inicia uma sessão com o login e senha
            ---- Autenticação -> Antes da sessão ser iniciada, o login e senha passarão por uma autenticação -> recursos abstratos.
        --- Físico
            ---- Produtos
            ---- Usuários 
        --- Se podemos identificar, nomear, endereçar ou manipular, estamos falando de um novo recurso.
- Locator
    -- URL 
        --- Uniforme Resource Locator
        --- Compopentes 
            ---- obrigatórios
                ----- Protocolo (http / htpps)
                                            } Não é possível acessar um recurso na internet sem os componentes obrigatórios.
                ----- Dominio (endereço de um site www.dominio)
            ---- opicionais
                ----- Subdominio (o www antes do endereço -> www...)
                ----- Path (Caminho -> .com/path...)
                ----- Parametros (instruções para o servidor identificar comandos dados pelo client)
                ----- Porta (: dois pontos depois de um domínio é a porta -> local dentro do servidor disponível para acesso)
                ----- Âncora (#ancora)
        --- Exemplos
            ---- https://www.rocketseat.com.br/blog (protocolo//subdominio.dominio.com.br/path)
            ---- https://www.youtube.com/watch?v=vpYct@npKD8 (protocolo//subdominio.dominio.com/path?parametros=criptografia)
            ---- http://127.0.0.1:333/index.html#algumlugar (protocolo//dominio em forma ip:porta/path#ancora)
- Name -> URN
    -- Uniform Resource Name
    -- Exemplo
        --- urn:isbn:0451450523 (nome de um livro)
        --- urn:oasis:names:especification:docbook:dtd:xml:4.1.2 

>> Resumo 
- URI é a fomra de encontrar um recurso, que se trata de qualquer entidade, identificável, na internet pelo seu nome ou pelo seu local. 
- A forma mais usada é pelo local, usando a URL (Uniform Resource Locator), que possui 2 componentes obrigatórios, o protocolo e o domínio, além de 5 opicionais: o subdominio, o path, os parâmetros, a porta e a âncora.

### Messages ###
- Mensagens entre o cliente e o servidor:
-- São pedidos e respostas passados por HTTP Messages

>> Tipos de Mensagens
- Request
    -- Request Line 
        --- Method
        --- Protocol version
        --- URI
- Body
- Headers

- Response 
    -- Protocol Version
    -- Status Code
    -- Headers
    -- Status Message

### Methoda ###
    -- OPTIIONS
    -- GET
    -- HEAD
    -- POST
    -- PUT
    -- PATCH
    -- DELETE

>> HTTP Methods 
    -- Define um conjunto de métodos HTTP
    -- Indica a ação que o cliente deseja operar
    -- Podem ser chamados de verbos HTTP
    -- Cada um possui a sua semântica
    -- Características
        --- Seguro 
            ---- Não altera o estado do servidor
            ---- Somente leitura
            ---- Cliente não solicita alterações
            ---- Não há carga extra para o servidor
            ---- O servidor é responsável em manter o método seguro
            ---- Quais são?
                ----- GET -> GET /search.html HTTP/1.1
                ----- HEAD
                ----- OPTIONS
        --- Idempotente (IDEM + potente)
            ---- Ao executar o método, a resposta deverá ser sempre a mesma
            ---- Quais são?
                ----- Todos os seguros são idempotentes
                ----- PUT
                ----- DELETE
            ---- Status code poderá ser diferente -> define qual foi a conversa entre pedido e resposta (404, 200, 500 etc)
            ---- O servidor tem a responsabilidade de retornar dados da mesma maneira 
            ---- Essa especificação não é garantida de que todos os servidores irão aplicar o conceito corretamente

>>> IDEMPOTENCE
A resposta do servidor será sempre a mesma 

HTTP METHOD  |  IDEMPOTENCE  |   SAFETY    |
    GET      |      YES      |     YES     |
    HEAD     |      YES      |     YES     | 
    PUT      |      YES      |     NO      | 
    DELETE   |      YES      |     NO      | 
    POST     |       NO      |     NO      |
    PATCH    |       NO      |     NO      |

No caso do post e do patch, se levarmos um exemplo como cadastrar, a resposta do servidor poderá ser diferente de acordo com a o tipo e a identificação do usuário
    - por exemplo, uma resposta padrão de cadastro realizado -> usuário1 cadastrado com sucesso -> usuário2 cadastrado com sucesso etc...
No caso do method patch também uma vez que ele retorna uma resposta do servidor de acordo com a mudança realizada.

Em relação á segurança do servidor, sempre que um método altera um atributo/ elemento, a estrutura do servidor é alterada de acordo com a mudança, por isso sempre haverá risco com métodos não seguros.

>>> OPTIONS
- Informação sobre disponibilidade da requisição
    -- OPTIONS /index.html HTTP/1.1
    -- OPTIONS * HTPP/1.1
- Características 
    -- Seguro: sim
    -- Idempotente: sim
             --- Request: Não
    -- BODY{
             --- Response: Não
    -- Uso em formulários HTML: Não
    -- Cacheable: Não
Uso no curl: curl -X OPTIONS http://dominio

>>> GET
- Pegar um recurso
- Somente recebe dados
- Características
    -- Seguro: sim
    -- Idempotente: sim
             --- Request: não 
    -- BODY{
             --- response: sim
    -- Cacheable: sim
    -- Uso de formulários HTML: sim
Uso no curl: curl http://dominio...

>>> HEAD
- Semelhante ao GET, porém recebe somente o cabeçalho --> HEAD/ posts (exemplo)
- Características
    -- Seguro: sim
    -- Idempotente: sim
             --- Request: não
    -- Body{                   } não possui body pra envio e nem pra resposta...
             --- Response: não
    -- Uso em formulário HTML: não
    -- Cacheable: sim
Uso no curl: curl -I http...

>>> POST
- Publicar / Cadastrar um recurso
- Características
    -- Seguro: não
    -- Idempotente: não
             --- Request
    -- Body{
             --- Response
    -- Uoa formulários em HTML: sim
    -- Poderá ser cacheable
Uso no curl: curl -d '{"objeto do tipo": "json"}

>>> PUT
- Cria um novo ou atualiza um recurso 
    -- PUT (profile HTTP/1.1)
    -- Diferença entre o POST? PUT é idempotente e é, em geral, mais usado para atualização de um recurso.
    -- Ao usar o PUT para criação, o status code será 201
    -- Atualização - status code 204 ou 200
- Características
    -- Seguro: não
    -- Idempotente: sim
             --- Request: sim
    -- Body{
             --- Response: não 
    -- Uoa formulários em HTML: não
    -- Cacheable: não
Uso no curl: curl -d "{"objeto": "json"} -H 'Content-type: application/json' -X PUT http://dominio...

>>> PATCH
- Modificação parcial de um recurso
    -- Diferença entre o PUT? -> o PATCH altera apenas um parte do recurso enquanto o PUT irá alterar o recurso por inteiro.
    -- PATCH/posts/1 HTTP/1.1
- Características
    -- Seguro: não
    -- Idempotente: não
             --- Request: sim
    -- Body{
             --- Response: sim
    -- Uoa formulários em HTML: não
    -- Cacheable: não
Uso no curl: curl -X OPTIONS -> observar nas opções se aceita o patch no servidor
    -- curl -d {"argument title": "argument" } -H "Content-type: application/json" -X PATCH http://dominio...

>>> DELETE 
- Remover um recurso
    -- DELETE/posts HTTP/1.1
    -- Status code
        --- 202: accpeted
        --- 204: no content
        --- 200: ok
- Características
    -- Seguro: não
    -- Idempotente: sim
             --- Request: possibilidade
    -- Body{
             --- Response: ppossibilidadee
    -- Uoa formulários em HTML: não
    -- Cacheable: não
Uso no curl: -x DELETE http://dominio.../posts/2('target exmaple') 

### Headers ###
- Cabeçalhos
- Indformações adicionais para o pedido ou reposta 
               -- Content-type: application/json
- Nome: valor{                                  } exemplos
               -- Content-type: text/html 

>>> Headers por contexto 
- General
- Request headers
- Reponse headers
(Os contextos estão presentes na aba Network do devtools)

>>> Como obter ajuda?
- Download DevDocs
    -- App online instalado na máquina: serve para exbir documentação sobre diversos tipos de tecnologias e protocolos.