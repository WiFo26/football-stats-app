export const parseStringToDate = (date: string): Date => {
  const partsDate = date
    .split('/')
    .map((partDate: string): number => parseInt(partDate))
  return new Date(partsDate[2], partsDate[1] - 1, partsDate[0])
}
