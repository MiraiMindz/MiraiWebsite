---
title: 'Fundamentos Python I'
author: 'Mirai'
chapter: '2'
shortSum: 'Introdução aos fundamentos básicos da linguagem.'
---

# Fundamentos Python I

## Variaveis, Comentários, print() e input()

### Variaveis

A declaração de variaveis em Python é bem simples, basta associar o nome da variavel ao valor desejado, seguindo este modelo:

`{NOME_DA_VARIAVEL} = {VALOR}`

o nome de uma variavel não deve conter espaços, virgulas ou pontos

veja alguns exemplos no bloco de codigo a seguir:



```python
nome = "Mirai"
idade = 17
linguagem = "Python"
```

Também se é possivel associar varios valores a varias variaveis em uma mesma linha, assim como tambem se é possivel associar variaveis a outras variaveis


```python
nome, idade = "Mirai", 17
nome1 = nome
```

#### Constantes

Em programação, constantes são variaveis que não devem ser alteradas durante o programa, vide o nome, elas são CONSTANTES

uma constante em Python é bem parecida com uma variavel em sua declaração, a unica diferença é que uma constante será sempre toda em MAIUSCULO


```python
PI = 3.1415
NUMERO_SEIS = 6
```

### Comentários

Os comentários são uma funcionalidade das linguagens de programação, eles são linhas que serão ignoradas na execução do código

em Python, os comentários começam com `#`, após isso, tudo será ignorado


```python
# Podemos escrever qualquer coisa que ela não será executada
nome = "Mirai"  # Os comentários não precisam estar no inicio da linha, mas perceba, mesmo que coloquemos um codigo aqui, ele será ignorado
```

Uma das ultilidades dos comentários é, além de comentar e adicionar informações ao codigo, a de "salvar" um codigo, frequentemente você irá se deparar com a seguinte situação:

*"Preciso que este pedaço de codigo não execute, mas não posso apaga-lo pois certamente irei perde-lo, o que devo fazer?"*

A resposta é simples, comente o codigo, isso mesmo, adicione `#` no inicio das linhas, assim o codigo não irá ser executado e você ainda o terá


```python
# nome = "Mirai"
```

#### SheBang (Sistemas UNIX)

Esta parte não tem muito a ver com a linguagem, mas você verá este comentário especial na primeira linha de meus scripts então irei explica-lo

os SheBangs são comentários especiais que começam com `#!` adicionados na primeira linha de um script em sistemas baseados em UNIX (Linux e MacOS)

eles apontam para o executavel a ser usado pelo script, um exemplo seria:

`#!/usr/bin/env python3.10` neste SheBang nós usamos o programa `env` para localizar um executavel para o `python3.10`, dessa forma asseguramos compatibilidade dentre as plataformas UNIX

### print()

As funções em são reconhecidas pela adição de `()` ao seu final, essas funções, como o nome sugere, performam funções, funcionalidades, ações

a função `print()` é usada quando queremos mostrar algo ao usuário, um exemplo seria:


```python
print("Olá Mundo")  # Aqui Mostramos a mensagem "Olá Mundo"

mensagem = "Tambem funciona com variaveis"

print(
    mensagem
)  # após temos associado a um valor a variavel `mensagem` nós a exibimos ao usuário
```
```output
Olá Mundo
Tambem funciona com variaveis
```
### input()

A função `input()`, de certa forma é "oposta" a função `print()`, o `input()` serve para pegar uma informação do usuário, enquanto a `print()` serve para exibir


```python
input()  # ao executar este bloco, o programa irá esperar que o usuário aperte a tecla ENTER para enviar a informação digitada
input(
    "Insira seu nome: "
)  # Ao adicionarmos um texto dentro dos parenteses, este texto será exibido antes do cursor do usuário
```



```output
'Nome Legal'
```


caso nós queiramos guardar as informações providas pelo `input()`, nós devemos associa-lo a uma variavel


```python
idade = input("Insira sua idade: ")
print("Sua idade é: ", idade)
```
```output
Sua idade é:  99
```
#### Pequena curiosidade

nós podemos associar funções a variaveis, e usar as variaveis ao invés da função (mas isso não é recomendado por ser extremamente desnecessario)

exemplo:


```python
imprimir = print

imprimir("Olá mundo")
```
```output
Olá mundo
```
## Tipos de Dado

### O que é um Dado?

Dado é tudo aquilo que guarda informação, ou seja, um numero, um texto, Verdadeiro ou Falso, uma letra, qualquer coisa que seja informação

Eles são divididos entre Primitivos (ou Simples, ou Básicos) e Compostos (ou Agrupados, ou Complexos)

### Dados Primitivos

Dados Primitivos guardam apenas uma informação, ou seja, um numero, um texto, um Verdadeiro

Eles são divididos em 3 tipos:

- Strings (str)
- Integers e Floats (int & float)
- Booleans (bool)

#### String (Textos)

##### Declaração

As Strings representam os textos, sua declaração é feita através de aspas duplas ("") ou unicas ('')


```python
nome = "Mirai"
linguagem = "Python"
print(nome, linguagem)
```
```output
Mirai Python
```
Nós não podemos misturar as aspas, isto é, começar uma declaração com aspas duplas ("") e terminar com aspas unicas ('')

nós podemos dentro da string usar a aspa que não foi usada durante a declaração, isto se torna util em texto em Ingles


