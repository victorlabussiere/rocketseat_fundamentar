### Curso HTTP - RocketSeat ###
>> Conceitos:
- Simplicidade: 
    - Legível
    - Para qualquer pessoa
- Cliente / Servidor: 
    - Requisição / Resposta
    - Como pedir um lanche
- Stateless
    - Não guarda informações
    - Não existe relação entre conexões
    - Jogar uma moeda
    - Sessões
        -- possível armazenar informações das sessões através de:
            --- Cookies
            --- Storages
- Extensível
    - Através do cabeçalhos, podemos fazer diversas trocas de informçãoes entre o cliente-servidor, conforme a necessidade
    - Headers
        -- Informações para a comunicação
    - Body
        -- Corpo do pedido ou da resposta

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
    - Status Code (exemplos abaixo)
        -- 404 
        -- 500
    - body

>>> Proxies
- Representantes
- Fica entre o cliente e o servidor
- Ajudam a fazer o transporte dos dados
- Diversas funções
    -- Cache
    -- Filtro (tipo um antivírus ou controle parental)
    -- Load balancing
    -- Autenticação
    -- Autorização
