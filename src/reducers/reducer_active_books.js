export default function(state = null, action) {
    //ES6 --> if state is initially undefined set to null in arguments
    switch(action.type) {
        case 'BOOK_SELECTED':
        return action.payload;
    }

    return state
}