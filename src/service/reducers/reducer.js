import { ADD_TO_CART, REMOVE_TO_CART } from "../../content_option"

const initialState = []

export default function cardItems(state = initialState, action) {
    switch (action.type) {

        case ADD_TO_CART:
            console.warn("ADD_TO_CART: ", action)
            return [
                ...state,
                { cardData: action.data }
            ]

        case REMOVE_TO_CART:
            
            
            console.warn("REMOVE_TO_CART: ", action.data.price)


            const itemPrice = action.data.price;
            return state.filter(comment => comment.cardData.price != itemPrice);

        default:
            return state;
    }
}