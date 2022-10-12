# Cadastro de carros

**Requisito funcionais**
Deve ser possivel cadastrar um novo carro
<!-- Deve ser possivel listar todos as categorias -->

**Regra de negocios**
Não deve ser possível cadastrar um carro com uma placa ja existente.
<!-- Não deve ser possivel altarar a placa de um carro ja cadastrado. -->
O carrro deve ser cadastrado, por padrão, com disbonipilidade.
O usuario respensavel pelo cadastro deve ser um usuario administrador.


# Listagem de carros
**Requisito funcionais**
Deve ser possivel listar todos o carros disponiveis.
Deve ser possivel listar todos o carros disponiveis pelo nome da categoria.
Deve ser possivel listar todos o carros disponiveis pelo nome da marca.
Deve ser possivel listar todos o carros disponiveis pelo nome do carro.

**Regra de negocios**
Usuario n precisa estar logado no sistema.


# Cadastro de Especificação no carro
**Requisito funcionais**
Deve ser possivel cadastrar uma especificação para um carro
Deve ser possivel listar todas as especificações
deve ser possivel listar todos os carros


**Regra de negocios**
Não deve ser possivel cadastrar uma especificação para um carro não cadastrado.
Não deve ser possivel cadastrar uma especificação já existente para o mesmo carro.


# Cadastro de imagens do carro

**RF** 
Deve ser possivel cadastrar a imagem do carro

**RNF**
Utilizar o multer para upload dos arquivos

**RN**
O usuario deve poder cadastrar mais de uma imagem para o mesmo carro.
O usuario resnposavel pelo cadastro deve ser um usuario administrador.

# Aluguel de carro

**RF**
Deve ser possivel cadastrar um aluguel.

**RN**
O aluguel deve ter duração minima de 24 horas.
Não deve ser possivel cadastrar um aluguel caso ja exista um aberto para o mesmo usuario.
Não deve ser possivel cadastrar um aluguel caso ja exista um aberto para o mesmo carro.


