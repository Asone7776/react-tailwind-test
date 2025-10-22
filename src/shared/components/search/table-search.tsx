import { FC, useMemo, useState, memo } from 'react';
import { SearchIcon } from 'lucide-react';
import { debounce } from '@utils/functions.ts';
import { Input } from '@shared/components/ui/input.tsx';
import { ChangeInputEvent } from '@custom-types/events.ts';

interface TableSearchProps {
  onChange: (value: string) => void;
}

const TableSearch: FC<TableSearchProps> = ({ onChange }) => {
  const [search, setSearch] = useState<string>('');
  const debouncedSearch = useMemo(
    () =>
      debounce((val: string) => {
        onChange(val);
      }, 500),
    [onChange],
  );
  const handleSearch = (event: ChangeInputEvent) => {
    setSearch(event.target.value);
    debouncedSearch(event.target.value);
  };
  return (
    <div className={'flex-center gap-4 relative'}>
      <Input
        className={'pr-10'}
        placeholder={'Поиск'}
        value={search}
        onChange={handleSearch}
      />
      <SearchIcon
        className={'size-5 absolute right-3 top-[50%] translate-y-[-50%]'}
      />
    </div>
  );
};

export default memo(TableSearch);
