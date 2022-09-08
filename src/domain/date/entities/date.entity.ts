import format from 'date-fns/format';

import { DateFormats } from '../date.types';

export class DateEntity {
  constructor(private readonly _date: Date, private readonly _format: DateFormats) {}

  formatBy(dateFormat: DateFormats): string {
    return format(this._date, dateFormat);
  }

  toString(): string {
    return this.formatBy(this._format);
  }

  static parse(date: Date, dateFormat: DateFormats = DateFormats.DATE): DateEntity {
    return new DateEntity(date, dateFormat);
  }
}
