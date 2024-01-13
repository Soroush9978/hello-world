---
id: "frontend_src_ui_actions_DeleteProjectAction.DeleteProjectAction"
title: "Class: DeleteProjectAction"
sidebar_label: "DeleteProjectAction"
custom_edit_url: null
---

[frontend/src/ui/actions/DeleteProjectAction](../modules/frontend_src_ui_actions_DeleteProjectAction.md).DeleteProjectAction

Action to delete a project.

## Hierarchy

- [`FrontendCommandAction`](frontend_src_ui_actions_FrontendCommandAction.FrontendCommandAction.md)<[`DeleteProjectCommand`](common_web_api_project_ProjectCommands.DeleteProjectCommand.md), [`CommandComposer`](common_web_core_messaging_composers_CommandComposer.CommandComposer.md)<[`DeleteProjectCommand`](common_web_api_project_ProjectCommands.DeleteProjectCommand.md)\>\>

  ↳ **`DeleteProjectAction`**

## Constructors

### constructor

• **new DeleteProjectAction**(`comp`): [`DeleteProjectAction`](frontend_src_ui_actions_DeleteProjectAction.DeleteProjectAction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `comp` | [`FrontendComponent`](frontend_src_component_FrontendComponent.FrontendComponent.md) |

#### Returns

[`DeleteProjectAction`](frontend_src_ui_actions_DeleteProjectAction.DeleteProjectAction.md)

#### Inherited from

[FrontendCommandAction](frontend_src_ui_actions_FrontendCommandAction.FrontendCommandAction.md).[constructor](frontend_src_ui_actions_FrontendCommandAction.FrontendCommandAction.md#constructor)

#### Defined in

[frontend/src/ui/actions/FrontendCommandAction.ts:16](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/frontend/src/ui/actions/FrontendCommandAction.ts#L16)

## Properties

### \_component

• `Protected` **\_component**: [`FrontendComponent`](frontend_src_component_FrontendComponent.FrontendComponent.md)

#### Inherited from

[FrontendCommandAction](frontend_src_ui_actions_FrontendCommandAction.FrontendCommandAction.md).[_component](frontend_src_ui_actions_FrontendCommandAction.FrontendCommandAction.md#_component)

#### Defined in

[frontend/src/ui/actions/FrontendCommandAction.ts:12](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/frontend/src/ui/actions/FrontendCommandAction.ts#L12)

___

### \_composer

• `Protected` **\_composer**: ``null`` \| [`CommandComposer`](common_web_core_messaging_composers_CommandComposer.CommandComposer.md)<[`DeleteProjectCommand`](common_web_api_project_ProjectCommands.DeleteProjectCommand.md)\> = `null`

#### Inherited from

[FrontendCommandAction](frontend_src_ui_actions_FrontendCommandAction.FrontendCommandAction.md).[_composer](frontend_src_ui_actions_FrontendCommandAction.FrontendCommandAction.md#_composer)

#### Defined in

[common/web/ui/actions/Action.ts:19](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/ui/actions/Action.ts#L19)

___

### \_regularTimeout

• `Protected` **\_regularTimeout**: `number`

#### Inherited from

[FrontendCommandAction](frontend_src_ui_actions_FrontendCommandAction.FrontendCommandAction.md).[_regularTimeout](frontend_src_ui_actions_FrontendCommandAction.FrontendCommandAction.md#_regulartimeout)

#### Defined in

[frontend/src/ui/actions/FrontendCommandAction.ts:14](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/frontend/src/ui/actions/FrontendCommandAction.ts#L14)

___

### \_state

• `Protected` **\_state**: [`ActionState`](../enums/common_web_ui_actions_ActionBase.ActionState.md)

#### Inherited from

[FrontendCommandAction](frontend_src_ui_actions_FrontendCommandAction.FrontendCommandAction.md).[_state](frontend_src_ui_actions_FrontendCommandAction.FrontendCommandAction.md#_state)

#### Defined in

[common/web/ui/actions/ActionBase.ts:17](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/ui/actions/ActionBase.ts#L17)

## Accessors

### messageBuilder

• `get` **messageBuilder**(): [`MessageBuilder`](common_web_core_messaging_composers_MessageBuilder.MessageBuilder.md)

#### Returns

[`MessageBuilder`](common_web_core_messaging_composers_MessageBuilder.MessageBuilder.md)

#### Inherited from

FrontendCommandAction.messageBuilder

#### Defined in

[common/web/ui/actions/Action.ts:58](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/ui/actions/Action.ts#L58)

___

### state

• `get` **state**(): [`ActionState`](../enums/common_web_ui_actions_ActionBase.ActionState.md)

The current state of the action.

#### Returns

[`ActionState`](../enums/common_web_ui_actions_ActionBase.ActionState.md)

#### Inherited from

FrontendCommandAction.state

#### Defined in

[common/web/ui/actions/ActionBase.ts:101](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/ui/actions/ActionBase.ts#L101)

___

### suppressDefaultNotifiers

• `get` **suppressDefaultNotifiers**(): `boolean`

Whether default notifiers are suppressed.

#### Returns

`boolean`

#### Inherited from

FrontendCommandAction.suppressDefaultNotifiers

#### Defined in

[common/web/ui/actions/ActionBase.ts:108](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/ui/actions/ActionBase.ts#L108)

• `set` **suppressDefaultNotifiers**(`suppress`): `void`

Suppress default notifiers. Must be called in `prepare` is called.

#### Parameters

| Name | Type |
| :------ | :------ |
| `suppress` | `boolean` |

#### Returns

`void`

#### Inherited from

FrontendCommandAction.suppressDefaultNotifiers

#### Defined in

[common/web/ui/actions/ActionBase.ts:115](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/ui/actions/ActionBase.ts#L115)

## Methods

### addDefaultNotifiers

▸ **addDefaultNotifiers**(`project`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | [`Project`](common_web_data_entities_Project.Project.md) |

#### Returns

`void`

#### Overrides

[FrontendCommandAction](frontend_src_ui_actions_FrontendCommandAction.FrontendCommandAction.md).[addDefaultNotifiers](frontend_src_ui_actions_FrontendCommandAction.FrontendCommandAction.md#adddefaultnotifiers)

#### Defined in

[frontend/src/ui/actions/DeleteProjectAction.ts:41](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/frontend/src/ui/actions/DeleteProjectAction.ts#L41)

___

### addNotifier

▸ **addNotifier**(`state`, `notifier`): `void`

Adds a new notifier for the specified state.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | [`ActionState`](../enums/common_web_ui_actions_ActionBase.ActionState.md) | The state the notifier should react to. |
| `notifier` | [`ActionNotifier`](common_web_ui_actions_notifiers_ActionNotifier.ActionNotifier.md) \| [`ActionNotifier`](common_web_ui_actions_notifiers_ActionNotifier.ActionNotifier.md)[] | The notifier. |

#### Returns

`void`

#### Inherited from

[FrontendCommandAction](frontend_src_ui_actions_FrontendCommandAction.FrontendCommandAction.md).[addNotifier](frontend_src_ui_actions_FrontendCommandAction.FrontendCommandAction.md#addnotifier)

#### Defined in

[common/web/ui/actions/ActionBase.ts:32](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/ui/actions/ActionBase.ts#L32)

___

### execute

▸ **execute**(): `void`

Executes the action (i.e., the message will be emitted).

#### Returns

`void`

#### Inherited from

[FrontendCommandAction](frontend_src_ui_actions_FrontendCommandAction.FrontendCommandAction.md).[execute](frontend_src_ui_actions_FrontendCommandAction.FrontendCommandAction.md#execute)

#### Defined in

[common/web/ui/actions/Action.ts:43](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/ui/actions/Action.ts#L43)

___

### markProjectForDeletion

▸ **markProjectForDeletion**(`project`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | [`Project`](common_web_data_entities_Project.Project.md) |

#### Returns

`void`

#### Defined in

[frontend/src/ui/actions/DeleteProjectAction.ts:36](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/frontend/src/ui/actions/DeleteProjectAction.ts#L36)

___

### onStateChanged

▸ **onStateChanged**(`newState`, `oldState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newState` | [`ActionState`](../enums/common_web_ui_actions_ActionBase.ActionState.md) |
| `oldState` | [`ActionState`](../enums/common_web_ui_actions_ActionBase.ActionState.md) |

#### Returns

`void`

#### Inherited from

[FrontendCommandAction](frontend_src_ui_actions_FrontendCommandAction.FrontendCommandAction.md).[onStateChanged](frontend_src_ui_actions_FrontendCommandAction.FrontendCommandAction.md#onstatechanged)

#### Defined in

[common/web/ui/actions/ActionBase.ts:89](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/ui/actions/ActionBase.ts#L89)

___

### postExecution

▸ **postExecution**(): `void`

#### Returns

`void`

#### Inherited from

[FrontendCommandAction](frontend_src_ui_actions_FrontendCommandAction.FrontendCommandAction.md).[postExecution](frontend_src_ui_actions_FrontendCommandAction.FrontendCommandAction.md#postexecution)

#### Defined in

[common/web/ui/actions/ActionBase.ts:95](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/ui/actions/ActionBase.ts#L95)

___

### preExecution

▸ **preExecution**(): `void`

#### Returns

`void`

#### Inherited from

[FrontendCommandAction](frontend_src_ui_actions_FrontendCommandAction.FrontendCommandAction.md).[preExecution](frontend_src_ui_actions_FrontendCommandAction.FrontendCommandAction.md#preexecution)

#### Defined in

[common/web/ui/actions/CommandAction.ts:11](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/ui/actions/CommandAction.ts#L11)

___

### prepare

▸ **prepare**(`project`): [`CommandComposer`](common_web_core_messaging_composers_CommandComposer.CommandComposer.md)<[`DeleteProjectCommand`](common_web_api_project_ProjectCommands.DeleteProjectCommand.md)\>

Prepares this action.

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | [`Project`](common_web_data_entities_Project.Project.md) |

#### Returns

[`CommandComposer`](common_web_core_messaging_composers_CommandComposer.CommandComposer.md)<[`DeleteProjectCommand`](common_web_api_project_ProjectCommands.DeleteProjectCommand.md)\>

- A message composer that can be further modified.

#### Overrides

[FrontendCommandAction](frontend_src_ui_actions_FrontendCommandAction.FrontendCommandAction.md).[prepare](frontend_src_ui_actions_FrontendCommandAction.FrontendCommandAction.md#prepare)

#### Defined in

[frontend/src/ui/actions/DeleteProjectAction.ts:27](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/frontend/src/ui/actions/DeleteProjectAction.ts#L27)

___

### prepareNotifiers

▸ **prepareNotifiers**(`...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`void`

#### Inherited from

[FrontendCommandAction](frontend_src_ui_actions_FrontendCommandAction.FrontendCommandAction.md).[prepareNotifiers](frontend_src_ui_actions_FrontendCommandAction.FrontendCommandAction.md#preparenotifiers)

#### Defined in

[common/web/ui/actions/ActionBase.ts:44](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/ui/actions/ActionBase.ts#L44)

___

### setState

▸ **setState**(`state`, `message?`): `void`

Sets the active state of this action.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `state` | [`ActionState`](../enums/common_web_ui_actions_ActionBase.ActionState.md) | `undefined` | The state to apply |
| `message` | `string` | `""` | An optional notification message. |

#### Returns

`void`

#### Inherited from

[FrontendCommandAction](frontend_src_ui_actions_FrontendCommandAction.FrontendCommandAction.md).[setState](frontend_src_ui_actions_FrontendCommandAction.FrontendCommandAction.md#setstate)

#### Defined in

[common/web/ui/actions/ActionBase.ts:64](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/ui/actions/ActionBase.ts#L64)

___

### showConfirmation

▸ **showConfirmation**(`project`): [`ConfirmDialogResult`](../modules/common_web_ui_dialogs_ConfirmDialog.md#confirmdialogresult)

Shows a confirmation dialog.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `project` | [`Project`](common_web_data_entities_Project.Project.md) | The project to delete. |

#### Returns

[`ConfirmDialogResult`](../modules/common_web_ui_dialogs_ConfirmDialog.md#confirmdialogresult)

#### Defined in

[frontend/src/ui/actions/DeleteProjectAction.ts:23](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/frontend/src/ui/actions/DeleteProjectAction.ts#L23)
