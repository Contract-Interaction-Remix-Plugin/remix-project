import ContractVerificationPluginClient from '../ContractVerificationPluginClient';

let dispatch: any, state: any;

export const initDispatch = (_dispatch: any) => {
  dispatch = _dispatch;
};

export const updateState = (_state: any) => {
  state = _state;
};

export const connectRemix = async () => {
  await dispatch({
    type: 'SET_LOADING',
    payload: {
      screen: true,
    },
  });

  await ContractVerificationPluginClient.onload();

  //  await ContractVerificationPluginClient.call('layout', 'minimize', 'terminal', true);

  await dispatch({
    type: 'SET_LOADING',
    payload: {
      screen: false,
    },
  });
};
