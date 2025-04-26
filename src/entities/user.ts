import {useCrud} from "@shared/hooks/useCrud.ts";
import {ModelConfig} from "@shared/api/crud/models.ts";

interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}


export const useUser = () => useCrud<User>(ModelConfig.user.url);