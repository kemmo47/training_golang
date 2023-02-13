import type { FilterCondition } from '@/types/FilterCondition';

// eslint-disable-next-line import/extensions
import FilterConditionData from '../../../public/data/search_condition.json';
import type { FilterListType } from './types';

export const FILTER_LIST = FilterConditionData.reduce<FilterListType[]>(
  (previousValue, currentValue: FilterCondition) => {
    // Find index similar question to group option
    let findIndex = previousValue.findIndex(
      (index) => currentValue.group_question_key === index.group_question_key
    );

    // Push new option by index
    if (findIndex > -1) {
      return previousValue.map((value) => {
        if (value.group_question_key === currentValue.group_question_key) {
          return {
            ...value,
            items: [...value.items, { ...currentValue }].sort((a, b) => {
              if (a.child_order < b.child_order) {
                return -1;
              }
              return 0;
            }),
          };
        }
        return value;
      });
    }

    const newQuestion: FilterListType = {
      question: currentValue.question,
      modal_question: currentValue.modal_question,
      image: currentValue.image,
      group_question_key: currentValue.group_question_key,
      parent_order: currentValue.parent_order,
      items: [currentValue],
    };
    return [...previousValue, newQuestion];
  },
  []
).sort((a, b) => {
  if (a.parent_order < b.parent_order) {
    return -1;
  }
  return 0;
});
