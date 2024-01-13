---
id: "frontend_src_data_stores_ProjectsStore"
title: "Module: frontend/src/data/stores/ProjectsStore"
sidebar_label: "frontend/src/data/stores/ProjectsStore"
sidebar_position: 0
custom_edit_url: null
---

## Namespaces

- [projectsStore](../namespaces/frontend_src_data_stores_ProjectsStore.projectsStore.md)

## Functions

### projectsStore

▸ **projectsStore**(`pinia?`, `hot?`): `Store`<``"projectsStore"``, `_UnwrapAll`<`Pick`<\{ `activeProject`: `Ref`<`undefined` \| ``null`` \| `number`\> ; `markForDeletion`: (`projectID`: `number`) => `void` ; `pendingDeletions`: `Ref`<`number`[]\> ; `projects`: `Ref`<\{ `creation_time`: `number` ; `description`: `string` ; `features`: \{ readonly metadata: MetadataFeature; readonly dmp: DataManagementPlanFeature; } ; `options`: \{ readonly optional\_features: string[]; readonly ui: UIOptions; } ; `project_id`: `number` ; `status`: [`ProjectStatus`](../enums/common_web_data_entities_Project.ProjectStatus.md) = ProjectStatus.Active; `title`: `string`  }[]\> ; `reset`: () => `void` ; `resetPendingDeletions`: () => `void` ; `resolveActiveProject`: () => [`Project`](../classes/common_web_data_entities_Project.Project.md) \| `undefined` ; `unmarkForDeletion`: (`projectID`: `number`) => `void`  }, ``"projects"`` \| ``"activeProject"`` \| ``"pendingDeletions"``\>\>, `Pick`<\{ `activeProject`: `Ref`<`undefined` \| ``null`` \| `number`\> ; `markForDeletion`: (`projectID`: `number`) => `void` ; `pendingDeletions`: `Ref`<`number`[]\> ; `projects`: `Ref`<\{ `creation_time`: `number` ; `description`: `string` ; `features`: \{ readonly metadata: MetadataFeature; readonly dmp: DataManagementPlanFeature; } ; `options`: \{ readonly optional\_features: string[]; readonly ui: UIOptions; } ; `project_id`: `number` ; `status`: [`ProjectStatus`](../enums/common_web_data_entities_Project.ProjectStatus.md) = ProjectStatus.Active; `title`: `string`  }[]\> ; `reset`: () => `void` ; `resetPendingDeletions`: () => `void` ; `resolveActiveProject`: () => [`Project`](../classes/common_web_data_entities_Project.Project.md) \| `undefined` ; `unmarkForDeletion`: (`projectID`: `number`) => `void`  }, `never`\>, `Pick`<\{ `activeProject`: `Ref`<`undefined` \| ``null`` \| `number`\> ; `markForDeletion`: (`projectID`: `number`) => `void` ; `pendingDeletions`: `Ref`<`number`[]\> ; `projects`: `Ref`<\{ `creation_time`: `number` ; `description`: `string` ; `features`: \{ readonly metadata: MetadataFeature; readonly dmp: DataManagementPlanFeature; } ; `options`: \{ readonly optional\_features: string[]; readonly ui: UIOptions; } ; `project_id`: `number` ; `status`: [`ProjectStatus`](../enums/common_web_data_entities_Project.ProjectStatus.md) = ProjectStatus.Active; `title`: `string`  }[]\> ; `reset`: () => `void` ; `resetPendingDeletions`: () => `void` ; `resolveActiveProject`: () => [`Project`](../classes/common_web_data_entities_Project.Project.md) \| `undefined` ; `unmarkForDeletion`: (`projectID`: `number`) => `void`  }, ``"reset"`` \| ``"resolveActiveProject"`` \| ``"markForDeletion"`` \| ``"unmarkForDeletion"`` \| ``"resetPendingDeletions"``\>\>

The projects store for all project-specific data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pinia?` | ``null`` \| `Pinia` |
| `hot?` | `StoreGeneric` |

#### Returns

`Store`<``"projectsStore"``, `_UnwrapAll`<`Pick`<\{ `activeProject`: `Ref`<`undefined` \| ``null`` \| `number`\> ; `markForDeletion`: (`projectID`: `number`) => `void` ; `pendingDeletions`: `Ref`<`number`[]\> ; `projects`: `Ref`<\{ `creation_time`: `number` ; `description`: `string` ; `features`: \{ readonly metadata: MetadataFeature; readonly dmp: DataManagementPlanFeature; } ; `options`: \{ readonly optional\_features: string[]; readonly ui: UIOptions; } ; `project_id`: `number` ; `status`: [`ProjectStatus`](../enums/common_web_data_entities_Project.ProjectStatus.md) = ProjectStatus.Active; `title`: `string`  }[]\> ; `reset`: () => `void` ; `resetPendingDeletions`: () => `void` ; `resolveActiveProject`: () => [`Project`](../classes/common_web_data_entities_Project.Project.md) \| `undefined` ; `unmarkForDeletion`: (`projectID`: `number`) => `void`  }, ``"projects"`` \| ``"activeProject"`` \| ``"pendingDeletions"``\>\>, `Pick`<\{ `activeProject`: `Ref`<`undefined` \| ``null`` \| `number`\> ; `markForDeletion`: (`projectID`: `number`) => `void` ; `pendingDeletions`: `Ref`<`number`[]\> ; `projects`: `Ref`<\{ `creation_time`: `number` ; `description`: `string` ; `features`: \{ readonly metadata: MetadataFeature; readonly dmp: DataManagementPlanFeature; } ; `options`: \{ readonly optional\_features: string[]; readonly ui: UIOptions; } ; `project_id`: `number` ; `status`: [`ProjectStatus`](../enums/common_web_data_entities_Project.ProjectStatus.md) = ProjectStatus.Active; `title`: `string`  }[]\> ; `reset`: () => `void` ; `resetPendingDeletions`: () => `void` ; `resolveActiveProject`: () => [`Project`](../classes/common_web_data_entities_Project.Project.md) \| `undefined` ; `unmarkForDeletion`: (`projectID`: `number`) => `void`  }, `never`\>, `Pick`<\{ `activeProject`: `Ref`<`undefined` \| ``null`` \| `number`\> ; `markForDeletion`: (`projectID`: `number`) => `void` ; `pendingDeletions`: `Ref`<`number`[]\> ; `projects`: `Ref`<\{ `creation_time`: `number` ; `description`: `string` ; `features`: \{ readonly metadata: MetadataFeature; readonly dmp: DataManagementPlanFeature; } ; `options`: \{ readonly optional\_features: string[]; readonly ui: UIOptions; } ; `project_id`: `number` ; `status`: [`ProjectStatus`](../enums/common_web_data_entities_Project.ProjectStatus.md) = ProjectStatus.Active; `title`: `string`  }[]\> ; `reset`: () => `void` ; `resetPendingDeletions`: () => `void` ; `resolveActiveProject`: () => [`Project`](../classes/common_web_data_entities_Project.Project.md) \| `undefined` ; `unmarkForDeletion`: (`projectID`: `number`) => `void`  }, ``"reset"`` \| ``"resolveActiveProject"`` \| ``"markForDeletion"`` \| ``"unmarkForDeletion"`` \| ``"resetPendingDeletions"``\>\>

#### Defined in

node_modules/pinia/dist/pinia.d.ts:639
