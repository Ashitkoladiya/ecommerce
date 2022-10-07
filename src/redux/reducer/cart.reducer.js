import * as ActionType from "../ActionTypes"

const initialState = {
    isLoading: false,
    cart: [],
    errors: ''
}

export const cartReducer = (state = initialState, action) => {
    console.log(action.type, action.payload);

    switch (action.type) {
        case ActionType.ADD_CART:
            return {
                ...state,
                isLoading: false,
                cart: state.cart.concat(action.payload),
                errors: ''
            }
        case ActionType.INCREMENTQNT:
            return {
                ...state,
                isLoading: false,
                cart: state.cart.map((c) => {
                    console.log(c);
                    if (c.id === action.payload) {
                        return (
                            {
                                id: c.id,
                                qty: c.qty + 1
                            }
                        )
                    } else {
                        return c
                    }
                })
            }
        case ActionType.DECREMENTQNT:
            return {
                ...state,
                isLoading: false,
                cart: state.cart.map((c) => {
                    console.log(c);
                    if (c.id === action.payload) {
                        return (
                            {
                                id: c.id,
                                qty: c.qty - 1
                            }
                        )
                    } else {
                        return c
                    }
                })
            }

        default:
            return state
    }
}

