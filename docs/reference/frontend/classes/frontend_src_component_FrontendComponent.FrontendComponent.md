---
id: "frontend_src_component_FrontendComponent.FrontendComponent"
title: "Class: FrontendComponent"
sidebar_label: "FrontendComponent"
custom_edit_url: null
---

[frontend/src/component/FrontendComponent](../modules/frontend_src_component_FrontendComponent.md).FrontendComponent

The main frontend component class.

## Hierarchy

- [`WebComponent`](common_web_component_WebComponent.WebComponent.md)<[`FrontendUserInterface`](frontend_src_ui_FrontendUserInterface.FrontendUserInterface.md)\>

  ↳ **`FrontendComponent`**

## Constructors

### constructor

• **new FrontendComponent**(): [`FrontendComponent`](frontend_src_component_FrontendComponent.FrontendComponent.md)

#### Returns

[`FrontendComponent`](frontend_src_component_FrontendComponent.FrontendComponent.md)

#### Overrides

[WebComponent](common_web_component_WebComponent.WebComponent.md).[constructor](common_web_component_WebComponent.WebComponent.md#constructor)

#### Defined in

[frontend/src/component/FrontendComponent.ts:24](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/frontend/src/component/FrontendComponent.ts#L24)

## Properties

### \_connectorsService

• `Private` **\_connectorsService**: ``null`` \| [`Service`](common_web_services_Service.Service.md)<[`ServiceContext`](common_web_services_ServiceContext.ServiceContext.md)\> = `null`

#### Defined in

[frontend/src/component/FrontendComponent.ts:21](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/frontend/src/component/FrontendComponent.ts#L21)

___

### \_core

• `Protected` `Readonly` **\_core**: [`Core`](common_web_core_Core.Core.md)

#### Inherited from

[WebComponent](common_web_component_WebComponent.WebComponent.md).[_core](common_web_component_WebComponent.WebComponent.md#_core)

#### Defined in

[common/web/component/WebComponent.ts:61](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/component/WebComponent.ts#L61)

___

### \_data

• `Protected` `Readonly` **\_data**: [`WebComponentData`](common_web_component_WebComponentData.WebComponentData.md)

#### Inherited from

[WebComponent](common_web_component_WebComponent.WebComponent.md).[_data](common_web_component_WebComponent.WebComponent.md#_data)

#### Defined in

[common/web/component/WebComponent.ts:59](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/component/WebComponent.ts#L59)

___

### \_frontendService

• `Private` **\_frontendService**: ``null`` \| [`Service`](common_web_services_Service.Service.md)<[`ServiceContext`](common_web_services_ServiceContext.ServiceContext.md)\> = `null`

#### Defined in

[frontend/src/component/FrontendComponent.ts:20](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/frontend/src/component/FrontendComponent.ts#L20)

___

### \_projectsService

• `Private` **\_projectsService**: ``null`` \| [`Service`](common_web_services_Service.Service.md)<[`ServiceContext`](common_web_services_ServiceContext.ServiceContext.md)\> = `null`

#### Defined in

[frontend/src/component/FrontendComponent.ts:22](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/frontend/src/component/FrontendComponent.ts#L22)

___

### \_router

• `Protected` `Readonly` **\_router**: `Router`

#### Inherited from

[WebComponent](common_web_component_WebComponent.WebComponent.md).[_router](common_web_component_WebComponent.WebComponent.md#_router)

#### Defined in

[common/web/component/WebComponent.ts:62](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/component/WebComponent.ts#L62)

___

### \_userInterface

• `Protected` `Readonly` **\_userInterface**: [`FrontendUserInterface`](frontend_src_ui_FrontendUserInterface.FrontendUserInterface.md)

#### Inherited from

[WebComponent](common_web_component_WebComponent.WebComponent.md).[_userInterface](common_web_component_WebComponent.WebComponent.md#_userinterface)

#### Defined in

[common/web/component/WebComponent.ts:64](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/component/WebComponent.ts#L64)

___

### \_vueApp

• `Protected` `Readonly` **\_vueApp**: `App`<`any`\>

#### Inherited from

[WebComponent](common_web_component_WebComponent.WebComponent.md).[_vueApp](common_web_component_WebComponent.WebComponent.md#_vueapp)

#### Defined in

[common/web/component/WebComponent.ts:65](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/component/WebComponent.ts#L65)

## Accessors

### connectorsService

• `get` **connectorsService**(): [`Service`](common_web_services_Service.Service.md)<[`ServiceContext`](common_web_services_ServiceContext.ServiceContext.md)\>

The connectors service.

#### Returns

[`Service`](common_web_services_Service.Service.md)<[`ServiceContext`](common_web_services_ServiceContext.ServiceContext.md)\>

#### Defined in

[frontend/src/component/FrontendComponent.ts:59](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/frontend/src/component/FrontendComponent.ts#L59)

___

### data

• `get` **data**(): [`WebComponentData`](common_web_component_WebComponentData.WebComponentData.md)

A data helper object that stores useful component data and information.

#### Returns

[`WebComponentData`](common_web_component_WebComponentData.WebComponentData.md)

#### Inherited from

WebComponent.data

#### Defined in

[common/web/component/WebComponent.ts:212](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/component/WebComponent.ts#L212)

___

### frontendService

• `get` **frontendService**(): [`Service`](common_web_services_Service.Service.md)<[`ServiceContext`](common_web_services_ServiceContext.ServiceContext.md)\>

The main frontend service.

#### Returns

[`Service`](common_web_services_Service.Service.md)<[`ServiceContext`](common_web_services_ServiceContext.ServiceContext.md)\>

#### Defined in

[frontend/src/component/FrontendComponent.ts:49](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/frontend/src/component/FrontendComponent.ts#L49)

___

### projectsService

• `get` **projectsService**(): [`Service`](common_web_services_Service.Service.md)<[`ServiceContext`](common_web_services_ServiceContext.ServiceContext.md)\>

The projects service.

#### Returns

[`Service`](common_web_services_Service.Service.md)<[`ServiceContext`](common_web_services_ServiceContext.ServiceContext.md)\>

#### Defined in

[frontend/src/component/FrontendComponent.ts:69](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/frontend/src/component/FrontendComponent.ts#L69)

___

### router

• `get` **router**(): `Router`

The global router.

#### Returns

`Router`

#### Inherited from

WebComponent.router

#### Defined in

[common/web/component/WebComponent.ts:219](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/component/WebComponent.ts#L219)

___

### userInterface

• `get` **userInterface**(): `UserInterfaceType`

The global user interface.

#### Returns

`UserInterfaceType`

#### Inherited from

WebComponent.userInterface

#### Defined in

[common/web/component/WebComponent.ts:226](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/component/WebComponent.ts#L226)

___

### vue

• `get` **vue**(): `App`<`any`\>

The global Vue application instance.

#### Returns

`App`<`any`\>

#### Inherited from

WebComponent.vue

#### Defined in

[common/web/component/WebComponent.ts:233](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/component/WebComponent.ts#L233)

___

### instance

• `get` **instance**(): [`WebComponent`](common_web_component_WebComponent.WebComponent.md)<[`UserInterface`](common_web_ui_UserInterface.UserInterface.md)\>

The global ``WebComponent`` instance.

#### Returns

[`WebComponent`](common_web_component_WebComponent.WebComponent.md)<[`UserInterface`](common_web_ui_UserInterface.UserInterface.md)\>

**`Throws`**

Error - If no instance has been created.

#### Inherited from

WebComponent.instance

#### Defined in

[common/web/component/WebComponent.ts:255](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/component/WebComponent.ts#L255)

## Methods

### addFrontendSettings

▸ **addFrontendSettings**(): `void`

#### Returns

`void`

#### Defined in

[frontend/src/component/FrontendComponent.ts:42](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/frontend/src/component/FrontendComponent.ts#L42)

___

### configureRoutes

▸ **configureRoutes**(): `RouteRecordRaw`[]

Sets up routes for the Vue router.

#### Returns

`RouteRecordRaw`[]

- The routes as an array; return `null` if the router shouldn't be used.

#### Inherited from

[WebComponent](common_web_component_WebComponent.WebComponent.md).[configureRoutes](common_web_component_WebComponent.WebComponent.md#configureroutes)

#### Defined in

[common/web/component/WebComponent.ts:157](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/component/WebComponent.ts#L157)

___

### createService

▸ **createService**<`CtxType`\>(`name`, `initializer?`, `contextType?`): [`Service`](common_web_services_Service.Service.md)<[`ServiceContext`](common_web_services_ServiceContext.ServiceContext.md)\>

Creates and registers a new service.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CtxType` | extends [`ServiceContext`](common_web_services_ServiceContext.ServiceContext.md) |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `name` | `string` | `undefined` | The name of the service. |
| `initializer` | ``null`` \| (`svc`: [`Service`](common_web_services_Service.Service.md)<[`ServiceContext`](common_web_services_ServiceContext.ServiceContext.md)\>) => `void` | `null` | A function called to registered message handlers etc. after the service has been created. |
| `contextType` | [`Constructable`](../interfaces/common_web_utils_Types.Constructable.md)<`CtxType`\> | `undefined` | Can be used to override the default ``ServiceContext`` type. All message handlers associated with the new service will then receive instances of this type for their service context. |

#### Returns

[`Service`](common_web_services_Service.Service.md)<[`ServiceContext`](common_web_services_ServiceContext.ServiceContext.md)\>

#### Inherited from

[WebComponent](common_web_component_WebComponent.WebComponent.md).[createService](common_web_component_WebComponent.WebComponent.md#createservice)

#### Defined in

[common/web/component/WebComponent.ts:198](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/component/WebComponent.ts#L198)

___

### mount

▸ **mount**(`appElement?`): `void`

Mounts the Vue application in the given element.

Notes:
    This method must be called immediately after creating the main component instance.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `appElement` | `string` | `"#app"` | The HTML element ID used for mounting the root component. |

#### Returns

`void`

#### Inherited from

[WebComponent](common_web_component_WebComponent.WebComponent.md).[mount](common_web_component_WebComponent.WebComponent.md#mount)

#### Defined in

[common/web/component/WebComponent.ts:169](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/component/WebComponent.ts#L169)

___

### run

▸ **run**(): `void`

Starts the component's execution cycles.

Notes:
    This method is automatically called by the framework.

#### Returns

`void`

#### Overrides

[WebComponent](common_web_component_WebComponent.WebComponent.md).[run](common_web_component_WebComponent.WebComponent.md#run)

#### Defined in

[frontend/src/component/FrontendComponent.ts:30](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/frontend/src/component/FrontendComponent.ts#L30)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

- The string representation of this component.

#### Inherited from

[WebComponent](common_web_component_WebComponent.WebComponent.md).[toString](common_web_component_WebComponent.WebComponent.md#tostring)

#### Defined in

[common/web/component/WebComponent.ts:272](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/component/WebComponent.ts#L272)

___

### inject

▸ **inject**(): [`FrontendComponent`](frontend_src_component_FrontendComponent.FrontendComponent.md)

The global ``FrontendComponent`` instance via Vue's injection mechanism.

#### Returns

[`FrontendComponent`](frontend_src_component_FrontendComponent.FrontendComponent.md)

**`Throws`**

Error - If no instance has been created.

#### Defined in

[frontend/src/component/FrontendComponent.ts:81](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/frontend/src/component/FrontendComponent.ts#L81)

___

### injectComponent

▸ **injectComponent**<`CompType`\>(): `CompType`

The global ``WebComponent`` instance via Vue's injection mechanism.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CompType` | extends [`WebComponent`](common_web_component_WebComponent.WebComponent.md)<[`UserInterface`](common_web_ui_UserInterface.UserInterface.md)\> = [`WebComponent`](common_web_component_WebComponent.WebComponent.md)<[`UserInterface`](common_web_ui_UserInterface.UserInterface.md)\> |

#### Returns

`CompType`

**`Throws`**

Error - If no instance has been created.

#### Inherited from

[WebComponent](common_web_component_WebComponent.WebComponent.md).[injectComponent](common_web_component_WebComponent.WebComponent.md#injectcomponent)

#### Defined in

[common/web/component/WebComponent.ts:242](https://github.com/Soroush9978/rds-ng/blob/9a997cb/src/common/web/component/WebComponent.ts#L242)
