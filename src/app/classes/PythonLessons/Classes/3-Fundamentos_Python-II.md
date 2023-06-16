---
title: 'Fundamentos Python II'
author: 'Mirai'
chapter: '3'
shortSum: 'Introdução aos fundamentos estruturais da linguagem.'
---

# Fundamentos Python II

## Tipos de Controle de Flow

### Controle de Fluxo (Control Flow) e Escopo

o Controle de Fluxo (Control Flow) de um programa determina a forma como o código será executado, existem 4 tipos essenciais, isto é, destes quatro surgem variações
* Sequencial: o código é executado de forma sequencial, cima a baixo
* Decisivo: o código é executado baseado em uma decisão, `if` statements
* Repetitivo: o código é executado em loop, `while` e `for` loops
* Funcional: o código é dividido e executado em forma de funções (veremos mais a frente)

#### Sequencial

é essencialmente a forma como viemos escrevendo código até agora, os comandos são providos e executados de forma sequencial


```python
print("executado primeiro")
print("executado depois")
print("executado por ultimo")
```

#### Decisivo

O decisivo é usado quando queremos executar um codigo quando algo for verdadeiro ou falso, ou seja, quando tomamos uma decisão

em Python nós duas formas de tomar decisões, `match-case` e cadeias de `elif`s

começarei pelas cadeias de `elif`s pois elas constituem a lógica básica de um `if statement`

a sintaxe de um `if statement` é a seguinte:

```python
if (condição):
    {codigo}
```

irei desestruturar o código e explicar cada parte:

`if` -> é a keyword, em uma tradução literal significa "se"

`(condição)` -> é onde você coloca a condição para a execução do codigo e nós usamos os operadores condicionais para isto, os parenteses são opcionais

`:` (dois pontos) -> eles são ESTRITAMENTE NECESSÁRIOS, pois dão inicio ao escopo do bloco, sem eles o código nunca será executado como esperado

`    ` (indentação) -> seu tamanho pode variar dependendo das configurações da IDE, porém ela é o delimitador de escopo, ou seja, uma indentação mal feita torna o codigo impossivel de ser executado

`{codigo}` -> é o codigo que você deseja executar

vejamos alguns exemplos:


```python
x, y = 2, 3

if x == 2:
    print(f"x é igual a {x}")

if x != y:
    print(f"x não é igual a y")
```

suponhamos que você queria executar um código caso algo seja verdade e outro caso não seja verdade, bom, para isto temos a keyword `else`, ela não recebe nenhuma condição, pois só serve para executar o código caso o `if` não se concretize


```python
x, y = 2, 2

if x == 2:
    print(f"x é igual a {x}")
else:
    print(f"x não é igual a {x}")

if x != y:
    print(f"x não é igual a {y}")
else:
    print(f"x é igual a y")
```

até agora nós conseguimos executar duas funções com base em uma variavel, mas e se quisermos tomar mais decisões?

bom, se raciocinarmos um pouco podemos perceber que basta juntar `if`s e `else`s para termos mais de uma decisão, deste modo:


```python
x, y = 2, 2

if x == 2:
    print(f"x é igual a {x}")
else:
    if x != y:
        print(f"x não é igual a {y}")
    else:
        print(f"x é igual a y")
```

os desenvolvedores de Python perceberam este padrão e criaram uma keyword especifica para a união de `else`s e `if`s, chamada de `elif`

ela é usada entre o `if` e o `else` em uma especie de cadeia, veja o exemplo:


```python
x = 1

if x == 1:
    print(f"x é igual a {x}")
elif x == 2:
    print(f"x é igual a {x}")
elif x == 3:
    print(f"x é igual a {x}")
elif x == 4:
    print(f"x é igual a {x}")
else:
    print(f"x é igual a {x}")
```

em cadeias de `elif`s nós podemos ter quantos `elif` forem necessários, porém, devemos ter APENAS um `if` no inicio e um `else` no fim para termos a cadeia.

##### Match-Case

o `match-case` foi introduzido no Python 3.10, essencialmente ele introduz a correspondencia de padrões, essencialmente, você compara um caso a um padrão desejavel de tokens.

a sintaxe de um `match-case` é a seguinte:

```python
match (variavel):
    case (opção):
        {codigo}
    case _:
        {codigo}
```

`match` -> keyword

`(variavel)` -> variavel usada na cadeia

`case` -> keyword

`(opção)` -> valor esperado, podemos ter quantos `case (opção)` quisermos

`case _` -> valor universal, equivale ao `else` nas cadeias de `elif`s, executado caso todos os outros sejam falso



```python
# pessoas = ['João'] # Retorna: 'Apenas um valor: João'
pessoas = [
    "João",
    "Mateus",
    "Caio",
    "Nicolas",
    "Ivan",
]  # Retorna: Mais que tres itens: João, Mateus, Caio, e também: ['Nicolas', 'Ivan']

match pessoas:
    case [a]:
        print(f"Apenas um valor: {a}")
    case [a, b]:
        print(f"Dois itens: {a}, {b}")
    case [a, b, c]:
        print(f"Três itens: {a}, {b}, e {c}")
    case [a, b, c, *rest]:
        print(f"Mais que três itens: {a}, {b}, {c}, e também: {rest}")
    case _:
        print("Valor incorreto")
```
```output
Mais que três itens: João, Mateus, Caio, e também: ['Nicolas', 'Ivan']
```
> NOTA: Você pode tentar descomentar a linha 1 e comentar a linha 2 para testar outras combinações

então qual a diferença entre cadeias de `elif` e `match-case`?

veja bem, o `match-case` serve para padrões estruturados de código, enquanto as cadeias de `elif` servem para tomar decisões, veja um exemplo:

> NOTA: Você pode usar o match-case para tomar decisões baseadas em uma única variavel, mas se é recomendado o uso de cadeias de `elif`.


```python
amigos = ["amigo1", "amigo2", "amigo3"]

match amigos:
    case [a]:
        print(f"Você tem apenas um amigo: {a}")
    case [a, b]:
        print(f"Você tem dois amigos: {a}, {b}")
    case [a, b, c]:
        print(f"Você tem três amigos: {a}, {b}, e {c}")
    case [a, b, c, *rest]:
        print(f"Você tem mais que três amigos: {a}, {b}, {c}, e também: {rest}")
    case _:
        print("Valor incorreto")


if amigos[1] == "amigo2":
    print("O nome do seu segundo amigo é 'amigo2'")
elif amigos[1] == "amigo88":
    print("O nome do seu segundo amigo é 'amigo88'")
else:
    print("Seu amigo tem nome?")
```
```output
Você tem três amigos: amigo1, amigo2, e amigo3
O nome do seu segundo amigo é 'amigo2'
```
#### Repetitivo (Recursivo)

Flows repetitivos, como o nome sugere servem para repetir linhas de código, em Python nós temos duas keywords para isto, `while` e `for`

o `while` serve para executar um codigo enquanto uma condição for verdadeira

veja a sintaxe de um `while loop`:

```python
while (condição):
    {codigo}
```

a unica diferença entre a estrutura basica de um `if`, é a keyword e o fato de termos apenas ela, não existem "cadeias de `while`"

obs: os parenteses na declaração são opcionais, tanto no `while`, quanto no `for`

veja o exemplo:


```python
x = 0

while x < 10:
    print(f"valor de x: {x}")
    x += 1
```

enquanto `x` for menor que 10, exiba o valor de `x`, e incremente x por 1

já o `for` serve para repetir em um "raio", de `x` a `y`, veja a sintaxe de um `for loop`:

```python
for {index} in (raio):
    {codigo}
```

`for` -> keyword

`{index}` -> variavel usada para o loop

`in` -> operador membro, "em tal grupo"

`(raio)` -> item iteravel

veja o exemplo:


```python
for i in range(10):
    print(i)
```

para `i` em um raio de 10 digitos, exiba `i`

essencialmente o `for` loop é um `while` delimitado, e ele é especialmente usado para iterar sob tipos compostos


