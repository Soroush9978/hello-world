---
id: "common_web_data_stores_NetworkStore"
title: "Module: common/web/data/stores/NetworkStore"
sidebar_label: "common/web/data/stores/NetworkStore"
sidebar_position: 0
custom_edit_url: null
---

## Namespaces

- [networkStore](../namespaces/common_web_data_stores_NetworkStore.networkStore.md)

## Enumerations

- [ConnectionState](../enums/common_web_data_stores_NetworkStore.ConnectionState.md)

## Functions

### networkStore

▸ **networkStore**(`pinia?`, `hot?`): `Store`<``"networkStore"``, `_UnwrapAll`<`Pick`<\{ `connectionState`: `Ref`<[`ConnectionState`](../enums/common_web_data_stores_NetworkStore.ConnectionState.md)\> ; `reset`: () => `void` ; `serverChannel`: `Ref`<\{ `isDirect`: `boolean` ; `isLocal`: `boolean` ; `target?`: `string` ; `targetID`: ``null`` \| \{ readonly type: string; readonly unit: string; readonly instance?: string \| undefined; equals: (other: UnitID) =\> boolean; toString: () =\> string; } ; `type`: `string` ; `toString`: () => `string`  }\> ; `serverInfo`: `Ref`<\{ `id`: \{ readonly type: string; readonly unit: string; readonly instance?: string \| undefined; equals: (other: UnitID) =\> boolean; toString: () =\> string; } ; `name`: `string` ; `version`: `string`  }\>  }, ``"connectionState"`` \| ``"serverInfo"`` \| ``"serverChannel"``\>\>, `Pick`<\{ `connectionState`: `Ref`<[`ConnectionState`](../enums/common_web_data_stores_NetworkStore.ConnectionState.md)\> ; `reset`: () => `void` ; `serverChannel`: `Ref`<\{ `isDirect`: `boolean` ; `isLocal`: `boolean` ; `target?`: `string` ; `targetID`: ``null`` \| \{ readonly type: string; readonly unit: string; readonly instance?: string \| undefined; equals: (other: UnitID) =\> boolean; toString: () =\> string; } ; `type`: `string` ; `toString`: () => `string`  }\> ; `serverInfo`: `Ref`<\{ `id`: \{ readonly type: string; readonly unit: string; readonly instance?: string \| undefined; equals: (other: UnitID) =\> boolean; toString: () =\> string; } ; `name`: `string` ; `version`: `string`  }\>  }, `never`\>, `Pick`<\{ `connectionState`: `Ref`<[`ConnectionState`](../enums/common_web_data_stores_NetworkStore.ConnectionState.md)\> ; `reset`: () => `void` ; `serverChannel`: `Ref`<\{ `isDirect`: `boolean` ; `isLocal`: `boolean` ; `target?`: `string` ; `targetID`: ``null`` \| \{ readonly type: string; readonly unit: string; readonly instance?: string \| undefined; equals: (other: UnitID) =\> boolean; toString: () =\> string; } ; `type`: `string` ; `toString`: () => `string`  }\> ; `serverInfo`: `Ref`<\{ `id`: \{ readonly type: string; readonly unit: string; readonly instance?: string \| undefined; equals: (other: UnitID) =\> boolean; toString: () =\> string; } ; `name`: `string` ; `version`: `string`  }\>  }, ``"reset"``\>\>

The global store for all network-related data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pinia?` | ``null`` \| `Pinia` |
| `hot?` | `StoreGeneric` |

#### Returns

`Store`<``"networkStore"``, `_UnwrapAll`<`Pick`<\{ `connectionState`: `Ref`<[`ConnectionState`](../enums/common_web_data_stores_NetworkStore.ConnectionState.md)\> ; `reset`: () => `void` ; `serverChannel`: `Ref`<\{ `isDirect`: `boolean` ; `isLocal`: `boolean` ; `target?`: `string` ; `targetID`: ``null`` \| \{ readonly type: string; readonly unit: string; readonly instance?: string \| undefined; equals: (other: UnitID) =\> boolean; toString: () =\> string; } ; `type`: `string` ; `toString`: () => `string`  }\> ; `serverInfo`: `Ref`<\{ `id`: \{ readonly type: string; readonly unit: string; readonly instance?: string \| undefined; equals: (other: UnitID) =\> boolean; toString: () =\> string; } ; `name`: `string` ; `version`: `string`  }\>  }, ``"connectionState"`` \| ``"serverInfo"`` \| ``"serverChannel"``\>\>, `Pick`<\{ `connectionState`: `Ref`<[`ConnectionState`](../enums/common_web_data_stores_NetworkStore.ConnectionState.md)\> ; `reset`: () => `void` ; `serverChannel`: `Ref`<\{ `isDirect`: `boolean` ; `isLocal`: `boolean` ; `target?`: `string` ; `targetID`: ``null`` \| \{ readonly type: string; readonly unit: string; readonly instance?: string \| undefined; equals: (other: UnitID) =\> boolean; toString: () =\> string; } ; `type`: `string` ; `toString`: () => `string`  }\> ; `serverInfo`: `Ref`<\{ `id`: \{ readonly type: string; readonly unit: string; readonly instance?: string \| undefined; equals: (other: UnitID) =\> boolean; toString: () =\> string; } ; `name`: `string` ; `version`: `string`  }\>  }, `never`\>, `Pick`<\{ `connectionState`: `Ref`<[`ConnectionState`](../enums/common_web_data_stores_NetworkStore.ConnectionState.md)\> ; `reset`: () => `void` ; `serverChannel`: `Ref`<\{ `isDirect`: `boolean` ; `isLocal`: `boolean` ; `target?`: `string` ; `targetID`: ``null`` \| \{ readonly type: string; readonly unit: string; readonly instance?: string \| undefined; equals: (other: UnitID) =\> boolean; toString: () =\> string; } ; `type`: `string` ; `toString`: () => `string`  }\> ; `serverInfo`: `Ref`<\{ `id`: \{ readonly type: string; readonly unit: string; readonly instance?: string \| undefined; equals: (other: UnitID) =\> boolean; toString: () =\> string; } ; `name`: `string` ; `version`: `string`  }\>  }, ``"reset"``\>\>

#### Defined in

node_modules/pinia/dist/pinia.d.ts:639
