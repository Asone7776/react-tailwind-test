import {FC, useEffect, useState} from 'react';
import {Models} from "@shared/api/crud/models.ts";
import TableSearch from "@shared/components/search/table-search.tsx";

interface CrudListProps {
    model: Models,
    hasSearch?: boolean;
}

interface QueryParams {
    search?: string;
    page?: number;
    limit?: number;
}

const CrudList: FC<CrudListProps> = () => {
    const [query, setQuery] = useState<QueryParams>({});

    const changeSearch = (value: string) => {
        updateQuery('search', value);
    };

    const updateQuery = <T extends keyof QueryParams>(key: T, value: QueryParams[T]) => {
        setQuery((prevState) => {
            return {
                ...prevState,
                [key]: value
            }
        })
    }

    useEffect(() => {
        console.log('query', query);
    }, [query]);

    return (
        <div>
            <TableSearch onChange={changeSearch}/>
        </div>
    );
}

export default CrudList;