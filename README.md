# 🌟 Marco no Aprendizado em JavaScript

Este repositório marca um momento significativo no meu aprendizado de **JavaScript**, consolidando conceitos fundamentais através da criação de dois projetos de CRUD com um "mini banco de dados". 🚀

---

## 📝 **Sobre o Projeto**

Dentro do curso da **FAP**, após aproximadamente dois meses de estudos intensivos, desenvolvi meus primeiros CRUDs para reforçar os seguintes conceitos:  
- **Lógica de Programação**  
- **Funções**  
- **Arrays**  
- **Loops**  
- **Orientação a Objetos**  

Os CRUDs utilizam **arrays de objetos** para simular um banco de dados, permitindo:  
1. Praticar manipulação de dados;  
2. Consolidar conhecimento sobre estruturas de dados e interação com arrays;  
3. Criar soluções funcionais, cobrindo o ciclo completo de **Create**, **Read**, **Update**, e **Delete**.  

---

## 🔍 **Aprendizado**

Este projeto foi uma excelente oportunidade para:  
- **Colocar em prática os fundamentos de JavaScript;**  
- **Criar uma base sólida para projetos futuros;**  
- **Adquirir confiança no desenvolvimento de aplicações básicas.**  

---

## 📂 **Estrutura do Repositório**

O repositório está dividido em dois projetos principais:

### 1️⃣ **CRUD Internado Example**
Localizado na pasta `/crud-internado-example`, este exemplo foca na **gestão de pacientes internados** e dos **leitos** em que estão alocados.

#### **Estrutura**  
```plaintext
/crud-internado-example
 ├── /functions
 │    ├── add-internado-leito.js
 │    ├── delete-functions.js
 │    ├── read-internado-leito.js
 │    ├── updates-function.js
 ├── /src
 │    ├── database.js
 ├── index.js
```

### O que cada arquivo faz

- /functions: Contém as funções de manipulação dos dados:
 - add-internado-leito.js: Adiciona pacientes e leitos.
 - read-internado-leito.js: Exibe internados e leitos.
 - updates-function.js: Atualiza os dados de pacientes ou leitos.
 - delete-functions.js: Remove pacientes e leitos.
- /src/database.js: Define os arrays que simulam o banco de dados (internado e leitos).
- index.js: Arquivo principal que demonstra a execução das operações CRUD.

### **2️⃣ CRUD Tutor Example**
Localizado na pasta /crud-tutor-example, este exemplo foca na gestão de tutores, permitindo manipular informações relacionadas a eles.

#### **Estrutura**
```plaintext
/crud-tutor-example
 ├── /functions
 │    ├── add-function.js
 │    ├── read-function.js
 │    ├── update-function.js
 │    ├── delete-function.js
 ├── /src
 │    ├── database.js
 ├── index.js
```

### O que cada arquivo faz

- /functions: Contém as funções de manipulação dos dados:
- add-function.js: Adiciona tutores.
- read-function.js: Exibe os dados dos tutores.
- update-function.js: Atualiza informações dos tutores.
- delete-function.js: Remove tutores.
- /src/database.js: Define os arrays que simulam o banco de dados.
- index.js: Arquivo principal que demonstra a execução das operações CRUD.

## **💡 Como Executar**
1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```
2. Navegue até o diretório desejado:
```bash
cd crud-internado-example
# ou
cd crud-tutor-example
Instale as dependências (se aplicável):
```

3. Instale as dependências e execute o arquivo principal:
```bash
npm install  //dependências
node index.js
```

## **📚 Tecnologias Utilizadas**

- JavaScript (Node.js)
- Estrutura modular de arquivos
- Simulação de banco de dados com arrays de objetos

## **🤝 Contribuições**
Sinta-se à vontade para abrir issues ou enviar pull requests para melhorar este projeto! 😄

## **🏆 Autor**
Desenvolvido por [Ricardo Vitor Castilho](https://github.com/RicardoVCastilho) durante o curso da FAP.


