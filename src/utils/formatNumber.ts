export function formatCount(value: number, suffix: string): string {
  return `${Math.round(value).toLocaleString('en-IN')}${suffix}`;
}
