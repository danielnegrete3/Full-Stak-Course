import { Gender } from "../../types";

const isEnumValue = <T extends object>(
  enumObject: T,
  value: unknown
): value is T[keyof T] => {
  return isString(value) && Object.values(enumObject).includes(value);
};

export const isString = (text: unknown): text is string => {
  return typeof text === 'string';
};

export const isDate = (arg: unknown): arg is string | number | Date => {
  return (
    (arg instanceof Date && !isNaN(arg.getTime())) ||
    (isString(arg) && !isNaN(Date.parse(arg)))
  );
};

export const isGender = (arg: unknown): arg is Gender => {
  return isEnumValue(Gender, arg);
};