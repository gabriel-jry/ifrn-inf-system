from pandas import DataFrame
from requests import get

class BancoDados():
    def __init__(self, link):
        self.link = link
        self.dados = []

    def verificar(self):
        resposta = get(self.link)
        if resposta.status_code == 200:
            return True
        return False

    def requisição(self):
        requisição = get(self.link)
        dataframe = DataFrame(requisição.json())
        self.dataframe = dataframe

    def remover_none(self):
        for item in self.dados:
            for chave, valor in item.items():
                if valor is None:
                    item[chave] = '-'

    def tratamento(self, tipo='professores OU cursos', opções=[]):
        contador = 0
        while self.dataframe.shape[0] > contador:
            dados = {}
            if tipo.lower() == 'cursos':
                quantidade_variaveis = 6
            else:
                quantidade_variaveis = 8
            for c in range(0, quantidade_variaveis):
                dados[opções[c]] = self.dataframe.loc[contador, opções[c]]

            if tipo == 'cursos':
                dados['link'] = dados[opções[0]].lower().replace(' ', '-')
                materias = []
                for materia in dados[opções[5]]:
                    if materia not in materias:
                        materias.append(materia['nome'])
                dados[opções[5]] = materias
                if materias:
                    if self.dados:
                        if dados[opções[0]] not in self.dados[:]:
                            self.dados.append(dados)
                    else:
                        self.dados.append(dados)
            else:
                dados['url_foto_75x100'] = 'https://suap.ifrn.edu.br' + dados['url_foto_75x100']
                self.dados.append(dados)
            contador += 1
        return self.dados
