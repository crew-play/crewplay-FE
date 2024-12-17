export interface IPagination {
  readonly pageNumber: number; // 현재 페이지 번호
  readonly totalPage: number; // 전체 페이지 번호
  readonly totalData: number; // 전체 데이터 수
}
