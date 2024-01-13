---
id: "common_web_core_messaging_networking_Client.Client"
title: "Class: Client"
sidebar_label: "Client"
custom_edit_url: null
---

[common/web/core/messaging/networking/Client](../modules/common_web_core_messaging_networking_Client.md).Client

The client connection, based on ``socketio``.

## Constructors

### constructor

• **new Client**(`compID`, `config`, `messageBuilder`): [`Client`](common_web_core_messaging_networking_Client.Client.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compID` | [`UnitID`](common_web_utils_UnitID.UnitID.md) | The component identifier. |
| `config` | [`Configuration`](common_web_utils_config_Configuration.Configuration.md) | The global configuration. |
| `messageBuilder` | [`MessageBuilder`](common_web_core_messaging_composers_MessageBuilder.MessageBuilder.md) | A message builder instance. |

#### Returns

[`Client`](common_web_core_messaging_networking_Client.Client.md)

#### Defined in

[common/web/core/messaging/networking/Client.ts:34](https://github.com/Soroush9978/rds-ng/blob/3365237/src/common/web/core/messaging/networking/Client.ts#L34)

## Properties

### \_compID

• `Private` `Readonly` **\_compID**: [`UnitID`](common_web_utils_UnitID.UnitID.md)

#### Defined in

[common/web/core/messaging/networking/Client.ts:18](https://github.com/Soroush9978/rds-ng/blob/3365237/src/common/web/core/messaging/networking/Client.ts#L18)

___

### \_config

• `Private` `Readonly` **\_config**: [`Configuration`](common_web_utils_config_Configuration.Configuration.md)

#### Defined in

[common/web/core/messaging/networking/Client.ts:19](https://github.com/Soroush9978/rds-ng/blob/3365237/src/common/web/core/messaging/networking/Client.ts#L19)

___

### \_connectionTimeout

• `Private` `Readonly` **\_connectionTimeout**: `number`

#### Defined in

[common/web/core/messaging/networking/Client.ts:25](https://github.com/Soroush9978/rds-ng/blob/3365237/src/common/web/core/messaging/networking/Client.ts#L25)

___

### \_messageBuilder

• `Private` `Readonly` **\_messageBuilder**: [`MessageBuilder`](common_web_core_messaging_composers_MessageBuilder.MessageBuilder.md)

#### Defined in

[common/web/core/messaging/networking/Client.ts:22](https://github.com/Soroush9978/rds-ng/blob/3365237/src/common/web/core/messaging/networking/Client.ts#L22)

___

### \_messageHandler

• `Private` **\_messageHandler**: ``null`` \| `ClientMessageHandler` = `null`

#### Defined in

[common/web/core/messaging/networking/Client.ts:27](https://github.com/Soroush9978/rds-ng/blob/3365237/src/common/web/core/messaging/networking/Client.ts#L27)

___

### \_serverAddress

• `Private` `Readonly` **\_serverAddress**: `string`

#### Defined in

[common/web/core/messaging/networking/Client.ts:24](https://github.com/Soroush9978/rds-ng/blob/3365237/src/common/web/core/messaging/networking/Client.ts#L24)

___

### \_socket

• `Private` `Readonly` **\_socket**: `Socket`<`DefaultEventsMap`, `DefaultEventsMap`\>

#### Defined in

[common/web/core/messaging/networking/Client.ts:21](https://github.com/Soroush9978/rds-ng/blob/3365237/src/common/web/core/messaging/networking/Client.ts#L21)

## Methods

### connectEvents

▸ **connectEvents**(): `void`

#### Returns

`void`

#### Defined in

[common/web/core/messaging/networking/Client.ts:60](https://github.com/Soroush9978/rds-ng/blob/3365237/src/common/web/core/messaging/networking/Client.ts#L60)

___

### connectToServer

▸ **connectToServer**(): `void`

Establishes the connection to the server.

#### Returns

`void`

#### Defined in

[common/web/core/messaging/networking/Client.ts:83](https://github.com/Soroush9978/rds-ng/blob/3365237/src/common/web/core/messaging/networking/Client.ts#L83)

___

### createSocket

▸ **createSocket**(): `Socket`<`DefaultEventsMap`, `DefaultEventsMap`\>

#### Returns

`Socket`<`DefaultEventsMap`, `DefaultEventsMap`\>

#### Defined in

[common/web/core/messaging/networking/Client.ts:47](https://github.com/Soroush9978/rds-ng/blob/3365237/src/common/web/core/messaging/networking/Client.ts#L47)

___

### getAuthentication

▸ **getAuthentication**(): `Record`<`string`, `any`\>

#### Returns

`Record`<`string`, `any`\>

#### Defined in

[common/web/core/messaging/networking/Client.ts:142](https://github.com/Soroush9978/rds-ng/blob/3365237/src/common/web/core/messaging/networking/Client.ts#L142)

___

### onConnect

▸ **onConnect**(): `void`

#### Returns

`void`

#### Defined in

[common/web/core/messaging/networking/Client.ts:118](https://github.com/Soroush9978/rds-ng/blob/3365237/src/common/web/core/messaging/networking/Client.ts#L118)

___

### onConnectError

▸ **onConnectError**(`reason`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason` | `any` |

#### Returns

`void`

#### Defined in

[common/web/core/messaging/networking/Client.ts:124](https://github.com/Soroush9978/rds-ng/blob/3365237/src/common/web/core/messaging/networking/Client.ts#L124)

___

### onDisconnect

▸ **onDisconnect**(): `void`

#### Returns

`void`

#### Defined in

[common/web/core/messaging/networking/Client.ts:130](https://github.com/Soroush9978/rds-ng/blob/3365237/src/common/web/core/messaging/networking/Client.ts#L130)

___

### onMessage

▸ **onMessage**(`msgName`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msgName` | `string` |
| `data` | `string` |

#### Returns

`void`

#### Defined in

[common/web/core/messaging/networking/Client.ts:136](https://github.com/Soroush9978/rds-ng/blob/3365237/src/common/web/core/messaging/networking/Client.ts#L136)

___

### process

▸ **process**(): `void`

Periodically performs certain tasks.

#### Returns

`void`

#### Defined in

[common/web/core/messaging/networking/Client.ts:77](https://github.com/Soroush9978/rds-ng/blob/3365237/src/common/web/core/messaging/networking/Client.ts#L77)

___

### run

▸ **run**(): `void`

Automatically connects to a server.

#### Returns

`void`

#### Defined in

[common/web/core/messaging/networking/Client.ts:70](https://github.com/Soroush9978/rds-ng/blob/3365237/src/common/web/core/messaging/networking/Client.ts#L70)

___

### sendMessage

▸ **sendMessage**(`msg`): `void`

Sends a message to the server (if connected).

For this, the message will be encoded as *JSON* first.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `msg` | [`Message`](common_web_core_messaging_Message.Message.md) | The message to send. |

#### Returns

`void`

#### Defined in

[common/web/core/messaging/networking/Client.ts:111](https://github.com/Soroush9978/rds-ng/blob/3365237/src/common/web/core/messaging/networking/Client.ts#L111)

___

### setMessageHandler

▸ **setMessageHandler**(`msgHandler`): `void`

Sets a handler that gets called when a message arrives.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `msgHandler` | `ClientMessageHandler` | The message handler to be called. |

#### Returns

`void`

#### Defined in

[common/web/core/messaging/networking/Client.ts:100](https://github.com/Soroush9978/rds-ng/blob/3365237/src/common/web/core/messaging/networking/Client.ts#L100)
