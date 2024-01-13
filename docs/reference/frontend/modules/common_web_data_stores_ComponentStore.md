---
id: "common_web_data_stores_ComponentStore"
title: "Module: common/web/data/stores/ComponentStore"
sidebar_label: "common/web/data/stores/ComponentStore"
sidebar_position: 0
custom_edit_url: null
---

## Namespaces

- [componentStore](../namespaces/common_web_data_stores_ComponentStore.componentStore.md)

## Enumerations

- [ComponentState](../enums/common_web_data_stores_ComponentStore.ComponentState.md)

## Functions

### componentStore

▸ **componentStore**(`pinia?`, `hot?`): `Store`<``"componentStore"``, `_UnwrapAll`<`Pick`<\{ `componentState`: `Ref`<[`ComponentState`](../enums/common_web_data_stores_ComponentStore.ComponentState.md)\> ; `componentStateMessage`: `Ref`<`string`\> ; `reset`: () => `void`  }, ``"componentState"`` \| ``"componentStateMessage"``\>\>, `Pick`<\{ `componentState`: `Ref`<[`ComponentState`](../enums/common_web_data_stores_ComponentStore.ComponentState.md)\> ; `componentStateMessage`: `Ref`<`string`\> ; `reset`: () => `void`  }, `never`\>, `Pick`<\{ `componentState`: `Ref`<[`ComponentState`](../enums/common_web_data_stores_ComponentStore.ComponentState.md)\> ; `componentStateMessage`: `Ref`<`string`\> ; `reset`: () => `void`  }, ``"reset"``\>\>

The global store for all component-related data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pinia?` | ``null`` \| `Pinia` |
| `hot?` | `StoreGeneric` |

#### Returns

`Store`<``"componentStore"``, `_UnwrapAll`<`Pick`<\{ `componentState`: `Ref`<[`ComponentState`](../enums/common_web_data_stores_ComponentStore.ComponentState.md)\> ; `componentStateMessage`: `Ref`<`string`\> ; `reset`: () => `void`  }, ``"componentState"`` \| ``"componentStateMessage"``\>\>, `Pick`<\{ `componentState`: `Ref`<[`ComponentState`](../enums/common_web_data_stores_ComponentStore.ComponentState.md)\> ; `componentStateMessage`: `Ref`<`string`\> ; `reset`: () => `void`  }, `never`\>, `Pick`<\{ `componentState`: `Ref`<[`ComponentState`](../enums/common_web_data_stores_ComponentStore.ComponentState.md)\> ; `componentStateMessage`: `Ref`<`string`\> ; `reset`: () => `void`  }, ``"reset"``\>\>

#### Defined in

node_modules/pinia/dist/pinia.d.ts:639
