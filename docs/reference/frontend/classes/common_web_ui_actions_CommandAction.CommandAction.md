---
id: "common_web_ui_actions_CommandAction.CommandAction"
title: "Class: CommandAction<CmdType, CompType>"
sidebar_label: "CommandAction"
custom_edit_url: null
---

[common/web/ui/actions/CommandAction](../modules/common_web_ui_actions_CommandAction.md).CommandAction

Actions specific to ``Command`.

## Type parameters

| Name | Type |
| :------ | :------ |
| `CmdType` | extends [`Command`](common_web_core_messaging_Command.Command.md) |
| `CompType` | extends [`CommandComposer`](common_web_core_messaging_composers_CommandComposer.CommandComposer.md)<`CmdType`\> |

## Hierarchy

- [`Action`](common_web_ui_actions_Action.Action.md)<`CmdType`, `CompType`\>

  ↳ **`CommandAction`**

  ↳↳ [`FrontendCommandAction`](frontend_src_ui_actions_FrontendCommandAction.FrontendCommandAction.md)

## Constructors

### constructor

• **new CommandAction**<`CmdType`, `CompType`\>(`service`): [`CommandAction`](common_web_ui_actions_CommandAction.CommandAction.md)<`CmdType`, `CompType`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CmdType` | extends [`Command`](common_web_core_messaging_Command.Command.md) |
| `CompType` | extends [`CommandComposer`](common_web_core_messaging_composers_CommandComposer.CommandComposer.md)<`CmdType`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `service` | [`Service`](common_web_services_Service.Service.md)<[`ServiceContext`](common_web_services_ServiceContext.ServiceContext.md)\> | The service to use for message emission. |

#### Returns

[`CommandAction`](common_web_ui_actions_CommandAction.CommandAction.md)<`CmdType`, `CompType`\>

#### Inherited from

[Action](common_web_ui_actions_Action.Action.md).[constructor](common_web_ui_actions_Action.Action.md#constructor)

#### Defined in

[common/web/ui/actions/Action.ts:24](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/ui/actions/Action.ts#L24)

## Properties

### \_composer

• `Protected` **\_composer**: ``null`` \| `CompType` = `null`

#### Inherited from

[Action](common_web_ui_actions_Action.Action.md).[_composer](common_web_ui_actions_Action.Action.md#_composer)

#### Defined in

[common/web/ui/actions/Action.ts:19](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/ui/actions/Action.ts#L19)

___

### \_state

• `Protected` **\_state**: [`ActionState`](../enums/common_web_ui_actions_ActionBase.ActionState.md)

#### Inherited from

[Action](common_web_ui_actions_Action.Action.md).[_state](common_web_ui_actions_Action.Action.md#_state)

#### Defined in

[common/web/ui/actions/ActionBase.ts:17](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/ui/actions/ActionBase.ts#L17)

## Accessors

### messageBuilder

• `get` **messageBuilder**(): [`MessageBuilder`](common_web_core_messaging_composers_MessageBuilder.MessageBuilder.md)

#### Returns

[`MessageBuilder`](common_web_core_messaging_composers_MessageBuilder.MessageBuilder.md)

#### Inherited from

Action.messageBuilder

#### Defined in

[common/web/ui/actions/Action.ts:58](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/ui/actions/Action.ts#L58)

___

### state

• `get` **state**(): [`ActionState`](../enums/common_web_ui_actions_ActionBase.ActionState.md)

The current state of the action.

#### Returns

[`ActionState`](../enums/common_web_ui_actions_ActionBase.ActionState.md)

#### Inherited from

Action.state

#### Defined in

[common/web/ui/actions/ActionBase.ts:101](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/ui/actions/ActionBase.ts#L101)

___

### suppressDefaultNotifiers

• `get` **suppressDefaultNotifiers**(): `boolean`

Whether default notifiers are suppressed.

#### Returns

`boolean`

#### Inherited from

Action.suppressDefaultNotifiers

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

Action.suppressDefaultNotifiers

#### Defined in

[common/web/ui/actions/ActionBase.ts:115](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/ui/actions/ActionBase.ts#L115)

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

[Action](common_web_ui_actions_Action.Action.md).[addDefaultNotifiers](common_web_ui_actions_Action.Action.md#adddefaultnotifiers)

#### Defined in

[common/web/ui/actions/ActionBase.ts:50](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/ui/actions/ActionBase.ts#L50)

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

[Action](common_web_ui_actions_Action.Action.md).[addNotifier](common_web_ui_actions_Action.Action.md#addnotifier)

#### Defined in

[common/web/ui/actions/ActionBase.ts:32](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/ui/actions/ActionBase.ts#L32)

___

### execute

▸ **execute**(): `void`

Executes the action (i.e., the message will be emitted).

#### Returns

`void`

#### Inherited from

[Action](common_web_ui_actions_Action.Action.md).[execute](common_web_ui_actions_Action.Action.md#execute)

#### Defined in

[common/web/ui/actions/Action.ts:43](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/ui/actions/Action.ts#L43)

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

[Action](common_web_ui_actions_Action.Action.md).[onStateChanged](common_web_ui_actions_Action.Action.md#onstatechanged)

#### Defined in

[common/web/ui/actions/ActionBase.ts:89](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/ui/actions/ActionBase.ts#L89)

___

### postExecution

▸ **postExecution**(): `void`

#### Returns

`void`

#### Inherited from

[Action](common_web_ui_actions_Action.Action.md).[postExecution](common_web_ui_actions_Action.Action.md#postexecution)

#### Defined in

[common/web/ui/actions/ActionBase.ts:95](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/ui/actions/ActionBase.ts#L95)

___

### preExecution

▸ **preExecution**(): `void`

#### Returns

`void`

#### Overrides

[Action](common_web_ui_actions_Action.Action.md).[preExecution](common_web_ui_actions_Action.Action.md#preexecution)

#### Defined in

[common/web/ui/actions/CommandAction.ts:11](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/ui/actions/CommandAction.ts#L11)

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

[Action](common_web_ui_actions_Action.Action.md).[prepare](common_web_ui_actions_Action.Action.md#prepare)

#### Defined in

[common/web/ui/actions/Action.ts:38](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/ui/actions/Action.ts#L38)

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

[Action](common_web_ui_actions_Action.Action.md).[prepareNotifiers](common_web_ui_actions_Action.Action.md#preparenotifiers)

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

[Action](common_web_ui_actions_Action.Action.md).[setState](common_web_ui_actions_Action.Action.md#setstate)

#### Defined in

[common/web/ui/actions/ActionBase.ts:64](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/ui/actions/ActionBase.ts#L64)
