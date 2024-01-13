---
id: "common_web_core_messaging_CommandReply.CommandReply"
title: "Class: CommandReply"
sidebar_label: "CommandReply"
custom_edit_url: null
---

[common/web/core/messaging/CommandReply](../modules/common_web_core_messaging_CommandReply.md).CommandReply

A command reply message.

Every command needs to receive a reply in the form of a ``CommandReply`` message. The reply contains
information about its ``success``, as well as a text message which is usually used to describe reasons for
failures.

## Hierarchy

- [`Message`](common_web_core_messaging_Message.Message.md)

  ↳ **`CommandReply`**

  ↳↳ [`ListConnectorsReply`](common_web_api_connector_ConnectorCommands.ListConnectorsReply.md)

  ↳↳ [`PingReply`](common_web_api_network_NetworkCommands.PingReply.md)

  ↳↳ [`ListProjectsReply`](common_web_api_project_ProjectCommands.ListProjectsReply.md)

  ↳↳ [`CreateProjectReply`](common_web_api_project_ProjectCommands.CreateProjectReply.md)

  ↳↳ [`UpdateProjectReply`](common_web_api_project_ProjectCommands.UpdateProjectReply.md)

  ↳↳ [`DeleteProjectReply`](common_web_api_project_ProjectCommands.DeleteProjectReply.md)

  ↳↳ [`UpdateProjectFeaturesReply`](common_web_api_project_ProjectFeaturesCommands.UpdateProjectFeaturesReply.md)

## Constructors

### constructor

• **new CommandReply**(`name`, `origin`, `sender`, `target`, `hops?`, `trace?`): [`CommandReply`](common_web_core_messaging_CommandReply.CommandReply.md)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | The name of the message. |
| `origin` | [`UnitID`](common_web_utils_UnitID.UnitID.md) | `undefined` | The initial source component of the message. |
| `sender` | [`UnitID`](common_web_utils_UnitID.UnitID.md) | `undefined` | The component from where the message came from. |
| `target` | [`Channel`](common_web_core_messaging_Channel.Channel.md) | `undefined` | Where the message should go to. |
| `hops` | [`UnitID`](common_web_utils_UnitID.UnitID.md)[] | `[]` | A list of components the message was sent through. |
| `trace` | `string` | `undefined` | A unique trace identifying messages that logically belong together. |

#### Returns

[`CommandReply`](common_web_core_messaging_CommandReply.CommandReply.md)

#### Inherited from

