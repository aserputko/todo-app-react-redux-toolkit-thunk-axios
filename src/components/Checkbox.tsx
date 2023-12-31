interface CheckboxProps {
  checked: boolean;
  handleChange: () => void;
}

export const Checkbox = ({ checked, handleChange }: CheckboxProps) => {
  return (
    <>
      <input
        className='peer relative h-6 w-6 cursor-pointer appearance-none rounded-full border border-gray-200 from-[#55DDFF] to-[#C058F3] checked:border-0 checked:bg-gradient-to-br hover:border-gray-500 dark:border-slate-700'
        type='checkbox'
        checked={checked}
        onChange={() => handleChange()}
      />
      <i className='icon icon-sm icon-check pointer-events-none absolute ml-2 hidden peer-checked:block'></i>
    </>
  );
};