```python
apresentacao = "Hi, my name is Mirai, I'm a Developer"  # Note o uso das aspas unicas dentro da string
citacao = 'Pois então ela disse, "Não se dirija mais a mim"...'  # Note o uso das aspas duplas dentro da string

# repare que envolta do texto usamos o mesmo tipo de aspas
print(apresentacao, citacao)
```
```output
Hi, my name is Mirai, I'm a Developer Pois então ela disse, "Não se dirija mais a mim"...
```
porém, nos podemos sim usar o mesmo tipo de aspas dentro e fora da string, basta ultilizarmos o caractere de escapagem (\\)


```python
apresentacao = "Hi, my name is Mirai, I'm a Developer"
citacao = 'Pois então ela disse, "Não se dirija mais a mim"...'
print(apresentacao, citacao)
```
```output
Hi, my name is Mirai, I'm a Developer Pois então ela disse, "Não se dirija mais a mim"...
```
##### Multi-Line

Tambem temos as "Multi-line Strings", elas são declaradas através de 3 aspas, sejam elas unicas ou duplas, elas são textos que se espalham por multiplas linhas, preservando espaços


```python
multi_line1 = """Olá, eu sou um texto de multiplas linhasl, eu fui declarado usando aspas duplas \"\"

  eu preservo os espaços

    eba
"""

multi_line2 = """Olá, eu sou um texto de multiplas linhas, eu fui declarado usando aspas unicas \'\'

  eu preservo os espaços

    eba
"""

print(multi_line1)
print(multi_line2)
```
```output
Olá, eu sou um texto de multiplas linhasl, eu fui declarado usando aspas duplas ""

  eu preservo os espaços

    eba

Olá, eu sou um texto de multiplas linhas, eu fui declarado usando aspas unicas ''

  eu preservo os espaços

    eba
```
##### fStrings (Formatted Strings)

as fStrings, são strings formatadas, isto é, strings que contém codigo, sua declaração é feita adicionando um `f` a frente das aspas, e envolvendo os codigos em chaves `{}`


```python
nome = "Mirai"
linguagem = "Python"
idade = 17
apresentacao = (
    f"Olá, meu nome é {nome}, eu tenho {idade} anos e sei programar em {linguagem}"
)
print(apresentacao)
```
```output
Olá, meu nome é Mirai, eu tenho 17 anos e sei programar em Python
```
eu disse codigo, pois podemos adicionar coisas além de variaveis, como funções, operações aritmeticas, metodos, etc...

Eis aqui um exemplo:


```python
nome = "Mirai"
linguagem = "Python"
idade = 17
apresentacao = f"Olá, meu nome é {nome.upper()}, eu nasci em {2022 - idade} e sei programar em {linguagem}"
print(apresentacao)
```
```output
Olá, meu nome é MIRAI, eu nasci em 2005 e sei programar em Python
```
As fStrings, podem ser misturadas com as Multi-Line strings, basta adicionar um `f` a frente

elas tambem podem ser feitas através do string.format(), este metodo pega os argumentos providos e substutui nos espaços reservados em chaves `{}`


```python
apresentacao = "Olá, meu nome é {}, eu nasci em {} e sei programar em {}"
nome = "Mirai"
linguagem = "Python"
idade = 17
print(apresentacao.format(nome, 2022 - idade, linguagem))
```
```output
Olá, meu nome é Mirai, eu nasci em 2005 e sei programar em Python
```
##### Concatenação

Concatenação é o ato de juntar duas Strings, veja o mesmo exemplo anterior porém concatenado


```python
nome = "Mirai"
linguagem = "Python"
idade = 17
apresentacao = (
    "Olá, meu nome é "
    + nome
    + ", eu tenho "
    + str(idade)
    + " anos e sei programar em "
    + linguagem
)
print(apresentacao)
```
```output
Olá, meu nome é Mirai, eu tenho 17 anos e sei programar em Python
```
Note que nós devemos fazer a devida conversão para o tipo string (str), e devemos manejar os espaços manualmente, o que pode ser deveras entediante

#### Numeros (Ints & Floats) e Operações Aritméticas

##### Ints

INTs, Integers ou Integros, são quaisquer numeros inteiros, eles são passiveis de operações aritmeticas


```python
idade = 17
ano_de_nascimento = 2005
ano_atual = 2022
print(type(idade))
```
```output
<class 'int'>
```
##### Floats

FLOATs, Floating Point Numbers ou Numeros de Pontos Flutuantes, são quaisquer numeros com casas decimais, ou um ponto (`.`) em sua declaração


```python
PI = 3.1415
print(type(PI))
```
```output
<class 'float'>
```
##### Operações Aritméticas

Em Python se é possivel exercer operações aritméticas, eis aqui uma lista das possiveis operações

- \+ -> soma
- \- -> subtração
- ** -> potencia
- \* -> mutiplicação
- / -> divisão
- // -> "divisão verdadeira"
- % -> modulo

Python segue sua própria ordem de precedencia baseada nos metodos BODMAS e PEMDAS, eis aqui sua ordem:

- 1 - Parenteses () -> em sequencia, ou seja, externos primeiro
- 2 - Exponenciação, -> **
- 4 - Mutilicativos, -> *, @
- 5 - Divisivos, -> /, // e %
- 6 - Adição -> +
- 7 - Subtração -> -

As operações aritméticas são as mesmas aprendidas na escola, porém irei ressaltar 3, divisão, "divisão verdadeira" e modulo

##### Divisão

Em Python uma Divisão sempre resultará em um float, mesmo que o resultado seja inteiro:


