import type { Company, CompanyPropertyBooleanType } from '../../types/Company';
import type { FilterCondition } from '../../types/FilterCondition';

export type FilterContextType = {
  state: StateReducerType;
  dispatch: React.Dispatch<ActionType>;
};

export type StateReducerType = {
  companies: Company[];
  filterParams: FilterType;
};

export type ActionType = {
  type: string;
  filter: FilterType;
};

export type FilterValType =
  | CompanyPropertyBooleanType[]
  | string
  | string[]
  | undefined;

export type FilterType = {
  [key: string]: FilterValType;
};

export type FilterListType = {
  question: string | null;
  modal_question: string | null;
  image: string;
  group_question_key: string;
  parent_order: number;
  items: FilterCondition[];
};
