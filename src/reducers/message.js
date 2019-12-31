import * as message from './../const/message';
import * as types from './../const/actionType';
var initialState=message.MSG_WELCOME;
const imessage = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_MESSAGE:
            return action.message
        default: return state;
    }
}
export default imessage;