```python
print(4 / 2, type(4 / 2))
print(1 / 3, type(1 / 3))
```
```output
2.0 <class 'float'>
0.3333333333333333 <class 'float'>
```
Isso pode te levar a problemas caso necessite de um numero de tipo `int`, para isso se existe a "Divisão Verdadeira"

##### "Divisão Verdadeira"

A "divisão verdadeira" também é conhecida como "divisão arredondada" ou "divisão exclusiva", é uma operação de divisão que converte o resultado para Int

o que ela essencialmente faz é cortar os numeros após o ponto, "arredondando" assim o numero


```python
print(4 // 2, type(4 // 2))
print(1 // 3, type(1 // 3))
```
```output
2 <class 'int'>
0 <class 'int'>
```
#### Problemas com Numeros de Ponto Flutuante

##### Bit Overflow

Qual o resultado da soma `0.1 + 0.2`?

Caso você performe a soma em uma calculadora o resultado será `0.3`, mas observe esta mesma operação em Python


```python
print(0.1 + 0.2)
```
```output
0.30000000000000004
```
observe que o resultado é `0.30000000000000004` ao invés de apenas `0.3`, isto ocorre devido a forma como os numeros de ponto flutuante são convertidos para binário, e devido ao espaço alocado na memoria, nós temos um overflow de bits

esse problema ocorre pois a parte fracionaria de um Float tem um tamanho pré-definido

quando chegamos ao fim desse tamanho e a operação não for solucionada, se existirá uma sobrecarga de bits, que por ventura culminará no numero 4 ao final da cadeia

##### Performance

os numeros de pontos flutuantes são "menos eficientes" que os numeros integros devido a forma que eles são guardados na memória

a parte inteira se localiza em um endereço, e a parte fracionária (decimal) se localiza em outra, ou seja, para performar operações o sistema deve navegar a varios endereços o que culmina num aumento do tempo de resposta, porém, vale ressaltar que este tempo só se torna perceptivel caso você tenha operações na casa das milhares, (3 milhoes de calculos, 19 milhoes de calculos, etc...) pois essa diferença de performance é na ordem dos nanosegundos

#### Boolean

O Boolano é o tipo de dado Binário, só pode ter 2 valores, Verdadeiro (`True`) ou Falso (`False`)

ele é bastante usado para controlar o Flow do programa através de `if`s e `while`s

os valores boleanos são dividos em 2 categorias, Verdadeiros e Falsos

- Verdadeiros:
    - `True`
    - qualquer string que não esteja vazia
    - qualquer numero diferente de 0
    - qualquer outro tipo de dado que não esteja vazio
- Falsos:
    - `False`
    - Strings vazias ("" ou '')
    - 0
    - qualquer outro tipo de dado vazio

##### Operadores Lógicos

esses operadores são usados em conjunto dos booleanos, são 3, `and`, `or`, `not`

o `and`, retorna `True` caso todos os valores sejam verdadeiros


```python
print(True and True)
print(True and False)
print(False and True)
print(False and False)
```
```output
True
False
False
False
```
o `or` retorna `True` caso um dos valores seja Verdadeiro, ou seja, só retorna Falso caso ambos os valores sejam falsos, informalmente dizendo, podemos presumir que ele exerce o oposto do `and`


```python
print(True or True)
print(True or False)
print(False or True)
print(False or False)
```
```output
True
True
True
False
```
o `not` é o mais simples de todos, ele inverte o valor


```python
print(not False)
print(not True)
```
```output
True
False
```
##### Curto Circuito

o curto circuito em operadores lógicos é uma pratica onde você ordena os valores para que a decisão seja tomada mais rapida

por exemplo, com o `and`, se você tem algum valor que provavelmente retornará `False`, o colocar na frente o dará performance, pois o Python irá ignorar o resto da expressão pois o `and` só retorna `True` caso TODOS os valores sejam verdadeiros

com o `or`, se é exatamente o oposto, colocamos um valor que provavelmente retornará `True` na frente, pois assim a expressão já é validada, retornando `True`, e o Python por sua vez irá ignorar o resto da expressão, pois o `or` retorna `True` caso um dos valores seja verdadeiro

#### Curiosidades

pequenas curiosidades sobre alguns tipos básicos

##### Floats

nos floats nós podemos converter as string `inf` e `NaN` (Not a Number), para números, sendo `inf` a representação de um numero infinito e `NaN` a representação de algo que não é um numero.



```python
snan = "NaN"
fnan = float(snan)
print(fnan, type(fnan))

sinf = "inf"
finf = float(sinf)
print(finf, type(finf))
```
```output
nan <class 'float'>
inf <class 'float'>
```
##### Strings

As string são muito mais que apenas simples textos, elas contem uma serie de operadores especiais, são divididos em 5 grupos:

- Prefixos
- Sequencias de escapagem
- Templates
- Conversores
- Especificações da Mini-linguagem de formatação
- Depuração e padrão printf

##### Prefixos

os prefixos são os seguintes:

- `r` ou `R` -> raw strings (rString)
- `u` ou `U` -> unicode strings (uString)
- `f` ou `F` -> format strings (fString)
- `fr` ou `Fr` ou `fR` ou `FR` ou `rf` ou `rF` ou `Rf` ou `RF` -> raw-format strings  (frString ou rfString)

raw strings: não escapam nenhum caractere


```python
raw_string = r"Uma String\nLiteral com os\tcaracteres de escapagem\r"
print(raw_string)
```
```output
Uma String\nLiteral com os\tcaracteres de escapagem\r
```
unicode strings: aceitam escapagens de caracteres unicode


