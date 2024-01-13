---
id: "common_web_core_messaging_networking_NetworkEngine.NetworkEngine"
title: "Class: NetworkEngine"
sidebar_label: "NetworkEngine"
custom_edit_url: null
---

[common/web/core/messaging/networking/NetworkEngine](../modules/common_web_core_messaging_networking_NetworkEngine.md).NetworkEngine

Main network management class.

Messages go out to other components through this class, and new messages come in from the outside world here as well.
The network engine takes care of listening to incoming messages, routing them properly, and sending new messages to other components.

## Constructors

### constructor

• **new NetworkEngine**(`compData`, `messageBus`): [`NetworkEngine`](common_web_core_messaging_networking_NetworkEngine.NetworkEngine.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compData` | [`WebComponentData`](common_web_component_WebComponentData.WebComponentData.md) | The global component data. |
| `messageBus` | [`MessageBusProtocol`](../interfaces/common_web_core_messaging_MessageBusProtocol.MessageBusProtocol.md) | The global message bus. |

#### Returns

[`NetworkEngine`](common_web_core_messaging_networking_NetworkEngine.NetworkEngine.md)

#### Defined in

[common/web/core/messaging/networking/NetworkEngine.ts:38](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/networking/NetworkEngine.ts#L38)

## Properties

### \_client

• `Private` `Readonly` **\_client**: [`Client`](common_web_core_messaging_networking_Client.Client.md)

#### Defined in

[common/web/core/messaging/networking/NetworkEngine.ts:29](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/networking/NetworkEngine.ts#L29)

___

### \_compData

• `Private` `Readonly` **\_compData**: [`WebComponentData`](common_web_component_WebComponentData.WebComponentData.md)

#### Defined in

[common/web/core/messaging/networking/NetworkEngine.ts:25](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/networking/NetworkEngine.ts#L25)

___

### \_messageBus

• `Private` `Readonly` **\_messageBus**: [`MessageBusProtocol`](../interfaces/common_web_core_messaging_MessageBusProtocol.MessageBusProtocol.md)

#### Defined in

[common/web/core/messaging/networking/NetworkEngine.ts:27](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/networking/NetworkEngine.ts#L27)

___

### \_metaInformationTypes

• `Private` `Readonly` **\_metaInformationTypes**: `Record`<`string`, [`Constructable`](../interfaces/common_web_utils_Types.Constructable.md)<`object`\>\> = `{}`

#### Defined in

[common/web/core/messaging/networking/NetworkEngine.ts:32](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/networking/NetworkEngine.ts#L32)

___

### \_router

• `Private` `Readonly` **\_router**: [`NetworkRouter`](common_web_core_messaging_networking_NetworkRouter.NetworkRouter.md)

#### Defined in

[common/web/core/messaging/networking/NetworkEngine.ts:30](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/networking/NetworkEngine.ts#L30)

## Accessors

### client

• `get` **client**(): [`Client`](common_web_core_messaging_networking_Client.Client.md)

The client instance.

#### Returns

[`Client`](common_web_core_messaging_networking_Client.Client.md)

#### Defined in

[common/web/core/messaging/networking/NetworkEngine.ts:141](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/networking/NetworkEngine.ts#L141)

## Methods

### createClient

▸ **createClient**(): [`Client`](common_web_core_messaging_networking_Client.Client.md)

#### Returns

[`Client`](common_web_core_messaging_networking_Client.Client.md)

#### Defined in

[common/web/core/messaging/networking/NetworkEngine.ts:51](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/networking/NetworkEngine.ts#L51)

___

### createMessageMetaInformation

▸ **createMessageMetaInformation**(`msg`, `entrypoint`, `...args`): [`MessageMetaInformation`](common_web_core_messaging_meta_MessageMetaInformation.MessageMetaInformation.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | [`Message`](common_web_core_messaging_Message.Message.md) |
| `entrypoint` | [`MessageEntrypoint`](../enums/common_web_core_messaging_meta_MessageMetaInformation.MessageEntrypoint.md) |
| `...args` | `any`[] |

#### Returns

[`MessageMetaInformation`](common_web_core_messaging_meta_MessageMetaInformation.MessageMetaInformation.md)

#### Defined in

[common/web/core/messaging/networking/NetworkEngine.ts:124](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/networking/NetworkEngine.ts#L124)

___

### handleReceivedMessage

▸ **handleReceivedMessage**(`entrypoint`, `msgName`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `entrypoint` | [`MessageEntrypoint`](../enums/common_web_core_messaging_meta_MessageMetaInformation.MessageEntrypoint.md) |
| `msgName` | `string` |
| `data` | `string` |

#### Returns

`void`

#### Defined in

[common/web/core/messaging/networking/NetworkEngine.ts:94](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/networking/NetworkEngine.ts#L94)

___

### process

▸ **process**(): `void`

Called to perform periodic tasks.

#### Returns

`void`

#### Defined in

[common/web/core/messaging/networking/NetworkEngine.ts:69](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/networking/NetworkEngine.ts#L69)

___

### routingError

▸ **routingError**(`msg`, `params`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` |
| `params` | `Record`<`string`, `any`\> |

#### Returns

`void`

#### Defined in

[common/web/core/messaging/networking/NetworkEngine.ts:134](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/networking/NetworkEngine.ts#L134)

___

### run

▸ **run**(): `void`

Listens to incoming messages in order to properly route them.

#### Returns

`void`

#### Defined in

[common/web/core/messaging/networking/NetworkEngine.ts:58](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/networking/NetworkEngine.ts#L58)

___

### sendMessage

▸ **sendMessage**(`msg`, `msgMeta`): `void`

Sends a message across the network.

To do so, the message is first checked for validity (whether it actually *may* be sent). If it is valid, it is routed through the
client (the logic of this can be found in ``NetworkRouter``).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `msg` | [`Message`](common_web_core_messaging_Message.Message.md) | The message to be sent. |
| `msgMeta` | [`MessageMetaInformation`](common_web_core_messaging_meta_MessageMetaInformation.MessageMetaInformation.md) | The message meta information. |

#### Returns

`void`

#### Defined in

[common/web/core/messaging/networking/NetworkEngine.ts:82](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/networking/NetworkEngine.ts#L82)

___

### unpackMessage

▸ **unpackMessage**(`msgName`, `data`): [`Message`](common_web_core_messaging_Message.Message.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `msgName` | `string` |
| `data` | `string` |

#### Returns

[`Message`](common_web_core_messaging_Message.Message.md)

#### Defined in

[common/web/core/messaging/networking/NetworkEngine.ts:109](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/networking/NetworkEngine.ts#L109)
