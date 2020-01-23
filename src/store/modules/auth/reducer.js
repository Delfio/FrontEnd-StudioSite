import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
  adm: false,
  isPrivate: false,
}

export default function auth(state = INITIAL_STATE, action){
  return produce(state, draft => {
    switch(action.type){

      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        draft.isPrivate = false;
        break;
      }

      case '@auth/SIGN_IN_SUCESS': {
        draft.token = action.payload.token;
        draft.adm = action.payload.user.ADM;
        draft.signed = true;
        draft.loading = false;
        break;
      }

      case '@auth/SIGN_FAILURE': {
        draft.loading = false;
        draft.isPrivate = false;
        break;
      }

      case '@auth/IS_PRIVATE': {
        draft.isPrivate = action.payload.isPrivate;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.token = null;
        draft.signed = false;
        break;
      }
      default :
    }
  });
}
