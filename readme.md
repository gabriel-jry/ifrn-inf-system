#### **Visão Geral**

Esta é uma aplicação web desenvolvida com Flask, projetada para buscar e exibir informações sobre **cursos** e **professores** do **Instituto Federal do Rio Grande do Norte (IFRN)** utilizando APIs públicas. Os dados são processados e exibidos em páginas dinâmicas.

---

#### **Funcionalidades**

- **Página de Cursos**: Exibe uma lista de cursos do IFRN, com detalhes como descrição, modalidade, carga horária, coordenador, diretoria e componentes curriculares.
- **Página de Professores**: Mostra informações sobre os professores do IFRN, incluindo nome, campus, foto, matrícula, cargo, categoria, setor e jornada de trabalho.
- **Páginas Individuais de Cursos**: Exibe informações detalhadas sobre um curso específico.
- **Tratamento de Erros**: Inclui uma página personalizada de erro 404 para rotas inexistentes.
- **Navegação Breadcrumb**: Facilita a navegação entre as páginas.

---

#### **Pré-requisitos**

- **Python 3.7+**
- Bibliotecas:
  - Flask
  - Módulo `settings` (responsável por requisições e processamento de dados)

---

#### **Instruções de Configuração**

1. **Clone o Repositório**
   ```bash
   git clone https://github.com/seu-repositorio-url.git
   cd pasta-do-repositorio
   ```

2. **Instale as Dependências**
   Instale as bibliotecas Python necessárias utilizando o `pip`:
   ```bash
   pip install flask
   ```

3. **Configure o Módulo `settings`**
   Certifique-se de que o arquivo `settings.py` está no diretório do projeto. Ele deve definir a classe `BancoDados` com métodos como:
   - `verificar()`: Verifica a conexão com a API.
   - `requisicao()`: Realiza a requisição dos dados.
   - `tratamento()`: Processa e formata os dados.
   - `remover_none()`: Remove entradas com valores `None`.

4. **Execute a Aplicação**
   Inicie o servidor Flask:
   ```bash
   python app.py
   ```

5. **Acesse a Aplicação**
   Abra o navegador e acesse:
   ```
   http://127.0.0.1:5000/
   ```

---

#### **Estrutura de Arquivos**

```
projeto/
├── templates/
│   ├── index.html           # Página inicial
│   ├── page-cursos.html     # Página de listagem de cursos
│   ├── single-cursos.html   # Página de detalhes de um curso
│   ├── page-servidores.html # Página de listagem de professores
│   ├── page-404.html        # Página personalizada de erro 404
├── static/                  # Arquivos estáticos (CSS, JS, imagens)
├── settings.py              # Lógica para interação com APIs e processamento de dados
├── app.py                   # Código principal da aplicação Flask
├── requirements.txt         # Lista de dependências Python
└── README.md                # Documentação
```

---

#### **Fontes de Dados**

- **API de Cursos**:  
  URL: [Dados de Cursos do IFRN](https://dados.ifrn.edu.br/dataset/7b48f9d0-205d-46b1-8225-a3cc7d3973ff/resource/fe0e9d2c-1c02-4625-b692-13edcc3380ae/download/dados_extraidos_recursos_cursos-ofertados.json)
  
- **API de Professores**:  
  URL: [Dados de Professores do IFRN](https://dados.ifrn.edu.br/dataset/0c5c1c1a-7af8-4f24-ba37-a9eda0baddbb/resource/c3f64d5b-f2df-4ef2-8e27-fb4f10a7c3ea/download/dados_extraidos_recursos_servidores.json)

---

#### **Rotas**

| Rota                    | Descrição                                   |
|-------------------------|---------------------------------------------|
| `/`                     | Página inicial                             |
| `/cursos`               | Exibe todos os cursos                      |
| `/cursos/<cursopath>`   | Mostra informações detalhadas de um curso  |
| `/professores`          | Exibe todos os professores                 |
| `*`                     | Página 404 para rotas inválidas            |

---

#### **Contribuição**

Sinta-se à vontade para enviar issues ou contribuir com o projeto por meio de pull requests.

---

#### **Licença**

Este projeto está licenciado sob a **Licença MIT**. Consulte o arquivo `LICENSE` para mais detalhes.
