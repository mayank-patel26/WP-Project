let Cart=(function(){
    let idList=[]
    let addId=(id)=>{
        idList.push(id);
    }
    let getIdList=()=>{
        return idList;
    }
    return{
        getIdList :getIdList,
        addId :addId

    }
})();

export default Cart;