```python
unicode_string = "Runic F: \u5792"
print(unicode_string)
```
```output
Runic F: 垒
```
format strings: aceitam formatação de código


```python
format_string = f"2 + 2 = {2 + 2}"
print(format_string)
```
```output
2 + 2 = 4
```
raw-format strings: a união entre format strings e raw strings


```python
raw_format_string = rf"2 * 2 =\t{2 * 2}"
print(raw_format_string)
```
```output
2 * 2 =\t4
```
##### Sequencias de escapagem

caso não seja uma rString, esses são os caracteres de escape permitidos:

<div class="table-container">
| Sequencia de Escapagem 	|              Significado             	|
|:----------------------:	|:------------------------------------:	|
|           \\           	|             Backslash (\)            	|
|           \'           	|           Aspas simples (')          	|
|           \"           	|           Aspas duplas (")           	|
|           \a           	|           Sino ASCII (BEL)           	|
|           \b           	|     Backspace ASCII (BS) (apagar)    	|
|           \f           	|          Formfeed ASCII (FF)         	|
|           \n           	|   Linefeed ASCII (LF) (nova linha)   	|
|           \r           	|  Carriage Return ASCII (CR) (enter)  	|
|           \t           	|       Tab Horizontal ASCII (TAB)      |
|           \v           	|        Tab Vertical ASCII (VT)        |
|          \ooo          	|    Caractere com o valor octal OOO   	|
|          \xhh          	| Caractere com o valor hexadecimal HH 	|
|         \uXXXX         	|  Caractere Unicode com o valor XXXX  	|
</div>

> NOTA: o \uXXXX só funciona caso seja uma uString


```python
print("\tTab\nNewline")
uString = "Runic Ior: \u16E1"
print(uString)
```
```output
	Tab
Newline
Runic Ior: ᛡ
```
##### Templates

Template strings são strings que usam `$` para definir locais de substituição, para usa-las você deve importar a classe `Template` do modulo string, você verá mais sobre modulos e classes no futuro.


```python
from string import Template

template_string = Template("Olá meu nome é $nome, e eu estou ${acao}ndo")
print(template_string.substitute(nome="Mirai", acao="Programa"))
```
```output
Olá meu nome é Mirai, e eu estou Programando
```
##### Conversores

os conversores são mais usados em processos de depuração, eles começam com `!`, são 3 conversores:

- `!a` -> Representação ascii
- `!r` -> o equivalente a `repr()`
- `!s` -> o equivalente a `str()`


```python
variavel = "Runic Ior: ᛡ"
conversor_a = f"{variavel!a}"
conversor_r = f"{variavel!r}"
conversor_s = f"{variavel!s}"

print(f"Conversor !a:\t{conversor_a}")
print(f"Conversor !r:\t{conversor_r}")
print(f"Conversor !s:\t{conversor_s}")
```
```output
Conversor !a:	'Runic Ior: \u16e1'
Conversor !r:	'Runic Ior: ᛡ'
Conversor !s:	Runic Ior: ᛡ
```
##### Especificações da Mini-linguagem de formatação

O Python contém uma mini-linguagem de formatação de strings, ela nos permite converter, alinhar, definir a precisão e separar.

a o padrão de formatação geral é o seguinte:

```
especificação   ::=  [[preenchimento]alinhamento][sinal][#][0][largura][agrupamento][.precisão][tipo]
preenchimento   ::=  <any character>
alinhamento     ::=  "<" | ">" | "=" | "^"
sinal           ::=  "+" | "-" | " "
largura         ::=  digit+
agrupamento     ::=  "_" | ","
precisão        ::=  digit+
tipo            ::=  "b" | "c" | "d" | "e" | "E" | "f" | "F" | "g" | "G" | "n" | "o" | "s" | "x" | "X" | "%"
```

eles começam com `:`, eis aqui uma lista:

Opções de Alinhamento:

<div class="table-container">
| Sinal 	|                                                              Significado                                                             	|
|:-----:	|:------------------------------------------------------------------------------------------------------------------------------------:	|
|   &gt;   	|                                  define que o campo deve estar alinhado a esquerda do espaço provido                                 	|
|   &lt;   	|                                  define que o campo deve estar alinhado a direita do espaço provido                                  	|
|   =   	| define que o alinhamento deve estar entre o sinal (se houver) e o digito, essa opção de alinhamento só é valida para tipos numericos 	|
|   ^   	|                                  define que o campo deve estar alinhado ao centro do espaço provido                                  	|
</div>

Opções de Sinalização:

<div class="table-container">
|     Sinal    	|                                                      Significado                                                      	|
|:------------:	|:---------------------------------------------------------------------------------------------------------------------:	|
|       +      	|                    indica que o sinal deve ser usado tanto para numeros positivos quanto negativos                    	|
|       -      	|                          indica que o sinal só deve ser usado para numeros negativos (padrão)                         	|
| ' ' (espaço) 	| indica que espaços no inicio devem ser usados para numeros positivos e o sinal de menos deve ser usado para negativos 	|
</div>

Alternadores e Separadores:

O `#` (alternador) especifica que a forma alternativa deve ser usada na conversão, a forma alternativa é especificada de acordo com o tipo. Ela só é valida para numeros inteiros (ints), decimais (floats) e complexos (complex).

para ints que usam as formatações hexadecimal, binária ou octal os prefixos `Ox` ou `0X`, `0b` e `0o` são usadas.

