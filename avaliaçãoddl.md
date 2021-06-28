## Avaliação DDL
Gustavo Tramtonin Pedro - 202 Info

### 1
```
create database vendas;
```
### 2

```
create table produto (
    descricao varchar(50),
    preco numeric,
    estoque numeric,
    idProduto numeric
);

create table venda (
    data date,
    status varchar(1),
    idVenda integer,
    idCliente varchar(1)
);

create table parcelamento (
    idParcela integer,
    datavencimento date,
    datapagamento date,
    valor numeric,
    idVenda integer
);

create table cliente (
    nome varchar(50),
    fone varchar(14),
    email varchar(50),
    idCliente varchar(1)
);

create table items (
    qtde numeric,
    precoItem numeric,
    idProduto integer,
    idVenda integer
);
```

### 3
```
alter table produto add primary key (idProduto);
alter table venda add primary key (idVenda);
alter table parcelamento add primary key (idParcela);
alter table cliente add primary key (idCliente);
```

### 4
```
alter table venda add foreign key (idCliente) references cliente (idCliente);

alter table parcelamento add foreign key (idVenda) references venda (idVenda);

alter table items add foreign key (idProduto) references produto (idProduto);

alter table items add foreign key (idVenda) references venda (idVenda);
```

### 5
```
alter table produto add check (preco >= 0);
alter table produto add check (estoque >= 0);

alter table parcelamento add check (valor >= 0);

alter table items add check (qtde >= 0);
alter table items add check (precoItem >= 0);

```

### 6
```
alter table items add column desconto numeric;
alter table items add column acrescimo numeric;
```