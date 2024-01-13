---
id: "common_web_ui_actions_ActionBase.ActionBase"
title: "Class: ActionBase"
sidebar_label: "ActionBase"
custom_edit_url: null
---

[common/web/ui/actions/ActionBase](../modules/common_web_ui_actions_ActionBase.md).ActionBase

Abstract base class for general actions.

## Hierarchy

- **`ActionBase`**

  ↳ [`Action`](common_web_ui_actions_Action.Action.md)

  ↳ [`MultiAction`](common_web_ui_actions_MultiAction.MultiAction.md)

## Constructors

### constructor

• **new ActionBase**(): [`ActionBase`](common_web_ui_actions_ActionBase.ActionBase.md)

#### Returns

[`ActionBase`](common_web_ui_actions_ActionBase.ActionBase.md)

#### Defined in

[common/web/ui/actions/ActionBase.ts:22](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/actions/ActionBase.ts#L22)

## Properties

### \_notifiers

• `Private` `Readonly` **\_notifiers**: [`ActionNotifiers`](../modules/common_web_ui_actions_notifiers_ActionNotifier.md#actionnotifiers)

#### Defined in

[common/web/ui/actions/ActionBase.ts:19](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/actions/ActionBase.ts#L19)

___

### \_state

• `Protected` **\_state**: [`ActionState`](../enums/common_web_ui_actions_ActionBase.ActionState.md)

#### Defined in

[common/web/ui/actions/ActionBase.ts:17](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/actions/ActionBase.ts#L17)

___

### \_suppressDefaultNotifiers

• `Private` **\_suppressDefaultNotifiers**: `boolean` = `false`

#### Defined in

[common/web/ui/actions/ActionBase.ts:20](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/actions/ActionBase.ts#L20)

## Accessors

### state

• `get` **state**(): [`ActionState`](../enums/common_web_ui_actions_ActionBase.ActionState.md)

The current state of the action.

#### Returns

[`ActionState`](../enums/common_web_ui_actions_ActionBase.ActionState.md)

#### Defined in

[common/web/ui/actions/ActionBase.ts:101](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/actions/ActionBase.ts#L101)

___

### suppressDefaultNotifiers

• `get` **suppressDefaultNotifiers**(): `boolean`

Whether default notifiers are suppressed.

#### Returns

`boolean`

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

#### Defined in

[common/web/ui/actions/ActionBase.ts:32](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/actions/ActionBase.ts#L32)

___

### execute

▸ **execute**(): `void`

Executes the action.

#### Returns

`void`

#### Defined in

[common/web/ui/actions/ActionBase.ts:56](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/actions/ActionBase.ts#L56)

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

#### Defined in

[common/web/ui/actions/ActionBase.ts:89](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/actions/ActionBase.ts#L89)

___

### postExecution

▸ **postExecution**(): `void`

#### Returns

`void`

#### Defined in

[common/web/ui/actions/ActionBase.ts:95](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/actions/ActionBase.ts#L95)

___

### preExecution

▸ **preExecution**(): `void`

#### Returns

`void`

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

#### Defined in

[common/web/ui/actions/ActionBase.ts:64](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/ui/actions/ActionBase.ts#L64)
