export interface userSearchResponse {
  statusCode: string
  message: string
  payload: []
}


export interface searchCredentials {
  payload: { usrUsername: string }
  token: string
}