```python
lista_legal = ["a", "b", "c", "d"]

for i in lista_legal:
    print(i)
```

### Performance em Loops

suponhamos o seguinte, você quer exibir os numeros entre 1 e 100000000 usando um loop, mas quer fazer isso de forma eficiente, como você fará?

para demonstrar o ponto, irei temporizar o código e usar sintaxes avançadas, como funções, módulos e type-hinting.

#### While Loops

Usando `while` loops:


```python
from timeit import timeit


def pure_while(n: int = 100000000) -> int:
    i, x = 0, 0
    while i < n:
        x += i
        i += 1
    return x


print(f"While Loop:\t{timeit(pure_while, number=1)} segundos")
```
```output
While Loop:	12.82263323100051 segundos
```
#### For Loops

Usando `for` loops:


```python
from timeit import timeit


def pure_for(n: int = 100000000) -> int:
    x = 0
    for i in range(n):
        x += i
    return x


print(f"For Loop:\t{timeit(pure_for, number=1)} segundos")
```
```output
For Loop:	8.726445832999161 segundos
```
como você pode perceber o `for` loop é consideravelmente mais rápido, isso se dá pelo fato das comparações serem executadas em C, a linguagem cujo a qual Python é baseado, enquanto no `while` as comparações são executadas diretamente em Python, que é substencialmente mais lento que C.

de todo modo, recomendo que priorize `for` loops ao invés de `while` loops sempre que possivel, e só ultilize `while` quando estritamente necessário.

### Escopo

Escopo é uma caracteristica de muitas linguagens de programação, ele exerce a função de separação do código em niveis, relativos entre si.

Por exemplo:

```
A {
    B {
        C {

        }
    }
}
```

Aqui nós temos 4 escopos:
1. Global
2. A
3. B
4. C

O escopo global é o escopo do arquivo, sem delimitações.

Quando eu digo que eles são relativos entre si, eu quero dizer que escopos mais acima influenciam escopos abaixo, porém o oposto não ocorre.

ou seja, seguindo nosso exemplo, qualquer codigo posto no escopo de A pode entrar nos escopos de B e C, mas os codigos postos em B ou C não conseguem sair para o escopo de A.

Em Python nós usamos `:` (dois-pontos) e a indentação (geralmente de 4 espaços, ou 1 tab) para limitar o escopo.

### Desestruturação (Packing & Unpacking)

A desestruturação em Python consiste em assimilar aos valores de um iterável a variaveis.

