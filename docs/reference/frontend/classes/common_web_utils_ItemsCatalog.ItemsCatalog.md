---
id: "common_web_utils_ItemsCatalog.ItemsCatalog"
title: "Class: ItemsCatalog<ItemType>"
sidebar_label: "ItemsCatalog"
custom_edit_url: null
---

[common/web/utils/ItemsCatalog](../modules/common_web_utils_ItemsCatalog.md).ItemsCatalog

Generic catalog to keep track of "registered" items (where the definition of "item" is completely context dependant).

This is a globally accessible list of these items, associated with their respective names.

## Type parameters

| Name |
| :------ |
| `ItemType` |

## Hierarchy

- **`ItemsCatalog`**

  ↳ [`SnapInsCatalog`](frontend_src_ui_snapins_SnapInsCatalog.SnapInsCatalog.md)

  ↳ [`MessageTypesCatalog`](common_web_core_messaging_MessageTypesCatalog.MessageTypesCatalog.md)

## Constructors

### constructor

• **new ItemsCatalog**<`ItemType`\>(): [`ItemsCatalog`](common_web_utils_ItemsCatalog.ItemsCatalog.md)<`ItemType`\>

#### Type parameters

| Name |
| :------ |
| `ItemType` |

#### Returns

[`ItemsCatalog`](common_web_utils_ItemsCatalog.ItemsCatalog.md)<`ItemType`\>

## Properties

### \_items

▪ `Static` `Private` **\_items**: `Record`<`string`, `ItemType`\> = `{}`

#### Defined in

[common/web/utils/ItemsCatalog.ts:10](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/utils/ItemsCatalog.ts#L10)

## Accessors

### items

• `get` **items**(): `Record`<`string`, `ItemType`\>

Retrieves all stored items.

#### Returns

`Record`<`string`, `ItemType`\>

#### Defined in

[common/web/utils/ItemsCatalog.ts:60](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/utils/ItemsCatalog.ts#L60)

## Methods

### define

▸ **define**(): `Function`

A decorator to define a new item catalog.

Notes:
    This decorator must always be used for new item catalogs; otherwise, data corruption might occur.

#### Returns

`Function`

#### Defined in

[common/web/utils/ItemsCatalog.ts:18](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/utils/ItemsCatalog.ts#L18)

___

### findItem

▸ **findItem**(`name`): `any`

Finds the item associated with the given ``name``.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The item name. |

#### Returns

`any`

- The associated item, if any.

#### Defined in

[common/web/utils/ItemsCatalog.ts:52](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/utils/ItemsCatalog.ts#L52)

___

### registerItem

▸ **registerItem**(`name`, `item`): `void`

Registers a new item.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The item name. |
| `item` | `ItemType` | The item. |

#### Returns

`void`

#### Defined in

[common/web/utils/ItemsCatalog.ts:34](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/utils/ItemsCatalog.ts#L34)
