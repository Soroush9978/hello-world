---
id: "frontend_src_ui_snapins_summary_SummarySnapIn.SummarySnapIn"
title: "Class: SummarySnapIn"
sidebar_label: "SummarySnapIn"
custom_edit_url: null
---

[frontend/src/ui/snapins/summary/SummarySnapIn](../modules/frontend_src_ui_snapins_summary_SummarySnapIn.md).SummarySnapIn

A snap-in represents a certain feature aspect of a project that integrates itself automatically into the UI.

## Hierarchy

- [`SnapIn`](frontend_src_ui_snapins_SnapIn.SnapIn.md)

  ↳ **`SummarySnapIn`**

## Constructors

### constructor

• **new SummarySnapIn**(): [`SummarySnapIn`](frontend_src_ui_snapins_summary_SummarySnapIn.SummarySnapIn.md)

#### Returns

[`SummarySnapIn`](frontend_src_ui_snapins_summary_SummarySnapIn.SummarySnapIn.md)

#### Overrides

[SnapIn](frontend_src_ui_snapins_SnapIn.SnapIn.md).[constructor](frontend_src_ui_snapins_SnapIn.SnapIn.md#constructor)

#### Defined in

[frontend/src/ui/snapins/summary/SummarySnapIn.ts:6](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/frontend/src/ui/snapins/summary/SummarySnapIn.ts#L6)

## Properties

### SnapInID

▪ `Static` `Readonly` **SnapInID**: `string` = `"summary"`

#### Defined in

[frontend/src/ui/snapins/summary/SummarySnapIn.ts:4](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/frontend/src/ui/snapins/summary/SummarySnapIn.ts#L4)

## Accessors

### options

• `get` **options**(): [`SnapInOptions`](../interfaces/frontend_src_ui_snapins_SnapIn.SnapInOptions.md)

The snap-in options.

#### Returns

[`SnapInOptions`](../interfaces/frontend_src_ui_snapins_SnapIn.SnapInOptions.md)

#### Inherited from

SnapIn.options

#### Defined in

[frontend/src/ui/snapins/SnapIn.ts:65](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/frontend/src/ui/snapins/SnapIn.ts#L65)

___

### snapInID

• `get` **snapInID**(): `string`

The ID of the snap-in.

#### Returns

`string`

#### Inherited from

SnapIn.snapInID

#### Defined in

[frontend/src/ui/snapins/SnapIn.ts:58](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/frontend/src/ui/snapins/SnapIn.ts#L58)

## Methods

### hasTabPanel

▸ **hasTabPanel**(): `boolean`

Whether this snap-in has a tab panel.

#### Returns

`boolean`

#### Inherited from

[SnapIn](frontend_src_ui_snapins_SnapIn.SnapIn.md).[hasTabPanel](frontend_src_ui_snapins_SnapIn.SnapIn.md#hastabpanel)

#### Defined in

[frontend/src/ui/snapins/SnapIn.ts:79](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/frontend/src/ui/snapins/SnapIn.ts#L79)

___

### isOptional

▸ **isOptional**(): `boolean`

Whether this snap-in is optional.

#### Returns

`boolean`

#### Inherited from

[SnapIn](frontend_src_ui_snapins_SnapIn.SnapIn.md).[isOptional](frontend_src_ui_snapins_SnapIn.SnapIn.md#isoptional)

#### Defined in

[frontend/src/ui/snapins/SnapIn.ts:72](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/frontend/src/ui/snapins/SnapIn.ts#L72)
