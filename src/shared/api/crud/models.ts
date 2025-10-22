export enum Models {
  user = 'user',
  company = 'company',
  branch = 'branch',
  role = 'role',
  order = 'order',
  //     Test
  recipe = 'recipe',
}

export interface ModelEntity {
  name: string;
  url: string;
}

export const ModelConfig: Record<Models, ModelEntity> = {
  user: {
    name: Models.user,
    url: 'api/users',
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
  recipe: {
    name: Models.recipe,
    // url: 'https://dummyjson.com/recipes',
    url: 'https://dummyjson.com/c/77bf-2da2-4b41-a207',
  },
};
