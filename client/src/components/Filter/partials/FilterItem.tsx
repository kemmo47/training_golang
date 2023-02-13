import { Image } from '@mantine/core';
import { useState } from 'react';

type FilterItemProps = {
  isChecked: boolean;
  value: string;
  label: string;
  name: string;
  subLabel: string | null;
  extraClasses?: string;
};

export const FilterItem = ({
  isChecked,
  value,
  name,
  label,
}: FilterItemProps) => {
  const [isCheck, setIsCheck] = useState(isChecked);

  const handleCheckActive = () => {
    setIsCheck(!isCheck)
  }

  return (
    <>
      <div
        className={`${
          isCheck
            ? 'text-white text-outline'
            : 'text-gray-800 lg:hover:bg-primary-100'
        } min-w-max relative group flex justify-center rounded-md py-[17px] lg:py-3.5 px-2 cursor-pointer font-bold bg-gray-200 duration-300 ease-out z-10
       `}
        onClick={() => {
          handleCheckActive();
        }}
      >
        <span
          className={` ${
            isCheck ? 'bg-primary-300 w-full' : 'w-0'
          } absolute rounded-md top-0 left-0 flex h-full transition-all duration-300 ease-out opacity-90`}
        ></span>

        <div className="absolute top-0 left-1 lg:left-4 z-10">
          {isCheck ? (
            <Image
              src="../../../../public/images/ico_bookmark.svg"
              width={19}
              height={28}
              alt="icon question"
            />
          ) : (
            ''
          )}
        </div>
        <div
          className="z-30 leading-none break-all"
          style={{ fontSize: 'min(max(7px, 3.5vw), 20px)' }}
        >
          {' '}
          {label}
        </div>
      </div>
    </>
  );
};
