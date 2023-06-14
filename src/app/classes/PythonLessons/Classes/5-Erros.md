---
title: 'Erros e Exceções'
author: 'Mirai'
chapter: '5'
shortSum: 'Introdução a erros e exceções.'
---

# Erros e Exceções

Erros e exceções são muito importantes no desenvolvimento de uma aplicação, pois eles dizem ao usuário se algo não saiu como esperado, ou para o desenvolvedor se algo está errado, nessa seção aprenderemos sobre *Stack Tracing ("Análise da Stack")*, conheceremos os erros nativos da linguagem, aprenderemos a criar nosso próprios erros e veremos sobre *depuração (debugging)*.

Mas antes devo explicar qual a diferença entre *Erro* e *Exceção*.

***O que seria um Erro?***

> Um erro é todo e quaisquer problema que impede a execução do programa.

Geralmente ocorrem em tempo de compilação, em Python o único erro possível é o de se *Sintaxe*.

Você geralmente não lida com erros e eles são irreversíveis, então geralmente quando eles ocorrem a aplicação é terminada.

***O que seria uma Exceção?***

> Uma exceção é um tipo de erro que ocorre em tempo de execução

Normalmente são erros do próprio programador durante o desenvolvimento, eles não finalizam o programa, mas podem trazer comportamento inexperado para a aplicação.

Geralmente são chamados de *Erros lógicos*.

## Stack Tracing ("Análise da Stack")

Stack Tracing consiste em analisar a saída do terminal em busca da origem do erro, essa saida também pode ser chamada de *"Stack Backtrace"* ou *"Stack Traceback"*.

considere o seguinte código:

***(Este código resultará em um erro)***


```python
def a():
    i = 0
    j = b(i)
    return j

def b(z):
    k = 5
    if z == 0:
        c()
    return k + z

def c():
    error()

a()
```

executando este código temos a seguinte saida:

```
Traceback (most recent call last):
  File "tb.py", line 15, in <module>
    a()
  File "tb.py", line 3, in a
    j = b(i)
  File "tb.py", line 9, in b
    c()
  File "tb.py", line 13, in c
    error()
NameError: name 'error' is not defined
```

vamos "desmembrar" essa saida para podermos fazer a análise.

temos 3 elementos principais:

- O indicador de traceback
- A arvore de chamadas (CallStack)
- O erro que iniciou todo o processo de traceback e seu tipo.

O indicador de traceback diz que as proximas linhas fazem referencia a um traceback, ele é facilmente indentificado por normalmente constar palavras e sentenças como "Stack Trace", "Traceback", "Panicked", "Panicking", etc.

no nosso exemplo ele seria a primeira linha: `Traceback (most recent call last)`.

esse *"most recent call last"* diz que a ultima chamada da CallStack é a mais recente.

---

A arvore de chamadas contém a ordem que os elementos foram executados até chegar ao erro, observemos nosso exemplo:

```
File "tb.py", line 15, in <module>
  a()
File "tb.py", line 3, in a
  j = b(i)
File "tb.py", line 9, in b
  c()
File "tb.py", line 13, in c
  error()
```

O erro foi acionado na função `c` presente na linha 13, que por sua vez foi chamada pela função `b` na linha 9, que então foi chamada pela função `a` na linha 3, que por fim foi executada na linha 15 diretamente no arquivo.

perceba que nós temos um passo-a-passo de chamadas até indentificarmos a origem do erro. Isso se torna excepcionalmente útil para descobrirmos a origem de um erro.

---

E por fim o erro que iniciou todo esse processo se encontra ao final da traceback: `NameError: name 'error' is not defined`

perceba que ele além de conter o erro, contém também seu tipo, que no nosso caso é um `NameError`, isso é bastante importante e útil para sabermos como consertar, pois sabendo o tipo de erro/exceção poderemos pensar na melhor solução para o problema, além de podermos lidar com ele usando um bloco `try-except`, que veremos mais a frente.

## Erros e exceções nativas

Esses erros e exceções já estão presentes e definidos na linguagem, são erros comuns e genéricos, normalmente associados a questões da linguagem mesmo. Antes de prover uma lista com os mais comuns/úteis, devo explicar a heirarquia de erros.

Todas as exceções em Python são classes que herdam caracteristicas de 5 classes base, sendo essas as classes:

- `BaseException`
- `Exception`
- `ArithmeticError`
- `BufferError`
- `LookupError`

