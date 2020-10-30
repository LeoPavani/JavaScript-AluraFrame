class Negociacao{
    constructor(data, quantidade, valor){
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(Negociacao);

    }    

    get data(){
        return new Date(this._data.getTime()); 
    }

    get quantidade(){
        return _quantidade;
    }
    
    get valor(){
        return _valor;
    }
    
    get volume(){
        return this._valor * this._quantidade
    }
}