---
id: "common_web_core_Core.Core"
title: "Class: Core"
sidebar_label: "Core"
custom_edit_url: null
---

[common/web/core/Core](../modules/common_web_core_Core.md).Core

The main *underlying basis* of any component.

The ``Core`` brings together all portions and aspects that build the underlying foundation of every web component,
including the ``MessageBus``.

The core can be regarded as a facade to the *inner structure* of a component. It only offers a small number of public
methods and is accessed from the outside very rarely.

An instance of this class is always created when creating a ``WebComponent``; it should never be instantiated otherwise.

## Constructors

### constructor

• **new Core**(`compData`): [`Core`](common_web_core_Core.Core.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compData` | [`WebComponentData`](common_web_component_WebComponentData.WebComponentData.md) | The component data used to access common component information. |

#### Returns

[`Core`](common_web_core_Core.Core.md)

#### Defined in

[common/web/core/Core.ts:27](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/core/Core.ts#L27)

## Properties

### \_compData

• `Private` `Readonly` **\_compData**: [`WebComponentData`](common_web_component_WebComponentData.WebComponentData.md)

#### Defined in

[common/web/core/Core.ts:20](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/core/Core.ts#L20)

___

### \_messageBus

• `Private` `Readonly` **\_messageBus**: [`MessageBus`](common_web_core_messaging_MessageBus.MessageBus.md)

#### Defined in

[common/web/core/Core.ts:22](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/core/Core.ts#L22)

## Accessors

### isDebugMode

• `get` **isDebugMode**(): `boolean`

Whether we're running in Debug mode.

#### Returns

`boolean`

#### Defined in

[common/web/core/Core.ts:95](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/core/Core.ts#L95)

___

### messageBus

• `get` **messageBus**(): [`MessageBus`](common_web_core_messaging_MessageBus.MessageBus.md)

The global ``MessageBus`` instance.

#### Returns

[`MessageBus`](common_web_core_messaging_MessageBus.MessageBus.md)

#### Defined in

[common/web/core/Core.ts:88](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/core/Core.ts#L88)

## Methods

### createMessageBus

▸ **createMessageBus**(): [`MessageBus`](common_web_core_messaging_MessageBus.MessageBus.md)

#### Returns

[`MessageBus`](common_web_core_messaging_MessageBus.MessageBus.md)

#### Defined in

[common/web/core/Core.ts:45](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/core/Core.ts#L45)

___

### enableDebugMode

▸ **enableDebugMode**(): `void`

#### Returns

`void`

#### Defined in

[common/web/core/Core.ts:40](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/core/Core.ts#L40)

___

### registerService

▸ **registerService**(`svc`): `void`

Registers a message service.

Services are always created and registered using ``create_service`` (in ``WebComponent``),
so you should rarely (if ever) need to call this method directly.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `svc` | [`MessageService`](common_web_core_messaging_handlers_MessageService.MessageService.md)<[`MessageContext`](common_web_core_messaging_handlers_MessageContext.MessageContext.md)\> | The message service to register. |

#### Returns

`void`

#### Defined in

[common/web/core/Core.ts:57](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/core/Core.ts#L57)

___

### run

▸ **run**(): `void`

Starts periodic background tasks.

#### Returns

`void`

#### Defined in

[common/web/core/Core.ts:81](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/core/Core.ts#L81)

___

### unregisterService

▸ **unregisterService**(`svc`): `void`

Removes a message service.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `svc` | [`MessageService`](common_web_core_messaging_handlers_MessageService.MessageService.md)<[`MessageContext`](common_web_core_messaging_handlers_MessageContext.MessageContext.md)\> | The message service to remove. |

#### Returns

`void`

#### Defined in

[common/web/core/Core.ts:70](https://github.com/Soroush9978/rds-ng/blob/5673246/src/common/web/core/Core.ts#L70)
