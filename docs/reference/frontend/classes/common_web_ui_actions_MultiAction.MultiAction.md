---
id: "common_web_ui_actions_MultiAction.MultiAction"
title: "Class: MultiAction"
sidebar_label: "MultiAction"
custom_edit_url: null
---

[common/web/ui/actions/MultiAction](../modules/common_web_ui_actions_MultiAction.md).MultiAction

An action that encapsulates multiple other actions that are executed in order.

## Hierarchy

- [`ActionBase`](common_web_ui_actions_ActionBase.ActionBase.md)

  ↳ **`MultiAction`**

  ↳↳ [`FetchAllDataAction`](frontend_src_ui_actions_FetchAllDataAction.FetchAllDataAction.md)

## Constructors

### constructor

• **new MultiAction**(): [`MultiAction`](common_web_ui_actions_MultiAction.MultiAction.md)

#### Returns

[`MultiAction`](common_web_ui_actions_MultiAction.MultiAction.md)

#### Inherited from

[ActionBase](common_web_ui_actions_ActionBase.ActionBase.md).[constructor](common_web_ui_actions_ActionBase.ActionBase.md#constructor)

#### Defined in

[common/web/ui/actions/ActionBase.ts:22](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/actions/ActionBase.ts#L22)

## Properties

### \_actions

• `Private` `Readonly` **\_actions**: [`ActionBase`](common_web_ui_actions_ActionBase.ActionBase.md)[]

#### Defined in

[common/web/ui/actions/MultiAction.ts:8](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/actions/MultiAction.ts#L8)

___

### \_currentAction

• `Private` **\_currentAction**: `number` = `-1`

#### Defined in

[common/web/ui/actions/MultiAction.ts:9](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/actions/MultiAction.ts#L9)

___

### \_state

• `Protected` **\_state**: [`ActionState`](../enums/common_web_ui_actions_ActionBase.ActionState.md)

#### Inherited from

[ActionBase](common_web_ui_actions_ActionBase.ActionBase.md).[_state](common_web_ui_actions_ActionBase.ActionBase.md#_state)

#### Defined in

[common/web/ui/actions/ActionBase.ts:17](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/actions/ActionBase.ts#L17)

## Accessors

### state

• `get` **state**(): [`ActionState`](../enums/common_web_ui_actions_ActionBase.ActionState.md)

The current state of the action.

#### Returns

[`ActionState`](../enums/common_web_ui_actions_ActionBase.ActionState.md)

#### Inherited from

ActionBase.state

#### Defined in

[common/web/ui/actions/ActionBase.ts:101](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/actions/ActionBase.ts#L101)

___

### suppressDefaultNotifiers

• `get` **suppressDefaultNotifiers**(): `boolean`

Whether default notifiers are suppressed.

#### Returns

`boolean`

#### Inherited from

ActionBase.suppressDefaultNotifiers

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

ActionBase.suppressDefaultNotifiers

#### Defined in

[common/web/ui/actions/ActionBase.ts:115](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/actions/ActionBase.ts#L115)

## Methods

### addActions

▸ **addActions**(`actions`): `void`

Enqueues new actions.

Note that actions are executed synchronously in the order in which they were added.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `actions` | [`ActionBase`](common_web_ui_actions_ActionBase.ActionBase.md)[] | The actions to add. |

#### Returns

`void`

#### Defined in

[common/web/ui/actions/MultiAction.ts:18](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/actions/MultiAction.ts#L18)

___

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

[ActionBase](common_web_ui_actions_ActionBase.ActionBase.md).[addNotifier](common_web_ui_actions_ActionBase.ActionBase.md#addnotifier)

#### Defined in

[common/web/ui/actions/ActionBase.ts:32](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/actions/ActionBase.ts#L32)

___

### execute

▸ **execute**(): `void`

Executes the action (i.e., all enqueued messages will be executed).

#### Returns

`void`

#### Overrides

[ActionBase](common_web_ui_actions_ActionBase.ActionBase.md).[execute](common_web_ui_actions_ActionBase.ActionBase.md#execute)

#### Defined in

[common/web/ui/actions/MultiAction.ts:36](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/actions/MultiAction.ts#L36)

___

### executeNextAction

▸ **executeNextAction**(): `void`

#### Returns

`void`

#### Defined in

[common/web/ui/actions/MultiAction.ts:51](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/actions/MultiAction.ts#L51)

___

### onActionDone

▸ **onActionDone**(`action`, `message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`ActionBase`](common_web_ui_actions_ActionBase.ActionBase.md) |
| `message` | `string` |

#### Returns

`void`

#### Defined in

[common/web/ui/actions/MultiAction.ts:60](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/actions/MultiAction.ts#L60)

___

### onActionFailed

▸ **onActionFailed**(`action`, `message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`ActionBase`](common_web_ui_actions_ActionBase.ActionBase.md) |
| `message` | `string` |

#### Returns

`void`

#### Defined in

[common/web/ui/actions/MultiAction.ts:64](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/actions/MultiAction.ts#L64)

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

[common/web/ui/actions/ActionBase.ts:89](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/actions/ActionBase.ts#L89)

___

### postExecution

▸ **postExecution**(): `void`

#### Returns

`void`

#### Inherited from

[ActionBase](common_web_ui_actions_ActionBase.ActionBase.md).[postExecution](common_web_ui_actions_ActionBase.ActionBase.md#postexecution)

#### Defined in

[common/web/ui/actions/ActionBase.ts:95](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/actions/ActionBase.ts#L95)

___

### preExecution

▸ **preExecution**(): `void`

#### Returns

`void`

#### Inherited from

[ActionBase](common_web_ui_actions_ActionBase.ActionBase.md).[preExecution](common_web_ui_actions_ActionBase.ActionBase.md#preexecution)

#### Defined in

[common/web/ui/actions/ActionBase.ts:92](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/actions/ActionBase.ts#L92)

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

[ActionBase](common_web_ui_actions_ActionBase.ActionBase.md).[setState](common_web_ui_actions_ActionBase.ActionBase.md#setstate)

#### Defined in

[common/web/ui/actions/ActionBase.ts:64](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/actions/ActionBase.ts#L64)
