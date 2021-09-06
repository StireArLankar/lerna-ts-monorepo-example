/**
 * @title Some title here
 * @description Some description here
 */
export type MyObject = {
  testGlobal: ArrayElement<Array<{ string: string }>>;
  /**
   * @title String field title
   * @minLength 10
   * @pattern [a-z]{11}
   */
  stringValue: string;
  /**
   * @title datetime
   * @format date-time
   */
  datetime: string;
  /**
   * This field is of integer type.
   * Integer!
   *
   * The type of this field is integer.
   *
   * This is of type
   * - integer
   * - number
   *
   * @title Number field title
   * @exclusiveMaximum 10
   * @multipleOf 3
   * @asType integer
   */
  numberValue: number;

  /**
   * @title Required value
   */
  requiredValue: number | string;
  /**
   * @title Nullable value
   */
  nullableValue: number | string | null;
  /**
   * @title Optional value
   */
  optionalValue: number | string | undefined;

  /**
   * Some ignored comment description
   *
   * @description Export field description
   * @default {"length": 10}
   * @nullable
   */
  exportString: MyExportString;
  /**
   * @description Export field description
   * @default "private"
   */
  privateString: MyPrivateString;

  /**
   * @title Non empty array
   */
  numberArray: MyNonEmptyArray<number>;

  /**
   * @nullable
   */
  number: number;

  /**
   * @asType number
   */
  overriddenRefType: MyExportString;

  test: TestType<Exclude<'test1' | 'test2' | 'test3', 'test2'>>;
  test2: {
    [K in 'key1' | 'key2' | 'key3']: Generic<K>;
  };
};

type TestType<T extends string> = {
  [K in T]: [number, K];
};

type Generic<T> = T extends 'key2' ? [T, T] : [T];

/**
 * @title My export string
 */
export type MyExportString = string;
/**
 * @title My private string
 */
type MyPrivateString = string;
/**
 * @minItems 1
 */
export type MyNonEmptyArray<T> = T[];

export type TestObject = {
  hello: 'world';
  another: 22;
};
