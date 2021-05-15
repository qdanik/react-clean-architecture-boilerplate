export interface UserDataAuthority {
  authority: string;
}

export interface UserDataDetails {
  grant_type: string;
  username: string;
}

export interface UserDataPrincipal {
  password: any;
  username: string;
  authorities: UserDataAuthority[];
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  credentialsNonExpired: boolean;
  enabled: boolean;
  userId: string;
}

export interface UserData {
  authorities: UserDataAuthority[];
  details: UserDataDetails;
  authenticated: boolean;
  principal: UserDataPrincipal;
  credentials: any;
  name: string;
}
