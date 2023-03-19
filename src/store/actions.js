import Vue from "vue";
export const setTradeResult =({state,commit},tradeResult)=>{

    commit("updateTradeResult",tradeResult);

    let tradeData={
        purchase:state.purchase,
        sale:state.sale
    }

    Vue.http.put("https://urun-islemleri-prod-2b860-default-rtdb.firebaseio.com/trade-result.json",tradeData)
    .then(response=>{
    })
}

export const getTradeResult =({commit})=>{
    Vue.http.get("https://urun-islemleri-prod-2b860-default-rtdb.firebaseio.com/trade-result.json")
    .then(response=>{
        let resp = response.body
        if (!resp){
            resp = {}
            resp.sale = 0
            resp.purchase = 0
        }
        commit("updateTradeResult",response.body);
    })
}



//commit ile mutations çağrılır
//dispatch ile actions çağrılır