para floats e numeros complexos, o alternador especifica que a conversão sempre deve conter as casas decimais, em adição ao 'g' e 'G', zeros insignificantes não são removidos.

<div class="table-container">
| Separador 	|                                                          Significado                                                          	|
|:---------:	|:-----------------------------------------------------------------------------------------------------------------------------:	|
|     ,     	|                                                separador para casa dos milhares                                               	|
|     _     	| separador para a casa dos milhares, para as representações 'b', 'o', 'x' e 'X' esse separador será inserido a cada 4 espaços. 	|
</div>

Representações de Strings:

<div class="table-container">
|       Tipo 	    |               Significado              	|
|:-------------:	|:--------------------------------------:	|
|  's' 	            | Converte para String, pode ser omitido 	|
| None (Nenhum) 	|             O mesmo que 's'            	|
</div>

Representações de Ints:

<div class="table-container">
|      Tipo     	|                                                   Significado                                                   	|
|:-------------:	|:---------------------------------------------------------------------------------------------------------------:	|
|      'b'      	|                                          Converte para binario, base 2                                          	|
|      'c'      	|                        Converte um numero inteiro para o caractere unicode correspondente                       	|
|      'd'      	|                                             Numero decimal, base 10                                             	|
|      'o'      	|                                               Numero Octal, base 8                                              	|
|      'x'      	|                                Numero hexadecimal, base 16, usa letras minusculas                               	|
|      'X'      	|                                Numero hexadecimal, base 16, usa letras maiusculas                               	|
|      'n'      	| o mesmo que 'd', exceto que usa a configuração atual de localidade para definir o separador de numeros correto. 	|
| None (Nenhum) 	|                                                 O mesmo que 'd'                                                 	|
</div>

Representações de Floats:

<div class="table-container">
|      Tipo     	|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 Significado                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 	|
|:-------------:	|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:	|
|      'e'      	|                                                                                                                                                                                                                                                                                                                                                                                                                                                          Notação Cientifica para uma dada precisão `p`, formata o numero em notação cientifica com a letra `e`, separando o coeficiente do expoente, o coeficiente tem 1 digito antes e `p` digitos decimais após o `e`, para um total de `p + 1` digitos significativos. Sem nenhuma precisão dada, se é usado uma precisão de 6 digitos para numeros decimais (floats) e usa uma precisão grande o bastante para mostrar todos os digitos do coeficiente para numeros inteiros/decimais. Se não existir nenhuma casa decimal, as casas decimais são removidas a menos que a opção `#` seja usada.                                                                                                                                                                                                                                                                                                                                                                                                                                                         	|
|      'E'      	|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 O mesmo que 'e', porém com o delimitador `E`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                	|
|      'f'      	|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           Notação de pontos fixos. para uma dada precisão `p`, formata o numero como um decimal com exatos `p` digitos após o ponto. Se nenhuma precisão for especificada, usa uma precisão de 6 digitos para as casas decimais (floats), e uma precisão grande o bastante para mostrar todos os numeros inteiros (ints). Se não existir nenhuma casa decimal, as casas decimais são removidas a menos que a opção `#` seja usada                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           	|
|      'F'      	|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        O mesmo que 'f' porem converte `inf` em `INF` e `nan` em `NAN`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       	|
|      'g'      	| Formatação Geral. Para uma dada precisão `p` >= 1, essa fortação arredonda o numero para `p` digitos significantes, e então formata o resultado para  notação cientifica ou notação de pontos fixos dependendo de sua magnitude. Uma precisão de 0 é tratada como uma precisão de 1.  **As regras de precisão são as seguintes**: Suponha um resultado formatado com notação cientifica e precisão `p - 1`, teria um expoente `exp`.  Então se `m` &le; `exp` < `p`, onde `m` é -4 para numeros decimais (float) e -6 para inteiros (int), o numero é formatado usando a notação de pontos flutuantes com uma precisão `p - 1 - exp`. Caso contrário o numero é formatado usando notação cientifica e uma precisão `p - 1`. Em ambos os casos zeros insignificantes são removidos da parte inteira e o ponto decimal também é removido caso não haja nenhum ponto decimal, a menos que a opção `#` é usada.   Se nenhuma precisão for dada, usa uma precisão de 6 digitos significantes para numeros decimais (float). Para inteiros (int), o coeficiente do resultado é formado através dos digitos coeficientes do valor. Notação cientifica é usada para valores menores que `1e-6` em valores absolutos e para valores que a posição do ultimo digito significante é maior que 1, caso contrário a notação de pontos fixos é usada.  Infinito positivo e negativo, zero positivo e negativo, e nans, são formatados como `inf`, `-inf`, `0`, `-0` e `nan` respectivamente, independentemente da precisão. 	|
|      'G'      	|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   O mesmo 'g', porém usa `E` se o numero ficar muito grante, `INF` e `NAN`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  	|
|      'n'      	|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              Numero. O mesmo que 'g' exceto que usa a configuração de localização local para definir os separadores de numero.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              	|
|      '%'      	|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                Porcentagem. Multiplica um numero por 100 e exibe ele com formato fixo 'f' seguido pelo sinal de porcentagem.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                	|
| None (Nenhum) 	|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               Para decimais (floats) é o mesmo que 'g', exceto que quando a notação de pontos fixos é usada para formatar o resultado, sempre inclui ao menos um digito as casas decimais. A precisão usada é tão larga quanto necessária para representar o numero de forma fidedigna.  Para Inteiros (Ints) é mesmo que 'g' ou 'G' dependendo do contexto de maiusculas usado.  O efeito geral é tentar representar a saida de `str()` como se alterado por outros modificadores de formato.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              	|
</div>

