import {FC} from 'react';
import CrudList from "@shared/components/crud/list.tsx";
import {Models} from "@shared/api/crud/models.ts";

const CompaniesList: FC = () => {
    const model = {
        model: Models.company,
        hasSearch: true
    }
    return (
        <>
            <CrudList {...model} />
        </>
    );
}

export default CompaniesList;