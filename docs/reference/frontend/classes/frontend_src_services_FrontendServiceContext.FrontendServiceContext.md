---
id: "frontend_src_services_FrontendServiceContext.FrontendServiceContext"
title: "Class: FrontendServiceContext"
sidebar_label: "FrontendServiceContext"
custom_edit_url: null
---

[frontend/src/services/FrontendServiceContext](../modules/frontend_src_services_FrontendServiceContext.md).FrontendServiceContext

Service context for the frontend.

Note that the store type isn't explicitely defined due to Pinia's excessive type definitions.

## Hierarchy

- [`ServiceContext`](common_web_services_ServiceContext.ServiceContext.md)

  ↳ **`FrontendServiceContext`**

## Constructors

### constructor

• **new FrontendServiceContext**(`msgMeta`, `msgBuilder`, `logger`, `config`): [`FrontendServiceContext`](frontend_src_services_FrontendServiceContext.FrontendServiceContext.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `msgMeta` | [`MessageMetaInformation`](common_web_core_messaging_meta_MessageMetaInformation.MessageMetaInformation.md) | The meta information of the message. |
| `msgBuilder` | [`MessageBuilder`](common_web_core_messaging_composers_MessageBuilder.MessageBuilder.md) | A ``MessageBuilder`` to be assigned to this context. |
| `logger` | [`LoggerProxy`](common_web_core_logging_LoggerProxy.LoggerProxy.md) | A logger that is configured to automatically print the trace belonging to the message that caused the handler to be executed. |
| `config` | [`Configuration`](common_web_utils_config_Configuration.Configuration.md) | The global component configuration. |

#### Returns

[`FrontendServiceContext`](frontend_src_services_FrontendServiceContext.FrontendServiceContext.md)

#### Inherited from

[ServiceContext](common_web_services_ServiceContext.ServiceContext.md).[constructor](common_web_services_ServiceContext.ServiceContext.md#constructor)

#### Defined in

[common/web/core/messaging/handlers/MessageContext.ts:35](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/handlers/MessageContext.ts#L35)

## Properties

### \_config

• `Protected` `Readonly` **\_config**: [`Configuration`](common_web_utils_config_Configuration.Configuration.md)

#### Inherited from

[ServiceContext](common_web_services_ServiceContext.ServiceContext.md).[_config](common_web_services_ServiceContext.ServiceContext.md#_config)

#### Defined in

[common/web/core/messaging/handlers/MessageContext.ts:25](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/handlers/MessageContext.ts#L25)

___

### \_connectorsStore

• `Private` **\_connectorsStore**: `Store`<``"connectorsStore"``, `_UnwrapAll`<`Pick`<\{ `connectors`: `Ref`<\{ `connector_id`: \{ readonly type: string; readonly unit: string; readonly instance?: string \| undefined; equals: (other: UnitID) =\> boolean; toString: () =\> string; } ; `description`: `string` ; `name`: `string`  }[]\> ; `reset`: () => `void`  }, ``"connectors"``\>\>, `Pick`<\{ `connectors`: `Ref`<\{ `connector_id`: \{ readonly type: string; readonly unit: string; readonly instance?: string \| undefined; equals: (other: UnitID) =\> boolean; toString: () =\> string; } ; `description`: `string` ; `name`: `string`  }[]\> ; `reset`: () => `void`  }, `never`\>, `Pick`<\{ `connectors`: `Ref`<\{ `connector_id`: \{ readonly type: string; readonly unit: string; readonly instance?: string \| undefined; equals: (other: UnitID) =\> boolean; toString: () =\> string; } ; `description`: `string` ; `name`: `string`  }[]\> ; `reset`: () => `void`  }, ``"reset"``\>\>

#### Defined in

[frontend/src/services/FrontendServiceContext.ts:12](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/frontend/src/services/FrontendServiceContext.ts#L12)

___

### \_logger

• `Protected` `Readonly` **\_logger**: [`LoggerProxy`](common_web_core_logging_LoggerProxy.LoggerProxy.md)

#### Inherited from

[ServiceContext](common_web_services_ServiceContext.ServiceContext.md).[_logger](common_web_services_ServiceContext.ServiceContext.md#_logger)

#### Defined in

[common/web/core/messaging/handlers/MessageContext.ts:24](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/handlers/MessageContext.ts#L24)

___

### \_msgBuilder

• `Protected` `Readonly` **\_msgBuilder**: [`MessageBuilder`](common_web_core_messaging_composers_MessageBuilder.MessageBuilder.md)

#### Inherited from

[ServiceContext](common_web_services_ServiceContext.ServiceContext.md).[_msgBuilder](common_web_services_ServiceContext.ServiceContext.md#_msgbuilder)

#### Defined in

[common/web/core/messaging/handlers/MessageContext.ts:22](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/handlers/MessageContext.ts#L22)

___

### \_msgMeta

• `Protected` `Readonly` **\_msgMeta**: [`MessageMetaInformation`](common_web_core_messaging_meta_MessageMetaInformation.MessageMetaInformation.md)

#### Inherited from

[ServiceContext](common_web_services_ServiceContext.ServiceContext.md).[_msgMeta](common_web_services_ServiceContext.ServiceContext.md#_msgmeta)

#### Defined in

[common/web/core/messaging/handlers/MessageContext.ts:21](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/handlers/MessageContext.ts#L21)

___

### \_projectsStore

• `Private` **\_projectsStore**: `Store`<``"projectsStore"``, `_UnwrapAll`<`Pick`<\{ `activeProject`: `Ref`<`undefined` \| ``null`` \| `number`\> ; `markForDeletion`: (`projectID`: `number`) => `void` ; `pendingDeletions`: `Ref`<`number`[]\> ; `projects`: `Ref`<\{ `creation_time`: `number` ; `description`: `string` ; `features`: \{ readonly metadata: MetadataFeature; readonly dmp: DataManagementPlanFeature; } ; `options`: \{ readonly optional\_features: string[]; readonly ui: UIOptions; } ; `project_id`: `number` ; `status`: [`ProjectStatus`](../enums/common_web_data_entities_Project.ProjectStatus.md) = ProjectStatus.Active; `title`: `string`  }[]\> ; `reset`: () => `void` ; `resetPendingDeletions`: () => `void` ; `resolveActiveProject`: () => [`Project`](common_web_data_entities_Project.Project.md) \| `undefined` ; `unmarkForDeletion`: (`projectID`: `number`) => `void`  }, ``"projects"`` \| ``"activeProject"`` \| ``"pendingDeletions"``\>\>, `Pick`<\{ `activeProject`: `Ref`<`undefined` \| ``null`` \| `number`\> ; `markForDeletion`: (`projectID`: `number`) => `void` ; `pendingDeletions`: `Ref`<`number`[]\> ; `projects`: `Ref`<\{ `creation_time`: `number` ; `description`: `string` ; `features`: \{ readonly metadata: MetadataFeature; readonly dmp: DataManagementPlanFeature; } ; `options`: \{ readonly optional\_features: string[]; readonly ui: UIOptions; } ; `project_id`: `number` ; `status`: [`ProjectStatus`](../enums/common_web_data_entities_Project.ProjectStatus.md) = ProjectStatus.Active; `title`: `string`  }[]\> ; `reset`: () => `void` ; `resetPendingDeletions`: () => `void` ; `resolveActiveProject`: () => [`Project`](common_web_data_entities_Project.Project.md) \| `undefined` ; `unmarkForDeletion`: (`projectID`: `number`) => `void`  }, `never`\>, `Pick`<\{ `activeProject`: `Ref`<`undefined` \| ``null`` \| `number`\> ; `markForDeletion`: (`projectID`: `number`) => `void` ; `pendingDeletions`: `Ref`<`number`[]\> ; `projects`: `Ref`<\{ `creation_time`: `number` ; `description`: `string` ; `features`: \{ readonly metadata: MetadataFeature; readonly dmp: DataManagementPlanFeature; } ; `options`: \{ readonly optional\_features: string[]; readonly ui: UIOptions; } ; `project_id`: `number` ; `status`: [`ProjectStatus`](../enums/common_web_data_entities_Project.ProjectStatus.md) = ProjectStatus.Active; `title`: `string`  }[]\> ; `reset`: () => `void` ; `resetPendingDeletions`: () => `void` ; `resolveActiveProject`: () => [`Project`](common_web_data_entities_Project.Project.md) \| `undefined` ; `unmarkForDeletion`: (`projectID`: `number`) => `void`  }, ``"reset"`` \| ``"resolveActiveProject"`` \| ``"markForDeletion"`` \| ``"unmarkForDeletion"`` \| ``"resetPendingDeletions"``\>\>

#### Defined in

[frontend/src/services/FrontendServiceContext.ts:13](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/frontend/src/services/FrontendServiceContext.ts#L13)

___

### \_requiresReply

• `Protected` **\_requiresReply**: `boolean` = `false`

#### Inherited from

[ServiceContext](common_web_services_ServiceContext.ServiceContext.md).[_requiresReply](common_web_services_ServiceContext.ServiceContext.md#_requiresreply)

#### Defined in

[common/web/core/messaging/handlers/MessageContext.ts:27](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/handlers/MessageContext.ts#L27)

## Accessors

### config

• `get` **config**(): [`Configuration`](common_web_utils_config_Configuration.Configuration.md)

The global component configuration.

#### Returns

[`Configuration`](common_web_utils_config_Configuration.Configuration.md)

#### Inherited from

ServiceContext.config

#### Defined in

[common/web/core/messaging/handlers/MessageContext.ts:112](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/handlers/MessageContext.ts#L112)

___

### connectorsStore

• `get` **connectorsStore**(): `Store`<``"connectorsStore"``, `_UnwrapAll`<`Pick`<\{ `connectors`: `Ref`<\{ `connector_id`: \{ readonly type: string; readonly unit: string; readonly instance?: string \| undefined; equals: (other: UnitID) =\> boolean; toString: () =\> string; } ; `description`: `string` ; `name`: `string`  }[]\> ; `reset`: () => `void`  }, ``"connectors"``\>\>, `Pick`<\{ `connectors`: `Ref`<\{ `connector_id`: \{ readonly type: string; readonly unit: string; readonly instance?: string \| undefined; equals: (other: UnitID) =\> boolean; toString: () =\> string; } ; `description`: `string` ; `name`: `string`  }[]\> ; `reset`: () => `void`  }, `never`\>, `Pick`<\{ `connectors`: `Ref`<\{ `connector_id`: \{ readonly type: string; readonly unit: string; readonly instance?: string \| undefined; equals: (other: UnitID) =\> boolean; toString: () =\> string; } ; `description`: `string` ; `name`: `string`  }[]\> ; `reset`: () => `void`  }, ``"reset"``\>\>

The connectors store.

#### Returns

`Store`<``"connectorsStore"``, `_UnwrapAll`<`Pick`<\{ `connectors`: `Ref`<\{ `connector_id`: \{ readonly type: string; readonly unit: string; readonly instance?: string \| undefined; equals: (other: UnitID) =\> boolean; toString: () =\> string; } ; `description`: `string` ; `name`: `string`  }[]\> ; `reset`: () => `void`  }, ``"connectors"``\>\>, `Pick`<\{ `connectors`: `Ref`<\{ `connector_id`: \{ readonly type: string; readonly unit: string; readonly instance?: string \| undefined; equals: (other: UnitID) =\> boolean; toString: () =\> string; } ; `description`: `string` ; `name`: `string`  }[]\> ; `reset`: () => `void`  }, `never`\>, `Pick`<\{ `connectors`: `Ref`<\{ `connector_id`: \{ readonly type: string; readonly unit: string; readonly instance?: string \| undefined; equals: (other: UnitID) =\> boolean; toString: () =\> string; } ; `description`: `string` ; `name`: `string`  }[]\> ; `reset`: () => `void`  }, ``"reset"``\>\>

#### Defined in

[frontend/src/services/FrontendServiceContext.ts:18](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/frontend/src/services/FrontendServiceContext.ts#L18)

___

### isEntrypointClient

• `get` **isEntrypointClient**(): `boolean`

Whether the message entered through the client.

#### Returns

`boolean`

#### Inherited from

ServiceContext.isEntrypointClient

#### Defined in

[common/web/core/messaging/handlers/MessageContext.ts:91](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/handlers/MessageContext.ts#L91)

___

### isEntrypointLocal

• `get` **isEntrypointLocal**(): `boolean`

Whether the message entered locally.

#### Returns

`boolean`

#### Inherited from

ServiceContext.isEntrypointLocal

#### Defined in

[common/web/core/messaging/handlers/MessageContext.ts:77](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/handlers/MessageContext.ts#L77)

___

### isEntrypointServer

• `get` **isEntrypointServer**(): `boolean`

Whether the message entered through the server.

#### Returns

`boolean`

#### Inherited from

ServiceContext.isEntrypointServer

#### Defined in

[common/web/core/messaging/handlers/MessageContext.ts:84](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/handlers/MessageContext.ts#L84)

___

### logger

• `get` **logger**(): [`LoggerProxy`](common_web_core_logging_LoggerProxy.LoggerProxy.md)

The logger to be used within this context.

#### Returns

[`LoggerProxy`](common_web_core_logging_LoggerProxy.LoggerProxy.md)

#### Inherited from

ServiceContext.logger

#### Defined in

[common/web/core/messaging/handlers/MessageContext.ts:105](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/handlers/MessageContext.ts#L105)

___

### messageBuilder

• `get` **messageBuilder**(): [`MessageBuilder`](common_web_core_messaging_composers_MessageBuilder.MessageBuilder.md)

The message builder to be used within this context.

#### Returns

[`MessageBuilder`](common_web_core_messaging_composers_MessageBuilder.MessageBuilder.md)

#### Inherited from

ServiceContext.messageBuilder

#### Defined in

[common/web/core/messaging/handlers/MessageContext.ts:98](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/handlers/MessageContext.ts#L98)

___

### projectsStore

• `get` **projectsStore**(): `Store`<``"projectsStore"``, `_UnwrapAll`<`Pick`<\{ `activeProject`: `Ref`<`undefined` \| ``null`` \| `number`\> ; `markForDeletion`: (`projectID`: `number`) => `void` ; `pendingDeletions`: `Ref`<`number`[]\> ; `projects`: `Ref`<\{ `creation_time`: `number` ; `description`: `string` ; `features`: \{ readonly metadata: MetadataFeature; readonly dmp: DataManagementPlanFeature; } ; `options`: \{ readonly optional\_features: string[]; readonly ui: UIOptions; } ; `project_id`: `number` ; `status`: [`ProjectStatus`](../enums/common_web_data_entities_Project.ProjectStatus.md) = ProjectStatus.Active; `title`: `string`  }[]\> ; `reset`: () => `void` ; `resetPendingDeletions`: () => `void` ; `resolveActiveProject`: () => [`Project`](common_web_data_entities_Project.Project.md) \| `undefined` ; `unmarkForDeletion`: (`projectID`: `number`) => `void`  }, ``"projects"`` \| ``"activeProject"`` \| ``"pendingDeletions"``\>\>, `Pick`<\{ `activeProject`: `Ref`<`undefined` \| ``null`` \| `number`\> ; `markForDeletion`: (`projectID`: `number`) => `void` ; `pendingDeletions`: `Ref`<`number`[]\> ; `projects`: `Ref`<\{ `creation_time`: `number` ; `description`: `string` ; `features`: \{ readonly metadata: MetadataFeature; readonly dmp: DataManagementPlanFeature; } ; `options`: \{ readonly optional\_features: string[]; readonly ui: UIOptions; } ; `project_id`: `number` ; `status`: [`ProjectStatus`](../enums/common_web_data_entities_Project.ProjectStatus.md) = ProjectStatus.Active; `title`: `string`  }[]\> ; `reset`: () => `void` ; `resetPendingDeletions`: () => `void` ; `resolveActiveProject`: () => [`Project`](common_web_data_entities_Project.Project.md) \| `undefined` ; `unmarkForDeletion`: (`projectID`: `number`) => `void`  }, `never`\>, `Pick`<\{ `activeProject`: `Ref`<`undefined` \| ``null`` \| `number`\> ; `markForDeletion`: (`projectID`: `number`) => `void` ; `pendingDeletions`: `Ref`<`number`[]\> ; `projects`: `Ref`<\{ `creation_time`: `number` ; `description`: `string` ; `features`: \{ readonly metadata: MetadataFeature; readonly dmp: DataManagementPlanFeature; } ; `options`: \{ readonly optional\_features: string[]; readonly ui: UIOptions; } ; `project_id`: `number` ; `status`: [`ProjectStatus`](../enums/common_web_data_entities_Project.ProjectStatus.md) = ProjectStatus.Active; `title`: `string`  }[]\> ; `reset`: () => `void` ; `resetPendingDeletions`: () => `void` ; `resolveActiveProject`: () => [`Project`](common_web_data_entities_Project.Project.md) \| `undefined` ; `unmarkForDeletion`: (`projectID`: `number`) => `void`  }, ``"reset"`` \| ``"resolveActiveProject"`` \| ``"markForDeletion"`` \| ``"unmarkForDeletion"`` \| ``"resetPendingDeletions"``\>\>

The projects store.

#### Returns

`Store`<``"projectsStore"``, `_UnwrapAll`<`Pick`<\{ `activeProject`: `Ref`<`undefined` \| ``null`` \| `number`\> ; `markForDeletion`: (`projectID`: `number`) => `void` ; `pendingDeletions`: `Ref`<`number`[]\> ; `projects`: `Ref`<\{ `creation_time`: `number` ; `description`: `string` ; `features`: \{ readonly metadata: MetadataFeature; readonly dmp: DataManagementPlanFeature; } ; `options`: \{ readonly optional\_features: string[]; readonly ui: UIOptions; } ; `project_id`: `number` ; `status`: [`ProjectStatus`](../enums/common_web_data_entities_Project.ProjectStatus.md) = ProjectStatus.Active; `title`: `string`  }[]\> ; `reset`: () => `void` ; `resetPendingDeletions`: () => `void` ; `resolveActiveProject`: () => [`Project`](common_web_data_entities_Project.Project.md) \| `undefined` ; `unmarkForDeletion`: (`projectID`: `number`) => `void`  }, ``"projects"`` \| ``"activeProject"`` \| ``"pendingDeletions"``\>\>, `Pick`<\{ `activeProject`: `Ref`<`undefined` \| ``null`` \| `number`\> ; `markForDeletion`: (`projectID`: `number`) => `void` ; `pendingDeletions`: `Ref`<`number`[]\> ; `projects`: `Ref`<\{ `creation_time`: `number` ; `description`: `string` ; `features`: \{ readonly metadata: MetadataFeature; readonly dmp: DataManagementPlanFeature; } ; `options`: \{ readonly optional\_features: string[]; readonly ui: UIOptions; } ; `project_id`: `number` ; `status`: [`ProjectStatus`](../enums/common_web_data_entities_Project.ProjectStatus.md) = ProjectStatus.Active; `title`: `string`  }[]\> ; `reset`: () => `void` ; `resetPendingDeletions`: () => `void` ; `resolveActiveProject`: () => [`Project`](common_web_data_entities_Project.Project.md) \| `undefined` ; `unmarkForDeletion`: (`projectID`: `number`) => `void`  }, `never`\>, `Pick`<\{ `activeProject`: `Ref`<`undefined` \| ``null`` \| `number`\> ; `markForDeletion`: (`projectID`: `number`) => `void` ; `pendingDeletions`: `Ref`<`number`[]\> ; `projects`: `Ref`<\{ `creation_time`: `number` ; `description`: `string` ; `features`: \{ readonly metadata: MetadataFeature; readonly dmp: DataManagementPlanFeature; } ; `options`: \{ readonly optional\_features: string[]; readonly ui: UIOptions; } ; `project_id`: `number` ; `status`: [`ProjectStatus`](../enums/common_web_data_entities_Project.ProjectStatus.md) = ProjectStatus.Active; `title`: `string`  }[]\> ; `reset`: () => `void` ; `resetPendingDeletions`: () => `void` ; `resolveActiveProject`: () => [`Project`](common_web_data_entities_Project.Project.md) \| `undefined` ; `unmarkForDeletion`: (`projectID`: `number`) => `void`  }, ``"reset"`` \| ``"resolveActiveProject"`` \| ``"markForDeletion"`` \| ``"unmarkForDeletion"`` \| ``"resetPendingDeletions"``\>\>

#### Defined in

[frontend/src/services/FrontendServiceContext.ts:25](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/frontend/src/services/FrontendServiceContext.ts#L25)

## Methods

### begin

▸ **begin**(`requiresReply`): `void`

Initiates execution within this context.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requiresReply` | `boolean` | Whether a reply is required. |

#### Returns

`void`

#### Inherited from

[ServiceContext](common_web_services_ServiceContext.ServiceContext.md).[begin](common_web_services_ServiceContext.ServiceContext.md#begin)

#### Defined in

[common/web/core/messaging/handlers/MessageContext.ts:48](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/handlers/MessageContext.ts#L48)

___

### end

▸ **end**(): `void`

Finishes execution within this context.

#### Returns

`void`

#### Inherited from

[ServiceContext](common_web_services_ServiceContext.ServiceContext.md).[end](common_web_services_ServiceContext.ServiceContext.md#end)

#### Defined in

[common/web/core/messaging/handlers/MessageContext.ts:55](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/handlers/MessageContext.ts#L55)

___

### reportError

▸ **reportError**(`err`): `void`

Reports an error occurred during context execution.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `err` | `any` | The error to report. |

#### Returns

`void`

#### Inherited from

[ServiceContext](common_web_services_ServiceContext.ServiceContext.md).[reportError](common_web_services_ServiceContext.ServiceContext.md#reporterror)

#### Defined in

[common/web/core/messaging/handlers/MessageContext.ts:64](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/handlers/MessageContext.ts#L64)
