---
id: "frontend_src_ui_actions_FrontendEventAction.FrontendEventAction"
title: "Class: FrontendEventAction<EventType, CompType>"
sidebar_label: "FrontendEventAction"
custom_edit_url: null
---

[frontend/src/ui/actions/FrontendEventAction](../modules/frontend_src_ui_actions_FrontendEventAction.md).FrontendEventAction

Event actions specific to the frontend.

## Type parameters

| Name | Type |
| :------ | :------ |
| `EventType` | extends [`Event`](common_web_core_messaging_Event.Event.md) |
| `CompType` | extends [`EventComposer`](common_web_core_messaging_composers_EventComposer.EventComposer.md)<`EventType`\> |

## Hierarchy

- [`EventAction`](common_web_ui_actions_EventAction.EventAction.md)<`EventType`, `CompType`\>

  ↳ **`FrontendEventAction`**

## Constructors

### constructor

• **new FrontendEventAction**<`EventType`, `CompType`\>(`comp`): [`FrontendEventAction`](frontend_src_ui_actions_FrontendEventAction.FrontendEventAction.md)<`EventType`, `CompType`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventType` | extends [`Event`](common_web_core_messaging_Event.Event.md) |
| `CompType` | extends [`EventComposer`](common_web_core_messaging_composers_EventComposer.EventComposer.md)<`EventType`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `comp` | [`FrontendComponent`](frontend_src_component_FrontendComponent.FrontendComponent.md) |

#### Returns

[`FrontendEventAction`](frontend_src_ui_actions_FrontendEventAction.FrontendEventAction.md)<`EventType`, `CompType`\>

#### Overrides

[EventAction](common_web_ui_actions_EventAction.EventAction.md).[constructor](common_web_ui_actions_EventAction.EventAction.md#constructor)

#### Defined in

[frontend/src/ui/actions/FrontendEventAction.ts:11](https://github.com/Soroush9978/rds-ng/blob/5673246/src/frontend/src/ui/actions/FrontendEventAction.ts#L11)

## Properties

### \_composer

• `Protected` **\_composer**: ``null`` \| `CompType` = `null`

#### Inherited from

[EventAction](common_web_ui_actions_EventAction.EventAction.md).[_composer](common_web_ui_actions_EventAction.EventAction.md#_composer)

#### Defined in

[common/web/ui/actions/Action.ts:19](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/actions/Action.ts#L19)

___

### \_state

• `Protected` **\_state**: [`ActionState`](../enums/common_web_ui_actions_ActionBase.ActionState.md)

#### Inherited from

[EventAction](common_web_ui_actions_EventAction.EventAction.md).[_state](common_web_ui_actions_EventAction.EventAction.md#_state)

#### Defined in

[common/web/ui/actions/ActionBase.ts:17](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/actions/ActionBase.ts#L17)

## Accessors

### messageBuilder

• `get` **messageBuilder**(): [`MessageBuilder`](common_web_core_messaging_composers_MessageBuilder.MessageBuilder.md)

#### Returns

[`MessageBuilder`](common_web_core_messaging_composers_MessageBuilder.MessageBuilder.md)

#### Inherited from

EventAction.messageBuilder

#### Defined in

[common/web/ui/actions/Action.ts:58](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/actions/Action.ts#L58)

___

### state

• `get` **state**(): [`ActionState`](../enums/common_web_ui_actions_ActionBase.ActionState.md)

The current state of the action.

#### Returns

[`ActionState`](../enums/common_web_ui_actions_ActionBase.ActionState.md)

#### Inherited from

EventAction.state

#### Defined in

[common/web/ui/actions/ActionBase.ts:101](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/actions/ActionBase.ts#L101)

___

### suppressDefaultNotifiers

• `get` **suppressDefaultNotifiers**(): `boolean`

Whether default notifiers are suppressed.

#### Returns

`boolean`

#### Inherited from

EventAction.suppressDefaultNotifiers

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

EventAction.suppressDefaultNotifiers

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

[EventAction](common_web_ui_actions_EventAction.EventAction.md).[addDefaultNotifiers](common_web_ui_actions_EventAction.EventAction.md#adddefaultnotifiers)

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

[EventAction](common_web_ui_actions_EventAction.EventAction.md).[addNotifier](common_web_ui_actions_EventAction.EventAction.md#addnotifier)

#### Defined in

[common/web/ui/actions/ActionBase.ts:32](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/actions/ActionBase.ts#L32)

___

### execute

▸ **execute**(): `void`

Executes the action (i.e., the message will be emitted).

#### Returns

`void`

#### Inherited from

[EventAction](common_web_ui_actions_EventAction.EventAction.md).[execute](common_web_ui_actions_EventAction.EventAction.md#execute)

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

[EventAction](common_web_ui_actions_EventAction.EventAction.md).[onStateChanged](common_web_ui_actions_EventAction.EventAction.md#onstatechanged)

#### Defined in

[common/web/ui/actions/ActionBase.ts:89](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/actions/ActionBase.ts#L89)

___

### postExecution

▸ **postExecution**(): `void`

#### Returns

`void`

#### Inherited from

[EventAction](common_web_ui_actions_EventAction.EventAction.md).[postExecution](common_web_ui_actions_EventAction.EventAction.md#postexecution)

#### Defined in

[common/web/ui/actions/EventAction.ts:10](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/actions/EventAction.ts#L10)

___

### preExecution

▸ **preExecution**(): `void`

#### Returns

`void`

#### Inherited from

[EventAction](common_web_ui_actions_EventAction.EventAction.md).[preExecution](common_web_ui_actions_EventAction.EventAction.md#preexecution)

#### Defined in

[common/web/ui/actions/ActionBase.ts:92](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/actions/ActionBase.ts#L92)

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

[EventAction](common_web_ui_actions_EventAction.EventAction.md).[prepare](common_web_ui_actions_EventAction.EventAction.md#prepare)

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

[EventAction](common_web_ui_actions_EventAction.EventAction.md).[prepareNotifiers](common_web_ui_actions_EventAction.EventAction.md#preparenotifiers)

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

[EventAction](common_web_ui_actions_EventAction.EventAction.md).[setState](common_web_ui_actions_EventAction.EventAction.md#setstate)

#### Defined in

[common/web/ui/actions/ActionBase.ts:64](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/actions/ActionBase.ts#L64)
