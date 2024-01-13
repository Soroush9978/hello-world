---
id: "common_web_api_project_ProjectCommands.UpdateProjectReply"
title: "Class: UpdateProjectReply"
sidebar_label: "UpdateProjectReply"
custom_edit_url: null
---

[common/web/api/project/ProjectCommands](../modules/common_web_api_project_ProjectCommands.md).UpdateProjectReply

Reply to ``UpdateProjectCommand``.

**`Param`**

The ID of the updated project.

## Hierarchy

- [`CommandReply`](common_web_core_messaging_CommandReply.CommandReply.md)

  ↳ **`UpdateProjectReply`**

## Constructors

### constructor

• **new UpdateProjectReply**(`name`, `origin`, `sender`, `target`, `hops?`, `trace?`): [`UpdateProjectReply`](common_web_api_project_ProjectCommands.UpdateProjectReply.md)

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

[`UpdateProjectReply`](common_web_api_project_ProjectCommands.UpdateProjectReply.md)

#### Inherited from

[CommandReply](common_web_core_messaging_CommandReply.CommandReply.md).[constructor](common_web_core_messaging_CommandReply.CommandReply.md#constructor)

#### Defined in

[common/web/core/messaging/Message.ts:53](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/Message.ts#L53)

## Properties

### hops

• `Readonly` **hops**: [`UnitID`](common_web_utils_UnitID.UnitID.md)[]

#### Inherited from

[CommandReply](common_web_core_messaging_CommandReply.CommandReply.md).[hops](common_web_core_messaging_CommandReply.CommandReply.md#hops)

#### Defined in

[common/web/core/messaging/Message.ts:42](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/Message.ts#L42)

___

### message

• `Readonly` **message**: `string` = `""`

#### Inherited from

[CommandReply](common_web_core_messaging_CommandReply.CommandReply.md).[message](common_web_core_messaging_CommandReply.CommandReply.md#message)

#### Defined in

[common/web/core/messaging/CommandReply.ts:28](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/CommandReply.ts#L28)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[CommandReply](common_web_core_messaging_CommandReply.CommandReply.md).[name](common_web_core_messaging_CommandReply.CommandReply.md#name)

#### Defined in

[common/web/core/messaging/Message.ts:30](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/Message.ts#L30)

___

### origin

• `Readonly` **origin**: [`UnitID`](common_web_utils_UnitID.UnitID.md)

#### Inherited from

[CommandReply](common_web_core_messaging_CommandReply.CommandReply.md).[origin](common_web_core_messaging_CommandReply.CommandReply.md#origin)

#### Defined in

[common/web/core/messaging/Message.ts:33](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/Message.ts#L33)

___

### project\_id

• `Readonly` **project\_id**: `number` = `0`

#### Defined in

[common/web/api/project/ProjectCommands.ts:145](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/api/project/ProjectCommands.ts#L145)

___

### sender

• `Readonly` **sender**: [`UnitID`](common_web_utils_UnitID.UnitID.md)

#### Inherited from

[CommandReply](common_web_core_messaging_CommandReply.CommandReply.md).[sender](common_web_core_messaging_CommandReply.CommandReply.md#sender)

#### Defined in

[common/web/core/messaging/Message.ts:36](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/Message.ts#L36)

___

### success

• `Readonly` **success**: `boolean` = `true`

#### Inherited from

[CommandReply](common_web_core_messaging_CommandReply.CommandReply.md).[success](common_web_core_messaging_CommandReply.CommandReply.md#success)

#### Defined in

[common/web/core/messaging/CommandReply.ts:27](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/CommandReply.ts#L27)

___

### target

• `Readonly` **target**: [`Channel`](common_web_core_messaging_Channel.Channel.md)

#### Inherited from

[CommandReply](common_web_core_messaging_CommandReply.CommandReply.md).[target](common_web_core_messaging_CommandReply.CommandReply.md#target)

#### Defined in

[common/web/core/messaging/Message.ts:39](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/Message.ts#L39)

___

### trace

• `Readonly` **trace**: `string`

#### Inherited from

[CommandReply](common_web_core_messaging_CommandReply.CommandReply.md).[trace](common_web_core_messaging_CommandReply.CommandReply.md#trace)

#### Defined in

[common/web/core/messaging/Message.ts:43](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/Message.ts#L43)

___

### unique

• `Readonly` **unique**: `string`

#### Inherited from

[CommandReply](common_web_core_messaging_CommandReply.CommandReply.md).[unique](common_web_core_messaging_CommandReply.CommandReply.md#unique)

#### Defined in

[common/web/core/messaging/CommandReply.ts:30](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/CommandReply.ts#L30)

___

### Category

▪ `Static` `Readonly` **Category**: `string` = `"CommandReply"`

#### Inherited from

[CommandReply](common_web_core_messaging_CommandReply.CommandReply.md).[Category](common_web_core_messaging_CommandReply.CommandReply.md#category)

#### Defined in

[common/web/core/messaging/CommandReply.ts:25](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/CommandReply.ts#L25)

## Accessors

### category

• `get` **category**(): `string`

Gets the global message category.

#### Returns

`string`

#### Inherited from

CommandReply.category

#### Defined in

[common/web/core/messaging/CommandReply.ts:35](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/CommandReply.ts#L35)

## Methods

### convertToJSON

▸ **convertToJSON**(): `string`

Converts this message to JSON.

#### Returns

`string`

#### Inherited from

[CommandReply](common_web_core_messaging_CommandReply.CommandReply.md).[convertToJSON](common_web_core_messaging_CommandReply.CommandReply.md#converttojson)

#### Defined in

[common/web/core/messaging/Message.ts:65](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/Message.ts#L65)

___

### toString

▸ **toString**(): `string`

Gets the string representation of this message.

#### Returns

`string`

#### Inherited from

[CommandReply](common_web_core_messaging_CommandReply.CommandReply.md).[toString](common_web_core_messaging_CommandReply.CommandReply.md#tostring)

#### Defined in

[common/web/core/messaging/Message.ts:131](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/Message.ts#L131)

___

### build

▸ **build**(`messageBuilder`, `cmd`, `project_id`, `success?`, `message?`): [`CommandReplyComposer`](common_web_core_messaging_composers_CommandReplyComposer.CommandReplyComposer.md)<[`UpdateProjectReply`](common_web_api_project_ProjectCommands.UpdateProjectReply.md)\>

Helper function to easily build this message.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `messageBuilder` | [`MessageBuilder`](common_web_core_messaging_composers_MessageBuilder.MessageBuilder.md) | `undefined` |
| `cmd` | [`UpdateProjectCommand`](common_web_api_project_ProjectCommands.UpdateProjectCommand.md) | `undefined` |
| `project_id` | `number` | `undefined` |
| `success` | `boolean` | `true` |
| `message` | `string` | `""` |

#### Returns

[`CommandReplyComposer`](common_web_core_messaging_composers_CommandReplyComposer.CommandReplyComposer.md)<[`UpdateProjectReply`](common_web_api_project_ProjectCommands.UpdateProjectReply.md)\>

#### Defined in

[common/web/api/project/ProjectCommands.ts:150](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/api/project/ProjectCommands.ts#L150)

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

[CommandReply](common_web_core_messaging_CommandReply.CommandReply.md).[convertFromJSON](common_web_core_messaging_CommandReply.CommandReply.md#convertfromjson)

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

[CommandReply](common_web_core_messaging_CommandReply.CommandReply.md).[define](common_web_core_messaging_CommandReply.CommandReply.md#define)

#### Defined in

[common/web/core/messaging/Message.ts:105](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/Message.ts#L105)

___

### messageName

▸ **messageName**(): `string`

Retrieves the name of the message type on a message class basis.

#### Returns

`string`

#### Inherited from

[CommandReply](common_web_core_messaging_CommandReply.CommandReply.md).[messageName](common_web_core_messaging_CommandReply.CommandReply.md#messagename)

#### Defined in

[common/web/core/messaging/Message.ts:85](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/Message.ts#L85)
