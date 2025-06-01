import {FC} from 'react';
import CrudList from "@shared/components/crud/list.tsx";
import {ModelConfig} from "@shared/api/crud/models.ts";
import {CrudListParams} from "@custom-types/crud-list.ts";
import {columns, Recipe} from "./table/columns.tsx";
import {RecipeSchema, fields, RecipeFormType} from "@features/admin/recipe/form/data.ts";

const RecipesList: FC = () => {
    const props: CrudListParams<Recipe> = {
        config: ModelConfig.recipe,
        hasSearch: true,
        columns,
        form: {
            schema: RecipeSchema,
            fields,
            defaultValues: {
                radio: "one",
                fruit: "apple"
            } as RecipeFormType
        }
    }
    return (
        <>
            <CrudList {...props} />
        </>
    );
}

export default RecipesList;