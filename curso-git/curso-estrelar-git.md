# Controle de Versão
- Registro de alterações em um ou mais arquivos
- Lembrar versões específicas mais tarde
- Reverter para estado anterior determinados arquivos ou um projeto inteiro
- Compare as mudançãs ao longo do tempo
- Veja quem modificou pela última vez algo que pode estar causando um problema
- Quem introduziu um problema ou quando
- Se você estragar tudo ou perder arquivos, você recupera fácilmente
- ++

## VCS - Version Control System.

### Tipos de controle de versão
* Sistemas Locais -- sistemas pessoais 
- Copiar os arquivos para outro diretório
- Muito comum e muito simples
- Incrivelmente propensa a erros
- Fácil de sobrescrever arquivos, caso haja feito uma cópia errada
- - Arquivos que são salvos no próprio pc ex: arquivo1 => arquivoFinal => arquivoFinalFinalmente...

* Para superar os possíveis erros, existe o RCS - Revision Control System (Mac)
- Ferramente popular (antigamente) para controle de versões
- Mantém conjuntos de alterações, ou seja, as diferenças entre arquivos.
- Formato especial no disco
- Re-criar como qualquer arquivo se parecia em qualquer ponto no tempo, adicionando-se todas as alterações no arquivo

* Entretanto, ainda é um sistema de armazenamento de versões local.
-- A comunicação e o compartilhamento dos arquivos e versões com outros desenvolvedores é dificultada.

* Sistemas Centralizados
- Exemplo: CVS, Subversion e Perforce
- Um único servidor que contém todos os arquivos de controle de versão
- Vários clientes usam arquivos a partir desse lugar central

+ Por muitos anos, este tem sido o padrão para controle de verão

### Vantagens sobre VCSs locais 
- Controle sobre atividades de colaboradores
- Os administradores têm controle refinado sobre quem pode fazer 

### Desvantegens
- Se o servidor der problema, ninguém poderá colaborar até que o servidor se estabilize
- Sempre que você tenhatoda a história do projeto em um único lugar, há o risco de se perder tudo.
- Se o disco rígido do banco de dados central for corrompido, absolutamente tudo é perdido
- Sistemas VCS locais sofrem com o mesmo problema

## Sistemas Distribuídos
* Exemplo: Git, Mercurial, Bazaar ou Darcs
- Duplicar (clonar) localmente o repositório completo
- Se qualquer servidor morrer, e esses sitemas estiverem colaborando por meio dele, qualquer um dos repositórios do cliente poderá ser copiado de volta para o servidor
- Cada clone é de fato um backup completo de todos os dados
- Clientes usam o estado mais recente dos arquivos

## O que é o GIT
- Sistema de controle de versão distribuido 
- Open Source
- Pontos na história: commit (viagem no tempo)
- - Histórico de alterações o código
- - Voltar para qualquer ponto na história
- Controlar o fluxo de novas funcionalidades
- - Ramificalções: branch (universos paralelos)
- - Vários devs no mesmo projeto
- - Análise e resolução de conflitos

## Processo de adesao GIT 
* Working Directory
- Basta salvar um novo arquivo para que ele seja listado nessa etapa do workflow do Git
- A partir dessa área, os arquivos passam a ter suas modificações rastreadas.
- Isso significa que as suas alterações poderão ser acessadas a qualquer momento para melhor controle de fluxo
- Todos os arquivos do diretório
- Marking trees -> árvoes de marcação

* Stage Area 
- Preparação de nossos arquivos a serem enviados
- Index
- Stage tree

* Repository (local)
- Banco de dados dos nossos arquivos
- Onde ficarão os pontos da história
- Ou o histórico 

 add <file name> -> adiciona um arquivo específico
 -> adiciona todas os arquivos com modificações
- - O recomedado é fazer commits pequenos para que seja possível realizar uma boa explicação do que foi feito.

* Como acessar as modificações realizadas durante todo o trabalho
- Comando git diff
- Este comando atuará apenas nos arquivos rastreados pelo git -> Stage Area;
Isto é, ao realizar uma adição de mudanças, o git diff poderá informar exatamente o que está sendo alterando antes de enviar a versão para o repositório.

* Git diff staged
- O comando git diff --staged permite acessar as alterações feitas nos arquivos que estão no Stage Area
- Desta forma, é possível ter um feedback do que foi realizado antes de finalizar o commit.

* Git rm 
> Comando que retira um arquivo do diretório e envia direto para o Stage Area, pronto para um commit.
- Diferente do git add, esse comando não passa por um processo de validação.

* Git restore
- Comando que permite que restauremos arquivos modificados de forma erronea 

* Git checkout 
- Comando que auxilia o acesso à um determinado commit feito anteriormente
- a sintaxe correta é -> git checkout [parte do commit] -- [nome do arquivo];
em resumo, estamos instruindo uma checagem no commit levantado e trazendo o resultado para o presente através do '--'
- Ao buscar um arquivo de um commit antigo, ele será realocado direto no Stage Area, pronto ser comitado

* Git clean
- Comando com a função de remover definitivamente todos os arquivos que não estão sendo rastreados.
- recomendado usar o git clean com -n, esse comando indica o que será feito antes da ação ser realizada.
- enfim, após as devidas confirmações, realiza-se o comando com -f, comando que força a realização da instrução.
