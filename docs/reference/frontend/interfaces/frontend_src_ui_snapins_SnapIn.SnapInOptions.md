---
id: "frontend_src_ui_snapins_SnapIn.SnapInOptions"
title: "Interface: SnapInOptions"
sidebar_label: "SnapInOptions"
custom_edit_url: null
---

[frontend/src/ui/snapins/SnapIn](../modules/frontend_src_ui_snapins_SnapIn.md).SnapInOptions

Options to initialize a snap-in.

## Properties

### name

• **name**: `string`

The general display name.

#### Defined in

[frontend/src/ui/snapins/SnapIn.ts:18](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/frontend/src/ui/snapins/SnapIn.ts#L18)

___

### optional

• `Optional` **optional**: `Object`

Options specific to optional snap-ins (and their associated feature, if any).

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `feature?` | `string` | The ID of a directly associated project feature. If set, the associated feature will be en-/disabled alongside the snap-in. |
| `label` | `string` | The label name of the option (shown as a checkbox) for this snap-in. |

#### Defined in

[frontend/src/ui/snapins/SnapIn.ts:21](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/frontend/src/ui/snapins/SnapIn.ts#L21)

___

### tabPanel

• `Optional` **tabPanel**: `Object`

Tab-panel options.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `label` | `string` | The tab panel label name (displayed as its header). |
| `loader` | [`SnapInPanelLoader`](../modules/frontend_src_ui_snapins_SnapIn.md#snapinpanelloader) | The panel loader. |

#### Defined in

[frontend/src/ui/snapins/SnapIn.ts:30](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/frontend/src/ui/snapins/SnapIn.ts#L30)
