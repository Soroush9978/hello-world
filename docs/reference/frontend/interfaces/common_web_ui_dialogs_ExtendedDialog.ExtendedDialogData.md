---
id: "common_web_ui_dialogs_ExtendedDialog.ExtendedDialogData"
title: "Interface: ExtendedDialogData<UserDataType>"
sidebar_label: "ExtendedDialogData"
custom_edit_url: null
---

[common/web/ui/dialogs/ExtendedDialog](../modules/common_web_ui_dialogs_ExtendedDialog.md).ExtendedDialogData

Data for dynamic extended dialogs.

## Type parameters

| Name |
| :------ |
| `UserDataType` |

## Properties

### accept

• `Optional` **accept**: (`data`: `UserDataType`) => `void`

#### Type declaration

▸ (`data`): `void`

Called when the dialog was accepted.

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `UserDataType` |

##### Returns

`void`

#### Defined in

[common/web/ui/dialogs/ExtendedDialog.ts:44](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/ui/dialogs/ExtendedDialog.ts#L44)

___

### options

• **options**: [`ExtendedDialogOptions`](common_web_ui_dialogs_ExtendedDialog.ExtendedDialogOptions.md)

Various display properties

#### Defined in

[common/web/ui/dialogs/ExtendedDialog.ts:38](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/ui/dialogs/ExtendedDialog.ts#L38)

___

### reject

• `Optional` **reject**: () => `void`

#### Type declaration

▸ (): `void`

Called when the dialog was dismissed.

##### Returns

`void`

#### Defined in

[common/web/ui/dialogs/ExtendedDialog.ts:47](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/ui/dialogs/ExtendedDialog.ts#L47)

___

### userData

• **userData**: `UserDataType`

Custom user data.

#### Defined in

[common/web/ui/dialogs/ExtendedDialog.ts:35](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/ui/dialogs/ExtendedDialog.ts#L35)

___

### validator

• `Optional` **validator**: [`ExtendedDialogValidator`](../classes/common_web_ui_dialogs_ExtendedDialogValidator.ExtendedDialogValidator.md)<`any`\>

A form validator if a schema was provided in the options.

#### Defined in

[common/web/ui/dialogs/ExtendedDialog.ts:41](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/ui/dialogs/ExtendedDialog.ts#L41)
