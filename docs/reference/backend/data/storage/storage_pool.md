---
sidebar_label: storage_pool
title: data.storage.storage_pool
---

## StoragePool Objects

```python
class StoragePool(abc.ABC)
```

A collection of all data storages.

#### connector\_storage

```python
@property
@abc.abstractmethod
def connector_storage() -> ConnectorStorage
```

The connector storage.

#### project\_storage

```python
@property
@abc.abstractmethod
def project_storage() -> ProjectStorage
```

The project storage.

