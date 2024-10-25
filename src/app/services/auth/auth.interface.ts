export interface AuthResponse {
  statusCode: string
  token: string
  "message": string
  "payload": payload
}

export interface payload {
  usrId: 21,
  usrFirstname: string
  usrLastname: string
  usrUsername: string
  usrStatus: string
  usrCdate: string
  usrMdate: string
  usrSessionExpiry: string
  usrInputter: string | null
  usrAuthoriser: string | null
  byUserRolesList: []
}

export interface AuthCredentials {
  username: string
  password: string
}

