import { ThemeSwitcher } from '../components/ThemeSwitcher';
import { TodoAddItem } from '../components/TodoAddItem';
import { TodoFilters } from '../components/TodoFilters';
import { TodoList } from '../components/TodoList';
import { TodosTitle } from '../components/TodoTitle';

export const TodosPages = () => {
  return (
    <>
      <div className='hero-image'></div>

      <div className='z-10 flex flex-col items-center justify-center px-6 py-2 sm:py-7'>
        <div className='flex w-full min-w-[327px] max-w-[540px] flex-col'>
          <div className='flex items-center justify-between'>
            <TodosTitle />
            <ThemeSwitcher />
          </div>

          <TodoAddItem />

          <TodoList />

          <div className='card mt-4 flex-auto justify-between text-sm text-gray-500 shadow sm:hidden dark:text-slate-500'>
            <TodoFilters />
          </div>

          {/* TODO: (TD-12) Drag & Drop */}
        </div>
      </div>
    </>
  );
};
