export enum Models {
    user = "user",
}

interface ModelEntity {
    name: string,
    url: string,
}

export const ModelConfig: Record<Models, ModelEntity> = {
    user: {
        name: Models.user,
        url: 'api/user',
    }
}