por exemplo se voce lembra da [aula sobre variaveis](./2-Fundamentos_Python-I.ipynb#variaveis-comentários-print-e-input) certamente lembrará que podemos associar multiplas variaveis a multiplos valores em uma unica linha

O que eu não lhe contei naquele momento é que isto é um exemplo de `unpacking`, nós estamos associando os valores de uma [tuple](./2-Fundamentos_Python-I.ipynb#tuples) a variaveis correspondentes, pois se você lembra, parenteses são opcionais, então ao fazermos:

```py
x, y = 1, 2
```

estamos fazendo o mesmo que:

```py
x, y = (1, 2)
```

ou até mesmo:

```py
(x, y) = (1, 2)
```

### Desestruturação em `for` loops

a desestruturação em `for` loops consiste em uma variavel de index e uma variavel de valor

para isso nós usamos a função `enumerate()`

veja um exemplo:


```python
lista_amigos = ["amigo1", "amigo2", "amigo3"]

for index, valor in enumerate(lista_amigos):
    print(f"O {valor} está na posição {index}")
```

a função `enumerate()` gera uma tuple de 2 valores para cada item do iteravel, um index e o valor propriamente dito

### Iteração em dicionários

Nós também podemos Iterar sob dicionarios

Para Iterar sob as chaves basta usar apenas o dicionário



```python
dicionario_aleatorio = {
    "Chave A": "Valor 01",
    "Chave B": "Valor 02",
    "Chave C": "Valor 03",
}

for chave in dicionario_aleatorio:
    print(chave)
```

Para iterar sobre os valores basta usar `dict.values()`


```python
dicionario_aleatorio = {
    "Chave A": "Valor 01",
    "Chave B": "Valor 02",
    "Chave C": "Valor 03",
}

for chave in dicionario_aleatorio.values():
    print(chave)
```

Para usar ambos, usamos `dict.item()` e desestruturação


```python
dicionario_aleatorio = {
    "Chave A": "Valor 01",
    "Chave B": "Valor 02",
    "Chave C": "Valor 03",
}

for chave, valor in dicionario_aleatorio.items():
    print(chave, valor)
```

### `break`, `continue` e `else` em `for` loops

`break`, `continue` e `else`, essas keywords tem como objetivo principal alterar o flow de `for` loops

o `break` serve para interromper o loop, comumente ultilizamos ele juntamente com um `if` statement


```python
for i in range(10):
    print(i)
    if i == 6:
        break
```

o `continue` já exerce o oposto, ele dá prosseguimento ao loop


```python
for i in range(10):
    print(i)
    if i == 6:
        print("e vamos continuar")
        continue
```

e o `else` é executado ao final do loop apenas quando ele não é parado por um break


```python
for i in range(10):
    print(i)
else:
    print("não tem breaks então chegamos ao fim")
```

você pode estar se perguntando, qual a ultilidade do `else` então?

vejamos um exemplo:


```python
# Vamos checar por numeros pares em uma lista

print("Teste 01")
for i in [1, 3, 5, 7, 9]:
    if i % 2 == 0:
        print("contem um numero par")
        break
else:
    print("não contem um numero par")

print("Teste 02")
for i in [1, 3, 4, 7, 9]:
    if i % 2 == 0:
        print("contem um numero par")
        break
else:
    print("não contem um numero par")
```

### Numeros Primos e FizzBuzz

Nós podemos usar `for` loops para acharmos numeros primos


```python
x = 12
y = 11
for i in range(2, x):
    if x % i == 0:
        print(f"{x} não é primo")
        break
else:
    print(f"{x} é primo")

for i in range(2, y):
    if y % i == 0:
        print(f"{y} não é primo")
        break
else:
    print(f"{y} é primo")
```

Existe um jogo que se tornou desafio de programação, o nome é FizzBuzz

ele consiste no seguinte:
* Se um numero for divisivel por 3, diga Fizz
* Se um numero for divisivel por 5, diga Buzz
* Se um numero for divisivel por 3 e 5, diga FizzBuzz

podemos usar `for` loops para isso


```python
for i in range(1, 21):
    if i % 3 == 0:
        print("Fizz")
    elif i % 5 == 0:
        print("Buzz")
    elif (
        i % 15 == 0
    ):  # 3 x 5 = 15, então qualquer numero divisivel por 15 também é divisivel por 3 e 5
        print("FizzBuzz")
    else:
        print(i)
```

### Fatiamento de Listas

"Fatiar" uma lista consiste em exibir apenas uma parte dela, por exemplo:

#### Ordem Natural

Temos a lista `A = [1, 5, 4, 2, 3, 7, 0, 8, 6, 9]`, e se nós quisermos exibir apenas os numeros `3, 7, 0`?

para isso basta colocarmos o `A[{index inicial}:{index final+1}]`



```python
# Lembre-se, o index incia em 0, então a ordem de elementos é a seguite:
#    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
A = [1, 5, 4, 2, 3, 7, 0, 8, 6, 9]

print(A[4:7])
```

porque `{index final+1}`? pois o valor será onde a lista acabará, e portanto, não se encontrará incluso, então para incluirmos ele, basta adicionar 1 ao index

#### Ordem Reversa

Suponhamos que você queira cortar a lista de trás a frente, para isso, basta usar os numeros negativos, exemplo:



```python
# Ordem Reversa
#   -10, -9, -8, -7, -6, -5, -4, -3, -2, -1
A = [1, 5, 4, 2, 3, 7, 0, 8, 6, 9]

print(A[-6:-3])
```

### Compreensões (Comprehensions)

Compreensões consistem em gerar um novo elemento com base em um tipo de dado composto atráves de `if`s, `else`s e `for` loops, comumente dizemos ser uma geração dinamica.

Seguimos o seguinte esquema para as compreensões:

* Listas
    * Base: `lista_resultado = ['expr_saida' for 'var' in 'iteravel']`
    * Condicional: `lista_resultado = ['expr_saida' for 'var' in 'iteravel' if (condição)]`
* Sets
    * Base: `set_resultado = {'expr_saida' for 'var' in 'iteravel'}`
    * Condicional: `set_resultado = {'expr_saida' for 'var' in 'iteravel' if (condição)}`
* Dicionários
    * Base: `dict_resultado = {'chave':'valor' for '(chave, valor)' in 'iteravel'}`
    * Condicional: `dict_resultado = {'chave':'valor' for '(chave, valor)' in 'iteravel' if ('chave' satisfaz condição)}`

#### Listas

Compreensões de listas consiste em gerar uma nova lista de forma dinamica.

Por exemplo, se você quisesse gerar uma lista com numeros dobrados?

poderiamos usar `for` loops


```python
lista_dobrada = []
for i in range(1, 11):
    lista_dobrada.append(i * 2)

print(lista_dobrada)
```
```output
[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
```
Porém podemos fazer o mesmo com compreensão de lista, mostrarei primeiro o exemplo e depois explicarei a sintaxe


```python
lista_dobrada = [i * 2 for i in range(1, 11)]
print(lista_dobrada)
```
```output
[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
```
Basicamente a lógica esta "ao contrário", no exemplo com `for` loops  estamos dizendo o seguinte:

> *para cada item 'i' entre 1 e 11, multiplique por 2 e adicione a lista 'lista_dobrada'*

e no exemplo de compreensão de lista estamos dizendo:

> *multiplique 'i' por 2 e adicione a lista 'lista_dobrada' em um raio entre 1 e  11*

e tambem tornamos a lógica em uma unica linha, compactando ela, essa prática de tornar o codigo em uma linha se chama _'One Liner'_, além é claro de termos eliminado a necessidade de inicialização de uma lista vazia.


#### Listas Condicional

consiste no mesmo acima, porém com uma condição para a geração da lista

Por exemplo, se você quisesse gerar uma lista apenas com numeros pares?

poderiamos usar `for` loops e `if`s


```python
lista_de_pares = []
for i in range(1, 11):
    if i % 2 == 0:
        lista_de_pares.append(i)

print(lista_de_pares)
```
```output
[2, 4, 6, 8, 10]
```
Porém podemos fazer o mesmo com compreensão de lista, mostrarei primeiro o exemplo e depois explicarei a sintaxe


```python
lista_de_pares = [i for i in range(1, 11) if i % 2 == 0]
print(lista_de_pares)
```
```output
[2, 4, 6, 8, 10]
```
Basicamente a lógica esta "ao contrário", no exemplo com `for` loops e `if`s estamos dizendo o seguinte:

> *para cada item 'i' entre 1 e 11, se o resto da divisão(modulo) por 2 for igual a 0 adicione a lista 'lista_de_pares'*

e no exemplo de compreensão de lista estamos dizendo:

> *adicione 'i' para a lista 'lista_de_pares' caso o resto da divisão(modulo) por 2 for igual a 0 em um raio entre 1 e  11*

#### Sets

Basicamente a mesma coisa que as compreensões de lista, a unica diferença é que as compreensões estão entre `{}` e não `[]`


```python
set_de_pares = {i for i in range(1, 11) if i % 2 == 0}
print(set_de_pares)
```
```output
{2, 4, 6, 8, 10}
```
#### Dicionários

Extendendo a lógica podemos gerar uma compreensão de dicionários.

Por exemplo, e se quisessemos gerar um dicionário de cubos impares? Com o numero impar e seu respectivo valor ao cubo.

Poderiamos fazer assim:


```python
res_dict = {}

for i in range(1, 10):
    if i % 2 != 0:
        res_dict[i] = i**3

print(res_dict)
```
```output
{1: 1, 3: 27, 5: 125, 7: 343, 9: 729}
```
Agora a versão One Liner:


```python
comp_dict = {i: i**3 for i in range(1, 10) if i % 2 != 0}
print(comp_dict)
```
```output
{1: 1, 3: 27, 5: 125, 7: 343, 9: 729}
```
### A função `zip()`

A função `zip()` junta elementos de multiplos iteráveis em tuples.

então podemos usar ela para por exemplo, juntar duas listas em um dicionário


```python
lista_nums = [1, 2, 3, 4, 5]
lista_chars = ["a", "b", "c", "d", "e"]

zip_dict = {k: v for (k, v) in zip(lista_nums, lista_chars)}
print(zip_dict)
```
```output
{1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'}
```
A diferença entre a função `zip()` e a função `enumerate()` é que a função `enumerate()` enumera um iterável, enquanto a função `zip()` junta multiplos iteráveis

### Funções

Funções são uma parte essencial da linguagem, nós viemos usando elas varias vezes até aqui, agora está na hora de aprender a definir (criar) suas próprias funções.

> O que são funções?

Funções são uma estrutura de código feita pra exercer uma determinada função complexa (vide o nome).

A sintaxe de uma função em Python é a seguinte:

```python
def {nome}():
    {corpo da função}
```
- `def` é a keyword de definição de uma função em Python
- `{nome}` é o indentificador da função, usaremos ele para chama-la
- `()` os parenteses são EXTRITAMENTE necessários, pois eles exercem a função de chamada
- `{corpo da função}` aqui nós colocamos a lógica da função

eis aqui um exemplo de função:


```python
def apresentar():
    print("Olá, eu sou a função apresentar()")


apresentar()  # Aqui chamamos a função
```
```output
olá, eu sou a função apresentar()
```
#### Argumentos e Parametros

Na função acima, nós apenas a chamamos, mas e se nós quisessemos que ela mostrasse algum nome?

Bom, para isso nós usariamos argumentos e parametros, observe o exemplo:


```python
def apresentar(nome):
    print(f"Olá meu nome é {nome}")


apresentar("Mirai")
```
```output
Olá meu nome é Mirai
```
Nós definimos um argumento e passamos um parametro para esse argumento.

Existe uma pequena confusão entre Argumentos e Parametros de uma função, iniciantes tendem a pensar que são a mesma coisa, mas estão enganados.

Argumento é o espaço reservado na função (no nosso exemplo seria `nome`) e Parametros são os valores passados a esses argumentos (no nosso exemplo seria `"Mirai"`).

nós tambem podemos colocar multiplos argumentos, basta separa-los por `,` (virgula) e colocar um numero correspondente de parametros (se nós colocamos 2 argumentos, devemos colocar 2 parametros, etc...).


```python
def apresentar(nome, idade):
    print(f"Olá meu nome é {nome} e eu tenho {idade} anos")


apresentar("Mirai", 17)
```
```output
Olá meu nome é Mirai e eu tenho 17 anos
```
A ordem em que passamos os argumentos deve condizer com os parametros.

##### Parametros Padrões (Valores Padrões)

Parametros padrões (ou valores padrões) são usados quando nenhum outro argumento é passado ao parametro.

Eles são definidos ao colocar um `=` (igual) e o valor desejado ao lado do parametro.

Veja o exemplo:


```python
def apresentar(nome="Python"):
    print(f"Olá meu nome é {nome}")


apresentar()  # Nenhum argumento passado
apresentar("Mirai")
```
```output
Olá meu nome é Python
Olá meu nome é Mirai
```
##### Argumentos Chave (Nomeados)

Argumentos Chave (ou nomeados) são usados ao chamar uma função, essencialmente, você especifica qual argumento irá usar qual parametro.

veja o exemplo:


```python
def apresentar(nome, idade):
    print(f"Olá meu nome é {nome} e eu tenho {idade} anos")


apresentar(idade=17, nome="Mirai")
```
```output
Olá meu nome é Mirai e eu tenho 17 anos
```
essa forma de associação permite que não sigamos a ordem de argumentos na definição da função, e tambem nos permite "pular" parametros (esse parametros devem ter valores padrões), veja um outro exemplo:


```python
def apresentar(nome="cool_name", idade=99, local="place"):
    print(f"Olá meu nome é {nome} e eu tenho {idade} anos e moro em {local}")


apresentar("Mirai", local="casa")
```
```output
Olá meu nome é Mirai e eu tenho 99 anos e moro em casa
```
##### `*args`, `**kwargs`, `*` (Keyword Only Arguments) e `/` (Positional Only Arguments)

esses são parametros especiais, os `*args` e `**kwargs`  nos permitem ter um numero indeterminado de argumentos.

o `*args` nos permite pegar indeterminados parametros passados de forma direta.


```python
def multi_print(*args):
    for i in args:
        print(i)


multi_print("ye", 20, "3", 4, [5])
```
```output
ye
20
3
4
[5]
```
já o `**kwargs` nos permite pegar indeterminados parametros-chave.


```python
def multi_key_print(**kwargs):
    for k, v in kwargs.items():
        print("%s, %s" % (k, v))


multi_key_print(a="yee", b="bbb", c="cccc")
```
```output
a, yee
b, bbb
c, cccc
```
Nós também podemos usar os dois juntos, pois eles são independentes entre si, a unica convenção é que definimos `*args` primeiro e depois `**kwargs`.


```python
def funcao_legal(*args, **kwargs):
    print(f"valores: {args}")
    print(f"valores com chave: {kwargs}")


funcao_legal("ye", 20, "3", 4, [5], a="yee", b="bbb", c="cccc")
```
```output
valores: ('ye', 20, '3', 4, [5])
valores com chave: {'a': 'yee', 'b': 'bbb', 'c': 'cccc'}
```
O `/` (Positional Only Arguments) nos limita a ter apenas valores posicionais, isto é, aqueles que não são parametros-chave.


```python
def funcao_posicional(parametro_1, parametro_2, parametro_3, /):
    print(f"parametro_1: {parametro_1}")
    print(f"parametro_2: {parametro_2}")
    print(f"parametro_3: {parametro_3}")


funcao_posicional("Valor 1", "Valor 2", "Valor 3")
```
```output
parametro_1: Valor 1
parametro_2: Valor 2
parametro_3: Valor 3
```
se nós tentarmos associar algum parametro antes do separador `/` usando parametro-chave, teremos um erro, pois este separador especifica que todos os parametros antes dele devem ser posicionais.


```python
def funcao_posicional(parametro_1, parametro_2, parametro_3, /):
    print(f"parametro_1: {parametro_1}")
    print(f"parametro_2: {parametro_2}")
    print(f"parametro_3: {parametro_3}")

funcao_posicional(parametro_1='Valor 1', 'Valor 2', 'Valor 3') # Retornará um erro
```

```output
  Input In [21]
    funcao_posicional(parametro_1='Valor 1', 'Valor 2', 'Valor 3') # Retornará um erro
                                                                 ^
SyntaxError: positional argument follows keyword argument
```

O `*` (Keyword Only Arguments) especifica que todos os argumentos após ele devem ser parametro-chave.

ele não pode ser o primeiro parametro, então devemos ter um primeiro parametro obrigatório.


```python
def funcao_parametro_chave(
    parametro_obrigatorio, *, parametro_1="", parametro_2="", parametro_3=""
):
    print(f"parametro_obrigatorio: {parametro_obrigatorio}")
    print(f"parametro_1: {parametro_1}")
    print(f"parametro_2: {parametro_2}")
    print(f"parametro_3: {parametro_3}")


funcao_parametro_chave(
    "valor obrigatorio",
    parametro_1="Valor 1",
    parametro_2="Valor 2",
    parametro_3="Valor 3",
)
```
```output
parametro_obrigatorio: valor obrigatorio
parametro_1: Valor 1
parametro_2: Valor 2
parametro_3: Valor 3
```
se tentarmos passar apenas argumentos posicionais, teremos um erro


```python
def funcao_parametro_chave(
    parametro_obrigatorio, *, parametro_1="", parametro_2="", parametro_3=""
):
    print(f"parametro_obrigatorio: {parametro_obrigatorio}")
    print(f"parametro_1: {parametro_1}")
    print(f"parametro_2: {parametro_2}")
    print(f"parametro_3: {parametro_3}")


funcao_parametro_chave(
    "valor obrigatorio", "Valor 1", "Valor 2", "Valor 3"
)  # Retornará um erro
```

```output
---------------------------------------------------------------------------
``````output
TypeError                                 Traceback (most recent call last)
``````output
/media/Arquivos/Programming/Lessons/PythonLessions/Classes/3-Fundamentos_Python-II.ipynb Cell 94 in <cell line: 7>()
      <a href='vscode-notebook-cell:/media/Arquivos/Programming/Lessons/PythonLessions/Classes/3-Fundamentos_Python-II.ipynb#Y321sZmlsZQ%3D%3D?line=3'>4</a>     print(f"parametro_2: {parametro_2}")
      <a href='vscode-notebook-cell:/media/Arquivos/Programming/Lessons/PythonLessions/Classes/3-Fundamentos_Python-II.ipynb#Y321sZmlsZQ%3D%3D?line=4'>5</a>     print(f"parametro_3: {parametro_3}")
----> <a href='vscode-notebook-cell:/media/Arquivos/Programming/Lessons/PythonLessions/Classes/3-Fundamentos_Python-II.ipynb#Y321sZmlsZQ%3D%3D?line=6'>7</a> funcao_parametro_chave('valor obrigatorio', 'Valor 1', 'Valor 2', 'Valor 3')
``````output
TypeError: funcao_parametro_chave() takes 1 positional argument but 4 were given
```

Se existe uma precedencia, argumentos posicionais devem sempre vir antes de argumentos parametro-chave, caso contrário resultará em um erro, por isso definimos `*args, **kwargs` e não `**kwargs, *args`.

Com relação a performance, os argumentos posicionais são relativamente mais rapidos


```python
from timeit import timeit


def func_test(a, b, c):
    pass


print(
    f'Apenas Posicionais:\t\t{timeit("func_test(1, 2, 3)", number=10, globals={"func_test":func_test}):.8f} segundos'
)
print(
    f'Apenas Parametros-Chave:\t{timeit("func_test(a=1, b=2, c=3)", number=10, globals={"func_test":func_test}):.8f} segundos'
)
```
```output
Apenas Posicionais:		0.00000229 segundos
Apenas Parametros-Chave:	0.00000446 segundos
```
#### DocStrings

Documentation Strings (Strings de Documentação), comumente abreviadas para DocStrings são strings especiais feitas para associar documentação ao codigo.

ela é usada em diversos locais, desde funções, classes e até em projetos.

sua declaração é simples, o local que ela é declarada é que a diferencia, para fazer uma DocString basta por uma multi-line string abaixo da declaração de funções ou classes.

nós podemos acessa-la através do metodo especial `__doc__`


```python
def funcao_legal(*args, **kwargs):
    """Função legal que mostra valores legais"""
    print(f"valores: {args}")
    print(f"valores com chave: {kwargs}")


funcao_legal("ye", 20, "3", 4, [5], a="yee", b="bbb", c="cccc")
print(funcao_legal.__doc__)
```
```output
valores: ('ye', 20, '3', 4, [5])
valores com chave: {'a': 'yee', 'b': 'bbb', 'c': 'cccc'}
Função legal que mostra valores legais
```
Em projetos, se é recomendado uma DocString no topo do projeto (se for o caso, abaixo do SheBang) descrevendo o propósito daquele arquivo/programa.

Eis aqui um exemplo que eu fiz quando estava aprendendo Python.


```python
"""Apenas um arquivo que faz Nodes aleatorios e organiza eles em uma arvore binária.
Temporiza, conta quantas vezes fez e salva tudo para um arquivo."""

# {codigo}...
```

#### `return`

a keyword `return` serve para retornar um valor de dentro da função e terminar a função.

ao retornar um valor, nós podemos associa-lo a uma variavel.


```python
def apresentar(nome="cool_name", idade=99, local="place"):
    return f"Olá meu nome é {nome} e eu tenho {idade} anos e moro em {local}"


texto = apresentar("Mirai", local="casa")
print(texto)
```
```output
Olá meu nome é Mirai e eu tenho 99 anos e moro em casa
```
#### Funções lambda

as funções lambda são funções em uma linha e também nos possibilitam fazer funções anonimas.

de acordo com [documentação do Python](https://docs.python.org/3/faq/design.html#why-can-t-lambda-expressions-contain-statements) (Tradução livre)

> Ao contrário das formas de lambdas em outras linguagens, onde elas adicionam funcionalidade, as lambdas de Python são apenas uma notação simplificada se você for preguiçoso demais pra definir uma função.

sua sintaxe é:

```python
lambda {argumentos} : {expressão}
```

escreverei uma função usando `def` e a mesma função usando `lambda` para demonstrar.


```python
def add_num(x, y):
    return x + y


print(add_num(3, 4))

add_num_ = lambda x, y: x + y
print(add_num_(5, 6))
```
```output
7
11
```
Funções anonimas são funções que não tem um indentificado ou um nome, são comumente executadas em sua declaração.

veja a função anterior, porém anonima


```python
print((lambda x, y: x + y)(2, 3))
```
```output
5
```
Eu sei que os exemplos aqui são bobos, mas em situações mais complexas, elas se fazem necessárias, tendo em vista que elas podem ir além do que simples operadores aritméticos.

#### Funções de Primeira Classe e Alta Ordem em Python

Esses conceitos são referentes a programação funcional, essencialmente ambos se referem a tratar funções como valores.

##### Funções de Primeira Classe

Toda função em Python é uma função de primeira classe. Isso significa que nós podemos tratar qualquer função como se fosse uma variavel, ou seja, podemos reassociar e passar como argumento.


```python
def greeting(nome):
    return f"Ola {nome}"


gratificar = greeting
print(gratificar("Mirai"))
```
```output
Ola Mirai
```
No exemplo acima nós associamos a uma variavel e passamos como argumento para a função `print()`

Nós também podemos escrever uma função que recebe um argumento e passa-lo através de outra função, veja o exemplo:


```python
def func_sup(func, name):  # Tem o mesmo parametro
    resp = func(
        name
    )  # Passamos o argumento provido para a função passada como argumento
    up_name = resp.upper()
    return up_name


def hello_name(nome):  # Tem o parametro 'nome'
    return f"Ola {nome}"


print(
    func_sup(hello_name, "Mirai")
)  # Passamos a função hello_name e o argumento "Mirai"
```
```output
OLA MIRAI
```
##### Funções de Alta Ordem

As funções de alta ordem são bem parecidas com as de primeira classe, todavia, elas tem a especificidade de retornar uma função.

 veja o exemplo:


```python
def uppr_func(func):
    def intrn_func(name):
        answ = func(name)
        return answ.upper()

    return intrn_func  # retornamos a função interna 'intrn_func'


def h_name(name):
    return f"Ola {name}"


print(uppr_func(h_name)("Mirai"))
```
```output
OLA MIRAI
```
nós podemos usar funções lambda para termos funções de alta ordem, veja o exemplo:


```python
func_alta_ord = lambda x, func: x + func(x)
print(func_alta_ord(2, lambda x: x**2))
```
```output
6
```
para facilitar o entendimento eu irie formatar essas duas linhas (substitiuindo valores) de uma forma a representar a logica.


1. ```py
        func_alta_ord = lambda x, func: x + func(x)
        print(func_alta_ord(2, lambda y: y ** 2))
     ```
2. ```py
        func_alta_ord = lambda x, func: x + func(x)
        func_alta_ord = lambda x,
                        lambda y: y ** 2:
                                        x + func(x)
     ```
3. ```py
        func_alta_ord = lambda x:
                                x + lambda x: x ** 2
     ```
4. ```py
        print(func_alta_ord(2, lambda y: y ** 2))

        func_alta_ord = lambda x:
                                2 + lambda x: 2 ** 2
     ```

#### `global` e `nonlocal`

Essas keywords são referentes ao escopo, a `global` é usada quando queremos transformar uma variavel local em global, e a `nonlocal` serve para usar variaveis de escopos superiores quando temos funções aglomeradas (nested functions)

#### `global`

Veja um exemplo:


```python
x = "Escopo Global"


def func_legal_var_local():
    x = "Escopo Local"
    print(x)


def func_legal_var_global():
    global x
    print(x)


def alterar_global():
    global x
    x = "Alteramos a variavel global"


print(x)  # Escopo Global
func_legal_var_local()  # Escopo Local
func_legal_var_global()  # Escopo Global
alterar_global()
print(x)  # Alteramos a variavel global
```
```output
Escopo Global
Escopo Local
Escopo Global
Alteramos a variavel global
```
#### `nonlocal`

Veja um exemplo:


```python
def func_extern1():
    x = "Func externa 1"

    def func_intern1():
        x = "Func interna 1"
        print(x)

    print(x)
    func_intern1()


def func_extern2():
    x = "Func externa 2"

    def func_intern2():
        nonlocal x
        print(x)

    print(x)
    func_intern2()


def func_extern3():
    x = "Func externa 2"

    def func_intern3():
        nonlocal x
        x = "Alteramos a variavel da Func Externa 3"
        print(x)

    print(x)
    func_intern3()


func_extern1()
func_extern2()
func_extern3()
```
```output
Func externa 1
Func interna 1
Func externa 2
Func externa 2
Func externa 2
Alteramos a variavel da Func Externa 3
```
#### Sombra de variaveis (Variable Shadowing)

*Variable Shadowing* ocorre quando uma variavel de um escopo interno tem o mesmo nome que uma variavel de um escopo externo, isso pode levar a erros e a comportamentos não esperados no código então deve ser evitado. O recomendado é declarar variaveis internas com outros nomes, ou melhor ainda, não usar variaveis globais.


```python
x = 0


def externa():
    x = 1

    def interna():
        x = 2
        print("interna:", x)

    def interna_nao_associada():
        print("interna não associada:", x)

    interna()
    interna_nao_associada()
    print("externa:", x)


externa()
print("global:", x)
```
```output
interna: 2
interna não associada: 1
externa: 1
global: 0
```
perceba que mesmo não especificando a variavel `x` ainda sim temos um resultado, pois a mesma usou a variavel de escopo externo

#### Operadores

Em Python, operadores são simbolos (ou "sintaxes") especiais que informam que uma operação deve ser feita.

Nesse tópico eu irei dar uma visão mais detalhada dos operadores, já vimos alguns como os aritméticos e os lógicos (apenas as keywords), eis aqui uma lista com os grupos de operadores:

* Aritméticos (irei mostrar o ultimo)
* Lógicos (irei mostrar o ultimo)
* Comparativos
* Bitwise
* Associativos
* Identidade
* Membros

##### Aritméticos

Resta apenas vermos o multiplicador de matrizes (`@`), para esse operador devemos usar um módulo conhecido como `NumPy`, você verá mais sobre ele no futuro.

Esse operador multiplica os indices de duas matrizes entre si.


```python
from numpy import array

matriz_1 = [[1, 2], [3, 4]]

matriz_2 = [[5, 6], [7, 8]]

produto_das_matrizes = array(matriz_1) @ array(matriz_2)

print(produto_das_matrizes)
```
```output
[[19 22]
 [43 50]]
```
ele é o equivalente ao seguinte codigo em Python:


```python
A = [[1, 2], [3, 4]]


B = [[5, 6], [7, 8]]

N, M, P = len(A), len(A[0]), len(B[0])

result = []
for i in range(N):
    row = [0] * P
    result.append(row)

for i in range(N):
    for j in range(P):
        for k in range(M):
            result[i][j] += A[i][k] * B[k][j]

print(result)
```
```output
[[19, 22], [43, 50]]
```
##### Lógicos

Nós já vimos as funções de 3 dos 4 operadores lógicos (_sim eu omiti um operador no momento pois eu ainda não havia explicado conceitos necessários para seu entendimento_) eu estou falando do "Operador Ternário" (tambem chamado de operador condicional).

ele é essencialmente um `if` porém em uma linha, sua sintaxe é:

```
{se verdadeiro} if {expressão} else {se falso}
```

ele é chamado de ternário pois tem 3 partes ao invés de 2 como a maioria dos outros operadores.

veja um exemplo:


```python
a, b = 1, 2

c = a if a < b else b  # c = a
d = a if a > b else b  # d = b

print("C: %d\tD: %d" % (c, d))
```
```output
C: 1	D: 2
```
##### Comparativos

os comparativos são bastante usados nas estruturas de controle de flow, eles são os seguintes:

* maior que `>`
* menor que `<`
* é igual `==`
* diferente `!=`
* maior ou igual a `>=`
* menor ou igual a `<=`

Seus nomes são auto-explicativos, então irei exemplificar apenas casos complexos.

Por exemplo, podemos usar eles para definir um "raio" de ação junto com os operadores logicos.


```python
for i in range(10):
    if i > 3 and i < 7:
        print(f"o valor de i é {i}")
```
```output
o valor de i é 4
o valor de i é 5
o valor de i é 6
```
##### Indentidade

eles são simples, eles trabalham comparando o id na memória, util quando iniciarmos multi-threading.

são apenas 2:
* `is`
* `is not`

veja a diferença entre eles e os operadores comparativos `==` e `!=`:


```python
a = ["apple", "banana"]
b = ["apple", "banana"]
c = a

print(f"A é igual a B ? {a == b}")
print(f"A é B ? {a is b}")
print(f"A é C ? {a is c}")

print(f"A é diferente a B ? {a != b}")
print(f"A não é B ? {a is not b}")
print(f"A não é C ? {a is not c}")
```
```output
A é igual a B ? True
A é B ? False
A é C ? True
A é diferente a B ? False
A não é B ? True
A não é C ? False
```
A não é B, pois o endereço deles na memoria é diferente, porém seus conteudos são os mesmos então eles são iguais.

para exemplificar, mostrarei o id dos objetos:


```python
a = ["apple", "banana"]
b = ["apple", "banana"]
c = a

print(f"ID de A: {hex(id(a))}")
print(f"ID de B: {hex(id(b))}")
print(f"ID de C: {hex(id(c))}")
```
```output
ID de A: 0x7faa296d72c0
ID de B: 0x7faa295bd000
ID de C: 0x7faa296d72c0
```
Se você observar, os endereço de A e B são diferentes, já os endereços de A e C são identicos.

##### Membro

esses operadores são um pouco simples, eles apenas chegam se `x` está ou não presente em `y`

são 2:

* `in`
* `not in`

eles funcionam em iteráveis.

vejam alguns exemplos:


```python
print("h" in "abcdefghijklmnopqrstuvwxyz")
print(12 not in [1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
```
```output
True
True
```
##### Bitwise

Esses operadores não são muito ultilizados mas suas aplicações são diversas.

Você deve ter uma ideia de como computadores funcionam, certo?

De forma muito simplificada, um computador funciona atráves de uma sequencia de 0 e 1 conhecida como código binário (ou codigo de maquina), esses numeros são chamados de 'bits', e são neles que esses operadores funcionam.

eis aqui a lista:

* `AND (&)`
* `OR (|)`
* `NOT (~)`
* `XOR (^)` (exclusive or)
* `RightShift (>>)`
* `LeftShift (<<)`

antes de irmos aos exemplos eu irei explicar como binário funciona.

Se você lembra das aulas de algebra na escola certamente sabe que nós usamos sistemas numéricos para performar nossos calculos, hoje em dia nós usamos a [notação posicional](https://pt.wikipedia.org/wiki/Notação_posicional), onde cada algarismo depende da sua posição relativa na composição do numero e o valor do numero é a soma de cada algarismo que o compõe.

Atualmente nós usamos um sistema de base 10, usamos 10 algarismos na composição de nossos numeros e ao avançarmos uma casa significa o mesmo que multiplicar por 10.

*1 = 1 x 10⁰, 10 = 1 x 10¹, 100 = 1 x 10²...* e por ai vai.

Os computadores contudo, operam em base 2, ou seja, contém apenas dois algarismos, 0 e 1, ou seja, as casas representam potencias de 2.

*1 = 1 x 2⁰, 2 = 1 x 2¹, 4 = 1 x 2²...* e por ai vai.

em notação binária, 1 significa que estamos usando o valor daquela 'casa' e 0 não (da mesma forma que se escrevermos 404, não estamos usando as dezenas)

irei dispor de uma tabela com algumas casas e seus valores para facilitar o entendimento.

<div class="table-container">
|  2⁷  	|  2⁶  	|  2⁵  	|  2⁴  	|  2³  	|  2²  	|  2¹  	|  2⁰  	|      Resultado      	|
|:----:	|:----:	|:----:	|:----:	|:----:	|:----:	|:----:	|:----:	|:-------------------:	|
|  128 	|  64  	|  32  	|  16  	|   8  	|   4  	|   2  	|   1  	|       Decimal       	|
| ==== 	| ==== 	| ==== 	| ==== 	| ==== 	| ==== 	| ==== 	| ==== 	| =================== 	|
|   0  	|   0  	|   0  	|   0  	|   0  	|   1  	|   0  	|   0  	|          4          	|
|   0  	|   0  	|   1  	|   0  	|   1  	|   0  	|   0  	|   0  	|          40         	|
|   0  	|   1  	|   0  	|   0  	|   0  	|   0  	|   1  	|   1  	|          67         	|
|   0  	|   0  	|   0  	|   0  	|   0  	|   0  	|   0  	|   0  	|          0          	|
|   1  	|   1  	|   1  	|   1  	|   1  	|   1  	|   1  	|   1  	|         255         	|
</div>

Os numeros binários crescem da direita para a esquerda, começando pelo ***bit menos significante***

Espero que tenha ficado minimamente claro, e que agora você tenha uma noção básica de binário vamos aos operadores.

##### AND

o `AND` performa a [conjunção lógica](https://pt.wikipedia.org/wiki/Conjunção_lógica), basicamente ele só retorna 1 se ambos os bits forem 1.

![AND_GIF](/Classes_Assets/Images/AND.gif)

<div class="table-container">
| Variaveis 	|  2⁷  	|  2⁶  	|  2⁵  	|  2⁴  	|  2³  	|  2²  	|  2¹  	|  2⁰  	| Resultado 	|
|:---------:	|:----:	|:----:	|:----:	|:----:	|:----:	|:----:	|:----:	|:----:	|:---------:	|
|           	|  128 	|  64  	|  32  	|  16  	|   8  	|   4  	|   2  	|   1  	|  Decimal  	|
|  ======== 	| ==== 	| ==== 	| ==== 	| ==== 	| ==== 	| ==== 	| ==== 	| ==== 	|  ======== 	|
|     A     	|   1  	|   0  	|   0  	|   1  	|   1  	|   1  	|   0  	|   0  	|    156    	|
|     B     	|   0  	|   0  	|   1  	|   1  	|   0  	|   1  	|   0  	|   0  	|     52    	|
|   A & B   	|   0  	|   0  	|   0  	|   1  	|   0  	|   1  	|   0  	|   0  	|     20    	|
</div>

para exemplificar, veja este mesmo exemplo em Python:


```python
a = 156
b = 52
print(f"A ({a}) = {bin(a)}")
print(f"B ({b}) = {bin(b)}")
print(f"A & B ({a & b}) = {bin(a & b)}")
```
```output
A (156) = 0b10011100
B (52) = 0b110100
A & B (20) = 0b10100
```
o prefixo `0b` é uma conveção em representação de bases em programação, usamos `0b` para binário, `0x` para hexadecimal e `0o` para octeto

##### OR

o  `OR` performa a [disjunção lógica](https://pt.wikipedia.org/wiki/Disjunção_lógica), basicamente ele retorna 1 caso um ou todos os bits sejam 1 (ou se preferir, só retorna 0 se ambos forem iguais, essencialmente o oposto do `AND`)

![OR](/Classes_Assets/Images/OR.gif)

<div class="table-container">
| Variaveis 	|  2⁷  	|  2⁶  	|  2⁵  	|  2⁴  	|  2³  	|  2²  	|  2¹  	|  2⁰  	| Resultado 	|
|:---------:	|:----:	|:----:	|:----:	|:----:	|:----:	|:----:	|:----:	|:----:	|:---------:	|
|           	|  128 	|  64  	|  32  	|  16  	|   8  	|   4  	|   2  	|   1  	|  Decimal  	|
|  ======== 	| ==== 	| ==== 	| ==== 	| ==== 	| ==== 	| ==== 	| ==== 	| ==== 	|  ======== 	|
|     A     	|   1  	|   0  	|   0  	|   1  	|   1  	|   1  	|   0  	|   0  	|    156    	|
|     B     	|   0  	|   0  	|   1  	|   1  	|   0  	|   1  	|   0  	|   0  	|     52    	|
|   A \| B   	|   1  	|   0  	|   1  	|   1  	|   1  	|   1  	|   0  	|   0  	|    188    	|
</div>

para exemplificar, veja este mesmo exemplo em Python:


```python
a = 156
b = 52
print(f"A ({a}) = {bin(a)}")
print(f"B ({b}) = {bin(b)}")
print(f"A | B ({a | b}) = {bin(a | b)}")
```
```output
A (156) = 0b10011100
B (52) = 0b110100
A | B (188) = 0b10111100
```
##### XOR

O `XOR` performa a [Disjunção Exclusiva](https://pt.wikipedia.org/wiki/Ou_exclusivo), essencialmente, ele só retorna 1 se os bits forem opostos.

![XOR_GIF](/Classes_Assets/Images/XOR.gif)

<div class="table-container">
| Variaveis 	|  2⁷  	|  2⁶  	|  2⁵  	|  2⁴  	|  2³  	|  2²  	|  2¹  	|  2⁰  	| Resultado 	|
|:---------:	|:----:	|:----:	|:----:	|:----:	|:----:	|:----:	|:----:	|:----:	|:---------:	|
|           	|  128 	|  64  	|  32  	|  16  	|   8  	|   4  	|   2  	|   1  	|  Decimal  	|
|  ======== 	| ==== 	| ==== 	| ==== 	| ==== 	| ==== 	| ==== 	| ==== 	| ==== 	|  ======== 	|
|     A     	|   1  	|   0  	|   0  	|   1  	|   1  	|   1  	|   0  	|   0  	|    156    	|
|     B     	|   0  	|   0  	|   1  	|   1  	|   0  	|   1  	|   0  	|   0  	|     52    	|
|   A ^ B   	|   1  	|   0  	|   1  	|   0  	|   1  	|   0  	|   0  	|   0  	|    168    	|
</div>

para exemplificar, veja este mesmo exemplo em Python:


```python
a = 156
b = 52
print(f"A ({a}) = {bin(a)}")
print(f"B ({b}) = {bin(b)}")
print(f"A ^ B ({a ^ b}) = {bin(a ^ b)}")
```
```output
A (156) = 0b10011100
B (52) = 0b110100
A ^ B (168) = 0b10101000
```
##### NOT

O `NOT` performa a [Negação Lógica](https://pt.wikipedia.org/wiki/Negação), basiamente, ele inverte os bits, ele recebe só um argumento, tornando ele o unico operador unário.

![NOT_GIF](/Classes_Assets/Images/NOT.gif)

<div class="table-container">
| Variaveis 	|  2⁷  	|  2⁶  	|  2⁵  	|  2⁴  	|  2³  	|  2²  	|  2¹  	|  2⁰  	| Resultado 	|
|:---------:	|:----:	|:----:	|:----:	|:----:	|:----:	|:----:	|:----:	|:----:	|:---------:	|
|           	|  128 	|  64  	|  32  	|  16  	|   8  	|   4  	|   2  	|   1  	|  Decimal  	|
|  ======== 	| ==== 	| ==== 	| ==== 	| ==== 	| ==== 	| ==== 	| ==== 	| ==== 	|  ======== 	|
|     A     	|   1  	|   0  	|   0  	|   1  	|   1  	|   1  	|   0  	|   0  	|    156    	|
|    ~ A    	|   0  	|   1  	|   1  	|   0  	|   0  	|   0  	|   1  	|   1  	|     99    	|
</div>

Esses exemplos levam em conta que você está trabalhando com numeros sem bit de sinal, infelizmente o Python não suporta eles de forma nativa, ou seja, `~156` é o equivalente a `-157` e não a `99` pois o ultimo (o mais a esquerda) bit é o bit de sinal.

se quisermos ter 99 como resultado, devemos usar o `AND` junto com o valor maximo das casas para remover esse bit.

para exemplificar, veja este mesmo exemplo em Python:


```python
a = 156
print(f"A ({a}) = {bin(a)}")
print(f"Com Bit de Sinal: A ~ ({~a}) = {bin(~a)}")
print(f"Sem Bit de Sinal: A ~ ({~a & 255}) = {bin(~a & 255)}")
```
```output
A (156) = 0b10011100
Com Bit de Sinal: A ~ (-157) = -0b10011101
Sem Bit de Sinal: A ~ (99) = 0b1100011
```
##### LeftShift

o operador de `LeftShift` move/desvia os bits para a esquerda preenchendo o espaço restante com 0.

você especifica o numero de casas para desviar a esquerda do operador, e desviar por 1 casa é o equivalente a multiplicar por uma potencia de 2 equivalente ao numero de casas movidas.

![LEFT_SHIFT](/Classes_Assets/Images/LEFT_SHIFT.gif)

<div class="table-container">
| Variaveis 	|  2⁷  	|  2⁶  	|  2⁵  	|  2⁴  	|  2³  	|  2²  	|  2¹  	|  2⁰  	| Resultado 	|
|:---------:	|:----:	|:----:	|:----:	|:----:	|:----:	|:----:	|:----:	|:----:	|:---------:	|
|           	|  128 	|  64  	|  32  	|  16  	|   8  	|   4  	|   2  	|   1  	|  Decimal  	|
|  ======== 	| ==== 	| ==== 	| ==== 	| ==== 	| ==== 	| ==== 	| ==== 	| ==== 	|  ======== 	|
|     A     	|   0  	|   0  	|   1  	|   0  	|   0  	|   1  	|   1  	|   1  	|     39    	|
|  A &lt;&lt; 1    	|   0  	|   1  	|   0  	|   0  	|   1  	|   1  	|   1  	|   0  	|     78    	|
|  A &lt;&lt; 2    	|   1  	|   0  	|   0  	|   1  	|   1  	|   1  	|   0  	|   0  	|     156    	|
</div>

para exemplificar, veja este mesmo exemplo em Python:


```python
a = 39
print(f"A ({a}) = {bin(a)}")
print(f"A << 1 ({a << 1}) = {bin(a << 1)}")
print(f"A << 2 ({a << 2}) = {bin(a << 2)}")
```
```output
A (39) = 0b100111
A << (78) = 0b1001110
A << (156) = 0b10011100
```
##### RightShift

o operador de `RightShift` move/desvia os bits para a direita preenchendo o espaço restante com 0.

você especifica o numero de casas para desviar a esquerda do operador, e desviar por 1 casa é o equivalente a dividir por uma potencia de 2 equivalente ao numero de casas movidas.

![RIGHT_SHIFT](/Classes_Assets/Images/RIGHT_SHIFT.gif)

<div class="table-container">
| Variaveis 	|  2⁷  	|  2⁶  	|  2⁵  	|  2⁴  	|  2³  	|  2²  	|  2¹  	|  2⁰  	| Resultado 	|
|:---------:	|:----:	|:----:	|:----:	|:----:	|:----:	|:----:	|:----:	|:----:	|:---------:	|
|           	|  128 	|  64  	|  32  	|  16  	|   8  	|   4  	|   2  	|   1  	|  Decimal  	|
|  ======== 	| ==== 	| ==== 	| ==== 	| ==== 	| ==== 	| ==== 	| ==== 	| ==== 	|  ======== 	|
|     A     	|   1  	|   0  	|   0  	|   1  	|   1  	|   1  	|   0  	|   0  	|     156    	|
|  A &gt;&gt; 1    	|   0  	|   1  	|   0  	|   0  	|   1  	|   1  	|   1  	|   0  	|     78    	|
|  A &gt;&gt; 2     	|   0  	|   0  	|   1  	|   0  	|   0  	|   1  	|   1  	|   1  	|     39    	|
|  A &gt;&gt; 3     	|   0  	|   0  	|   0  	|   1  	|   0  	|   0  	|   1  	|   1  	|     19    	|
</div>

para exemplificar, veja este mesmo exemplo em Python:


```python
a = 156
print(f"A ({a}) = {bin(a)}")
print(f"A >> 1 ({a >> 1}) = {bin(a >> 1)}")
print(f"A >> 2 ({a >> 2}) = {bin(a >> 2)}")
print(f"A >> 3 ({a >> 3}) = {bin(a >> 3)}")
```
```output
A (156) = 0b10011100
A >> 1 (78) = 0b1001110
A >> 2 (39) = 0b100111
A >> 3 (19) = 0b10011
```
##### Bitwise Masking

Masking consiste em mascarar os bits, para fazer operações especificas nesses bits, um exemplo seriam os Shifts Limitados a uma janela de bits.

![BITMASKED_LEFT_SHIFT](/Classes_Assets/Images/BITMASKED_LEFT_SHIFT.gif)
![BITMASKED_RIGHT_SHIFT](/Classes_Assets/Images/BITMASKED_RIGHT_SHIFT.gif)

você usa o `AND` com o comprimento em bits da janela


```python
A = 39
print(f"A << 3 ({A << 3}): {bin(A << 3)}")
print(f"(A << 3) & 255 ({(A << 3) & 255}): {bin((A << 3) & 255)}")
```
```output
A << 3 (312): 0b100111000
(A << 3) & 255 (56): 0b111000
```
##### Associativos

Os associativos são bem simples, eles funcionam como abreviação dos outros operadores, eles servem para performar uma ação e reassocia a mesma variavel, pois sua ordem de operação é da direita pra esquerda.

eles são os seguntes:

* Igual `=`
* Mais-Igual `+=`
* Menos-Igual `-=`
* Multiplicação-Igual `*=`
* Divisão-Igual `/=`
* Modulo-Igual `%=`
* Potencia-Igual `**=`
* TrueDiv-Igual `//=`
* AND-Igual `&=` (Bitwise)
* OR-Igual `|=` (Bitwise)
* XOR-Igual `^=` (Bitwise)
* RightShift-Igual `>>=` (Bitwise)
* LeftShift-Igual `<<=` (Bitwise)
* Associação de expressão (Walrus Operator) `:=`

eu vou explicar apenas 3 operadores, entendendo eles você entende o resto.

##### Igual

O igual `=`, é o operador associativo em si, é ele quem diz o que é o que.


```python
x = 3  # x é igual a 3
a = "ye"  # a é igual a "ye"
v = True  # v é igual a True

print(x, a, v)
```
```output
3 ye True
```
##### Mais-Igual

A lógica usada aqui se aplica aos demais (menos ao Walrus Operator).

basicamente o operador Mais-Igual `+=` é a versão reduzida/equivalente a `x = x + y`, você adiciona o valor de forma reassociativa, veja um exemplo:


```python
x = 9
print(x)
x += 33
print(x)
```
```output
9
42
```
essencialmente, pegamos o valor inicial de `x`, somamos `33` e reassociamos o resultado a variavel novamente, exemplificando em etapas:

- 1. `x = 9`
- 2. `x = x + 33`
- 3. `x = 9 + 33`
- 4. `x = 42`

##### Associação de expressão (Walrus Operator)

O operador de associação de expressão `:=` (Walrus Operator) foi introduzindo no Python 3.8, seu uso é bastante peculiar.

ele permite executarmos e associarmos expressões em uma mesma linha.

por exemplo, veja o seguinte codigo:


```python
2 + 4  # Uma expressão é executada
```



```output
6
```


ao rodarmos o codigo recebemos o numero 6, pois, expressões são codigos que retornam um valor, associações não. Contudo, podemos associar o valor resultante de uma expressão a uma variavel.


```python
n = (
    2 + 5
)  # Uma expressão é  de soma executada e tem seu valor associado a uma variavel n
```

para vermos o valor, precisamos acessa-lo através de funções como a `print()`


```python
n = 2 + 5
print(n)
```
```output
7
```
se nós tentarmos acessar o valor e executar a expressão ao mesmo erro teremos um erro.


```python
print(n=3 + 8)
# TypeError: 'n' is an invalid keyword argument for print()
```

O Walrus Operator nos permite fazer isso.


```python
print(n := 3 + 8)
print(n)
```
```output
11
11
```
Ele nos permite acessar o valor enquanto ele esta sendo associado, e mais a frente podemos acessar a variavel contendo o valor.

##### Precedencia de Operadores Geral

O Python segue uma precedencia de operadores especifica, eis aqui a lista:

<div class="table-container">
| Precedencia 	|                        Operador                       	|                                    Descrição                                    	|
|:-----------:	|:-----------------------------------------------------:	|:-------------------------------------------------------------------------------:	|
|      {'1'}      	|                      {'(), [] ou {}'}                     	|             {'Parenteses, Exibição de listas, dicionários e conjuntos'}             	|
|      {'2'}      	| {'x[index], x[index:index] x(arguments...), x.attribute'} 	|                   {'atributos, fatiamentos e chamada de funções'}                   	|
|      {'3'}      	|                         {'await'}                         	|                                 {'espera asycrona'}                                 	|
|      {'4'}      	|                           {'**'}                          	|                                  {'exponenciação'}                                  	|
|      {'5'}      	|                        {'+, -, ~'}                        	|                         {'Positivo, negativo e bitwise NOT'}                        	|
|      {'6'}      	|                     {'*, @, /, //, %'}                    	| {'Multiplicação, multiplicação de matrizes, divisão, "divisão verdadeira", modulo'} 	|
|      {'7'}      	|                          {'+, -'}                         	|                                 {'Soma e subtração'}                                	|
|      {'8'}      	|                         {'<<, >>'}                        	|                                  {'Bitwise Shifts'}                                 	|
|      {'9'}      	|                           {'&'}                           	|                                   {'Bitwise AND'}                                   	|
|      {'10'}     	|                           {'^'}                           	|                                   {'Bitwise XOR'}                                   	|
|      {'11'}     	|                           {'\|'}                          	|                                    {'Bitwise OR'}                                   	|
|      {'12'}     	|      {'in, not in, is, is not, <, <=, >, >=, !=, =='}     	|                                   {'Comparadores'}                                  	|
|      {'13'}     	|                         {'not x'}                         	|                                   {'NOT Booleano'}                                  	|
|      {'14'}     	|                          {'and'}                          	|                                   {'AND Booleano'}                                  	|
|      {'15'}     	|                           {'or'}                          	|                                   {'OR Booleano'}                                   	|
|      {'16'}     	|                       {'if - else'}                       	|                              {'Expressão Condicional'}                              	|
|      {'17'}     	|                         {'lambda'}                        	|                            {'Funções/Expressões Lambda'}                            	|
|      {'18'}     	|                           {':='}                          	|                    {'Expressão de associação (Walrus Operator)'}                    	|

</div>
