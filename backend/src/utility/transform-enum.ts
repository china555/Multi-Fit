export function transformEnumValueToArray<T>(data: T) {
  return Object.keys(data).map((value) => value);
}
