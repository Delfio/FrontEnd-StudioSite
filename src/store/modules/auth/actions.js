export function signInRequest(email, senha){
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: {email, senha},
  };
}

export function signInSucess(token, user){
  return {
    type: '@auth/SIGN_IN_SUCESS',
    payload: {token, user},
  };
}

export function signUpRequest(username, phone, email, password) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { username, phone, email, password },
  }
}

export function signFailure(){
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function routePrivate( isPrivate ) {
  return {
    type: '@auth/IS_PRIVATE',
    payload: { isPrivate },
  }
}
