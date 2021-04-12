import Usuario from './interface'

export const GET_DADOS_USUARIO = 'GET_DADOS_USUARIO'

export const getDadosUsuario = () => {
  return { type: string = GET_DADOS_USUARIO, payload: { id: number } }
}
