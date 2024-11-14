import type { carFilter } from "./car-filter.type"

export type CarFilterOptions = {
  type?: carFilter[],
  engine?: carFilter[],
  size?: carFilter[]
}