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

export function cadastroEmpresaRequest(data) {
  return {
    type: '@user/CADASTRO_EMPRESA_REQUEST',
    payload: { data }
  }
}

export function cadastroNoticiaRequest(data) {
  return {
    type: '@user/CADASTRO_NOTICIA_REQUEST',
    payload: { data }
  }
}
