# Javascript API

The Javascript API of the sharepoint package has three pieces:

- **HTTP requests**: These allow making regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the package usage in SLINGR.

## HTTP requests
You can make `GET`,`POST`,`PATCH`,`DELETE` requests to the [sharepoint API](API_URL_HERE) like this:
```javascript
var response = pkg.sharepoint.functions.get('/v1.0/sites/:site-id/termStore/groups/:group-id/sets/:set-id/terms/:term-id')
var response = pkg.sharepoint.functions.post('/v1.0/sites/:site-id/contentTypes/:contentType-id/columns', body)
var response = pkg.sharepoint.functions.post('/v1.0/sites/:site-id/contentTypes/:contentType-id/columns')
var response = pkg.sharepoint.functions.patch('/v1.0/sites/:site-id/termStore', body)
var response = pkg.sharepoint.functions.patch('/v1.0/sites/:site-id/termStore')
var response = pkg.sharepoint.functions.delete('/v1.0/sites/:site-id/lists/:list-id/items/:item-id')
```

Please take a look at the documentation of the [HTTP service](https://github.com/slingr-stack/http-service)
for more information about generic requests.

## Shortcuts

Instead of having to use the generic HTTP methods, you can (and should) make use of the helpers provided in the package:
<details>
    <summary>Click here to see all the helpers</summary>

<br>

* API URL: '/v1.0/sites'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.sites.get()
```
---
* API URL: '/v1.0/me/followedSites'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.me.followedSites.get()
```
---
* API URL: '/v1.0/sites/getAllSites'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.sites.getAllSites.get()
```
---
* API URL: '/v1.0/admin/sharepoint/settings'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.admin.sharepoint.settings.get()
```
---
* API URL: '/v1.0/admin/sharepoint/settings'
* HTTP Method: 'PATCH'
```javascript
pkg.sharepoint.functions.admin.sharepoint.settings.patch(body)
```
---
* API URL: '/v1.0/sites/:hostname/:site-relative-path'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.sites.get(hostname)
```
---
* API URL: '/v1.0/sites/:site-id/columns'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.sites.columns.get()
```
---
* API URL: '/v1.0/sites/:site-id/columns'
* HTTP Method: 'POST'
```javascript
pkg.sharepoint.functions.sites.columns.post(siteId, body)
```
---
* API URL: '/v1.0/sites/:site-id/contentTypes'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.sites.contentTypes.get()
```
---
* API URL: '/v1.0/sites/:site-id/contentTypes'
* HTTP Method: 'POST'
```javascript
pkg.sharepoint.functions.sites.contentTypes.post(siteId, body)
```
---
* API URL: '/v1.0/sites/:site-id/lists'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.sites.lists.get()
```
---
* API URL: '/v1.0/sites/:site-id/lists'
* HTTP Method: 'POST'
```javascript
pkg.sharepoint.functions.sites.lists.post(siteId, body)
```
---
* API URL: '/v1.0/sites/:site-id/sites'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.sites.sites.get(siteId)
```
---
* API URL: '/v1.0/sites/:site-id/termStore'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.sites.termStore.get(siteId)
```
---
* API URL: '/v1.0/sites/:site-id/termStore'
* HTTP Method: 'PATCH'
```javascript
pkg.sharepoint.functions.sites.termStore.patch(siteId, body)
```
---
* API URL: '/v1.0/sites/:siteId/getApplicableContentTypesForList'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.sites.getApplicableContentTypesForList.get(siteId)
```
---
* API URL: '/v1.0/sites/:siteId/operations'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.sites.operations.get()
```
---
* API URL: '/v1.0/sites/:sitesId/permissions'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.sites.permissions.get()
```
---
* API URL: '/v1.0/sites/:sitesId/permissions'
* HTTP Method: 'POST'
```javascript
pkg.sharepoint.functions.sites.permissions.post(sitesId, body)
```
---
* API URL: '/v1.0/sites/:site-id/analytics/allTime'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.sites.analytics.allTime.get(siteId)
```
---
* API URL: '/v1.0/sites/:site-id/analytics/lastSevenDays'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.sites.analytics.lastSevenDays.get(siteId)
```
---
* API URL: '/v1.0/sites/:site-id/columns/:column-id'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.sites.columns.get(siteId)
```
---
* API URL: '/v1.0/sites/:site-id/columns/:column-id'
* HTTP Method: 'PATCH'
```javascript
pkg.sharepoint.functions.sites.columns.patch(siteId, columnId, body)
```
---
* API URL: '/v1.0/sites/:site-id/columns/:column-id'
* HTTP Method: 'DELETE'
```javascript
pkg.sharepoint.functions.sites.columns.delete(siteId, columnId)
```
---
* API URL: '/v1.0/sites/:site-id/contentTypes/:contentType-id'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.sites.contentTypes.get(siteId)
```
---
* API URL: '/v1.0/sites/:site-id/contentTypes/:contentType-id'
* HTTP Method: 'PATCH'
```javascript
pkg.sharepoint.functions.sites.contentTypes.patch(siteId, contentTypeId, body)
```
---
* API URL: '/v1.0/sites/:site-id/contentTypes/:contentType-id'
* HTTP Method: 'DELETE'
```javascript
pkg.sharepoint.functions.sites.contentTypes.delete(siteId, contentTypeId)
```
---
* API URL: '/v1.0/sites/:site-id/lists/:list-id'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.sites.lists.get(siteId)
```
---
* API URL: '/v1.0/sites/:site-id/termStore/groups'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.sites.termStore.groups.get()
```
---
* API URL: '/v1.0/sites/:site-id/termStore/groups'
* HTTP Method: 'POST'
```javascript
pkg.sharepoint.functions.sites.termStore.groups.post(siteId, body)
```
---
* API URL: '/v1.0/sites/:site-id/termStore/sets'
* HTTP Method: 'POST'
```javascript
pkg.sharepoint.functions.sites.termStore.sets.post(siteId, body)
```
---
* API URL: '/v1.0/sites/:siteId/contentTypes/addCopyFromContentTypeHub'
* HTTP Method: 'POST'
```javascript
pkg.sharepoint.functions.sites.contentTypes.addCopyFromContentTypeHub.post(siteId, body)
```
---
* API URL: '/v1.0/sites/:siteId/contentTypes/getCompatibleHubContentTypes'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.sites.contentTypes.getCompatibleHubContentTypes.get(siteId)
```
---
* API URL: '/v1.0/sites/:siteId/operations/:richLongRunningOperation-ID'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.sites.operations.get(siteId)
```
---
* API URL: '/v1.0/sites/:sitesId/permissions/:permissionId'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.sites.permissions.get(sitesId)
```
---
* API URL: '/v1.0/sites/:sitesId/permissions/:permissionId'
* HTTP Method: 'PATCH'
```javascript
pkg.sharepoint.functions.sites.permissions.patch(sitesId, permissionId, body)
```
---
* API URL: '/v1.0/users/:user-id/followedSites/add'
* HTTP Method: 'POST'
```javascript
pkg.sharepoint.functions.users.followedSites.add.post(userId, body)
```
---
* API URL: '/v1.0/users/:user-id/followedSites/remove'
* HTTP Method: 'POST'
```javascript
pkg.sharepoint.functions.users.followedSites.remove.post(userId, body)
```
---
* API URL: '/v1.0/sites/:site-id/contentTypes/:contentType-id/columns'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.sites.contentTypes.columns.get(siteId)
```
---
* API URL: '/v1.0/sites/:site-id/contentTypes/:contentType-id/columns'
* HTTP Method: 'POST'
```javascript
pkg.sharepoint.functions.sites.contentTypes.columns.post(siteId, contentTypeId, body)
```
---
* API URL: '/v1.0/sites/:site-id/items/:item-id/versions'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.sites.items.versions.get(siteId, itemId)
```
---
* API URL: '/v1.0/sites/:site-id/lists/:list-id/columns'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.sites.lists.columns.get(siteId)
```
---
* API URL: '/v1.0/sites/:site-id/lists/:list-id/columns'
* HTTP Method: 'POST'
```javascript
pkg.sharepoint.functions.sites.lists.columns.post(siteId, listId, body)
```
---
* API URL: '/v1.0/sites/:site-id/lists/:list-id/contentTypes'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.sites.lists.contentTypes.get(siteId)
```
---
* API URL: '/v1.0/sites/:site-id/lists/:list-id/items'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.sites.lists.items.get(siteId)
```
---
* API URL: '/v1.0/sites/:site-id/lists/:list-id/items'
* HTTP Method: 'POST'
```javascript
pkg.sharepoint.functions.sites.lists.items.post(siteId, listId, body)
```
---
* API URL: '/v1.0/sites/:site-id/termStore/groups/:group-id'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.sites.termStore.groups.get(siteId)
```
---
* API URL: '/v1.0/sites/:site-id/termStore/groups/:group-id'
* HTTP Method: 'DELETE'
```javascript
pkg.sharepoint.functions.sites.termStore.groups.delete(siteId, groupId)
```
---
* API URL: '/v1.0/sites/:site-id/termStore/sets/:set-id'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.sites.termStore.sets.get(siteId, setId)
```
---
* API URL: '/v1.0/sites/:site-id/termStore/sets/:set-id'
* HTTP Method: 'PATCH'
```javascript
pkg.sharepoint.functions.sites.termStore.sets.patch(siteId, setId, body)
```
---
* API URL: '/v1.0/sites/:site-id/termStore/sets/:set-id'
* HTTP Method: 'DELETE'
```javascript
pkg.sharepoint.functions.sites.termStore.sets.delete(siteId, setId)
```
---
* API URL: '/v1.0/sites/:siteId/contentTypes/:contentTypeId/associateWithHubSites'
* HTTP Method: 'POST'
```javascript
pkg.sharepoint.functions.sites.contentTypes.associateWithHubSites.post(siteId, contentTypeId, body)
```
---
* API URL: '/v1.0/sites/:siteId/contentTypes/:contentTypeId/copyToDefaultContentLocation'
* HTTP Method: 'POST'
```javascript
pkg.sharepoint.functions.sites.contentTypes.copyToDefaultContentLocation.post(siteId, contentTypeId, body)
```
---
* API URL: '/v1.0/sites/:siteId/contentTypes/:contentTypeId/isPublished'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.sites.contentTypes.isPublished.get(siteId, contentTypeId)
```
---
* API URL: '/v1.0/sites/:siteId/contentTypes/:contentTypeId/publish'
* HTTP Method: 'POST'
```javascript
pkg.sharepoint.functions.sites.contentTypes.publish.post(siteId, contentTypeId, body)
```
---
* API URL: '/v1.0/sites/:siteId/contentTypes/:contentTypeId/unpublish'
* HTTP Method: 'POST'
```javascript
pkg.sharepoint.functions.sites.contentTypes.unpublish.post(siteId, contentTypeId, body)
```
---
* API URL: '/v1.0/sites/:siteId/lists/:listId/operations'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.sites.lists.operations.get(siteId)
```
---
* API URL: '/v1.0/drives/:drive-id/items/:item-id/analytics/lastSevenDays'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.drives.items.analytics.lastSevenDays.get(driveId, itemId)
```
---
* API URL: '/v1.0/sites/:site-id/contentTypes/:contentType-id/columns/:column-id'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.sites.contentTypes.columns.get(siteId, contentTypeId)
```
---
* API URL: '/v1.0/sites/:site-id/contentTypes/:contentType-id/columns/:column-id'
* HTTP Method: 'PATCH'
```javascript
pkg.sharepoint.functions.sites.contentTypes.columns.patch(siteId, contentTypeId, columnId, body)
```
---
* API URL: '/v1.0/sites/:site-id/contentTypes/:contentType-id/columns/:column-id'
* HTTP Method: 'DELETE'
```javascript
pkg.sharepoint.functions.sites.contentTypes.columns.delete(siteId, contentTypeId, columnId)
```
---
* API URL: '/v1.0/sites/:site-id/lists/:list-id/columns/:column-id'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.sites.lists.columns.get(siteId, listId)
```
---
* API URL: '/v1.0/sites/:site-id/lists/:list-id/columns/:column-id'
* HTTP Method: 'PATCH'
```javascript
pkg.sharepoint.functions.sites.lists.columns.patch(siteId, listId, columnId, body)
```
---
* API URL: '/v1.0/sites/:site-id/lists/:list-id/columns/:column-id'
* HTTP Method: 'DELETE'
```javascript
pkg.sharepoint.functions.sites.lists.columns.delete(siteId, listId, columnId)
```
---
* API URL: '/v1.0/sites/:site-id/lists/:list-id/contentTypes/:contentType-id'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.sites.lists.contentTypes.get(siteId, listId)
```
---
* API URL: '/v1.0/sites/:site-id/lists/:list-id/contentTypes/:contentType-id'
* HTTP Method: 'PATCH'
```javascript
pkg.sharepoint.functions.sites.lists.contentTypes.patch(siteId, listId, contentTypeId, body)
```
---
* API URL: '/v1.0/sites/:site-id/lists/:list-id/contentTypes/:contentType-id'
* HTTP Method: 'DELETE'
```javascript
pkg.sharepoint.functions.sites.lists.contentTypes.delete(siteId, listId, contentTypeId)
```
---
* API URL: '/v1.0/sites/:site-id/lists/:list-id/contentTypes/addCopy'
* HTTP Method: 'POST'
```javascript
pkg.sharepoint.functions.sites.lists.contentTypes.addCopy.post(siteId, listId, body)
```
---
* API URL: '/v1.0/sites/:site-id/lists/:list-id/items/:item-id'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.sites.lists.items.get(siteId, listId)
```
---
* API URL: '/v1.0/sites/:site-id/lists/:list-id/items/:item-id'
* HTTP Method: 'PATCH'
```javascript
pkg.sharepoint.functions.sites.lists.items.patch(siteId, listId, itemId, body)
```
---
* API URL: '/v1.0/sites/:site-id/lists/:list-id/items/:item-id'
* HTTP Method: 'DELETE'
```javascript
pkg.sharepoint.functions.sites.lists.items.delete(siteId, listId, itemId)
```
---
* API URL: '/v1.0/sites/:site-id/termStore/groups/:group-id/sets'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.sites.termStore.groups.sets.get(siteId, groupId)
```
---
* API URL: '/v1.0/sites/:site-id/termStore/sets/:set-id/children'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.sites.termStore.sets.children.get(siteId, setId)
```
---
* API URL: '/v1.0/sites/:site-id/termStore/sets/:set-id/children'
* HTTP Method: 'POST'
```javascript
pkg.sharepoint.functions.sites.termStore.sets.children.post(siteId, setId, body)
```
---
* API URL: '/v1.0/sites/:site-id/termStore/sets/:set-id/relations'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.sites.termStore.sets.relations.get(siteId, setId)
```
---
* API URL: '/v1.0/sites/:siteId/lists/:listId/contentTypes/addCopyFromContentTypeHub'
* HTTP Method: 'POST'
```javascript
pkg.sharepoint.functions.sites.lists.contentTypes.addCopyFromContentTypeHub.post(siteId, listId, body)
```
---
* API URL: '/v1.0/sites/:siteId/lists/:listId/contentTypes/getCompatibleHubContentTypes'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.sites.lists.contentTypes.getCompatibleHubContentTypes.get(siteId, listId)
```
---
* API URL: '/v1.0/sites/:siteId/lists/:listId/operations/:richLongRunningOperation-ID'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.sites.lists.operations.get(siteId, listId)
```
---
* API URL: '/v1.0/sites/:site-id/lists/:list-id/contentTypes/:contentType-id/column'
* HTTP Method: 'POST'
```javascript
pkg.sharepoint.functions.sites.lists.contentTypes.column.post(siteId, listId, contentTypeId, body)
```
---
* API URL: '/v1.0/sites/:site-id/lists/:list-id/contentTypes/:contentType-id/columns'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.sites.lists.contentTypes.columns.get(siteId, listId)
```
---
* API URL: '/v1.0/sites/:site-id/lists/:list-id/items/:item-id/fields'
* HTTP Method: 'PATCH'
```javascript
pkg.sharepoint.functions.sites.lists.items.fields.patch(siteId, listId, itemId, body)
```
---
* API URL: '/v1.0/sites/:site-id/lists/:list-id/items/:item-id/versions'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.sites.lists.items.versions.get(siteId, listId, itemId)
```
---
* API URL: '/v1.0/sites/:site-id/termStore/sets/:set-id/terms/:term-id'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.sites.termStore.sets.terms.get(siteId, setId, termId)
```
---
* API URL: '/v1.0/sites/:site-id/termStore/sets/:set-id/terms/:term-id'
* HTTP Method: 'PATCH'
```javascript
pkg.sharepoint.functions.sites.termStore.sets.terms.patch(siteId, setId, termId, body)
```
---
* API URL: '/v1.0/sites/:site-id/termStore/sets/:set-id/terms/:term-id'
* HTTP Method: 'DELETE'
```javascript
pkg.sharepoint.functions.sites.termStore.sets.terms.delete(siteId, setId, termId)
```
---
* API URL: '/v1.0/sites/:siteId/lists/:listId/items/:itemId/documentSetVersions'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.sites.lists.items.documentSetVersions.get(siteId, listId)
```
---
* API URL: '/v1.0/sites/:siteId/lists/:listId/items/:itemId/documentSetVersions'
* HTTP Method: 'POST'
```javascript
pkg.sharepoint.functions.sites.lists.items.documentSetVersions.post(siteId, listId, itemId, body)
```
---
* API URL: '/v1.0/sites/:site-id/lists/:list-id/contentTypes/:contentType-id/columns/:column-id'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.sites.lists.contentTypes.columns.get(siteId, listId, contentTypeId)
```
---
* API URL: '/v1.0/sites/:site-id/lists/:list-id/contentTypes/:contentType-id/columns/:column-id'
* HTTP Method: 'PATCH'
```javascript
pkg.sharepoint.functions.sites.lists.contentTypes.columns.patch(siteId, listId, contentTypeId, columnId, body)
```
---
* API URL: '/v1.0/sites/:site-id/lists/:list-id/contentTypes/:contentType-id/columns/:column-id'
* HTTP Method: 'DELETE'
```javascript
pkg.sharepoint.functions.sites.lists.contentTypes.columns.delete(siteId, listId, contentTypeId, columnId)
```
---
* API URL: '/v1.0/sites/:site-id/lists/:list-id/items/:item-id/analytics/allTime'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.sites.lists.items.analytics.allTime.get(siteId, listId, itemId)
```
---
* API URL: '/v1.0/sites/:site-id/lists/:list-id/items/:item-id/analytics/lastSevenDays'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.sites.lists.items.analytics.lastSevenDays.get(siteId, listId, itemId)
```
---
* API URL: '/v1.0/sites/:site-id/termStore/sets/:set-id/terms/:term-id/children'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.sites.termStore.sets.terms.children.get(siteId, setId, termId)
```
---
* API URL: '/v1.0/sites/:site-id/termStore/sets/:set-id/terms/:term-id/children'
* HTTP Method: 'POST'
```javascript
pkg.sharepoint.functions.sites.termStore.sets.terms.children.post(siteId, setId, termId, body)
```
---
* API URL: '/v1.0/sites/:site-id/termStore/sets/:set-id/terms/:term-id/relations'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.sites.termStore.sets.terms.relations.get(siteId, setId, termId)
```
---
* API URL: '/v1.0/sites/:site-id/termStore/sets/:set-id/terms/:term-id/relations'
* HTTP Method: 'POST'
```javascript
pkg.sharepoint.functions.sites.termStore.sets.terms.relations.post(siteId, setId, termId, body)
```
---
* API URL: '/v1.0/sites/:siteId/lists/:listId/items/:itemId/documentSetVersions/:documentSetVersionId'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.sites.lists.items.documentSetVersions.get(siteId, listId, itemId)
```
---
* API URL: '/v1.0/sites/:siteId/lists/:listId/items/:itemId/documentSetVersions/:documentSetVersionId'
* HTTP Method: 'DELETE'
```javascript
pkg.sharepoint.functions.sites.lists.items.documentSetVersions.delete(siteId, listId, itemId, documentSetVersionId)
```
---
* API URL: '/v1.0/sites/:site-id/termStore/groups/:group-id/sets/:set-id/terms/:term-id'
* HTTP Method: 'GET'
```javascript
pkg.sharepoint.functions.sites.termStore.groups.sets.terms.get(siteId, groupId, setId, termId)
```
---
* API URL: '/v1.0/sites/:siteId/lists/:listId/items/:itemId/documentSetVersions/:documentSetVersionId/restore'
* HTTP Method: 'POST'
```javascript
pkg.sharepoint.functions.sites.lists.items.documentSetVersions.restore.post(siteId, listId, itemId, documentSetVersionId, body)
```
---

</details>