### BaseExeption

Essa classe é a base de todas as outras exceções e erros em Python e ***NÃO*** deve ser usada como base para exceções definidas pelo usuário, pois exceções que são baseadas nesta normalmente são associadas com terminar o programa, ou seja, se tivermos erros do usuário baseados nela e nós lidarmos com esses erros, podemos acidentalmente impedir que o programa possa ser finalizado por exemplo.

### Exception

Essa é a classe base para todas as exceções que não terminam com a execução do programa e todos os erros definidos pelo usuário também devem herdar desta classe.

### ArithmeticError

Essa é a classe base para todas as exceções que lidam com erros artiméticos.

### BufferError

Essa exceção é usada quando temos algum problema envolvendo operações com buffers

### LookupError

Base para todos os erros que envolvem mapeamento inválido de chaves ou indexes.

## Hierarquia de Exceções

- BaseException
  - SystemExit
  - KeyboardInterrupt
  - GeneratorExit
  - Exception
    - StopIteration
    - StopAsyncIteration
    - ArithmeticError
      - FloatingPointError
      - OverflowError
      - ZeroDivisionError
    - AssertionError
    - AttributeError
    - BufferError
    - EOFError
    - ImportError
      - ModuleNotFoundError
    - LookupError
      - IndexError
      - KeyError
    - MemoryError
    - NameError
      - UnboundLocalError
    - OSError
      - BlockingIOError
      - ChildProcessError
      - ConnectionError
        - BrokenPipeError
        - ConnectionAbortedError
        - ConnectionRefusedError
        - ConnectionResetError
      - FileExistsError
      - FileNotFoundError
      - InterruptedError
      - IsADirectoryError
      - NotADirectoryError
      - PermissionError
      - ProcessLookupError
      - TimeoutError
    - ReferenceError
    - RuntimeError
      - NotImplementedError
      - RecursionError
    - SyntaxError
      - IndentationError
        - TabError
    - SystemError
    - TypeError
    - ValueError
      - UnicodeError
        - UnicodeDecodeError
        - UnicodeEncodeError
        - UnicodeTranslateError
    - Warning
      - DeprecationWarning
      - PendingDeprecationWarning
      - RuntimeWarning
      - SyntaxWarning
      - UserWarning
      - FutureWarning
      - ImportWarning
      - UnicodeWarning
      - BytesWarning
      - EncodingWarning
      - ResourceWarning

Irei explicar cada erro, se você não entender de cara, tudo bem, existem erros sobre questões mais avançadas como corrotinas, entre outras, isso servirá mais como um guia consultas futuras.

## SystemExit

Esta exceção é levantada pela função `sys.exit()`. Ele herda de `BaseException` em vez de `Exception` para que não seja acidentalmente capturado pelo código que captura `Exception`. Isso permite que a exceção se propague corretamente e faça com que o interpretador saia. Quando não é tratado, o interpretador Python sai e nenhum traceback é impresso.

O construtor aceita o mesmo argumento opcional passado para `sys.exit()`. Se o valor for um inteiro, ele especifica o status de saída do sistema; se for `None`, o status de saída é 0; se tiver outro tipo (como uma string), o valor do objeto é exibido e o status de saída é 1.

## KeyboardInterrupt

Levantada quando um usuário aperta a tecla de interrupção (normalmente Control-C ou Delete). Durante a execução, uma checagem de interrupção é feita regularmente. A exceção herda de `BaseException` para que não seja capturada acidentalmente por códigos que tratam `Exception` e assim evita que o interpretador saia.

## GeneratorExit

Levantado quando um gerador ou uma corrotina está fechado(a). Herda diretamente de `BaseException` em vez de `Exception`, já que tecnicamente não é um erro.

### StopIteration

Levantada pela função embutida `next()` e o método `__next__()` de um iterador para sinalizar que não há mais itens produzidos pelo iterador.

O objeto exceção tem um único atributo `value`, que é fornecido como um argumento ao construir a exceção, e o padrão é `None`.

Quando uma função geradora ou corrotina retorna, uma nova instância `StopIteration` é levantada, e o valor retornado pela função é usado como o parâmetro `value` para o construtor da exceção.

Se um código gerador direta ou indiretamente levantar `StopIteration`, ele é convertido em uma `RuntimeError` (mantendo o `StopIteration` como a nova causa da exceção).

### StopAsyncIteration

