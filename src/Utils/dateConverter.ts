export const dateConverter = (time: number) => {
  const date = new Date(time)
  return date.toUTCString()
}
