import * as types from './types';

export default (
  state = {
    message: '',
    type: 'info',
    open: false,
    queue: [],
  },
  action,
) => {
  switch (action.type) {
    case types.PUSH_TO_SNACKBAR_QUEUE:
      return {
        ...state,
        queue: [
          { message: action.payload.message, type: action.payload.type },
          ...state.queue,
        ],
      };
    case types.NEXT_SNACKBAR:
      return {
        ...state,
        message: state.queue[0].message,
        type: state.queue[0].type,
        queue: state.queue.slice(1),
        open: true,
      };
    case types.CLOSE_SNACKBAR:
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
};
