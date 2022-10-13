// PrimeNG does not provide Paginator onPageChange event type?
export interface PaginatorEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}