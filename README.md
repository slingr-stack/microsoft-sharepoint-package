<table class="table" style="margin-top: 10px">
    <thead>
    <tr>
        <th>Title</th>
        <th>Last Updated</th>
        <th>Summary</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Sharepoint package</td>
        <td>November 13, 2023</td>
        <td>Detailed description of the API of the Sharepoint package.</td>
    </tr>
    </tbody>
</table>

# Overview

This package allows you to connect to the Sharepoint API and perform operations on it.

# Javascript API

The Javascript API of the sharepoint package has two pieces:

- **HTTP requests**
- **Flow steps**

## HTTP requests
You can make `GET`,`POST`,`PATCH`,`DELETE` requests to the [sharepoint API](API_URL_HERE) like this:
```javascript
var response = pkg.sharepoint.api.get('/v1.0/sites/:site-id/termStore/groups/:group-id/sets/:set-id/terms/:term-id')
var response = pkg.sharepoint.api.post('/v1.0/sites/:site-id/contentTypes/:contentType-id/columns', body)
var response = pkg.sharepoint.api.post('/v1.0/sites/:site-id/contentTypes/:contentType-id/columns')
var response = pkg.sharepoint.api.patch('/v1.0/sites/:site-id/termStore', body)
var response = pkg.sharepoint.api.patch('/v1.0/sites/:site-id/termStore')
var response = pkg.sharepoint.api.delete('/v1.0/sites/:site-id/lists/:list-id/items/:item-id')
```

