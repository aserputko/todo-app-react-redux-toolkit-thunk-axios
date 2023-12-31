export interface TodoEntity {
  id: string;
  name: string;
  completed: boolean;
}

export enum TodoFilterBy {
  All,
  Active,
  Completed,
}
