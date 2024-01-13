---
id: "common_web_utils_DeepMerge"
title: "Module: common/web/utils/DeepMerge"
sidebar_label: "common/web/utils/DeepMerge"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### deepClone

▸ **deepClone**<`ObjType`\>(`target`, `source?`): `ObjType`

Deep-clones an object into another one.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ObjType` | `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `MergeObjectType` | The target object. |
| `source?` | `MergeObjectType` | The source object, if any. |

#### Returns

`ObjType`

#### Defined in

[common/web/utils/DeepMerge.ts:41](https://github.com/Soroush9978/rds-ng/blob/3365237/src/common/web/utils/DeepMerge.ts#L41)

___

### deepMerge

▸ **deepMerge**<`ObjType`\>(`target`, `...sources`): `ObjType`

Deep-merge two objects.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ObjType` | `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `MergeObjectType` | The target object. |
| `...sources` | `MergeObjectType`[] | The source objects to merge into the target. |

#### Returns

`ObjType`

#### Defined in

[common/web/utils/DeepMerge.ts:13](https://github.com/Soroush9978/rds-ng/blob/3365237/src/common/web/utils/DeepMerge.ts#L13)
