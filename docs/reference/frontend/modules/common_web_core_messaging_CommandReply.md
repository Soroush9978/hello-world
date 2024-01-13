---
id: "common_web_core_messaging_CommandReply"
title: "Module: common/web/core/messaging/CommandReply"
sidebar_label: "common/web/core/messaging/CommandReply"
sidebar_position: 0
custom_edit_url: null
---

## Enumerations

- [CommandFailType](../enums/common_web_core_messaging_CommandReply.CommandFailType.md)

## Classes

- [CommandReply](../classes/common_web_core_messaging_CommandReply.CommandReply.md)

## Type Aliases

### CommandDoneCallback

Ƭ **CommandDoneCallback**: (`cmd`: [`Command`](../classes/common_web_core_messaging_Command.Command.md), `success`: `boolean`, `msg`: `string`) => `void`

#### Type declaration

▸ (`cmd`, `success`, `msg`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `cmd` | [`Command`](../classes/common_web_core_messaging_Command.Command.md) |
| `success` | `boolean` |
| `msg` | `string` |

##### Returns

`void`

#### Defined in

[common/web/core/messaging/CommandReply.ts:40](https://github.com/Soroush9978/rds-ng/blob/3365237/src/common/web/core/messaging/CommandReply.ts#L40)

___

### CommandFailCallback

Ƭ **CommandFailCallback**: (`failType`: [`CommandFailType`](../enums/common_web_core_messaging_CommandReply.CommandFailType.md), `msg`: `string`) => `void`

#### Type declaration

▸ (`failType`, `msg`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `failType` | [`CommandFailType`](../enums/common_web_core_messaging_CommandReply.CommandFailType.md) |
| `msg` | `string` |

##### Returns

`void`

#### Defined in

[common/web/core/messaging/CommandReply.ts:41](https://github.com/Soroush9978/rds-ng/blob/3365237/src/common/web/core/messaging/CommandReply.ts#L41)
