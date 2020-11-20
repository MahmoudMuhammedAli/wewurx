import { SHOW_INVOICES, SHOW_JOBS, SHOW_PURCHASES, SHOW_QUOTES } from "./actionsTypes"



export const showQuotes = ()=>{
    return {
        type: SHOW_QUOTES,
    }

}

export const showJobs = ()=> {
    return {
        type: SHOW_JOBS
    }
}
export const showInvoices = ()=> {
    return {
        type: SHOW_INVOICES,
    }
}
export const showPurchases = ()=> {
    return {
        type: SHOW_PURCHASES
    }
}