/**
 * Unity Cloud Build
 * This API is intended to be used in conjunction with the Unity Cloud Build service. A tool for building your Unity projects in the Cloud.  See https://developer.cloud.unity3d.com for more information.  ## Making requests This website is built to allow requests to be made against the API. If you are currently logged into Cloud Build you should be able to make requests without entering an API key.   You can find your API key in the Unity Cloud Services portal by clicking on \'Cloud Build Preferences\' in the sidebar. Copy the API Key and paste it into the upper left corner of this website. It will be used in all subsequent requests.  ## Clients The Unity Cloud Build API is based upon Swagger. Client libraries to integrate with your projects can easily be generated with the [Swagger Code Generator](https://github.com/swagger-api/swagger-codegen).  The JSON schema required to generate a client for this API version is located here:  ``` [API_URL][BASE_PATH]/api.json ```  ## Authorization The Unity Cloud Build API requires an access token from your Unity Cloud Build account, which can be found at https://build.cloud.unity3d.com/login/me  To authenticate requests, include a Basic Authentication header with your API key as the value. e.g.  ``` Authorization: Basic [YOUR API KEY] ```  ## Pagination Paged results will take two parameters. A page number that is calculated based upon the per_page amount. For instance if there are 40 results and you specify page 2 with per_page set to 10 you will receive records 11-20.  Paged results will also return a Content-Range header. For the example above the content range header would look like this:  ``` Content-Range: items 11-20/40 ```  ## Versioning The API version is indicated in the request URL. Upgrading to a newer API version can be done by changing the path.  The API will receive a new version in the following cases:    * removal of a path or request type   * addition of a required field   * removal of a required field  The following changes are considered backwards compatible and will not trigger a new API version:    * addition of an endpoint or request type   * addition of an optional field   * removal of an optional field   * changes to the format of ids  ## Identifiers It should not be assumed that any of the identifiers used in paths will be a perfect match for your user-entered information. If you see unexpected 403s or 404s from API calls then check your identifiers match the ones used by the API. In particular, `projectId` does NOT typically change when the project is renamed and in fact may not be a direct match for the project name even at initial creation time.  To avoid confusion we recommend that instead of using the human-readable autogenerated orgId and projectId available from the API you should instead use:   * org foreign key for `orgId` (available from project APIs as `orgFk` and org APIs as `coreForeignKey`)   * `guid` for `projectId`  All links generated by the API and the Dashboard should follow this format already, making it easy to figure out the correct parameters by making a comparison.  ## Rate Limiting Requests against the Cloud Build API are limited to a rate of 100 per minute. To preserve the quality of service throughout Cloud Build, additional rate limits may apply to some actions. For example, polling aggressively instead of using webhooks or making API calls with a high concurrency may result in rate limiting.  It is not intended for these rate limits to interfere with any legitimate use of the API. Please contact support at <cloudbuild@unity3d.com> if your use is affected by this rate limit.  You can check the returned HTTP headers for any API request to see your current rate limit status.   * __X-RateLimit-Limit:__ maximum number of requests per minute   * __X-RateLimit-Remaining:__ remaining number of requests in the current window   * __X-RateLimit-Reset:__ time at which the current window will reset (UTC epoch seconds)  Once you go over the rate limit you will receive an error response: ``` HTTP Status: 429 {   \"error\": \"Rate limit exceeded, retry in XX seconds\" } ``` 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { OrgsOrgidProjectsProjectidBuildtargetsBuildReport } from './orgsOrgidProjectsProjectidBuildtargetsBuildReport';
import { OrgsOrgidProjectsProjectidBuildtargetsFailureDetails } from './orgsOrgidProjectsProjectidBuildtargetsFailureDetails';
import { OrgsOrgidProjectsProjectidBuildtargetsLinks } from './orgsOrgidProjectsProjectidBuildtargetsLinks';
import { OrgsOrgidProjectsProjectidBuildtargetsProjectVersion } from './orgsOrgidProjectsProjectidBuildtargetsProjectVersion';
import { OrgsOrgidProjectsProjectidBuildtargetsTestResults } from './orgsOrgidProjectsProjectidBuildtargetsTestResults';

/**
* buildattempt
*/
export class OrgsOrgidProjectsProjectidBuildtargetsBuilds {
    'build'?: number;
    /**
    * unique id auto-generated from the build target name
    */
    'buildtargetid'?: string;
    'buildTargetName'?: string;
    /**
    * unique GUID identifying this build
    */
    'buildGUID'?: string;
    'buildStatus'?: OrgsOrgidProjectsProjectidBuildtargetsBuilds.BuildStatusEnum;
    /**
    * if the build was built without using data cached from previous builds
    */
    'cleanBuild'?: boolean;
    /**
    * list of failure details for this build attempt, when available
    */
    'failureDetails'?: Array<OrgsOrgidProjectsProjectidBuildtargetsFailureDetails>;
    'canceledBy'?: OrgsOrgidProjectsProjectidBuildtargetsBuilds.CanceledByEnum;
    'platform'?: OrgsOrgidProjectsProjectidBuildtargetsBuilds.PlatformEnum;
    /**
    * size of workspace in bytes
    */
    'workspaceSize'?: number;
    /**
    * when the build was created
    */
    'created'?: string;
    /**
    * when the build completely finished
    */
    'finished'?: string;
    /**
    * when the build starting checking out code
    */
    'checkoutStartTime'?: string;
    /**
    * amount of time spent checking out code
    */
    'checkoutTimeInSeconds'?: number;
    /**
    * when the build started compiling
    */
    'buildStartTime'?: string;
    /**
    * amount of time spend compiling
    */
    'buildTimeInSeconds'?: number;
    /**
    * when the build started saving build artifacts
    */
    'publishStartTime'?: string;
    /**
    * amount of time spent saving build artifacts
    */
    'publishTimeInSeconds'?: number;
    /**
    * total time for the build
    */
    'totalTimeInSeconds'?: number;
    /**
    * total time for unit test execution step
    */
    'unitTestTimeInSeconds'?: number;
    /**
    * total time for unit test execution step
    */
    'editModeTestTimeInSeconds'?: number;
    /**
    * total time for unit test execution step
    */
    'playModeTestTimeInSeconds'?: number;
    /**
    * source control commit id for the build
    */
    'lastBuiltRevision'?: string;
    /**
    * a list of source control changes between this and the last build
    */
    'changeset'?: Array<object>;
    /**
    * if the build is marked as do not delete or not
    */
    'favorited'?: boolean;
    /**
    * description given when a build is favorited
    */
    'label'?: string;
    /**
    * if the build is deleted or not
    */
    'deleted'?: boolean;
    /**
    * if the build was built to run in linux headless mode
    */
    'headless'?: object;
    /**
    * if a newer credential has been attached to this buildtarget and the build can be re-signed
    */
    'credentialsOutdated'?: boolean;
    /**
    * email address of the user who deleted this attempt
    */
    'deletedBy'?: string;
    /**
    * reason the build is currently waiting
    */
    'queuedReason'?: OrgsOrgidProjectsProjectidBuildtargetsBuilds.QueuedReasonEnum;
    /**
    * time until this build will be reconsidered for building
    */
    'cooldownDate'?: string;
    /**
    * scm branch to be built
    */
    'scmBranch'?: string;
    /**
    * \'latest\' or a unity dot version with underscores (ex. \'4_6_5\')
    */
    'unityVersion'?: string;
    /**
    * \'latest\' or a supported xcode version (ex. \'xcode7\')
    */
    'xcodeVersion'?: string;
    'auditChanges'?: number;
    'projectVersion'?: OrgsOrgidProjectsProjectidBuildtargetsProjectVersion;
    'projectName'?: string;
    'projectId'?: string;
    'projectGuid'?: string;
    'orgId'?: string;
    'orgFk'?: string;
    'filetoken'?: string;
    'links'?: { [key: string]: OrgsOrgidProjectsProjectidBuildtargetsLinks; };
    'buildReport'?: OrgsOrgidProjectsProjectidBuildtargetsBuildReport;
    'testResults'?: OrgsOrgidProjectsProjectidBuildtargetsTestResults;
    'error'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "build",
            "baseName": "build",
            "type": "number"
        },
        {
            "name": "buildtargetid",
            "baseName": "buildtargetid",
            "type": "string"
        },
        {
            "name": "buildTargetName",
            "baseName": "buildTargetName",
            "type": "string"
        },
        {
            "name": "buildGUID",
            "baseName": "buildGUID",
            "type": "string"
        },
        {
            "name": "buildStatus",
            "baseName": "buildStatus",
            "type": "OrgsOrgidProjectsProjectidBuildtargetsBuilds.BuildStatusEnum"
        },
        {
            "name": "cleanBuild",
            "baseName": "cleanBuild",
            "type": "boolean"
        },
        {
            "name": "failureDetails",
            "baseName": "failureDetails",
            "type": "Array<OrgsOrgidProjectsProjectidBuildtargetsFailureDetails>"
        },
        {
            "name": "canceledBy",
            "baseName": "canceledBy",
            "type": "OrgsOrgidProjectsProjectidBuildtargetsBuilds.CanceledByEnum"
        },
        {
            "name": "platform",
            "baseName": "platform",
            "type": "OrgsOrgidProjectsProjectidBuildtargetsBuilds.PlatformEnum"
        },
        {
            "name": "workspaceSize",
            "baseName": "workspaceSize",
            "type": "number"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "string"
        },
        {
            "name": "finished",
            "baseName": "finished",
            "type": "string"
        },
        {
            "name": "checkoutStartTime",
            "baseName": "checkoutStartTime",
            "type": "string"
        },
        {
            "name": "checkoutTimeInSeconds",
            "baseName": "checkoutTimeInSeconds",
            "type": "number"
        },
        {
            "name": "buildStartTime",
            "baseName": "buildStartTime",
            "type": "string"
        },
        {
            "name": "buildTimeInSeconds",
            "baseName": "buildTimeInSeconds",
            "type": "number"
        },
        {
            "name": "publishStartTime",
            "baseName": "publishStartTime",
            "type": "string"
        },
        {
            "name": "publishTimeInSeconds",
            "baseName": "publishTimeInSeconds",
            "type": "number"
        },
        {
            "name": "totalTimeInSeconds",
            "baseName": "totalTimeInSeconds",
            "type": "number"
        },
        {
            "name": "unitTestTimeInSeconds",
            "baseName": "unitTestTimeInSeconds",
            "type": "number"
        },
        {
            "name": "editModeTestTimeInSeconds",
            "baseName": "editModeTestTimeInSeconds",
            "type": "number"
        },
        {
            "name": "playModeTestTimeInSeconds",
            "baseName": "playModeTestTimeInSeconds",
            "type": "number"
        },
        {
            "name": "lastBuiltRevision",
            "baseName": "lastBuiltRevision",
            "type": "string"
        },
        {
            "name": "changeset",
            "baseName": "changeset",
            "type": "Array<object>"
        },
        {
            "name": "favorited",
            "baseName": "favorited",
            "type": "boolean"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        },
        {
            "name": "deleted",
            "baseName": "deleted",
            "type": "boolean"
        },
        {
            "name": "headless",
            "baseName": "headless",
            "type": "object"
        },
        {
            "name": "credentialsOutdated",
            "baseName": "credentialsOutdated",
            "type": "boolean"
        },
        {
            "name": "deletedBy",
            "baseName": "deletedBy",
            "type": "string"
        },
        {
            "name": "queuedReason",
            "baseName": "queuedReason",
            "type": "OrgsOrgidProjectsProjectidBuildtargetsBuilds.QueuedReasonEnum"
        },
        {
            "name": "cooldownDate",
            "baseName": "cooldownDate",
            "type": "string"
        },
        {
            "name": "scmBranch",
            "baseName": "scmBranch",
            "type": "string"
        },
        {
            "name": "unityVersion",
            "baseName": "unityVersion",
            "type": "string"
        },
        {
            "name": "xcodeVersion",
            "baseName": "xcodeVersion",
            "type": "string"
        },
        {
            "name": "auditChanges",
            "baseName": "auditChanges",
            "type": "number"
        },
        {
            "name": "projectVersion",
            "baseName": "projectVersion",
            "type": "OrgsOrgidProjectsProjectidBuildtargetsProjectVersion"
        },
        {
            "name": "projectName",
            "baseName": "projectName",
            "type": "string"
        },
        {
            "name": "projectId",
            "baseName": "projectId",
            "type": "string"
        },
        {
            "name": "projectGuid",
            "baseName": "projectGuid",
            "type": "string"
        },
        {
            "name": "orgId",
            "baseName": "orgId",
            "type": "string"
        },
        {
            "name": "orgFk",
            "baseName": "orgFk",
            "type": "string"
        },
        {
            "name": "filetoken",
            "baseName": "filetoken",
            "type": "string"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "{ [key: string]: OrgsOrgidProjectsProjectidBuildtargetsLinks; }"
        },
        {
            "name": "buildReport",
            "baseName": "buildReport",
            "type": "OrgsOrgidProjectsProjectidBuildtargetsBuildReport"
        },
        {
            "name": "testResults",
            "baseName": "testResults",
            "type": "OrgsOrgidProjectsProjectidBuildtargetsTestResults"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return OrgsOrgidProjectsProjectidBuildtargetsBuilds.attributeTypeMap;
    }
}