[Message](common_web_core_messaging_Message.Message.md).[constructor](common_web_core_messaging_Message.Message.md#constructor)

#### Defined in

[common/web/core/messaging/Message.ts:53](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/Message.ts#L53)

## Properties

### hops

• `Readonly` **hops**: [`UnitID`](common_web_utils_UnitID.UnitID.md)[]

#### Inherited from

[Message](common_web_core_messaging_Message.Message.md).[hops](common_web_core_messaging_Message.Message.md#hops)

#### Defined in

[common/web/core/messaging/Message.ts:42](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/Message.ts#L42)

___

### message

• `Readonly` **message**: `string` = `""`

#### Defined in

[common/web/core/messaging/CommandReply.ts:28](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/CommandReply.ts#L28)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[Message](common_web_core_messaging_Message.Message.md).[name](common_web_core_messaging_Message.Message.md#name)

#### Defined in

[common/web/core/messaging/Message.ts:30](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/Message.ts#L30)

___

### origin

• `Readonly` **origin**: [`UnitID`](common_web_utils_UnitID.UnitID.md)

#### Inherited from

[Message](common_web_core_messaging_Message.Message.md).[origin](common_web_core_messaging_Message.Message.md#origin)

#### Defined in

[common/web/core/messaging/Message.ts:33](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/Message.ts#L33)

___

### sender

• `Readonly` **sender**: [`UnitID`](common_web_utils_UnitID.UnitID.md)

#### Inherited from

[Message](common_web_core_messaging_Message.Message.md).[sender](common_web_core_messaging_Message.Message.md#sender)

#### Defined in

[common/web/core/messaging/Message.ts:36](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/Message.ts#L36)

___

### success

• `Readonly` **success**: `boolean` = `true`

#### Defined in

[common/web/core/messaging/CommandReply.ts:27](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/CommandReply.ts#L27)

___

### target

• `Readonly` **target**: [`Channel`](common_web_core_messaging_Channel.Channel.md)

#### Inherited from

[Message](common_web_core_messaging_Message.Message.md).[target](common_web_core_messaging_Message.Message.md#target)

#### Defined in

[common/web/core/messaging/Message.ts:39](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/Message.ts#L39)

___

### trace

• `Readonly` **trace**: `string`

#### Inherited from

[Message](common_web_core_messaging_Message.Message.md).[trace](common_web_core_messaging_Message.Message.md#trace)

#### Defined in

[common/web/core/messaging/Message.ts:43](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/Message.ts#L43)

___

### unique

• `Readonly` **unique**: `string`

#### Defined in

[common/web/core/messaging/CommandReply.ts:30](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/CommandReply.ts#L30)

___

### Category

▪ `Static` `Readonly` **Category**: `string` = `"CommandReply"`

#### Overrides

[Message](common_web_core_messaging_Message.Message.md).[Category](common_web_core_messaging_Message.Message.md#category)

#### Defined in

[common/web/core/messaging/CommandReply.ts:25](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/CommandReply.ts#L25)

## Accessors

### category

• `get` **category**(): `string`

Gets the global message category.

#### Returns

`string`

#### Overrides

Message.category

#### Defined in

[common/web/core/messaging/CommandReply.ts:35](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/CommandReply.ts#L35)

## Methods

### convertToJSON

▸ **convertToJSON**(): `string`

Converts this message to JSON.

#### Returns

`string`

#### Inherited from

[Message](common_web_core_messaging_Message.Message.md).[convertToJSON](common_web_core_messaging_Message.Message.md#converttojson)

#### Defined in

[common/web/core/messaging/Message.ts:65](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/Message.ts#L65)

___

### toString

▸ **toString**(): `string`

Gets the string representation of this message.

#### Returns

`string`

#### Inherited from

[Message](common_web_core_messaging_Message.Message.md).[toString](common_web_core_messaging_Message.Message.md#tostring)

#### Defined in

[common/web/core/messaging/Message.ts:131](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/Message.ts#L131)

___

### convertFromJSON

▸ **convertFromJSON**(`msgType`, `data`): [`Message`](common_web_core_messaging_Message.Message.md)

Creates a message from JSON data.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `msgType` | [`ConstructableMessage`](../interfaces/common_web_core_messaging_Message.ConstructableMessage.md)<[`Message`](common_web_core_messaging_Message.Message.md)\> | The message type to construct. |
| `data` | `string` | The JSON data string. |

#### Returns

[`Message`](common_web_core_messaging_Message.Message.md)

- The created message.

#### Inherited from

[Message](common_web_core_messaging_Message.Message.md).[convertFromJSON](common_web_core_messaging_Message.Message.md#convertfromjson)

#### Defined in

[common/web/core/messaging/Message.ts:77](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/Message.ts#L77)

___

### define

▸ **define**(`name`): `Function`

Defines a new message.

The decorator takes care of wrapping the new class as a dataclass, passing the correct message
name to its constructor. It also registers the new message type in the global ``MessageTypesCatalog``.

Examples:
```
    @Message.define("msg/command")
    class MyCommand extends Command {
        ...
    }
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the message. |

#### Returns

`Function`

#### Inherited from

[Message](common_web_core_messaging_Message.Message.md).[define](common_web_core_messaging_Message.Message.md#define)

#### Defined in

[common/web/core/messaging/Message.ts:105](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/Message.ts#L105)

___

### messageName

▸ **messageName**(): `string`

Retrieves the name of the message type on a message class basis.

#### Returns

`string`

#### Inherited from

[Message](common_web_core_messaging_Message.Message.md).[messageName](common_web_core_messaging_Message.Message.md#messagename)

#### Defined in

[common/web/core/messaging/Message.ts:85](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/Message.ts#L85)
