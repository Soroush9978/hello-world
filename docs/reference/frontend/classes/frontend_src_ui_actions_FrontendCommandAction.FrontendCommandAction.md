---
id: "frontend_src_ui_actions_FrontendCommandAction.FrontendCommandAction"
title: "Class: FrontendCommandAction<CmdType, CompType>"
sidebar_label: "FrontendCommandAction"
custom_edit_url: null
---

[frontend/src/ui/actions/FrontendCommandAction](../modules/frontend_src_ui_actions_FrontendCommandAction.md).FrontendCommandAction

Command actions specific to the frontend.

## Type parameters

| Name | Type |
| :------ | :------ |
| `CmdType` | extends [`Command`](common_web_core_messaging_Command.Command.md) |
| `CompType` | extends [`CommandComposer`](common_web_core_messaging_composers_CommandComposer.CommandComposer.md)<`CmdType`\> |

## Hierarchy

- [`CommandAction`](common_web_ui_actions_CommandAction.CommandAction.md)<`CmdType`, `CompType`\>

  ↳ **`FrontendCommandAction`**

  ↳↳ [`CreateProjectAction`](frontend_src_ui_actions_CreateProjectAction.CreateProjectAction.md)

  ↳↳ [`DeleteProjectAction`](frontend_src_ui_actions_DeleteProjectAction.DeleteProjectAction.md)

  ↳↳ [`ListConnectorsAction`](frontend_src_ui_actions_ListConnectorsAction.ListConnectorsAction.md)

  ↳↳ [`ListProjectsAction`](frontend_src_ui_actions_ListProjectsAction.ListProjectsAction.md)

  ↳↳ [`UpdateProjectAction`](frontend_src_ui_actions_UpdateProjectAction.UpdateProjectAction.md)

## Constructors

### constructor

• **new FrontendCommandAction**<`CmdType`, `CompType`\>(`comp`): [`FrontendCommandAction`](frontend_src_ui_actions_FrontendCommandAction.FrontendCommandAction.md)<`CmdType`, `CompType`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CmdType` | extends [`Command`](common_web_core_messaging_Command.Command.md) |
| `CompType` | extends [`CommandComposer`](common_web_core_messaging_composers_CommandComposer.CommandComposer.md)<`CmdType`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `comp` | [`FrontendComponent`](frontend_src_component_FrontendComponent.FrontendComponent.md) |

#### Returns

[`FrontendCommandAction`](frontend_src_ui_actions_FrontendCommandAction.FrontendCommandAction.md)<`CmdType`, `CompType`\>

#### Overrides

[CommandAction](common_web_ui_actions_CommandAction.CommandAction.md).[constructor](common_web_ui_actions_CommandAction.CommandAction.md#constructor)

#### Defined in

[frontend/src/ui/actions/FrontendCommandAction.ts:16](https://github.com/Soroush9978/rds-ng/blob/5673246/src/frontend/src/ui/actions/FrontendCommandAction.ts#L16)

## Properties

### \_component

• `Protected` **\_component**: [`FrontendComponent`](frontend_src_component_FrontendComponent.FrontendComponent.md)

#### Defined in

[frontend/src/ui/actions/FrontendCommandAction.ts:12](https://github.com/Soroush9978/rds-ng/blob/5673246/src/frontend/src/ui/actions/FrontendCommandAction.ts#L12)

___

### \_composer

• `Protected` **\_composer**: ``null`` \| `CompType` = `null`

#### Inherited from

[CommandAction](common_web_ui_actions_CommandAction.CommandAction.md).[_composer](common_web_ui_actions_CommandAction.CommandAction.md#_composer)

#### Defined in

[common/web/ui/actions/Action.ts:19](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/actions/Action.ts#L19)

___

### \_regularTimeout

• `Protected` **\_regularTimeout**: `number`

#### Defined in

[frontend/src/ui/actions/FrontendCommandAction.ts:14](https://github.com/Soroush9978/rds-ng/blob/5673246/src/frontend/src/ui/actions/FrontendCommandAction.ts#L14)

___

### \_state

• `Protected` **\_state**: [`ActionState`](../enums/common_web_ui_actions_ActionBase.ActionState.md)

#### Inherited from

[CommandAction](common_web_ui_actions_CommandAction.CommandAction.md).[_state](common_web_ui_actions_CommandAction.CommandAction.md#_state)

#### Defined in

[common/web/ui/actions/ActionBase.ts:17](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/actions/ActionBase.ts#L17)

## Accessors

### messageBuilder

• `get` **messageBuilder**(): [`MessageBuilder`](common_web_core_messaging_composers_MessageBuilder.MessageBuilder.md)

#### Returns

[`MessageBuilder`](common_web_core_messaging_composers_MessageBuilder.MessageBuilder.md)

#### Inherited from

CommandAction.messageBuilder

#### Defined in

[common/web/ui/actions/Action.ts:58](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/actions/Action.ts#L58)

___

### state

• `get` **state**(): [`ActionState`](../enums/common_web_ui_actions_ActionBase.ActionState.md)

The current state of the action.

#### Returns

[`ActionState`](../enums/common_web_ui_actions_ActionBase.ActionState.md)

#### Inherited from

CommandAction.state

#### Defined in

[common/web/ui/actions/ActionBase.ts:101](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/actions/ActionBase.ts#L101)

___

### suppressDefaultNotifiers

• `get` **suppressDefaultNotifiers**(): `boolean`

Whether default notifiers are suppressed.

#### Returns

`boolean`

#### Inherited from

CommandAction.suppressDefaultNotifiers

#### Defined in

[common/web/ui/actions/ActionBase.ts:108](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/actions/ActionBase.ts#L108)

• `set` **suppressDefaultNotifiers**(`suppress`): `void`

Suppress default notifiers. Must be called in `prepare` is called.

#### Parameters

| Name | Type |
| :------ | :------ |
| `suppress` | `boolean` |

#### Returns

`void`

#### Inherited from

CommandAction.suppressDefaultNotifiers

#### Defined in

[common/web/ui/actions/ActionBase.ts:115](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/actions/ActionBase.ts#L115)

## Methods

### addDefaultNotifiers

▸ **addDefaultNotifiers**(`...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`void`

