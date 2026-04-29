import { Gender, HealthCheckRating } from "../../types";

const isEnumValue = <T extends object>(
  enumObject: T,
  value: unknown
): value is T[keyof T] => {
  return Object.values(enumObject).includes(value as T[keyof T]);
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

export const isHealthCheckRating = (arg: unknown): arg is HealthCheckRating => {
  return isEnumValue(HealthCheckRating, arg);
};