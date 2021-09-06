export type Datetime = string;
export type MyExportString = string;
export type NullableValue = number | string | null;
export type NonEmptyArray = [number, ...number[]];
/**
 * This field is of integer type. Integer!
 *
 * The type of this field is integer.
 *
 * This is of type
 * - integer
 * - number
 */
export type NumberFieldTitle = number;
export type OptionalValue = number | string;
/**
 * Export field description
 */
export type MyPrivateString = string;
export type RequiredValue = number | string;
export type StringFieldTitle = string;

/**
 * Some description here
 */
export interface SomeTitleHere {
  datetime: Datetime;
  /**
   * Export field description
   */
  exportString: MyExportString | null;
  nullableValue: NullableValue;
  number: number | null;
  numberArray: NonEmptyArray;
  numberValue: NumberFieldTitle;
  optionalValue?: OptionalValue;
  overriddenRefType: number;
  privateString: MyPrivateString;
  requiredValue: RequiredValue;
  stringValue: StringFieldTitle;
  test: {
    test1: [number, "test1"];
    test3: [number, "test3"];
  };
  test2: {
    key1: ["key1"];
    key2: ["key2", "key2"];
    key3: ["key3"];
  };
  testGlobal: {
    string: string;
  };
}
