export namespace AuthResponse {
  export interface Login {
    access_token: string;
    token_type: string;
    refresh_token: string;
    expires_in: number;
    scope: string;
  }
}
