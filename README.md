# Gerenciador De Eventos
Pequena aplicação escrita em Node.js para exercitar noções de desenvolvimento: 

## Funções: 
 - cadastrar evento; 
 - alterar evento; 
 - listar eventos; 
 - excluir evento; 
 - participar de um evento.

## Telas: 
  - login; 
  - dashboard (lista os eventos existentes); 
  - cadastrar evento.

## Modelos: 
       - usuário; 
       - evento;

- usuario:{  
	nome: {type: String, required: true}
	password: {type: String, required: true}
	data_cadastro: {type: Date, default: Date.now}
	meus_convites: [ {type: ObjectId, required: true, ref: 'Evento'}]
}

- evento:{
	nome: {type: String, required: true}
	descrição: {type: String, required: true}
	localidade:{
	     uf:{ type: ENUM}
	     endereço: {type: String, required: true}
	}

	capacidade_max: {type: Number, required: true}
	capacidade_min:  {type: Number, required: true}
	usuario_criador: {type: ObjectId, required: true, ref: 'Usuario'}
}