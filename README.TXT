Eu criei o banco normal pela configuração de instancia do MYSQL mesmo.
 
Depois abrir o modelo no MySQL Workblench 5.1 (gratuito), foi em:
 
 
DataBase --> Manage Connections..
 
Lá eu criei a conexao ao mysql feito, lembrando que vc deve criar o banco mydb, com usuario root e senha root.
 
Depois, fui em DataBase --> Forward Engineer.
 
Next --> Next --> Next --> Em Stored Connection, vc seleciona o banco que vc configurou.
 
Execute..
 
Ele irar mostrar o log se as tabelas foram ou nao criadas com sucesso.
 
 
Dai, vc criar o usuario usando o sql abaixo:
 
/* Insere para testar login
 * Seguir os passos abaixo para criar o usuario de acesso admin
 */

/*Inseri um registro na tabela PESSOA*/
insert into pessoa values (1 , 'AdminFarma', '0000000000', 'admin@farmatads.br')
/*2) Inserir um registro na tabela pessoa_fisica, utilizando o id de pessoa para fazer o relacionamento*/
insert into pessoa_fisica values (1, '1234567890', '1234567')
/*3) Inserir um registro na tabela funcionario, utilizando o id da pessoa no ultimo campo
* se prefirir pode colocar null no primeiro valor assim:
* insert into FUNCIONARIO values ( NULL , 'SCS', '123', true, 1) 
* pois como eh um AutoIncrement ele irar gerar uma chave sem problemas */
insert into FUNCIONARIO values (1, 'SCS', '123', true, 1)
 
 
 
Use:
E-mail (Login): admin@farmatads.br
Senha: 123