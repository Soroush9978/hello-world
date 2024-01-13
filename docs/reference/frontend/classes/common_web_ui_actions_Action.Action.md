---
id: "common_web_ui_actions_Action.Action"
title: "Class: Action<MsgType, CompType>"
sidebar_label: "Action"
custom_edit_url: null
---

[common/web/ui/actions/Action](../modules/common_web_ui_actions_Action.md).Action

Base class for actions from the user interface (usually but not necessarily initiated by the user). An action is a UI-extended
wrapper around messages.

Note that there is no ``CommandReplyAction``, since replies are only ever sent during execution of a command.

## Type parameters

| Name | Type |
| :------ | :------ |
| `MsgType` | extends [`Message`](common_web_core_messaging_Message.Message.md) |
| `CompType` | extends [`MessageComposer`](common_web_core_messaging_composers_MessageComposer.MessageComposer.md)<`MsgType`\> |

## Hierarchy

- [`ActionBase`](common_web_ui_actions_ActionBase.ActionBase.md)

  ↳ **`Action`**

  ↳↳ [`CommandAction`](common_web_ui_actions_CommandAction.CommandAction.md)

  ↳↳ [`EventAction`](common_web_ui_actions_EventAction.EventAction.md)

## Constructors

### constructor

• **new Action**<`MsgType`, `CompType`\>(`service`): [`Action`](common_web_ui_actions_Action.Action.md)<`MsgType`, `CompType`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MsgType` | extends [`Message`](common_web_core_messaging_Message.Message.md) |
| `CompType` | extends [`MessageComposer`](common_web_core_messaging_composers_MessageComposer.MessageComposer.md)<`MsgType`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `service` | [`Service`](common_web_services_Service.Service.md)<[`ServiceContext`](common_web_services_ServiceContext.ServiceContext.md)\> | The service to use for message emission. |

#### Returns

[`Action`](common_web_ui_actions_Action.Action.md)<`MsgType`, `CompType`\>

#### Overrides

[ActionBase](common_web_ui_actions_ActionBase.ActionBase.md).[constructor](common_web_ui_actions_ActionBase.ActionBase.md#constructor)

#### Defined in

[common/web/ui/actions/Action.ts:24](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/ui/actions/Action.ts#L24)

## Properties

### \_composer

• `Protected` **\_composer**: ``null`` \| `CompType` = `null`

#### Defined in

[common/web/ui/actions/Action.ts:19](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/ui/actions/Action.ts#L19)

___

### \_serverChannel

• `Private` `Readonly` **\_serverChannel**: [`Channel`](common_web_core_messaging_Channel.Channel.md)

#### Defined in

[common/web/ui/actions/Action.ts:17](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/ui/actions/Action.ts#L17)

___

### \_service

• `Private` `Readonly` **\_service**: [`Service`](common_web_services_Service.Service.md)<[`ServiceContext`](common_web_services_ServiceContext.ServiceContext.md)\>

#### Defined in

[common/web/ui/actions/Action.ts:16](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/ui/actions/Action.ts#L16)

___

### \_state

• `Protected` **\_state**: [`ActionState`](../enums/common_web_ui_actions_ActionBase.ActionState.md)

#### Inherited from

[ActionBase](common_web_ui_actions_ActionBase.ActionBase.md).[_state](common_web_ui_actions_ActionBase.ActionBase.md#_state)

#### Defined in

[common/web/ui/actions/ActionBase.ts:17](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/ui/actions/ActionBase.ts#L17)

## Accessors

### messageBuilder

• `get` **messageBuilder**(): [`MessageBuilder`](common_web_core_messaging_composers_MessageBuilder.MessageBuilder.md)

#### Returns

[`MessageBuilder`](common_web_core_messaging_composers_MessageBuilder.MessageBuilder.md)

#### Defined in

[common/web/ui/actions/Action.ts:58](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/ui/actions/Action.ts#L58)

___

### state

• `get` **state**(): [`ActionState`](../enums/common_web_ui_actions_ActionBase.ActionState.md)

The current state of the action.

#### Returns

[`ActionState`](../enums/common_web_ui_actions_ActionBase.ActionState.md)

#### Inherited from

ActionBase.state

#### Defined in

[common/web/ui/actions/ActionBase.ts:101](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/ui/actions/ActionBase.ts#L101)

___

### suppressDefaultNotifiers

• `get` **suppressDefaultNotifiers**(): `boolean`

Whether default notifiers are suppressed.

#### Returns

`boolean`

#### Inherited from

ActionBase.suppressDefaultNotifiers

#### Defined in

[common/web/ui/actions/ActionBase.ts:108](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/ui/actions/ActionBase.ts#L108)

• `set` **suppressDefaultNotifiers**(`suppress`): `void`

Suppress default notifiers. Must be called in `prepare` is called.

#### Parameters

| Name | Type |
| :------ | :------ |
| `suppress` | `boolean` |

#### Returns

`void`

#### Inherited from

ActionBase.suppressDefaultNotifiers

#### Defined in

[common/web/ui/actions/ActionBase.ts:115](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/ui/actions/ActionBase.ts#L115)

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

[ActionBase](common_web_ui_actions_ActionBase.ActionBase.md).[addDefaultNotifiers](common_web_ui_actions_ActionBase.ActionBase.md#adddefaultnotifiers)

#### Defined in

[common/web/ui/actions/ActionBase.ts:50](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/ui/actions/ActionBase.ts#L50)

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

[ActionBase](common_web_ui_actions_ActionBase.ActionBase.md).[addNotifier](common_web_ui_actions_ActionBase.ActionBase.md#addnotifier)

#### Defined in

[common/web/ui/actions/ActionBase.ts:32](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/ui/actions/ActionBase.ts#L32)

___

### execute

▸ **execute**(): `void`

Executes the action (i.e., the message will be emitted).

#### Returns

`void`

#### Overrides

[ActionBase](common_web_ui_actions_ActionBase.ActionBase.md).[execute](common_web_ui_actions_ActionBase.ActionBase.md#execute)

#### Defined in

[common/web/ui/actions/Action.ts:43](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/ui/actions/Action.ts#L43)

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

[ActionBase](common_web_ui_actions_ActionBase.ActionBase.md).[onStateChanged](common_web_ui_actions_ActionBase.ActionBase.md#onstatechanged)

#### Defined in

[common/web/ui/actions/ActionBase.ts:89](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/ui/actions/ActionBase.ts#L89)

___

### postExecution

▸ **postExecution**(): `void`

#### Returns

`void`

#### Inherited from

[ActionBase](common_web_ui_actions_ActionBase.ActionBase.md).[postExecution](common_web_ui_actions_ActionBase.ActionBase.md#postexecution)

#### Defined in

[common/web/ui/actions/ActionBase.ts:95](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/ui/actions/ActionBase.ts#L95)

___

### preExecution

▸ **preExecution**(): `void`

#### Returns

`void`

#### Inherited from

[ActionBase](common_web_ui_actions_ActionBase.ActionBase.md).[preExecution](common_web_ui_actions_ActionBase.ActionBase.md#preexecution)

#### Defined in

[common/web/ui/actions/ActionBase.ts:92](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/ui/actions/ActionBase.ts#L92)

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

#### Defined in

[common/web/ui/actions/Action.ts:38](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/ui/actions/Action.ts#L38)

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

[ActionBase](common_web_ui_actions_ActionBase.ActionBase.md).[prepareNotifiers](common_web_ui_actions_ActionBase.ActionBase.md#preparenotifiers)

#### Defined in

[common/web/ui/actions/ActionBase.ts:44](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/ui/actions/ActionBase.ts#L44)

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

[ActionBase](common_web_ui_actions_ActionBase.ActionBase.md).[setState](common_web_ui_actions_ActionBase.ActionBase.md#setstate)

#### Defined in

[common/web/ui/actions/ActionBase.ts:64](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/ui/actions/ActionBase.ts#L64)
