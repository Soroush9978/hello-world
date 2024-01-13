---
id: "frontend_src_ui_snapins_SnapIn.SnapIn"
title: "Class: SnapIn"
sidebar_label: "SnapIn"
custom_edit_url: null
---

[frontend/src/ui/snapins/SnapIn](../modules/frontend_src_ui_snapins_SnapIn.md).SnapIn

A snap-in represents a certain feature aspect of a project that integrates itself automatically into the UI.

## Hierarchy

- **`SnapIn`**

  ↳ [`DataManagementPlanSnapIn`](frontend_src_ui_snapins_dmp_DataManagementPlanSnapIn.DataManagementPlanSnapIn.md)

  ↳ [`MetadataSnapIn`](frontend_src_ui_snapins_metadata_MetadataSnapIn.MetadataSnapIn.md)

  ↳ [`SummarySnapIn`](frontend_src_ui_snapins_summary_SummarySnapIn.SummarySnapIn.md)

## Constructors

### constructor

• **new SnapIn**(`snapInID`, `options`): [`SnapIn`](frontend_src_ui_snapins_SnapIn.SnapIn.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `snapInID` | `string` | The ID of the snap-in. |
| `options` | [`SnapInOptions`](../interfaces/frontend_src_ui_snapins_SnapIn.SnapInOptions.md) | The snap-in options. |

#### Returns

[`SnapIn`](frontend_src_ui_snapins_SnapIn.SnapIn.md)

#### Defined in

[frontend/src/ui/snapins/SnapIn.ts:50](https://github.com/Soroush9978/rds-ng/blob/3365237/src/frontend/src/ui/snapins/SnapIn.ts#L50)

## Properties

### \_options

• `Private` `Readonly` **\_options**: [`SnapInOptions`](../interfaces/frontend_src_ui_snapins_SnapIn.SnapInOptions.md)

#### Defined in

[frontend/src/ui/snapins/SnapIn.ts:44](https://github.com/Soroush9978/rds-ng/blob/3365237/src/frontend/src/ui/snapins/SnapIn.ts#L44)

___

### \_snapInID

• `Private` `Readonly` **\_snapInID**: `string`

#### Defined in

[frontend/src/ui/snapins/SnapIn.ts:43](https://github.com/Soroush9978/rds-ng/blob/3365237/src/frontend/src/ui/snapins/SnapIn.ts#L43)

## Accessors

### options

• `get` **options**(): [`SnapInOptions`](../interfaces/frontend_src_ui_snapins_SnapIn.SnapInOptions.md)

The snap-in options.

#### Returns

[`SnapInOptions`](../interfaces/frontend_src_ui_snapins_SnapIn.SnapInOptions.md)

#### Defined in

[frontend/src/ui/snapins/SnapIn.ts:65](https://github.com/Soroush9978/rds-ng/blob/3365237/src/frontend/src/ui/snapins/SnapIn.ts#L65)

___

### snapInID

• `get` **snapInID**(): `string`

The ID of the snap-in.

#### Returns

`string`

#### Defined in

[frontend/src/ui/snapins/SnapIn.ts:58](https://github.com/Soroush9978/rds-ng/blob/3365237/src/frontend/src/ui/snapins/SnapIn.ts#L58)

## Methods

### hasTabPanel

▸ **hasTabPanel**(): `boolean`

Whether this snap-in has a tab panel.

#### Returns

`boolean`

#### Defined in

[frontend/src/ui/snapins/SnapIn.ts:79](https://github.com/Soroush9978/rds-ng/blob/3365237/src/frontend/src/ui/snapins/SnapIn.ts#L79)

___

### isOptional

▸ **isOptional**(): `boolean`

Whether this snap-in is optional.

#### Returns

`boolean`

#### Defined in

[frontend/src/ui/snapins/SnapIn.ts:72](https://github.com/Soroush9978/rds-ng/blob/3365237/src/frontend/src/ui/snapins/SnapIn.ts#L72)
