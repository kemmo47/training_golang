import { Image, Button } from '@mantine/core';
import { useState } from 'react';

import iconDownGold from '../../../public/images/ico_down_gold.svg';
import iconQuestion from '../../../public/images/ico_q_blue.svg';
import iconUpGold from '../../../public/images/ico_up_gold.svg';
import { useModal } from '../../hooks/useModal';

import { FILTER_LIST } from './filterHairRemovalData';
import { FilterItem } from './partials/FilterItem';

export type FilterConditionType = {
  parent_order: number;
  question: string;
  image: string;
  label: string;
  modal_question: string | null;
  modal_label: string | null;
  modal_content: string | null;
  child_order: number;
  group_question_key: string;
  answer_options: string;
  is_default: boolean;
};
export type FilterStructureType = {
  question: string | null;
  modal_question: string | null;
  image: string;
  group_question_key: string;
  parent_order: number;
  items: FilterConditionType[];
};

export const Filter = () => {
  const [isOpenCollapses, setIsOpenCollapses] = useState(false);
  const [dataModal, setDataModal] = useState<FilterConditionType[]>([]);
  const { isShown, toggle } = useModal();

  const handleToggle = () => {
    setIsOpenCollapses(!isOpenCollapses);
  };

  const handleSetDataModal = (valueModal: FilterConditionType[]) => {
    setDataModal(valueModal || []);
    toggle();
  };

  return (
    <>
      <div className="container pt-4 pb-6 px-2" id="filter">
        <div className="text-center border-b border-gray-600 lg:border-b-0 lg:pl-28 lg:flex lg:justify-center pb-2">
          <div className="text-primary-400 font-medium text-smm lg:text-xl">
            見たい条件を選んでください
          </div>
          <div className="font-normal lg:ml-4 text-xs lg:text-sm lg:flex lg:items-center z-40">
            ※複数選択もOK
          </div>
        </div>

        <div className="flex justify-center z-30">
          <span className="flex justify-center items-center lg:hidden w-5 h-5 rotate-[130deg] skew-y-12 -translate-y-2.5 border-t border-r border-gray-600 bg-white"></span>
        </div>

        <div
          className={`${
            isOpenCollapses ? 'block' : 'hidden'
          } lg:block mb-7 md:px-24 lg:px-12 xl:px-36`}
        >
          {FILTER_LIST.map((filter: FilterStructureType) => {
            return (
              <div
                key={filter.parent_order}
                className="grid pt-4 lg:pt-[30px] first:lg:pt-0 lg:gap-1"
              >
                <div className="lg:flex lg:justify-between flex justify-center">
                  <div className="text-brown-dark font-bold -mb-1">
                    <div className="flex gap-2">
                      <div className="lg:hidden pb-2">
                        <img
                          src={`/public/images/${filter.image}`}
                          className="w-[58px] h-[58px]"
                          width={`${
                            filter.image.split('?')[1]?.split('x')[0]
                          }px`}
                          height={`${
                            filter.image.split('?')[1]?.split('x')[1]
                          }px`}
                          alt="image Mens"
                        />
                      </div>
                      <div className="hidden lg:block lg:pb-1">
                        <img
                          src={`/public/images/${filter.image}`}
                          className="w-[82px] h-[82px]"
                          width={`${
                            filter.image.split('?')[1]?.split('x')[0]
                          }px`}
                          height={`${
                            filter.image.split('?')[1]?.split('x')[1]
                          }px`}
                          alt="image Mens"
                        />
                      </div>
                      <span className="text-lg leading-none lg:mt-4 lg:text-2xl flex items-center">
                        {filter.question}
                      </span>
                    </div>
                  </div>
                  {filter.modal_question ? (
                    <div className="hidden text-primary-400 justify-center text-sm lg:text-base mt-2 lg:flex lg:items-center">
                      <span
                        onClick={() => handleSetDataModal(filter.items)}
                        className="border leading-none w-[165px] border-primary-400 border-b-4 border-b-primary-400 rounded-md px-3 lg:py-1.5 flex justify-center gap-1 cursor-pointer hover:translate-y-[2px] hover:transition hover:duration-200  hover:border z-10"
                      >
                        <Image
                          src={iconQuestion}
                          width={18}
                          height={18}
                          alt="icon question"
                        />
                        {filter.modal_question}
                      </span>
                    </div>
                  ) : (
                    ''
                  )}
                </div>

                {/* lg:grid-cols-{?} depend on number item filter have*/}
                <div
                  className='lg:grid-cols-4 grid grid-cols-2 gap-2 text-smm lg:text-xl lg:px-8'
                >
                  {filter.items.map((item: FilterConditionType) => {
                    return (
                      <FilterItem
                        key={item.child_order}
                        name={item.group_question_key}
                        value={item.answer_options}
                        label={item.label}
                        isChecked={item.is_default}
                        subLabel={item.modal_label}
                      />
                    );
                  })}
                </div>
                {filter.modal_question ? (
                  <Button className="lg:hidden text-primary-400 flex justify-center text-sm mt-2">
                    <span
                      onClick={() => handleSetDataModal(filter.items)}
                      className="border leading-none min-w-[146px] border-primary-400 border-b-4 border-b-primary-400 rounded-md px-3 py-[10px] flex justify-center gap-1 cursor-pointer hover:translate-y-[2px] hover:transition hover:duration-200  hover:border"
                    >
                      <Image
                        src={iconQuestion}
                        width={15}
                        height={15}
                        alt="icon question"
                      />
                      {filter.modal_question}
                    </span>
                  </Button>
                ) : (
                  ''
                )}
              </div>
            );
          })}
        </div>

        <div className="lg:hidden flex justify-center mt-1">
          <div
            className="flex w-[240px]  items-center justify-end gap-10 border border-brown rounded-md p-3 cursor-pointer z-[3] bg-white"
            onClick={handleToggle}
          >
            <div className="text-brown leading-none text-smm">
              {isOpenCollapses ? '検索条件を閉じる' : '検索条件を見る'}
            </div>
            <div className="">
              {isOpenCollapses ? (
                <Image
                  src={iconUpGold}
                  width={15}
                  height={15}
                  alt="icon up gold"
                />
              ) : (
                <Image
                  src={iconDownGold}
                  width={15}
                  height={15}
                  alt="icon down gold"
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {/* build css column before map data filter, remove if you have other idea  */}
      <span className="hidden lg:grid-cols-3"></span>
      <span className="hidden lg:grid-cols-1"></span>
    </>
  );
};