```python
int_num = 78
float_num = 3.14151617181920212223242526272829
big_int = 1234567890987656543211
string = "essa é uma string"

print(f"int ({int_num})\tb:\t\t{int_num:b}")
print(f"int ({int_num})\tc:\t\t{int_num:c}")
print(f"int ({int_num})\tX:\t\t{int_num:X}")

print(f"big_int\t\t(,):\t\t{big_int:,}")
print(f"big_int\t\t(_):\t\t{big_int:_}")

print(f"float\t\t.2f:\t\t{float_num:.2f}")
print(f"float\t\t2%:\t\t{float_num:.4%}")
print(f"float\t\tg:\t\t{float_num:.5g}")

print(f"string \t\t(esquerda):\t{string:-<32}")
print(f"string \t\t(centro):\t{string:-^32}")
print(f"string \t\t(direita):\t{string:->32}")
```
```output
int (78)	b:		1001110
int (78)	c:		N
int (78)	X:		4E
big_int		(,):		1,234,567,890,987,656,543,211
big_int		(_):		1_234_567_890_987_656_543_211
float		.2f:		3.14
float		2%:		314.1516%
float		g:		3.1415
string 		(esquerda):	essa é uma string---------------
string 		(centro):	-------essa é uma string--------
string 		(direita):	---------------essa é uma string
```
##### Depuração e padrão printf

em uma fString, se nós colocarmos um `=` a direita da variavel, exibimos o nome da variavel junto ao valor, isso é util para depurações, se nos colocarmos espaços, a saida ficará espaçada também.


```python
verdade_universal = 42

print(f"{verdade_universal=}")
print(f"{verdade_universal = }")
print(f"{verdade_universal= }")
print(f"{verdade_universal =}")
```
```output
verdade_universal=42
verdade_universal = 42
verdade_universal= 42
verdade_universal =42
```
o padrão printf de formatação nos permite fazer fStrings como em C, os tipos devem ser precedidas de `%`, e nós devemos modular por uma tuple contendo as variaveis, você verá mais sobre tuples a frente, aqui vai a lista:

<div class="table-container">
|  Tipos  	|                                                             Significado                                                             	|
|:-------:	|:-----------------------------------------------------------------------------------------------------------------------------------:	|
|    %d   	|                                                       Numero inteiro com sinal                                                      	|
|    %i   	|                                                       Numero inteiro com sinal                                                      	|
|    %o   	|                                                        Numero octal com sinal                                                       	|
|    %u   	|                                                      OBSOLETO, equivalente a %d                                                     	|
|    %x   	|                                                Numero hexadecimal minusculo com sinal                                               	|
|    %X   	|                                                Numero hexadecimal maiusculo com sinal                                               	|
|    %e   	|                                                          expoente minusculo                                                         	|
|    %E   	|                                                          expoente maiusculo                                                         	|
| %f e %F 	|                                                     precisão de ponto flutuante                                                     	|
|    %g   	| precisão de ponto flutuante. Usa notação exponecial minuscula caso o expoente é menor que -4, caso contrario usa o formado decimal. 	|
|    %G   	| precisão de ponto flutuante. Usa notação exponecial maiuscula caso o expoente é menor que -4, caso contrario usa o formado decimal. 	|
|    %c   	|                                                      converte para um caractere                                                     	|
|    %r   	|                                               converte para o equivalente ao `repr()`                                               	|
|    %s   	|                                                converte para o equivalente ao `str()`                                               	|
|    %a   	|                                               converte para o equivalente ao `ascii()`                                              	|
|    %%   	|                                                         uma % (porcentagem)                                                         	|
</div>

modificadores:

<div class="table-container">
|  Modificador 	|                                     Significado                                    	|
|:------------:	|:----------------------------------------------------------------------------------:	|
|       #      	|                             define a forma alternativa                             	|
|       0      	|        a conversão sera alinhada usando zeros (0) até um determinado tamanho       	|
|       -      	|                        a conversão será alinhada a esquerda                        	|
| ' ' (espaço) 	| um espaço a frente de numeros positivos, e o sinal de menos para numeros negativos 	|
|       +      	|                      exibe um sinal para positivos e negativos                     	|
</div>

```python
nome = "Mirai"
idade = 17

texto = "meu nome é %s e eu tenho %+04d anos"

print(texto % (nome, idade))
```
```output
meu nome é Mirai e eu tenho +017 anos
```
### Tipos Compostos

Os tipos compostos são aqueles que contem mais de um Dado

eles são os seguintes:

- Tuples
- Listas
- Sets
- Dicionarios

#### Mutabilidade

A Mutabilidade define a capacidade de um tipo ser alterado sem que se seja criado um novo, exemplo:

Listas são mutaveis, pois nós podemos adicionar ou remover elementos sem criar uma lista nova

Tuples são imutaveis pois para podermos adicionar um novo elemento nós devemos criar uma nova

#### Tuples

As Tuples são imutaveis, elas são comumente usadas na declaração de multiplas variaveis, para declara uma tuple nós podemos fazer de duas formas:

forma 1:
- usamos parenteses `()`


```python
tulipa1 = ("eba", "uma", "tuple")
print(tulipa1, type(tulipa1))
```
```output
('eba', 'uma', 'tuple') <class 'tuple'>
```
forma 2:
- nas tuples nós podemos omitir o parenteses, apenas separando os argumentos por virgula `,`


