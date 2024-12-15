from flask import Flask, render_template, request
from settings import BancoDados

cursos = BancoDados('https://dados.ifrn.edu.br/dataset/7b48f9d0-205d-46b1-8225-a3cc7d3973ff/resource/fe0e9d2c-1c02-4625-b692-13edcc3380ae/download/dados_extraidos_recursos_cursos-ofertados.json')

professores = BancoDados('https://dados.ifrn.edu.br/dataset/0c5c1c1a-7af8-4f24-ba37-a9eda0baddbb/resource/c3f64d5b-f2df-4ef2-8e27-fb4f10a7c3ea/download/dados_extraidos_recursos_servidores.json')

if professores.verificar() != True or cursos.verificar() != True:
    print('Erro ao consultar a API. Verifique a conexão com a internet ou a URL da API.')
else:
    cursos.requisição()
    professores.requisição()

    cursos_dados = cursos.tratamento('cursos', ['descricao', 'modalidade', 'carga_horaria', 'coordenador', 'diretoria', 'componentes_curriculares'])

    professores_dados = professores.tratamento('professores', ['nome', 'campus', 'url_foto_75x100', 'matricula', 'cargo', 'categoria', 'setor_siape', 'jornada_trabalho'])

    cursos.remover_none()
    professores.remover_none()

    app = Flask(__name__)

    @app.route('/')
    def inicial():
        return render_template('index.html')

    @app.route('/cursos')
    def cursos():
        breadcrumb = [('Home', '/')]
        return render_template('page-cursos.html', html_cursos=cursos_dados, breadcrumb=breadcrumb)

    @app.route('/cursos/<cursopath>')
    def curso(cursopath):
        for curso in cursos_dados:
            if curso['link'] == cursopath:
                breadcrumb = [('Home', '/'), ('Cursos', '/cursos')]
                return render_template('single-cursos.html', html_cursos=curso, breadcrumb=breadcrumb)

    @app.route('/professores')
    def professores():
        breadcrumb = [('Home', '/')]
        return render_template('page-servidores.html', html_professores=professores_dados, breadcrumb=breadcrumb)

    @app.errorhandler(404)
    def pagina_error(error):
        return render_template('page-404.html'), 404

    if __name__ == '__main__':
        app.run()
