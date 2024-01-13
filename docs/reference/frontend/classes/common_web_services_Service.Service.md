---
id: "common_web_services_Service.Service"
title: "Class: Service<CtxType>"
sidebar_label: "Service"
custom_edit_url: null
---

[common/web/services/Service](../modules/common_web_services_Service.md).Service

Base service class providing easy message handler mapping.

A service can be seen as the bridge between the inner workings of a component (represented by a ``Core``) and the
outside component domain.

Services register the various message handlers that are called when a certain message is received by the message bus and
dispatched locally. They also create instances of ``ServiceContext`` (or a subclass) that represent a single *unit of work*
when executing a message handler.

Message handlers are defined using the ``message_handler`` decorator, as can be seen in this example (``svc`` being a ``Service`` instance):
```
    @svc.messageHandler("msg/event", Event)
    function h(msg: Event, ctx: ServiceContext): void {
        ctx.logger.info("EVENT HANDLER CALLED");
    }
```

## Type parameters

| Name | Type |
| :------ | :------ |
| `CtxType` | extends [`ServiceContext`](common_web_services_ServiceContext.ServiceContext.md) = [`ServiceContext`](common_web_services_ServiceContext.ServiceContext.md) |

## Hierarchy

- [`MessageService`](common_web_core_messaging_handlers_MessageService.MessageService.md)<`CtxType`\>

  ↳ **`Service`**

## Constructors

### constructor

• **new Service**<`CtxType`\>(`compID`, `name`, `messageBus`, `contextType?`): [`Service`](common_web_services_Service.Service.md)<`CtxType`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CtxType` | extends [`ServiceContext`](common_web_services_ServiceContext.ServiceContext.md) = [`ServiceContext`](common_web_services_ServiceContext.ServiceContext.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compID` | [`UnitID`](common_web_utils_UnitID.UnitID.md) | The global component identifier. |
| `name` | `string` | The service name. |
| `messageBus` | [`MessageBusProtocol`](../interfaces/common_web_core_messaging_MessageBusProtocol.MessageBusProtocol.md) | The global message bus. |
| `contextType` | [`Constructable`](../interfaces/common_web_utils_Types.Constructable.md)<`CtxType`\> | The type to use when creating a message context. |

#### Returns

[`Service`](common_web_services_Service.Service.md)<`CtxType`\>

#### Overrides

[MessageService](common_web_core_messaging_handlers_MessageService.MessageService.md).[constructor](common_web_core_messaging_handlers_MessageService.MessageService.md#constructor)

#### Defined in

[common/web/services/Service.ts:40](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/services/Service.ts#L40)

## Properties

### \_name

• `Private` `Readonly` **\_name**: `string`

#### Defined in

[common/web/services/Service.ts:32](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/services/Service.ts#L32)

## Accessors

### messageBuilder

• `get` **messageBuilder**(): [`MessageBuilder`](common_web_core_messaging_composers_MessageBuilder.MessageBuilder.md)

The service's message builder.

#### Returns

[`MessageBuilder`](common_web_core_messaging_composers_MessageBuilder.MessageBuilder.md)

#### Defined in

[common/web/services/Service.ts:82](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/services/Service.ts#L82)

___

### messageHandlers

• `get` **messageHandlers**(): [`MessageHandlers`](common_web_core_messaging_handlers_MessageHandlers.MessageHandlers.md)

The message handlers maintained by this message service.

#### Returns

[`MessageHandlers`](common_web_core_messaging_handlers_MessageHandlers.MessageHandlers.md)

#### Inherited from

MessageService.messageHandlers

#### Defined in

[common/web/core/messaging/handlers/MessageService.ts:62](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/handlers/MessageService.ts#L62)

___

### name

• `get` **name**(): `string`

The name of this service.

#### Returns

`string`

#### Defined in

[common/web/services/Service.ts:75](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/services/Service.ts#L75)

## Methods

### createContext

▸ **createContext**(`msgMeta`, `logger`, `config`): [`MessageContext`](common_web_core_messaging_handlers_MessageContext.MessageContext.md)

Creates a new service context.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `msgMeta` | [`MessageMetaInformation`](common_web_core_messaging_meta_MessageMetaInformation.MessageMetaInformation.md) | The meta information of the message. |
| `logger` | [`LoggerProxy`](common_web_core_logging_LoggerProxy.LoggerProxy.md) | The logger to be used within the new context. |
| `config` | [`Configuration`](common_web_utils_config_Configuration.Configuration.md) | The global component configuration. |

#### Returns

[`MessageContext`](common_web_core_messaging_handlers_MessageContext.MessageContext.md)

- The newly created message context.

#### Inherited from

[MessageService](common_web_core_messaging_handlers_MessageService.MessageService.md).[createContext](common_web_core_messaging_handlers_MessageService.MessageService.md#createcontext)

#### Defined in

[common/web/core/messaging/handlers/MessageService.ts:46](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/handlers/MessageService.ts#L46)

___

### createMessageBuilder

▸ **createMessageBuilder**(): [`MessageBuilder`](common_web_core_messaging_composers_MessageBuilder.MessageBuilder.md)

Creates a new message builder.

#### Returns

[`MessageBuilder`](common_web_core_messaging_composers_MessageBuilder.MessageBuilder.md)

- The newly created message builder.

#### Inherited from

[MessageService](common_web_core_messaging_handlers_MessageService.MessageService.md).[createMessageBuilder](common_web_core_messaging_handlers_MessageService.MessageService.md#createmessagebuilder)

#### Defined in

[common/web/core/messaging/handlers/MessageService.ts:55](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/core/messaging/handlers/MessageService.ts#L55)

___

### messageHandler

▸ **messageHandler**<`MsgType`, `CtxType`\>(`messageType`, `handler`, `nameFilter?`): `void`

Declares a message handler.

To define a new message handler, use the following pattern:
```
    svc.messageHandler("msg/event", Event,
        (msg: Event, ctx: ServiceContext): void => {
             ctx.logger.info("EVENT HANDLER CALLED");
        }
    );
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MsgType` | extends [`Message`](common_web_core_messaging_Message.Message.md) |
| `CtxType` | extends [`MessageContext`](common_web_core_messaging_handlers_MessageContext.MessageContext.md) |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `messageType` | [`ConstructableMessage`](../interfaces/common_web_core_messaging_Message.ConstructableMessage.md)<`MsgType`\> | `undefined` | The type of the message. |
| `handler` | `ServiceHandler`<`MsgType`, `CtxType`\> | `undefined` | The message handler callback. |
| `nameFilter` | `string` | `""` | A more generic message name filter to match against; wildcards (*) are supported as well. |

#### Returns

`void`

#### Defined in

[common/web/services/Service.ts:63](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/services/Service.ts#L63)

___

### toString

▸ **toString**(): `string`

Gets the string representation of this service.

#### Returns

`string`

#### Defined in

[common/web/services/Service.ts:89](https://github.com/Soroush9978/rds-ng/blob/165bdc6/src/common/web/services/Service.ts#L89)