```python
tulipa2 = "eba", "mais", "uma", "tuple"
print(tulipa2, type(tulipa2))
```
```output
('eba', 'mais', 'uma', 'tuple') <class 'tuple'>
```
Para adicionarmos ou removermos elementos de uma tuple nós devemos criar uma nova


```python
x, y = 1, 2  # uma tuple com 2 valores
z = 7  # valor que iremos adicionar
tulipa_nova = x, +y, +z
print(tulipa_nova, type(tulipa_nova))
```
```output
(1, 2, 7) <class 'tuple'>
```
#### Listas

Diferente das Tuples, as listas já podem ser alteradas, para declararmos uma lista nós usamos `[]`


```python
amigos = ["amigo1", "amigo2", "amigo3"]
print(amigos, type(amigos))
```
```output
['amigo1', 'amigo2', 'amigo3'] <class 'list'>
```
para obtermos um item especifico nós usamos um index iniciado em 0

é simples, basta fazer `nome_da_lista[index]`, e as listas começam pelo 0, ou seja, o primeiro valor é 0, o segundo é 1, o terceiro é 2 e assim por diante

caso nós coloquemos um sinal negativo a frente do index, a lista será invertida, `-1` se torna o ultimo, `-2` o penultimo, `-3` o antepenultimo e assim por diante

eis aqui um exemplo:


```python
amigos = ["amigo1", "amigo2", "amigo3"]
print(amigos, type(amigos))
print(amigos[0], type(amigos[0]))  # mostraremos o amigo1
print(amigos[2], type(amigos[1]))  # mostraremos o amigo2
print(amigos[1], type(amigos[2]))  # mostraremos o amigo3
print(amigos[-3], type(amigos[-3]))  # mostraremos o amigo1
print(amigos[-2], type(amigos[-2]))  # mostraremos o amigo2
print(amigos[-1], type(amigos[-1]))  # mostraremos o amigo3
```
```output
['amigo1', 'amigo2', 'amigo3'] <class 'list'>
amigo1 <class 'str'>
amigo3 <class 'str'>
amigo2 <class 'str'>
amigo1 <class 'str'>
amigo2 <class 'str'>
amigo3 <class 'str'>
```
para adicionarmos um item a uma lista nós usamos o metodo `append`, sua sintaxe é:

`lista.append(item)`, este metodo sempre adicionará o item ao final da lista


```python
amigos = ["amigo1", "amigo2", "amigo3"]
print(amigos, type(amigos))
amigos.append("amigo4")
print(amigos, type(amigos))
```
```output
['amigo1', 'amigo2', 'amigo3'] <class 'list'>
['amigo1', 'amigo2', 'amigo3', 'amigo4'] <class 'list'>
```
para adicionarmos um item em uma posição especifica nós usamos `lista.insert(index, item)`


```python
amigos = ["amigo1", "amigo2", "amigo3"]
print(amigos, type(amigos))
amigos.insert(1, "amigo4")  # iremos adicionar o amigo4 na segunda posição
print(amigos, type(amigos))
```
```output
['amigo1', 'amigo2', 'amigo3'] <class 'list'>
['amigo1', 'amigo4', 'amigo2', 'amigo3'] <class 'list'>
```
para removermos um item, nós temos `lista.pop()` e `lista.remove(item)`

o metodo `lista.pop()` remove o ultimo item, ou em um index especificado `lista.pop(index)`

o metodo `lista.remove(item)` remove o item especificado


```python
amigos = ["amigo1", "amigo2", "amigo3"]
print(amigos, type(amigos))
amigos.pop()
print(amigos, type(amigos))
amigos.remove("amigo1")
print(amigos, type(amigos))
```
```output
['amigo1', 'amigo2', 'amigo3'] <class 'list'>
['amigo1', 'amigo2'] <class 'list'>
['amigo2'] <class 'list'>
```
##### Matrizes (Lista Multi-Dimensional)

Caso você se depare na situação de ter que criar uma matiz, em python isso pode ser feito através de listas multi-dimensionais


```python
matriz = [
    # X  0  1  2      Y
    [1, 2, 3],  # 0
    [4, 5, 6],  # 1
    [7, 8, 9],  # 2
]
print(matriz, type(matriz))
# Eixos:     Y  X
print(matriz[0][0])
print(matriz[2][1])
```
```output
[[1, 2, 3], [4, 5, 6], [7, 8, 9]] <class 'list'>
1
8
```
#### Sets (Conjuntos)

Sets são essencialmente conjuntos, são declarados através das chaves `{}`.

Eles tem 2 caracteristicas peculiares:

- não tem ordem
- não possuem valores repetidos

irei começar pela ordem, tomaremos como exemplo um set com 3 nomes.


```python
set_nomes = {"Joaquim", "Mirai", "Maria"}
print(set_nomes)
```
```output
{'Mirai', 'Maria', 'Joaquim'}
```
perceba que quando eu executei o código em minha máquina, o resultado foi `{'Mirai', 'Maria', 'Joaquim'}`, mesmo com a declaração sendo `{'Joaquim', 'Mirai', 'Maria'}`, isso ocorre porque os sets não tem ordem nenhuma, ou seja, se rodarmos denovo, teremos outra ordem.

agora vamos aos valores, suponha novamente um set de nomes, porém agora com mais pessoas.


