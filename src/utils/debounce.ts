export function debounce<F extends (...args: any[]) => void>(
  fn: F,
  delay: number
) {
  let timer: number | null = null;
  return (...args: Parameters<F>) => {
    if (timer !== null) clearTimeout(timer);
    timer = window.setTimeout(() => fn(...args), delay);
  };
}
