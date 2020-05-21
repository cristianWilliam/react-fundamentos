# Fundamentos React JS
Após executar um CrashCourse de ReactJS, decidi iniciar um curso sobre este framework para aprender as boas práticas e as técnicas de maneira mais específica.

## Maneira de Aprendizado:
Desenvolvi um controle que atua como um "Card" para cada novo fundamento aprendido. Até o momento já colecionei 12 deles.

<image src="src/images/FirstCommit.png" width="700"/>

- **#01 - First Component**
  - Primeiro componente, um hello world em ReactJs.
- **#02 - Component Params**
  - Parâmetros são passados via props. Neste ponto foi desenvolvido os Cards.
- **#03 - Random w/ Params**
  - Leve exercicio para aprender parametros via props.
- **#04 - Child 2 levels Params**
  - Aprendi a passar parametros de um componente "Pai" para um "filho > filho" usando desestruturação JS.
- **#05 - Looping Render**
  - Aprendi a renderizar arrays utilizando metodo map.
- **#06 - Table Render**
  - Leve exercício para renderizar, utilizando map, porém com output em table html.
- **#07 - Conditional Render**
  - Renderizar um componente utilizando uma expressão logica condicional, neste caso foi utilizado operação ternária e props.child.
- **#08 - Conditional Controller**
  - Aprendi uma boa prática, criando um componente <IF> para renderizar, logica simples também com ternário e props.child.
- **#09 - Direct Communication**
  - Exemplificação de comunicação entre um component parent, e um child.
- **#10 - UseState Changes**
  - Comunicação de dados de um component child para um component parent. Neste fundamento, aprendi uns dos principais conceitos de React, os States e como isso funciona junto com functional components.
- **#11 - Controlled Component**
  - Aprendi que para interagir com componentes em react, é necessário criar uma funcão para comunicar com a DOM, isso é premissa para inputs.
- **#12 - Component Class**
  - Criação de componentes utilizando Classes, novos conceitos, porém prefiro utilizar funções por ser menos verboso.
  
## Estilização
  Neste projeto não foi utilizado Bootstrap justamente para aprimorar mais em CSS3.
  
## Achei interessante 
  Gostei muito também de aprender spread, desestruturação e rest operator em JS, isso é muito inteligente.
  
  Além de toda a flexibilidade do React, achei interessante passar Style para um componente utilizando um objeto JavaScript porém com padrões camelCase. Neste caso da para aplicar folhas de estilho CSS junto com Objetos JavasScript.  
  ```
    <button style={{ backgroundColor: "#6886C5" }} onClick={this.inc}>
          Incrementar +
    </button>
  ```
  Esta foi a estratégia utilizada para construir cada Card de uma cor.
  ```
    export default (props) => {
      const cardstyle = {
        backgroundColor: props.color || "#cceabb",
        borderColor: props.color || "#cceabb",
      };

      return (
        <div className="Card" style={cardstyle}>
          <div className="Title">{props.titulo}</div>
          <div className="Content">{props.children}</div>
        </div>
      );
    };
```
