import { NotificationType } from '../notification.types';

export class Notification {
  private _id: string;

  private _type: NotificationType = NotificationType.Info;

  constructor(private readonly _message?: string, private readonly _title?: string) {
    this._id = String(+new Date());
  }

  get title(): string {
    return this._title;
  }

  get message(): string {
    return this._message;
  }

  get type(): NotificationType {
    return this._type;
  }

  get id(): string {
    return this._id;
  }

  setType(type: NotificationType): this {
    this._type = type;

    return this;
  }
}
