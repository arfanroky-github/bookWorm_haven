
type BookFilterType = {
  searchTerm?: string;
  author?: string;
  genre?: string;
  publication?: string;
};
export interface BookSearchFiltarableType extends BookFilterType {
  page: number;
  limit: number;
  sortBy: string;
  sortOrder: string;
}

export type Reviews = {
  name: string;
  picture: string;
  message: string;
};

export interface BookType {
  title: string;
  author: string;
  genre: string;
  publication: string;
  reviews?: Reviews;
}

