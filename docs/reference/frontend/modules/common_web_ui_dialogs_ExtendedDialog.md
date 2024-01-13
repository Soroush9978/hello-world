---
id: "common_web_ui_dialogs_ExtendedDialog"
title: "Module: common/web/ui/dialogs/ExtendedDialog"
sidebar_label: "common/web/ui/dialogs/ExtendedDialog"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [ExtendedDialogData](../interfaces/common_web_ui_dialogs_ExtendedDialog.ExtendedDialogData.md)
- [ExtendedDialogOptions](../interfaces/common_web_ui_dialogs_ExtendedDialog.ExtendedDialogOptions.md)

## Type Aliases

### ExtendedDialogResult

Ƭ **ExtendedDialogResult**<`ResultType`\>: `Promise`<`ResultType`\>

The result of an extended dialog in form of a `Promise`.

#### Type parameters

| Name |
| :------ |
| `ResultType` |

#### Defined in

[common/web/ui/dialogs/ExtendedDialog.ts:53](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/ui/dialogs/ExtendedDialog.ts#L53)

## Functions

### extendedDialog

▸ **extendedDialog**<`DataType`\>(`comp`, `dialogComponent`, `dialogProps`, `data`, `options?`, `ignoreReject?`): [`ExtendedDialogResult`](common_web_ui_dialogs_ExtendedDialog.md#extendeddialogresult)<`DataType`\>

Shows a (popup) dialog with extended functionality.

#### Type parameters

| Name |
| :------ |
| `DataType` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `comp` | [`WebComponent`](../classes/common_web_component_WebComponent.WebComponent.md)<[`UserInterface`](../classes/common_web_ui_UserInterface.UserInterface.md)\> | `undefined` | The global component. |
| `dialogComponent` | [`VueComponent`](common_web_component_WebComponent.md#vuecomponent) | `undefined` | The main dialog component to load. |
| `dialogProps` | `DialogProps` | `undefined` | Vue dialog properties. |
| `data` | `DataType` | `undefined` | Optional user data to pass to the dialog. |
| `options` | `undefined` \| [`ExtendedDialogOptions`](../interfaces/common_web_ui_dialogs_ExtendedDialog.ExtendedDialogOptions.md) | `undefined` | Extended dialog options. |
| `ignoreReject` | `boolean` | `true` | If true, nothing will happen if the user rejects the dialog. |

#### Returns

[`ExtendedDialogResult`](common_web_ui_dialogs_ExtendedDialog.md#extendeddialogresult)<`DataType`\>

#### Defined in

[common/web/ui/dialogs/ExtendedDialog.ts:65](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/ui/dialogs/ExtendedDialog.ts#L65)
