export enum Models {
    user = "user",
    company = "company",
    branch = "branch",
    role = "role",
    order = "order",
}

interface ModelEntity {
    name: string,
    url: string,
}

export const ModelConfig: Record<Models, ModelEntity> = {
    user: {
        name: Models.user,
        url: 'api/user',
    },
    company: {
        name: Models.company,
        url: 'api/company',
    },
    branch: {
        name: Models.branch,
        url: 'api/branch',
    },
    role: {
        name: Models.role,
        url: 'api/role',
    },
    order: {
        name: Models.order,
        url: 'api/order',
    },
}