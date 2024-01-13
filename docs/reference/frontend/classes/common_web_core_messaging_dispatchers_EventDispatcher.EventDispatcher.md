---
id: "common_web_core_messaging_dispatchers_EventDispatcher.EventDispatcher"
title: "Class: EventDispatcher"
sidebar_label: "EventDispatcher"
custom_edit_url: null
---

[common/web/core/messaging/dispatchers/EventDispatcher](../modules/common_web_core_messaging_dispatchers_EventDispatcher.md).EventDispatcher

Message dispatcher specific to ``Event``.

## Hierarchy

- [`MessageDispatcher`](common_web_core_messaging_dispatchers_MessageDispatcher.MessageDispatcher.md)<[`Event`](common_web_core_messaging_Event.Event.md), [`EventMetaInformation`](common_web_core_messaging_meta_EventMetaInformation.EventMetaInformation.md)\>

  ↳ **`EventDispatcher`**

## Constructors

### constructor

• **new EventDispatcher**(): [`EventDispatcher`](common_web_core_messaging_dispatchers_EventDispatcher.EventDispatcher.md)

#### Returns

[`EventDispatcher`](common_web_core_messaging_dispatchers_EventDispatcher.EventDispatcher.md)

#### Inherited from

[MessageDispatcher](common_web_core_messaging_dispatchers_MessageDispatcher.MessageDispatcher.md).[constructor](common_web_core_messaging_dispatchers_MessageDispatcher.MessageDispatcher.md#constructor)

## Properties

### \_metaInformationList

▪ `Static` `Protected` **\_metaInformationList**: [`MessageMetaInformationList`](common_web_core_messaging_meta_MessageMetaInformationList.MessageMetaInformationList.md)

#### Inherited from

[MessageDispatcher](common_web_core_messaging_dispatchers_MessageDispatcher.MessageDispatcher.md).[_metaInformationList](common_web_core_messaging_dispatchers_MessageDispatcher.MessageDispatcher.md#_metainformationlist)

#### Defined in

[common/web/core/messaging/dispatchers/MessageDispatcher.ts:14](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/core/messaging/dispatchers/MessageDispatcher.ts#L14)

## Methods

### contextError

▸ **contextError**(`err`, `msg`, `msgMeta`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `any` |
| `msg` | [`Event`](common_web_core_messaging_Event.Event.md) |
| `msgMeta` | [`EventMetaInformation`](common_web_core_messaging_meta_EventMetaInformation.EventMetaInformation.md) |

#### Returns

`void`

#### Inherited from

[MessageDispatcher](common_web_core_messaging_dispatchers_MessageDispatcher.MessageDispatcher.md).[contextError](common_web_core_messaging_dispatchers_MessageDispatcher.MessageDispatcher.md#contexterror)

#### Defined in

[common/web/core/messaging/dispatchers/MessageDispatcher.ts:75](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/core/messaging/dispatchers/MessageDispatcher.ts#L75)

___

### dispatch

▸ **dispatch**<`CtxType`\>(`msg`, `msgMeta`, `handler`, `ctx`): `void`

Dispatches a message to locally registered message handlers.

Notes:
    Exceptions arising within a message handler will not interrupt the running program; instead, such errors will only be logged.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CtxType` | extends [`MessageContext`](common_web_core_messaging_handlers_MessageContext.MessageContext.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `msg` | [`Event`](common_web_core_messaging_Event.Event.md) | The message to be dispatched. |
| `msgMeta` | [`EventMetaInformation`](common_web_core_messaging_meta_EventMetaInformation.EventMetaInformation.md) | The message meta information. |
| `handler` | [`MessageHandlerMapping`](common_web_core_messaging_handlers_MessageHandler.MessageHandlerMapping.md) | The handler to be invoked. |
| `ctx` | `CtxType` | The message context. |

#### Returns

`void`

**`Throws`**

Error - If the handler requires a different message type.

#### Inherited from

[MessageDispatcher](common_web_core_messaging_dispatchers_MessageDispatcher.MessageDispatcher.md).[dispatch](common_web_core_messaging_dispatchers_MessageDispatcher.MessageDispatcher.md#dispatch)

#### Defined in

[common/web/core/messaging/dispatchers/MessageDispatcher.ts:46](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/core/messaging/dispatchers/MessageDispatcher.ts#L46)

___

### postDispatch

▸ **postDispatch**(`msg`, `msgMeta`): `void`

Called to perform tasks *after* sending a message.

This method is called after any service-registered message handler have been invoked.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `msg` | [`Event`](common_web_core_messaging_Event.Event.md) | The message that is about to be dispatched. |
| `msgMeta` | [`EventMetaInformation`](common_web_core_messaging_meta_EventMetaInformation.EventMetaInformation.md) | The message meta information. |

#### Returns

`void`

#### Inherited from

[MessageDispatcher](common_web_core_messaging_dispatchers_MessageDispatcher.MessageDispatcher.md).[postDispatch](common_web_core_messaging_dispatchers_MessageDispatcher.MessageDispatcher.md#postdispatch)

#### Defined in

[common/web/core/messaging/dispatchers/MessageDispatcher.ts:72](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/core/messaging/dispatchers/MessageDispatcher.ts#L72)

___

### preDispatch

▸ **preDispatch**<`MsgType`\>(`msg`, `msgMeta`): `void`

Called to perform tasks *before* sending a message.

This method is called before any service-registered message handler is invoked.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MsgType` | extends [`Event`](common_web_core_messaging_Event.Event.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `msg` | `MsgType` | The message that is about to be dispatched. |
| `msgMeta` | [`EventMetaInformation`](common_web_core_messaging_meta_EventMetaInformation.EventMetaInformation.md) | The message meta information. |

#### Returns

`void`

**`Throws`**

Error - If the meta information type is invalid.

#### Overrides

[MessageDispatcher](common_web_core_messaging_dispatchers_MessageDispatcher.MessageDispatcher.md).[preDispatch](common_web_core_messaging_dispatchers_MessageDispatcher.MessageDispatcher.md#predispatch)

#### Defined in

[common/web/core/messaging/dispatchers/EventDispatcher.ts:20](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/core/messaging/dispatchers/EventDispatcher.ts#L20)

___

### process

▸ **process**(): `void`

Called to perform periodic tasks.

#### Returns

`void`

#### Inherited from

[MessageDispatcher](common_web_core_messaging_dispatchers_MessageDispatcher.MessageDispatcher.md).[process](common_web_core_messaging_dispatchers_MessageDispatcher.MessageDispatcher.md#process)

#### Defined in

[common/web/core/messaging/dispatchers/MessageDispatcher.ts:19](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/core/messaging/dispatchers/MessageDispatcher.ts#L19)
