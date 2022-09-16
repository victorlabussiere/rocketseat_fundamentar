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