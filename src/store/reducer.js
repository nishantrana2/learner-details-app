import {
    FETCH_PRODUCTS_PENDING,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_ERROR,
    
    FETCH_CLIENT_ERROR,
    FETCH_CLIENT_PENDING,
    FETCH_CLIENT_SUCCESS,
    USER_SIGNIN_SUCCESS,

    // SET_AUTH,
    // ADD_ITEM_TO_CART,
   
} from "./action";

const initialState = {
    pending: false,
    products: [],
    error: null,
    auth: false,
    user: null,
    clients: [],
    cart: {},
    checkout: false,
    orders: [],
    addMenu: false
};

export function productsReducer(state = initialState, action) {
    switch (action.type) {
        
        case FETCH_PRODUCTS_PENDING:
            return {
                ...state,
                error: null,
                pending: true,
            };
       
            case USER_SIGNIN_SUCCESS:
            return {
                ...state,
                auth: true
            };
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                pending: false,
                error: null,
                products: action.products,
            };
        case FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            };
        case FETCH_CLIENT_PENDING:
            return {
                ...state,
                error: null,
                pending: true,
            };
        case FETCH_CLIENT_SUCCESS:
            return {
                ...state,
                pending: false,
                error: null,
                clients: action.clients,
            };
        case FETCH_CLIENT_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error,
            };
        
       
       
       
        // case ADD_ITEM_TO_CART:
            // const cart = { ...state.cart };
 
            // if (action.product.quantity === 0) delete cart[action.product.id];
            // else {
            //     cart[action.product.id] = action.product;
            // } 

            // return {
            //     ...state,
            //     cart: cart,
            // };
            
        default:
            return state;
    }
}

export const getProducts = (state) => state.products;
export const getProductsPending = (state) => state.pending;
export const getProductsError = (state) => state.error;

export const getClients = (state) => state.clients;
export const getClientsPending = (state) => state.pending;
export const getClientsError = (state) => state.error;

export const getUser = (state) => state.user;
export const getUserPending = (state) => state.pending;
export const getUserError = (state) => state.error;

export const getClientPending = (state) => state.pending;
export const getClientError = (state) => state.error;
export const getClientSuccess = (state) => state.auth;

export const getAuth = (state) => state.auth;


export const getCart = (state) => state.cart
