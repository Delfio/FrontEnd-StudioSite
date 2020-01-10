import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
  acessar: false
}

export default function auth(state = INITIAL_STATE, action){
  switch(action.type){
    case '@auth/SIGN_IN_SUCESS':
      return produce(state, draft => {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.acessar = true;
      })
    default :
      return state;
  }
}
