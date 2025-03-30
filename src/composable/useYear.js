export function useYear() {
  const year = new Date().getFullYear();
  return { year };
}
