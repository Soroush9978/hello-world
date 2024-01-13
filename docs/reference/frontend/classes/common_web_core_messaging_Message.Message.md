---
id: "common_web_core_messaging_Message.Message"
title: "Class: Message"
sidebar_label: "Message"
custom_edit_url: null
---

[common/web/core/messaging/Message](../modules/common_web_core_messaging_Message.md).Message

Base class for all messages.

A message, besides its actual data, consists mainly of information from where it came and where it should go.

This class also offers a useful decorator to easily declare new messages, like in the following example:
```
    @Message.define("msg/command")
    class MyCommand extends Command {
         ...
    }
```

## Hierarchy

- **`Message`**

  ↳ [`Command`](common_web_core_messaging_Command.Command.md)

  ↳ [`CommandReply`](common_web_core_messaging_CommandReply.CommandReply.md)

  ↳ [`Event`](common_web_core_messaging_Event.Event.md)

## Constructors

### constructor

• **new Message**(`name`, `origin`, `sender`, `target`, `hops?`, `trace?`): [`Message`](common_web_core_messaging_Message.Message.md)

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

[`Message`](common_web_core_messaging_Message.Message.md)

#### Defined in

[common/web/core/messaging/Message.ts:53](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/Message.ts#L53)

## Properties

### hops

• `Readonly` **hops**: [`UnitID`](common_web_utils_UnitID.UnitID.md)[]

#### Defined in

[common/web/core/messaging/Message.ts:42](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/Message.ts#L42)

___

### name

• `Readonly` **name**: `string`

#### Defined in

[common/web/core/messaging/Message.ts:30](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/Message.ts#L30)

___

### origin

• `Readonly` **origin**: [`UnitID`](common_web_utils_UnitID.UnitID.md)

#### Defined in

[common/web/core/messaging/Message.ts:33](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/Message.ts#L33)

___

### sender

• `Readonly` **sender**: [`UnitID`](common_web_utils_UnitID.UnitID.md)

#### Defined in

[common/web/core/messaging/Message.ts:36](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/Message.ts#L36)

___

### target

• `Readonly` **target**: [`Channel`](common_web_core_messaging_Channel.Channel.md)

#### Defined in

[common/web/core/messaging/Message.ts:39](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/Message.ts#L39)

___

### trace

• `Readonly` **trace**: `string`

#### Defined in

[common/web/core/messaging/Message.ts:43](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/Message.ts#L43)

___

### Category

▪ `Static` `Readonly` **Category**: `string` = `"Message"`

#### Defined in

[common/web/core/messaging/Message.ts:28](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/Message.ts#L28)

## Accessors

### category

• `get` **category**(): `string`

Gets the global message category.

#### Returns

`string`

#### Defined in

[common/web/core/messaging/Message.ts:126](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/Message.ts#L126)

## Methods

### convertToJSON

▸ **convertToJSON**(): `string`

Converts this message to JSON.

#### Returns

`string`

#### Defined in

[common/web/core/messaging/Message.ts:65](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/Message.ts#L65)

___

### toString

▸ **toString**(): `string`

Gets the string representation of this message.

#### Returns

`string`

#### Defined in

[common/web/core/messaging/Message.ts:131](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/Message.ts#L131)

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

#### Defined in

[common/web/core/messaging/Message.ts:77](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/Message.ts#L77)

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

#### Defined in

[common/web/core/messaging/Message.ts:105](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/Message.ts#L105)

___

### messageName

▸ **messageName**(): `string`

Retrieves the name of the message type on a message class basis.

#### Returns

`string`

#### Defined in

[common/web/core/messaging/Message.ts:85](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/Message.ts#L85)
