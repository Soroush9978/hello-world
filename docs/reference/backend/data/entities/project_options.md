---
sidebar_label: project_options
title: data.entities.project_options
---

## ProjectOptions Objects

```python
@dataclass_json

@dataclass(frozen=True, kw_only=True)
class ProjectOptions()
```

Class holding all options of a **Project**.

**Attributes**:

- `optional_features` - A list of all user-enabled optional features.
- `ui` - Arbitrary UI options.

