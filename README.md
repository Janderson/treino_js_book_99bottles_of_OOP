# Treino Bottles of OOP 
## Objetivo: 202210-12
explorar apendices A do livro e escrever códigos

The test suite contains one failing test, and many skipped tests. Your goal is to write code that
passes all of the tests. Follow this protocol:
* run the tests and examine the failure
* write only enough code to pass the failing test
* unskip the next test (this simulates writing it yourself)

Work on this task for 30 minutes. The vast majority of folks do not finish in 30 minutes, but it’s
useful, for later comparison purposes, to record how far you got. Even if you can’t force yourself
to stop at that point, take a break at 30 minutes and save your code.


-----
comando de clone
git clone --depth=1 --branch=2.1-appendix-b-exercise-10 https://github.com/sandimetz/99bottles_js.git

----

correto para export modulo js é module.exports


yarn test
continuo obtendo esse erro 

TypeError: _bottles.Bottles is not a constructor


consultei o proprio github
https://github.com/sandimetz/99bottles_js/blob/2.0-c2-tests-310/lib/bottles.js


### Aprendizado 
o jeito correto de exportar uma class é 
export { ClassName }
no arquivo que importa
import { ClassName } from '../lib/bottles';



estou tendo problemas para usar, var, let, const

### Sub treino 
artigo: https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/

feito treino_vars_using_let_1.js
feito treino_vars_using_let_2.js
feito treino_vars_using_var_1.js



  Bottles
    ✓ the first verse (2 ms)
    ✓ another verse
    ✓ verse 2 (1 ms)
    ✓ verse 1
    ✓ verse 0
    ✕ a couple verses (13 ms)
    ○ skipped a few verses
    ○ skipped the whole song

parei nos que retorno mais de um verso

links usados:
https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/
https://www.luiztools.com.br/post/como-criar-classes-em-javascript-es6-e-node-js/
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import