Deve ser levantada pelo método `__anext__()` de um objeto iterador assíncrono para parar a iteração.

#### FloatingPointError

Não usado atualmente.

#### OverflowError

Levantada quando o resultado de uma operação aritmética é muito grande para ser representada. Para inteiros normalmente se é levantado `MemoryError`.

#### ZeroDivisionError

Levantada quando o segundo argumento de uma divisão ou operação de módulo é zero. O valor associado é uma string que indica o tipo dos operandos e a operação.

### AssertionError

Levantado quando uma instrução `assert` falha.

### AttributeError

Levantado quando uma referência de atributo ou atribuição falha. (Quando um objeto não oferece suporte a referências ou atribuições de atributos, TypeError é levantado.)

### BufferError

Levantado quando uma operação relacionada a buffer não puder ser realizada.

### EOFError

Levantado quando a função `input()` atinge uma condição de fim de arquivo (EOF) sem ler nenhum dado.

### ImportError

Levantada quando a instrução `import` tem problemas ao tentar carregar um módulo. Também é gerado quando o `“from list”` em `from ... import` tem um nome que não pode ser encontrado.

#### ModuleNotFoundError

Uma subclasse de `ImportError` que é levantada por `import` quando um módulo não pôde ser localizado. Também é levantada quando `None` é encontrado em `sys.modules`.

#### IndexError

Levantada quando um índice de alguma sequência está fora do intervalo. (Índices de fatia são truncados silenciosamente para cair num intervalo permitido; se um índice não for um inteiro, TypeError é levantada.)

#### KeyError

Levantada quando uma chave de mapeamento (dicionário) não é encontrada no conjunto de chaves existentes.

### MemoryError

Levantada quando uma operação fica sem memória mas a situação ainda pode ser recuperada (excluindo alguns objetos). O valor associado é uma string que indica o tipo de operação (interna) que ficou sem memória.

### NameError

Levantada quando um nome local ou global não é encontrado. Isso se aplica apenas a nomes não qualificados. O valor associado é uma mensagem de erro que inclui o nome que não pode ser encontrado.

#### UnboundLocalError

Levantada quando uma referência é feita a uma variável local em uma função ou método, mas nenhum valor foi vinculado a essa variável. Esta é uma subclasse de `NameError`.



### OSError

Esta exceção é levantada quando uma função do sistema retorna um erro relacionado ao sistema, incluindo falhas do tipo E/S como "arquivo não encontrado" ou "disco cheio" (não para tipos de argumentos não permitidos ou outro erro acessório).

#### BlockingIOError

Levantada quando uma operação irá bloquear um objeto (ex: soquete) que está configurado para modo de "não-bloqueio"

#### ChildProcessError

Levantada quando uma operação em um processo filho retorna um erro.

#### ConnectionError

Uma classe base para problemas relacionados à conexão

##### BrokenPipeError

Levantado quando tentamos escrever em uma conexão onde a outra ponta está fechada, quando o soquete está fechado somente para escrita.

##### ConnectionAbortedError

Levantado quando uma tentativa de conexão é abortada pelo par.

##### ConnectionRefusedError

Levantado quando uma tentativa de conexão é recusada pelo par.

##### ConnectionResetError

Levantado quando uma tentativa de conexão é reiniciada pelo par.

#### FileExistsError

Levantado quando tenta-se criar um diretorio ou arquivo existente.

#### FileNotFoundError

Levantado quando um diretorio ou arquivo requisitado não existe.

#### InterruptedError

Levantada quando uma chamada do sistema é interrompida por um sinal de entrada.

#### IsADirectoryError

Levantada quando uma operação de arquivo é executada em um diretório.

#### NotADirectoryError

Levantada quando uma operação de diretório é executada em algo que não é um diretório.

#### PermissionError

Levantada quando uma operação não tem as permissões adequadas.

#### ProcessLookupError

Levantada quando um determinado processo não existe.

#### TimeoutError

Levantada quando uma função do sistema atinge o tempo limite.

### ReferenceError

Esta exceção é levantada quando um intermediário de referência fraca, criado pela função `weakref.proxy()`, é usado para acessar um atributo do referente após ter sido coletado como lixo.

### RuntimeError

Levantada quando um erro é detectado e não se encaixa em nenhuma das outras categorias. O valor associado é uma string indicando o que precisamente deu errado.

#### NotImplementedError

