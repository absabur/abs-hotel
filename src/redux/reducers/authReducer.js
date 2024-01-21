import { REGISTER_LOGIN, LOGOUT, ERROR, CLEAR_MESSAGE, AUTHENTICATED, LOADING_TRUE, LOAIDNG_FALSE } from "../Constance"

const initialState = {
    token: null,
    userId: null,
    expired: null,
    success: null,
    error: null,
    isLoading: false,
}


export const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case REGISTER_LOGIN:
            return {
              ...state,
                token: action.payload.token,
                userId: action.payload.userId,
                expired: action.payload.expired,
                success: action.payload.success,
            }
        case AUTHENTICATED:
            return {
                ...state,
                  token: action.payload.token,
                  userId: action.payload.userId,
                  expired: action.payload.expired,
              }
        case LOGOUT:
            return {
              ...state,
              token: null,
              userId: null,
              expired: null,
            }
        case ERROR:
            return {
              ...state,
              error: action.payload.error,
            }
        case "MESSAGE":
            return {
              ...state,
              success: action.payload,
            }
        
        case CLEAR_MESSAGE:
            return {
              ...state,
              error: null,
              success: null,
            }
        
        case LOADING_TRUE:
            return {
              ...state,
              isLoading: true,
            }
        
        case LOAIDNG_FALSE:
            return {
              ...state,
              isLoading: false,
            }
        
        default:
            return state
    }
}