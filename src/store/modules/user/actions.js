export function cadastroClassificadoRequest(data){
  return {
    type: '@user/CADASTRO_CLASSIFICADO_REQUEST',
    payload: { data },
  }
}

export function cadastroClassificadoSuccess(idClassificado){
  return {
    type: '@user/CADASTRO_CLASSIFICADO_SUCCESS',
    payload: { idClassificado },
  }
}

export function cadastroClassificadoFailure(){
  return {
    type: '@user/CADASTRO_CLASSIFICADO_FAILURE',
  }
}
