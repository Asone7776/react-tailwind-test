import {ChangeEvent, FC, useMemo, useState} from 'react';
import {debounce} from "@utils/functions.ts";
import {Input} from "@shared/components/ui/input.tsx";

interface TableSearchProps {
    onChange: (value: string) => void;
}

const TableSearch: FC<TableSearchProps> = ({onChange}) => {
    const [search, setSearch] = useState<string>('');
    const debouncedSearch = useMemo(
        () =>
            debounce((val: string) => {
                onChange(val);
            }, 500),
        [onChange]
    );
    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
        debouncedSearch(event.target.value);
    }
    return (
        <div>
            <Input placeholder={'Поиск'} value={search} onChange={handleSearch}></Input>
        </div>
    );
}

export default TableSearch;