import {FC} from 'react';
import CrudList from "@shared/components/crud/list.tsx";
import {ModelConfig} from "@shared/api/crud/models.ts";
import {CrudListParams} from "@custom-types/crud-list.ts";
import {columns, Recipe} from "./table/columns.tsx";

const RecipesList: FC = () => {
    const props: CrudListParams<Recipe> = {
        config: ModelConfig.recipe,
        hasSearch: true,
        columns,
    }
    return (
        <>
            <CrudList {...props} />
        </>
    );
}

export default RecipesList;