export namespace OrgsOrgidProjectsProjectidBuildtargetsBuilds {
    export enum BuildStatusEnum {
        Queued = <any> 'queued',
        SentToBuilder = <any> 'sentToBuilder',
        Started = <any> 'started',
        Restarted = <any> 'restarted',
        Success = <any> 'success',
        Failure = <any> 'failure',
        Canceled = <any> 'canceled',
        Unknown = <any> 'unknown'
    }
    export enum CanceledByEnum {
        Api = <any> 'api',
        Service = <any> 'service',
        ServiceTimelimit = <any> 'service-timelimit'
    }
    export enum PlatformEnum {
        Ios = <any> 'ios',
        Android = <any> 'android',
        Webplayer = <any> 'webplayer',
        Webgl = <any> 'webgl',
        Standaloneosxintel = <any> 'standaloneosxintel',
        Standaloneosxintel64 = <any> 'standaloneosxintel64',
        Standaloneosxuniversal = <any> 'standaloneosxuniversal',
        Standalonewindows = <any> 'standalonewindows',
        Standalonewindows64 = <any> 'standalonewindows64',
        Standalonelinux = <any> 'standalonelinux',
        Standalonelinux64 = <any> 'standalonelinux64',
        Standalonelinuxuniversal = <any> 'standalonelinuxuniversal',
        Cloudrendering = <any> 'cloudrendering'
    }
    export enum QueuedReasonEnum {
        TargetConcurrency = <any> 'targetConcurrency',
        Cooldown = <any> 'cooldown',
        BuildConcurrency = <any> 'buildConcurrency',
        WaitingForBuildAgent = <any> 'waitingForBuildAgent',
        Evaluating = <any> 'evaluating',
        SentToBuilder = <any> 'sentToBuilder',
        NotPending = <any> 'notPending'
    }
}