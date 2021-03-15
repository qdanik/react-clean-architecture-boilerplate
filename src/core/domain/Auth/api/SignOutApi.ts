import {url} from 'core/config';
import {Services} from 'core/shared';
import {inject, injectable} from 'inversify';

@injectable()
export class SignOutApi {
  static Type = '@api/auth/signOut';
  
  @inject(Services.HttpService.Type) private _http: Services.HttpService;

  logout(): Promise<any> {
    return this._http.post(
      url.auth.logout
    );
  }

}