interface ActivityInfo {
    readonly activityName: string,
    readonly isRootActivity: boolean,
    readonly urlBase: string // string must contains the key of activity
}

const AppManifest = {
    homepage: "HomeActivity",
    activities: new Map<string, ActivityInfo>([
        ["HomeActivity", {
            activityName: "main-activity",
            isRootActivity: true,
            urlBase: "/HomeActivity"
        }],

        ["DetailActivity", {
            activityName: "detail-activity",
            isRootActivity: true,
            urlBase: "/DetailActivity/{id}"
        }],

    ])
} 

export {ActivityInfo, AppManifest};