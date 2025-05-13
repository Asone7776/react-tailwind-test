import {FC} from "react";
import {ModelEntity} from "@shared/api/crud/models.ts";
import {CrudListForm} from "@custom-types/crud-list.ts";
import UniversalForm from "@shared/components/crud/universal-form/index.tsx";

interface CrudCreateProps {
    config: ModelEntity;
    form: CrudListForm;
}

const CrudCreate: FC<CrudCreateProps> = ({form}) => {
    return (
        <>
            <UniversalForm {...form}/>
        </>
    );
}

export default CrudCreate;