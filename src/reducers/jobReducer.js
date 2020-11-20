import { SHOW_INVOICES, SHOW_JOBS, SHOW_PURCHASES, SHOW_QUOTES } from "../actions/actionsTypes";

let initialState = {
    shouldDisplayQuotes:null,
    shouldDisplayJobs:{},
    shouldDisplayInvoices:null,
    shouldDisplayPurchase:null
}

export default (state = initialState, action)=>{

    switch (action.type){
        case SHOW_QUOTES: 
            return {
                shouldDisplayQuotes:{},
            }
        case SHOW_JOBS:
            return {
                shouldDisplayJobs:{}
            }
        case SHOW_INVOICES:
            return{
                shouldDisplayInvoices: {}
            }
        case SHOW_PURCHASES:
            return {
                shouldDisplayPurchase :{}
            }
        default :
            return state;
    }

}