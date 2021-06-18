// custom yup validators should be storing here
// Example: not-earlier-or-same.validator.ts

/*
  addMethod(date, 'notEarlierOrSame', function (field: string, message: string) {
    return this.test('notEarlierOrSame', message, (value: Date, context) => {
      const earlierField = context?.parent?.[field];

      return value && earlierField
        ? isAfter(value, earlierField) || isEqual(value, earlierField)
        : true;
    });
  });
*/

// ! Don't forgot to declare your custom method
// File Location: typings/global.d.ts or create a new typings/yup.d.ts
/*
  declare module 'yup' {
    class DateSchema {
      notEarlierOrSame(field: string, msg: string): this;
    }
  }
*/
