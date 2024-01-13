---
sidebar_label: project_features
title: data.entities.features.project_features
---

## ProjectFeatures Objects

```python
@dataclass_json

@dataclass(frozen=True, kw_only=True)
class ProjectFeatures()
```

Superordinate data for all **Project** features.

**Attributes**:

- `metadata` - The metadata project feature.
- `dmp` - The data management plan feature.

#### features\_dict

```python
def features_dict(
    *,
    selected_features: typing.List[ProjectFeatureID] | None = None
) -> typing.Dict[ProjectFeatureID, ProjectFeature]
```

Returns all or selected features as a dictionary (feature ID -&gt; feature).

**Arguments**:

- `selected_features` - Optional feature ID selection that should be returned.
  

**Returns**:

  A dictonary containing the selected (or all) features.

