// eslint-disable-next-line import/extensions
import type filter_conditions from '../../public/data/search_condition.json';

type FilterCondition = typeof filter_conditions[number] & {
  group_question_key: NewType;
  answer_options: CompanyPropertyBooleanType;
};
