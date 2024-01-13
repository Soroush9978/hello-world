---
id: "common_web_api_network_NetworkEvents.ClientConnectedEvent"
title: "Class: ClientConnectedEvent"
sidebar_label: "ClientConnectedEvent"
custom_edit_url: null
---

[common/web/api/network/NetworkEvents](../modules/common_web_api_network_NetworkEvents.md).ClientConnectedEvent

Emitted whenever the ``Client`` established a connection to a server.

## Hierarchy

- [`Event`](common_web_core_messaging_Event.Event.md)

  ↳ **`ClientConnectedEvent`**

## Constructors

### constructor

• **new ClientConnectedEvent**(`name`, `origin`, `sender`, `target`, `hops?`, `trace?`): [`ClientConnectedEvent`](common_web_api_network_NetworkEvents.ClientConnectedEvent.md)

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

[`ClientConnectedEvent`](common_web_api_network_NetworkEvents.ClientConnectedEvent.md)

#### Inherited from

[Event](common_web_core_messaging_Event.Event.md).[constructor](common_web_core_messaging_Event.Event.md#constructor)

#### Defined in

[common/web/core/messaging/Message.ts:53](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/Message.ts#L53)

## Properties

### hops

• `Readonly` **hops**: [`UnitID`](common_web_utils_UnitID.UnitID.md)[]

#### Inherited from

[Event](common_web_core_messaging_Event.Event.md).[hops](common_web_core_messaging_Event.Event.md#hops)

#### Defined in

[common/web/core/messaging/Message.ts:42](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/Message.ts#L42)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[Event](common_web_core_messaging_Event.Event.md).[name](common_web_core_messaging_Event.Event.md#name)

#### Defined in

[common/web/core/messaging/Message.ts:30](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/Message.ts#L30)

___

### origin

• `Readonly` **origin**: [`UnitID`](common_web_utils_UnitID.UnitID.md)

#### Inherited from

[Event](common_web_core_messaging_Event.Event.md).[origin](common_web_core_messaging_Event.Event.md#origin)

#### Defined in

[common/web/core/messaging/Message.ts:33](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/Message.ts#L33)

___

### sender

• `Readonly` **sender**: [`UnitID`](common_web_utils_UnitID.UnitID.md)

#### Inherited from

[Event](common_web_core_messaging_Event.Event.md).[sender](common_web_core_messaging_Event.Event.md#sender)

#### Defined in

[common/web/core/messaging/Message.ts:36](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/Message.ts#L36)

___

### target

• `Readonly` **target**: [`Channel`](common_web_core_messaging_Channel.Channel.md)

#### Inherited from

[Event](common_web_core_messaging_Event.Event.md).[target](common_web_core_messaging_Event.Event.md#target)

#### Defined in

[common/web/core/messaging/Message.ts:39](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/Message.ts#L39)

___

### trace

• `Readonly` **trace**: `string`

#### Inherited from

[Event](common_web_core_messaging_Event.Event.md).[trace](common_web_core_messaging_Event.Event.md#trace)

#### Defined in

[common/web/core/messaging/Message.ts:43](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/Message.ts#L43)

___

### Category

▪ `Static` `Readonly` **Category**: `string` = `"Event"`

#### Inherited from

[Event](common_web_core_messaging_Event.Event.md).[Category](common_web_core_messaging_Event.Event.md#category)

#### Defined in

[common/web/core/messaging/Event.ts:9](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/Event.ts#L9)

## Accessors

### category

• `get` **category**(): `string`

Gets the global message category.

#### Returns

`string`

#### Inherited from

Event.category

#### Defined in

[common/web/core/messaging/Event.ts:14](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/Event.ts#L14)

## Methods

### convertToJSON

▸ **convertToJSON**(): `string`

Converts this message to JSON.

#### Returns

`string`

#### Inherited from

[Event](common_web_core_messaging_Event.Event.md).[convertToJSON](common_web_core_messaging_Event.Event.md#converttojson)

#### Defined in

[common/web/core/messaging/Message.ts:65](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/Message.ts#L65)

___

### toString

▸ **toString**(): `string`

Gets the string representation of this message.

#### Returns

`string`

#### Inherited from

[Event](common_web_core_messaging_Event.Event.md).[toString](common_web_core_messaging_Event.Event.md#tostring)

#### Defined in

[common/web/core/messaging/Message.ts:131](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/Message.ts#L131)

___

### build

▸ **build**(`messageBuilder`, `chain?`): [`EventComposer`](common_web_core_messaging_composers_EventComposer.EventComposer.md)<[`ClientConnectedEvent`](common_web_api_network_NetworkEvents.ClientConnectedEvent.md)\>

Helper function to easily build this message.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `messageBuilder` | [`MessageBuilder`](common_web_core_messaging_composers_MessageBuilder.MessageBuilder.md) | `undefined` |
| `chain` | ``null`` \| [`Message`](common_web_core_messaging_Message.Message.md) | `null` |

#### Returns

[`EventComposer`](common_web_core_messaging_composers_EventComposer.EventComposer.md)<[`ClientConnectedEvent`](common_web_api_network_NetworkEvents.ClientConnectedEvent.md)\>

#### Defined in

[common/web/api/network/NetworkEvents.ts:17](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/api/network/NetworkEvents.ts#L17)

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

[Event](common_web_core_messaging_Event.Event.md).[convertFromJSON](common_web_core_messaging_Event.Event.md#convertfromjson)

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

[Event](common_web_core_messaging_Event.Event.md).[define](common_web_core_messaging_Event.Event.md#define)

#### Defined in

[common/web/core/messaging/Message.ts:105](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/Message.ts#L105)

___

### messageName

▸ **messageName**(): `string`

Retrieves the name of the message type on a message class basis.

#### Returns

`string`

#### Inherited from

[Event](common_web_core_messaging_Event.Event.md).[messageName](common_web_core_messaging_Event.Event.md#messagename)

#### Defined in

[common/web/core/messaging/Message.ts:85](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/core/messaging/Message.ts#L85)
