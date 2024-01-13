---
sidebar_label: project
title: data.entities.project
---

## Project Objects

```python
@dataclass_json

@dataclass(frozen=True, kw_only=True)
class Project()
```

Data for a single **Project**.

**Attributes**:

- `project_id` - The unique project identifier.
- `creation_time` - A UNIX timestamp of the project creation time.
- `title` - The title of the project.
- `description` - An optional project description.
- `status` - The project status.
- `features` - All project features.
- `options` - All project options.

## Status Objects

```python
class Status(IntEnum)
```

The status of a project.

