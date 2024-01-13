---
id: "common_web_utils_UnitID.UnitID"
title: "Class: UnitID"
sidebar_label: "UnitID"
custom_edit_url: null
---

[common/web/utils/UnitID](../modules/common_web_utils_UnitID.md).UnitID

A general unit identifier.

A *unit* basically is something that has a unique identifier consisting of three parts: The general ``type`` (e.g., *'infra'* for components
belonging to the overall infrastructure), the ``unit`` name itself (e.g., *'gate'* or *'server'*), and an ``instance`` specifier (used to
distinguish multiple instances of the same unit).

## Constructors

### constructor

• **new UnitID**(`type`, `unit`, `instance?`): [`UnitID`](common_web_utils_UnitID.UnitID.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | The unit type. |
| `unit` | `string` | The unit name. |
| `instance?` | `string` | The instance specifier. |

#### Returns

[`UnitID`](common_web_utils_UnitID.UnitID.md)

#### Defined in

[common/web/utils/UnitID.ts:16](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/utils/UnitID.ts#L16)

## Properties

### instance

• `Optional` `Readonly` **instance**: `string`

The instance specifier.

#### Defined in

[common/web/utils/UnitID.ts:16](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/utils/UnitID.ts#L16)

___

### type

• `Readonly` **type**: `string`

The unit type.

#### Defined in

[common/web/utils/UnitID.ts:16](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/utils/UnitID.ts#L16)

___

### unit

• `Readonly` **unit**: `string`

The unit name.

#### Defined in

[common/web/utils/UnitID.ts:16](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/utils/UnitID.ts#L16)

___

### \_delimiter

▪ `Static` `Private` `Readonly` **\_delimiter**: ``"/"``

#### Defined in

[common/web/utils/UnitID.ts:9](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/utils/UnitID.ts#L9)

## Methods

### equals

▸ **equals**(`other`): `boolean`

Compares this identifier to another one.

Note that the ``instance`` specifiers are only compared if both are not ``undefined``.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | [`UnitID`](common_web_utils_UnitID.UnitID.md) | The unit identifier to compare this one to. |

#### Returns

`boolean`

- Whether both identifiers are equal.

#### Defined in

[common/web/utils/UnitID.ts:28](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/utils/UnitID.ts#L28)

___

### toString

▸ **toString**(): `string`

Converts the unit ID to a string of the form ``<type>/<unit>/<instance>`` or ``<type>/<unit>``.

#### Returns

`string`

#### Defined in

[common/web/utils/UnitID.ts:70](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/utils/UnitID.ts#L70)

___

### fromString

▸ **fromString**(`str`): [`UnitID`](common_web_utils_UnitID.UnitID.md)

Creates a new ``UnitID`` from a string.

The string must be of the form ``<type>/<unit>/<instance>`` or ``<type>/<unit>``.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | The unit identifier string. |

#### Returns

[`UnitID`](common_web_utils_UnitID.UnitID.md)

- The newly created ``UnitID``.

**`Throws`**

Error - If the passed string is invalid.

#### Defined in

[common/web/utils/UnitID.ts:53](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/utils/UnitID.ts#L53)