```python
set_nome_pessoas = {"Mirai", "Maria", "Ana", "José", "Joaquim", "Maria"}
print(set_nome_pessoas)
```
```output
{'Maria', 'Mirai', 'José', 'Ana', 'Joaquim'}
```
perceba que mesmo com nós especificando duas `'Maria'`s no codigo, só exibimos uma, isso ocorre pois os sets excluem todos os valores repetidos.

agora vamos as operações elas são:

- `set.add()` -> adiciona elementos ao set
- `set.remove()` -> remove elementos do set
- `set.difference()` -> retorna a diferença entre sets
- `set.symmetric_difference()` -> retorna todos os itens que não estão na interseção
- `set.intersection()` -> retorna a intersceção dos sets
- `set.union()` -> retorna a união dos sets



```python
estudantes_matematica = {"aluno1", "aluno2", "aluno2", "aluno3", "aluno4", "aluno5"}

estudantes_portugues = {"aluno6", "aluno2", "aluno3", "aluno7", "aluno8"}

estudantes_matematica.add("aluno9")
print(f"ADD:\t\t\t{estudantes_matematica}")
estudantes_matematica.remove("aluno5")
print(f"REMOVE:\t\t\t{estudantes_matematica}")
print(f"DIFFERENCE:\t\t{estudantes_portugues.difference(estudantes_matematica)}")
print(
    f"SYMMETRIC_DIFFERENCE:\t{estudantes_portugues.symmetric_difference(estudantes_matematica)}"
)
print(f"INTERSECTION:\t\t{estudantes_matematica.intersection(estudantes_portugues)}")
print(f"UNION:\t\t\t{estudantes_matematica.union(estudantes_portugues)}")
```
```output
ADD:			{'aluno1', 'aluno2', 'aluno4', 'aluno3', 'aluno5', 'aluno9'}
REMOVE:			{'aluno1', 'aluno2', 'aluno4', 'aluno3', 'aluno9'}
DIFFERENCE:		{'aluno7', 'aluno6', 'aluno8'}
SYMMETRIC_DIFFERENCE:	{'aluno1', 'aluno6', 'aluno4', 'aluno7', 'aluno8', 'aluno9'}
INTERSECTION:		{'aluno2', 'aluno3'}
UNION:			{'aluno2', 'aluno4', 'aluno7', 'aluno8', 'aluno1', 'aluno6', 'aluno3', 'aluno9'}
```
#### Dicionários

Dicionários são listas com `chave:valor`, onde o valor pode ter um indentificador nomeado chamado chave

a declaração de um dicionário é feita da seguinte forma:


```python
valor1, valor2, chave1, chave2 = "valor1", "valor2", "chave1", "chave2"

dicionario = {chave1: valor1, chave2: valor2}
print(dicionario, type(dicionario))
```
```output
{'chave1': 'valor1', 'chave2': 'valor2'} <class 'dict'>
```
para fins de conveniencia e legibilidade, nós dividimos o dicionario entre linhas, ficando desta forma


```python
valor1, valor2, chave1, chave2 = "valor1", "valor2", "chave1", "chave2"

dicionario = {chave1: valor1, chave2: valor2}
print(dicionario, type(dicionario))
```
```output
{'chave1': 'valor1', 'chave2': 'valor2'} <class 'dict'>
```
para acessarmos um valor especifico nós usamos sua chave, desta forma `dicionario[chave]`


```python
valor1, valor2, chave1, chave2 = "valor1", "valor2", "chave1", "chave2"

dicionario = {chave1: valor1, chave2: valor2}
print(dicionario[chave1], type(dicionario[chave1]))
```
```output
valor1 <class 'str'>
```
para adicionarmos um valor, ou reassociarmos um valor, basta por `dicionario[chave]=novo_valor`


```python
valor1, valor2, valor3 = "valor1", "valor2", "valor3"
chave1, chave2, chave3 = "chave1", "chave2", "chave3"

dicionario = {chave1: valor1, chave2: valor2}

dicionario[chave3] = valor3
dicionario[chave1] = valor2
print(dicionario[chave3], type(dicionario[chave3]))
print(dicionario[chave1], type(dicionario[chave1]))
```
```output
valor3 <class 'str'>
valor2 <class 'str'>
```
### Conversão e Coerção

Um topico relativamente simples, ele consiste em alterar o tipo de um dado, por exemplo:

`string` -> `int`

#### Conversão

Conversão é quando essa alteração é explicita no codigo, por exemplo:


```python
x = 3
print(x, type(x))
y = str(x)  # converte 3 int em "3" string
print(y, type(y))
```
```output
3 <class 'int'>
3 <class 'str'>
```
existem funções especificas para isso, eis a lista:
- `str()` -> converte para `string`
- `int()` -> converte para `int`
- `float()` -> converte para `float`
- `bool()` -> converte para `booleano`
- `tuple()` -> converte para `tuple`
- `list()` -> converte para `lista`
- `set()` -> converte para `set`
- `dict()` -> converte para `dicionario`

#### Coerção

ocorre quando a conversão é implicita, ou seja, você não define expecificamente.

ela ocorrem em flows outros tipos de flow (`if`s, `while`s, etc..., veremos mais a frente)

### `sum()` & `len()`

`sum()` é uma função nativa do python que retorna a soma de todos os valores de um objeto iteravel, ou seja, listas, dicionarios, sets e tuples

`len()` é uma função nativa do python que retorna o comprimento de um objeto iteravel, ou seja, listas, dicionarios, sets e tuples

seu uso principal seria para calcular médias, pois uma média é dada através da soma de todos os valores dividos pela quantidade de valores