#### Inherited from

[CommandAction](common_web_ui_actions_CommandAction.CommandAction.md).[addDefaultNotifiers](common_web_ui_actions_CommandAction.CommandAction.md#adddefaultnotifiers)

#### Defined in

[common/web/ui/actions/ActionBase.ts:50](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/actions/ActionBase.ts#L50)

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

[CommandAction](common_web_ui_actions_CommandAction.CommandAction.md).[addNotifier](common_web_ui_actions_CommandAction.CommandAction.md#addnotifier)

#### Defined in

[common/web/ui/actions/ActionBase.ts:32](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/actions/ActionBase.ts#L32)

___

### execute

▸ **execute**(): `void`

Executes the action (i.e., the message will be emitted).

#### Returns

`void`

#### Inherited from

[CommandAction](common_web_ui_actions_CommandAction.CommandAction.md).[execute](common_web_ui_actions_CommandAction.CommandAction.md#execute)

#### Defined in

[common/web/ui/actions/Action.ts:43](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/actions/Action.ts#L43)

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

[CommandAction](common_web_ui_actions_CommandAction.CommandAction.md).[onStateChanged](common_web_ui_actions_CommandAction.CommandAction.md#onstatechanged)

#### Defined in

[common/web/ui/actions/ActionBase.ts:89](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/actions/ActionBase.ts#L89)

___

### postExecution

▸ **postExecution**(): `void`

#### Returns

`void`

#### Inherited from

[CommandAction](common_web_ui_actions_CommandAction.CommandAction.md).[postExecution](common_web_ui_actions_CommandAction.CommandAction.md#postexecution)

#### Defined in

[common/web/ui/actions/ActionBase.ts:95](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/actions/ActionBase.ts#L95)

___

### preExecution

▸ **preExecution**(): `void`

#### Returns

`void`

#### Inherited from

[CommandAction](common_web_ui_actions_CommandAction.CommandAction.md).[preExecution](common_web_ui_actions_CommandAction.CommandAction.md#preexecution)

#### Defined in

[common/web/ui/actions/CommandAction.ts:11](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/actions/CommandAction.ts#L11)

___

### prepare

▸ **prepare**(`...args`): `CompType`

Prepares this action.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`CompType`

- A message composer that can be further modified.

#### Inherited from

[CommandAction](common_web_ui_actions_CommandAction.CommandAction.md).[prepare](common_web_ui_actions_CommandAction.CommandAction.md#prepare)

#### Defined in

[common/web/ui/actions/Action.ts:38](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/actions/Action.ts#L38)

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

[CommandAction](common_web_ui_actions_CommandAction.CommandAction.md).[prepareNotifiers](common_web_ui_actions_CommandAction.CommandAction.md#preparenotifiers)

#### Defined in

[common/web/ui/actions/ActionBase.ts:44](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/actions/ActionBase.ts#L44)

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

[CommandAction](common_web_ui_actions_CommandAction.CommandAction.md).[setState](common_web_ui_actions_CommandAction.CommandAction.md#setstate)

#### Defined in

[common/web/ui/actions/ActionBase.ts:64](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/actions/ActionBase.ts#L64)
