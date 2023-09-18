import { QuickSearch } from "../types";

export type PagingRequestDto =  {
  pageSize: number;
  pageIndex: number;
  sort: string;
  filter: string;
  customFilter: string;
  columns: string;
  quickSearch: QuickSearch;
}
