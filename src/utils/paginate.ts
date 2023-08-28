export function paginate(
  items: Array<any> | null,
  pageNumber: number,
  pageSize: number
) {
  const startIndex = (pageNumber - 1) * pageSize
  if (items) {
    return [...items].splice(startIndex, pageSize)
  }
  return null
}
