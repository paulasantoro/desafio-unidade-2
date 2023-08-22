# Calculadora-de-frete
<h4 align="center"> 
	🚧 Calculadora de frete 🚧
</h4>

<p align="center">
	<img alt="Status Concluído" src="https://img.shields.io/badge/STATUS-CONCLU%C3%8DDO-brightgreen">
</p>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-contribuidores">Contribuidores</a> • 
 <a href="#-autor">Autor</a> • 
</p>

## 💻 Sobre o projeto

Projeto desenvolvido durante a segunda unidade do curso de desenvolvimento Back-end oferecido pela [Cubos Academy](https://cubos.academy/).

O projeto “Calculadora de frete” é uma aplicação desenvolvida para calcular o valor do frete com base no CEP de destino. Através da utilização de tecnologias como JavaScript, Node.js e npm, o sistema possibilita uma maneira simples de custear envios para diferentes regiões do Brasil.


---

## ⚙️ Funcionalidades

- [x] Cálculo preciso
- [x] Cadastro de produtos
- [x] Listagem de produtos com base no ID
- [x] Integração com fontes de dados de CEP
- [x] Personalização de tarifas
- [x] Exibição de resultados
---

## 🛣️ Como executar o projeto

Este projeto é divido em duas partes:
1. Backend (pasta server)
2. Insomia (testes de API)

💡 O insomia precisa que o Backend esteja sendo executado para funcionar.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Node.js](https://nodejs.org/en/), [Insomia](https://insomnia.rest/download) . 
<br> Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone git@github.com:paulasantoro/desafio-unidade-2.git

# Instale as dependências
$ npm install utils-playground

# Execute a aplicação em modo de desenvolvimento
$ npm run dev:server

# O servidor inciará na porta:3000 - acesse http://localhost:3000  

```
<p align="center">
  <a href="https://github.com/cubos-academy/academy-template-readme-projects" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

#### Cadastre os produtos no arquivo produtos.js localizado na pasta banco de dados, respeitando o exemplo a baixo: 
<img style="border-radius: 50%;" src="https://github.com/paulasantoro/desafio-unidade-2/blob/main/bancodedados.png" width="1000px;" alt=""/>

#### Nesse programa o frete é calculado com base no valor do produto e no estado do destinatário. 
<img style="border-radius: 50%;" src="https://github.com/paulasantoro/desafio-unidade-2/blob/main/controladores.png" width="1000px;" alt=""/>
A taxa de frete padrão é de 12% com variação para alguns estados podendo ser 10% ou 15%. Para efetuar alterações acessar o arquivo controladores.js na pasta controladores.

#### Nesse programa vamos ter 3 rotas, a primeira para listar todos os produtos que temos cadastrados, a segunda para listar um produto com base no ID e a terceira para calcular o frete
<img style="border-radius: 50%;" src="https://github.com/paulasantoro/desafio-unidade-2/blob/main/rotas.png" width="1000px;" alt=""/>

#### 🧭 Rodando a aplicação no Insomia 

#### Nessa primeira rota podemos listar todos os produtos cadastrados no banco de dados.
<img style="border-radius: 50%;" src="https://github.com/paulasantoro/desafio-unidade-2/blob/main/listar%20produtos%20.png" width="1000px;" alt=""/>

#### Na segunda rota é preciso indicar o ID do produto para que ele seja listado.
<img style="border-radius: 50%;" src="https://github.com/paulasantoro/desafio-unidade-2/blob/main/listar%20produtos%20pelo%20id.png" width="1000px;" alt=""/>

#### Na terceira rota é preciso indicar o ID do produto e o CEP do destinatário na URL para que seja calculado o valor frete com base no estado. (O valor é mostrado em centavos)
<img style="border-radius: 50%;" src="https://github.com/paulasantoro/desafio-unidade-2/blob/main/calcular%20frete.png" width="1000px;" alt=""/>

---


## 👨‍💻 Contribuidores
<table>
  <tr>
    <td align="center"><a href=""><img style="border-radius: 50%;" src="https://github.com/paulasantoro/desafio-unidade-2/blob/main/IMG_00-16.jpg" width="100px;" alt=""/><br /><sub><b>Paula Santoro </b></sub></a><br /><a href="https://cubos.academy/" title="">👨‍💻</a></td>
  </tr>
</table>

## 💪 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](./CONTRIBUTING.md)

---
## 🧙‍♂️ Autor
 <img style="border-radius: 50%;" src="https://media.licdn.com/dms/image/D4D03AQEDfulqSVXZqw/profile-displayphoto-shrink_200_200/0/1674667231041?e=1688601600&v=beta&t=C-f9fp3xJDwXm1u4c6eMwpWfVIyW0eCTDAKGIyNdRJA" width="100px;" alt=""/>
 <br /> <sub><b>Paula Santoro</b></sub></a> <a href="" title="">✨</a>
 <br />

---
