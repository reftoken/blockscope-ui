import * as types from './types';

const pushToQueue = payload => ({
  type: types.PUSH_TO_SNACKBAR_QUEUE,
  payload,
});

const nextSnackbar = () => ({
  type: types.NEXT_SNACKBAR,
});

export const closeSnackbar = () => ({
  type: types.CLOSE_SNACKBAR,
});

export const processQueue = () => (dispatch, getState) => {
  if (getState().snackbar.queue.length > 0) {
    dispatch(nextSnackbar());
  }
};

export const openSnackbar = payload => (dispatch, getState) => {
  dispatch(pushToQueue(payload));

  if (getState().snackbar.open) {
    dispatch(closeSnackbar());
  } else {
    dispatch(processQueue());
  }
};
