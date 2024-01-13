---
id: "common_web_utils_config_Configuration.Configuration"
title: "Class: Configuration"
sidebar_label: "Configuration"
custom_edit_url: null
---

[common/web/utils/config/Configuration](../modules/common_web_utils_config_Configuration.md).Configuration

Encapsulates configuration settings and their fallback default values.

Settings can be loaded from a configuration file (in *TOML* format) or provided as environment variables (see below).

All settings are accessed by an identifier of type ``SettingID``, which represents settings in a path-like format;
``General.Debug``, for example, refers to a setting called ``Debug`` in the ``General` section.

A corresponding configuration file would look like this:
```
    [General]
    Debug = True
```

A setting identifier is translated to its corresponding environment variable name by replacing all dots (.) with underscores (_),
prepending a prefix (defaults to *'RDS'*), as well as making everything uppercase:
```
    General.Debug -> RDS_GENERAL_DEBUG
```

Notes:
    When accessing a setting value, a default value must *always* be present. This means that before a setting can be accessed,
    a default value must be added using ``add_defaults``.

## Constructors

### constructor

• **new Configuration**(`env`, `envPrefix?`): [`Configuration`](common_web_utils_config_Configuration.Configuration.md)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `env` | [`SettingsContainer`](../modules/common_web_utils_config_Configuration.md#settingscontainer) | `undefined` | The global environment variables. |
| `envPrefix` | `string` | `"RDS"` | The prefix to use when generating the environment variable name of a setting. |

#### Returns

[`Configuration`](common_web_utils_config_Configuration.Configuration.md)

#### Defined in

[common/web/utils/config/Configuration.ts:49](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/utils/config/Configuration.ts#L49)

## Properties

### \_defaults

• `Private` **\_defaults**: [`SettingsContainer`](../modules/common_web_utils_config_Configuration.md#settingscontainer) = `{}`

#### Defined in

[common/web/utils/config/Configuration.ts:40](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/utils/config/Configuration.ts#L40)

___

### \_env

• `Private` `Readonly` **\_env**: [`SettingsContainer`](../modules/common_web_utils_config_Configuration.md#settingscontainer)

#### Defined in

[common/web/utils/config/Configuration.ts:42](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/utils/config/Configuration.ts#L42)

___

### \_envPrefix

• `Private` `Readonly` **\_envPrefix**: `string`

#### Defined in

[common/web/utils/config/Configuration.ts:43](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/utils/config/Configuration.ts#L43)

___

### \_settings

• `Private` **\_settings**: [`SettingsContainer`](../modules/common_web_utils_config_Configuration.md#settingscontainer) = `{}`

#### Defined in

[common/web/utils/config/Configuration.ts:39](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/utils/config/Configuration.ts#L39)

## Methods

### addDefaults

▸ **addDefaults**(`defaults`): `void`

Adds default values for settings, merging the new defaults into the existing ones.

Notes:
    It is always necessary to add a default value for a setting before accessing it.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `defaults` | `Map`<[`SettingID`](common_web_utils_config_SettingID.SettingID.md), `any`\> | A map containing the new default values. |

#### Returns

`void`

#### Defined in

[common/web/utils/config/Configuration.ts:71](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/utils/config/Configuration.ts#L71)

___

### convertEnvType

▸ **convertEnvType**(`value`, `targetType`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `targetType` | `string` |

#### Returns

`any`

#### Defined in

[common/web/utils/config/Configuration.ts:127](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/utils/config/Configuration.ts#L127)

___

### load

▸ **load**(): `void`

Loads settings from the global *TOML* configuration file.

#### Returns

`void`

**`Throws`**

Error - If the configuration data couldn't be parsed.

#### Defined in

[common/web/utils/config/Configuration.ts:59](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/utils/config/Configuration.ts#L59)

___

### traverseSettings

▸ **traverseSettings**(`path`, `settings`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string`[] |
| `settings` | [`SettingsContainer`](../modules/common_web_utils_config_Configuration.md#settingscontainer) |

#### Returns

`any`

#### Defined in

[common/web/utils/config/Configuration.ts:106](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/utils/config/Configuration.ts#L106)

___

### unfoldSettingsItem

▸ **unfoldSettingsItem**(`path`, `settings`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string`[] |
| `settings` | [`SettingsContainer`](../modules/common_web_utils_config_Configuration.md#settingscontainer) |
| `value` | `any` |

#### Returns

`void`

#### Defined in

[common/web/utils/config/Configuration.ts:114](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/utils/config/Configuration.ts#L114)

___

### value

▸ **value**<`ValType`\>(`key`): `ValType`

Gets the value of a setting.

The value is first looked up in the environment variables. If not found, the loaded settings are searched.
If that also fails, the defaults are used.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ValType` | `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | [`SettingID`](common_web_utils_config_SettingID.SettingID.md) | The identifier of the setting. |

#### Returns

`ValType`

- The value of the setting.

**`Throws`**

Error - The setting identifier was not found in the defaults.

#### Defined in

[common/web/utils/config/Configuration.ts:91](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/utils/config/Configuration.ts#L91)