Please take a look at the documentation of the [HTTP service](https://github.com/slingr-stack/http-service)
for more information about generic requests.

## Flow Step

As an alternative option to using scripts, you can make use of Flows and Flow Steps specifically created for the package:
<details>
    <summary>Click here to see the Flow Steps</summary>

<br>

### Generic Flow Step

Generic flow step for full use of the entire package and its services.

<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>URL (Method)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            This is the http method to be used against the endpoint. <br>
            Possible values are: <br>
            <i><strong>GET,POST,PATCH,DELETE</strong></i>
        </td>
    </tr>
    <tr>
        <td>URL (Path)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            The url to which this endpoint will send the request. This is the exact service to which the http request will be made. <br>
            Possible values are: <br>
            <i><strong>/v1.0/sites/{sitesId}/permissions/{permissionId}<br>/v1.0/sites/{sitesId}/permissions<br>/v1.0/sites/{hostname}/{site-relative-path}<br>/v1.0/sites<br>/v1.0/sites/{site-id}/lists<br>/v1.0/sites/{site-id}/lists/{list-id}<br>/v1.0/me/followedSites<br>/v1.0/sites/{site-id}/columns<br>/v1.0/sites/{site-id}/columns/{column-id}<br>/v1.0/sites/{site-id}/contentTypes<br>/v1.0/sites/{site-id}/contentTypes/{contentType-id}<br>/v1.0/sites/{siteId}/getApplicableContentTypesForList<br>/v1.0/sites/{site-id}/sites<br>/v1.0/sites/{siteId}/operations<br>/v1.0/sites/{siteId}/operations/{richLongRunningOperation-ID}<br>/v1.0/sites/getAllSites<br>/v1.0/sites/{site-id}/lists/{list-id}/items<br>/v1.0/sites/{site-id}/lists/{list-id}/items/{item-id}<br>/v1.0/sites/{site-id}/lists/{list-id}/columns<br>/v1.0/sites/{site-id}/lists/{list-id}/columns/{column-id}<br>/v1.0/sites/{site-id}/lists/{list-id}/contentTypes<br>/v1.0/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}<br>/v1.0/sites/{siteId}/lists/{listId}/operations<br>/v1.0/sites/{siteId}/lists/{listId}/operations/{richLongRunningOperation-ID}<br>/v1.0/sites/{site-id}/contentTypes/{contentType-id}/columns/{column-id}<br>/v1.0/sites/{site-id}/contentTypes/{contentType-id}/columns<br>/v1.0/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columns/{column-id}<br>/v1.0/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/columns<br>/v1.0/sites/{siteId}/contentTypes/{contentTypeId}/isPublished<br>/v1.0/sites/{siteId}/lists/{listId}/contentTypes/getCompatibleHubContentTypes<br>/v1.0/sites/{siteId}/contentTypes/getCompatibleHubContentTypes<br>/v1.0/sites/{site-id}/items/{item-id}/versions<br>/v1.0/sites/{site-id}/lists/{list-id}/items/{item-id}/versions<br>/v1.0/sites/{site-id}/analytics/allTime<br>/v1.0/sites/{site-id}/lists/{list-id}/items/{item-id}/analytics/allTime<br>/v1.0/drives/{drive-id}/items/{item-id}/analytics/lastSevenDays<br>/v1.0/sites/{site-id}/analytics/lastSevenDays<br>/v1.0/sites/{site-id}/lists/{list-id}/items/{item-id}/analytics/lastSevenDays<br>/v1.0/sites/{siteId}/lists/{listId}/items/{itemId}/documentSetVersions<br>/v1.0/sites/{siteId}/lists/{listId}/items/{itemId}/documentSetVersions/{documentSetVersionId}<br>/v1.0/sites/{site-id}/termStore<br>/v1.0/sites/{site-id}/termStore/groups<br>/v1.0/sites/{site-id}/termStore/groups/{group-id}<br>/v1.0/sites/{site-id}/termStore/groups/{group-id}/sets<br>/v1.0/sites/{site-id}/termStore/sets/{set-id}<br>/v1.0/sites/{site-id}/termStore/sets/{set-id}/children<br>/v1.0/sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/children<br>/v1.0/sites/{site-id}/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}<br>/v1.0/sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}<br>/v1.0/sites/{site-id}/termStore/sets/{set-id}/relations<br>/v1.0/sites/{site-id}/termStore/sets/{set-id}/terms/{term-id}/relations<br>/v1.0/admin/sharepoint/settings<br>/v1.0/users/{user-id}/followedSites/add<br>/v1.0/users/{user-id}/followedSites/remove<br>/v1.0/sites/{site-id}/lists/{list-id}/contentTypes/addCopy<br>/v1.0/sites/{siteId}/contentTypes/{contentTypeId}/publish<br>/v1.0/sites/{siteId}/contentTypes/{contentTypeId}/unpublish<br>/v1.0/sites/{siteId}/lists/{listId}/contentTypes/addCopyFromContentTypeHub<br>/v1.0/sites/{siteId}/contentTypes/addCopyFromContentTypeHub<br>/v1.0/sites/{siteId}/contentTypes/{contentTypeId}/associateWithHubSites<br>/v1.0/sites/{siteId}/contentTypes/{contentTypeId}/copyToDefaultContentLocation<br>/v1.0/sites/{site-id}/lists/{list-id}/contentTypes/{contentType-id}/column<br>/v1.0/sites/{siteId}/lists/{listId}/items/{itemId}/documentSetVersions/{documentSetVersionId}/restore<br>/v1.0/sites/{site-id}/termStore/sets<br>/v1.0/sites/{site-id}/lists/{list-id}/items/{item-id}/fields</strong></i>
        </td>
    </tr>
    <tr>
        <td>Headers</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom http header for the request.
        </td>
    </tr>
    <tr>
        <td>Query Params</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom query params for the http call.
        </td>
    </tr>
    <tr>
        <td>Body</td>
        <td>json</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            A payload of data can be sent to the server in the body of the request.
        </td>
    </tr>
    <tr>
        <td>Override Settings</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td>Always</td>
        <td></td>
    </tr>
    <tr>
        <td>Follow Redirect</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Indicates that the resource has to be downloaded into a file instead of returning it in the response.</td>
    </tr>
    <tr>
        <td>Download</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>If true the method won't return until the file has been downloaded, and it will return all the information of the file.</td>
    </tr>
    <tr>
        <td>File name</td>
        <td>text</td>
        <td>no</td>
        <td></td>
        <td> overrideSettings </td>
        <td>If provided, the file will be stored with this name. If empty the file name will be calculated from the URL.</td>
    </tr>
    <tr>
        <td>Full response</td>
        <td> boolean </td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Include extended information about response</td>
    </tr>
    <tr>
        <td>Connection Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 5000 </td>
        <td> overrideSettings </td>
        <td>Connect timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    <tr>
        <td>Read Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 60000 </td>
        <td> overrideSettings </td>
        <td>Read timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>


</details>

For more information about how shortcuts or flow steps works, and how they are generated, take a look at the [slingr-helpgen tool](https://github.com/slingr-stack/slingr-helpgen).

## Dependencies
* HTTP Service (Latest Version)
* Oauth Package (v1.0.18)

# About SLINGR

SLINGR is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

# License

This package is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