Em classes base, definidas pelo usuário, os métodos abstratos devem gerar essa exceção quando requerem que classes derivadas substituam o método, ou enquanto a classe está sendo desenvolvida, para indicar que a implementação real ainda precisa ser adicionada.

#### RecursionError

É levantada quando o interpretador detecta que a profundidade máxima de recursão foi excedida.

### SyntaxError

Levantada quando o analisador encontra um erro de sintaxe. Isso pode ocorrer em uma instrução import, em uma chamada às funções embutidas `compile()`, `exec()` ou `eval()`, ou ao ler o script inicial ou entrada padrão (também interativamente)

#### IndentationError

Classe base para erros de sintaxe relacionados a indentação incorreta.

##### TabError

Levantada quando o indentação contém um uso inconsistente de tabulações e espaços.

### SystemError

Levantada quando o interpretador encontra um erro interno, mas a situação não parece tão grave para fazer com que perca todas as esperanças. O valor associado é uma string que indica o que deu errado (em termos de baixo nível).

### TypeError

Levantada quando uma operação ou função é aplicada a um objeto de tipo inadequado. O valor associado é uma `string` que fornece detalhes sobre a incompatibilidade de tipo.

Essa exceção pode ser levantada pelo código do usuário para indicar que uma tentativa de operação em um objeto não é suportada e não deveria ser. Se um objeto deve ter suporte a uma dada operação, mas ainda não forneceu uma implementação, `NotImplementedError` é a exceção apropriada a ser levantada.

Passar argumentos do tipo errado (por exemplo, passar uma `list` quando um `int` é esperado) deve resultar em uma `TypeError`, mas passar argumentos com o valor errado (por exemplo, um número fora limites esperados) deve resultar em um `ValueError`.

### ValueError

Levantada quando uma operação ou função recebe um argumento que tem o tipo certo, mas um valor inadequado, e a situação não é descrita por uma exceção mais precisa, como `IndexError`.

#### UnicodeError

Levantada quando ocorre um erro de codificação ou decodificação relacionado ao Unicode.

##### UnicodeDecodeError

Levantada quando ocorre um erro relacionado ao Unicode durante a codificação.

##### UnicodeEncodeError

Levantada quando ocorre um erro relacionado ao Unicode durante a decodificação.

##### UnicodeTranslateError

Levantada quando ocorre um erro relacionado ao Unicode durante a tradução.

### Warning

Classe base para categorias de aviso.

#### DeprecationWarning

Classe base para avisos sobre recursos descontinuados quando esses avisos se destinam a outros desenvolvedores Python.

#### PendingDeprecationWarning

Classe base para avisos sobre recursos que foram descontinuados e devem ser descontinuados no futuro, mas não foram descontinuados ainda.

#### RuntimeWarning

Classe base para avisos sobre comportamento duvidoso de tempo de execução.

#### SyntaxWarning

Classe base para avisos sobre sintaxe duvidosa.

#### UserWarning

Classe base para avisos gerados pelo código do usuário.

#### FutureWarning

Classe base para avisos sobre recursos descontinuados quando esses avisos se destinam a usuários finais de aplicações escritas em Python.

#### ImportWarning

Classe base para avisos sobre prováveis erros na importação de módulos.

#### UnicodeWarning

Classe base para avisos relacionados a Unicode.

#### BytesWarning

Classe base para avisos relacionados a `bytes` e `bytearray`.

#### EncodingWarning

Classe base para avisos relacionados a codificações.

### ResourceWarning

Classe base para avisos relacionados a uso de recursos.

## Elevando erros

Elevar um erro consiste em voluntariamente executar um erro, para tal nós usamos a keyword `raise`, para os erros nativos podemos passar uma string que servirá de mensagem, a sintaxe seria assim:

```python
raise TipoDeErro("mensagem")
```

veja o exemplo:


```python
raise TypeError("Tipo errado de dado")
```

```output
---------------------------------------------------------------------------
``````output
TypeError                                 Traceback (most recent call last)
``````output
/media/Arquivos/Programming/Lessons/PythonLessons/Classes/5-Erros.ipynb Cell 11 in <cell line: 1>()
----> <a href='vscode-notebook-cell:/media/Arquivos/Programming/Lessons/PythonLessons/Classes/5-Erros.ipynb#X13sZmlsZQ%3D%3D?line=0'>1</a> raise TypeError("Tipo errado de dado")
``````output
TypeError: Tipo errado de dado
```

### Bloco `try-except`
