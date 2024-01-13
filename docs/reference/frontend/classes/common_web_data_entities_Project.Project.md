---
id: "common_web_data_entities_Project.Project"
title: "Class: Project"
sidebar_label: "Project"
custom_edit_url: null
---

[common/web/data/entities/Project](../modules/common_web_data_entities_Project.md).Project

Data for a single **Project**.

**`Param`**

The unique project identifier.

**`Param`**

A UNIX timestamp of the project creation time.

**`Param`**

The title of the project.

**`Param`**

An optional project description.

**`Param`**

The project status.

**`Param`**

All project features.

**`Param`**

All project options.

## Constructors

### constructor

• **new Project**(`projectID`, `creationTime`, `title`, `description?`, `features?`, `options?`): [`Project`](common_web_data_entities_Project.Project.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `projectID` | `number` | `undefined` |
| `creationTime` | `number` | `undefined` |
| `title` | `string` | `undefined` |
| `description` | `string` | `""` |
| `features` | [`ProjectFeatures`](common_web_data_entities_features_ProjectFeatures.ProjectFeatures.md) | `undefined` |
| `options` | [`ProjectOptions`](common_web_data_entities_ProjectOptions.ProjectOptions.md) | `undefined` |

#### Returns

[`Project`](common_web_data_entities_Project.Project.md)

#### Defined in

[common/web/data/entities/Project.ts:47](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/data/entities/Project.ts#L47)

## Properties

### creation\_time

• `Readonly` **creation\_time**: `number`

#### Defined in

[common/web/data/entities/Project.ts:33](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/data/entities/Project.ts#L33)

___

### description

• `Readonly` **description**: `string`

#### Defined in

[common/web/data/entities/Project.ts:36](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/data/entities/Project.ts#L36)

___

### features

• `Readonly` **features**: [`ProjectFeatures`](common_web_data_entities_features_ProjectFeatures.ProjectFeatures.md)

#### Defined in

[common/web/data/entities/Project.ts:42](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/data/entities/Project.ts#L42)

___

### options

• `Readonly` **options**: [`ProjectOptions`](common_web_data_entities_ProjectOptions.ProjectOptions.md)

#### Defined in

[common/web/data/entities/Project.ts:45](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/data/entities/Project.ts#L45)

___

### project\_id

• `Readonly` **project\_id**: `number`

#### Defined in

[common/web/data/entities/Project.ts:31](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/data/entities/Project.ts#L31)

___

### status

• `Readonly` **status**: [`ProjectStatus`](../enums/common_web_data_entities_Project.ProjectStatus.md) = `ProjectStatus.Active`

#### Defined in

[common/web/data/entities/Project.ts:38](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/data/entities/Project.ts#L38)

___

### title

• `Readonly` **title**: `string`

#### Defined in

[common/web/data/entities/Project.ts:35](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/data/entities/Project.ts#L35)
