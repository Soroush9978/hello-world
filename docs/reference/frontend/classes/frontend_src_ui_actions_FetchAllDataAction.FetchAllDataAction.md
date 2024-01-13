---
id: "frontend_src_ui_actions_FetchAllDataAction.FetchAllDataAction"
title: "Class: FetchAllDataAction"
sidebar_label: "FetchAllDataAction"
custom_edit_url: null
---

[frontend/src/ui/actions/FetchAllDataAction](../modules/frontend_src_ui_actions_FetchAllDataAction.md).FetchAllDataAction

An action that encapsulates multiple other actions that are executed in order.

## Hierarchy

- [`MultiAction`](common_web_ui_actions_MultiAction.MultiAction.md)

  ↳ **`FetchAllDataAction`**

## Constructors

### constructor

• **new FetchAllDataAction**(): [`FetchAllDataAction`](frontend_src_ui_actions_FetchAllDataAction.FetchAllDataAction.md)

#### Returns

[`FetchAllDataAction`](frontend_src_ui_actions_FetchAllDataAction.FetchAllDataAction.md)

#### Inherited from

[MultiAction](common_web_ui_actions_MultiAction.MultiAction.md).[constructor](common_web_ui_actions_MultiAction.MultiAction.md#constructor)

#### Defined in

[common/web/ui/actions/ActionBase.ts:22](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/ui/actions/ActionBase.ts#L22)

## Properties

### \_state

• `Protected` **\_state**: [`ActionState`](../enums/common_web_ui_actions_ActionBase.ActionState.md)

#### Inherited from

[MultiAction](common_web_ui_actions_MultiAction.MultiAction.md).[_state](common_web_ui_actions_MultiAction.MultiAction.md#_state)

#### Defined in

[common/web/ui/actions/ActionBase.ts:17](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/ui/actions/ActionBase.ts#L17)

## Accessors

### state

• `get` **state**(): [`ActionState`](../enums/common_web_ui_actions_ActionBase.ActionState.md)

The current state of the action.

#### Returns

[`ActionState`](../enums/common_web_ui_actions_ActionBase.ActionState.md)

#### Inherited from

MultiAction.state

#### Defined in

[common/web/ui/actions/ActionBase.ts:101](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/ui/actions/ActionBase.ts#L101)

___

### suppressDefaultNotifiers

• `get` **suppressDefaultNotifiers**(): `boolean`

Whether default notifiers are suppressed.

#### Returns

`boolean`

#### Inherited from

MultiAction.suppressDefaultNotifiers

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

MultiAction.suppressDefaultNotifiers

#### Defined in

[common/web/ui/actions/ActionBase.ts:115](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/ui/actions/ActionBase.ts#L115)

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

#### Inherited from

[MultiAction](common_web_ui_actions_MultiAction.MultiAction.md).[addActions](common_web_ui_actions_MultiAction.MultiAction.md#addactions)

#### Defined in

[common/web/ui/actions/MultiAction.ts:18](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/ui/actions/MultiAction.ts#L18)

___

### addDefaultNotifiers

▸ **addDefaultNotifiers**(): `void`

#### Returns

`void`

#### Overrides

[MultiAction](common_web_ui_actions_MultiAction.MultiAction.md).[addDefaultNotifiers](common_web_ui_actions_MultiAction.MultiAction.md#adddefaultnotifiers)

#### Defined in

[frontend/src/ui/actions/FetchAllDataAction.ts:25](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/frontend/src/ui/actions/FetchAllDataAction.ts#L25)

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

[MultiAction](common_web_ui_actions_MultiAction.MultiAction.md).[addNotifier](common_web_ui_actions_MultiAction.MultiAction.md#addnotifier)

#### Defined in

[common/web/ui/actions/ActionBase.ts:32](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/ui/actions/ActionBase.ts#L32)

___

### execute

▸ **execute**(): `void`

Executes the action (i.e., all enqueued messages will be executed).

#### Returns

`void`

#### Inherited from

[MultiAction](common_web_ui_actions_MultiAction.MultiAction.md).[execute](common_web_ui_actions_MultiAction.MultiAction.md#execute)

#### Defined in

[common/web/ui/actions/MultiAction.ts:36](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/ui/actions/MultiAction.ts#L36)

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

[MultiAction](common_web_ui_actions_MultiAction.MultiAction.md).[onStateChanged](common_web_ui_actions_MultiAction.MultiAction.md#onstatechanged)

#### Defined in

[common/web/ui/actions/ActionBase.ts:89](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/ui/actions/ActionBase.ts#L89)

___

### postExecution

▸ **postExecution**(): `void`

#### Returns

`void`

#### Inherited from

[MultiAction](common_web_ui_actions_MultiAction.MultiAction.md).[postExecution](common_web_ui_actions_MultiAction.MultiAction.md#postexecution)

#### Defined in

[common/web/ui/actions/ActionBase.ts:95](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/ui/actions/ActionBase.ts#L95)

___

### preExecution

▸ **preExecution**(): `void`

#### Returns

`void`

#### Inherited from

[MultiAction](common_web_ui_actions_MultiAction.MultiAction.md).[preExecution](common_web_ui_actions_MultiAction.MultiAction.md#preexecution)

#### Defined in

[common/web/ui/actions/ActionBase.ts:92](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/ui/actions/ActionBase.ts#L92)

___

### prepare

▸ **prepare**(`comp`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `comp` | [`FrontendComponent`](frontend_src_component_FrontendComponent.FrontendComponent.md) |

#### Returns

`void`

#### Defined in

[frontend/src/ui/actions/FetchAllDataAction.ts:11](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/frontend/src/ui/actions/FetchAllDataAction.ts#L11)

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

[MultiAction](common_web_ui_actions_MultiAction.MultiAction.md).[prepareNotifiers](common_web_ui_actions_MultiAction.MultiAction.md#preparenotifiers)

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

[MultiAction](common_web_ui_actions_MultiAction.MultiAction.md).[setState](common_web_ui_actions_MultiAction.MultiAction.md#setstate)

#### Defined in

[common/web/ui/actions/ActionBase.ts:64](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/ui/actions/ActionBase.ts#L64)
