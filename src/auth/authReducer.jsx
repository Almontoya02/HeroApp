/**
 * const stat ={
 *  name:"alejo",
 *  logged:true
 * }
 */

import { types } from "../types/types";

export const authReducer = (state={},action) => {
    switch (action.type) {
        case types.login:
            
            return{
                ...action.payload,//lo mismo que => name:action.payload.name
                logged:true
            }
        
        case types.logout:
            return{
                logged:false
            }
        default:
            return state;
    }
}
