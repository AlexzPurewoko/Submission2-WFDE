interface ActivityInfo {
    readonly activityName: string,
    readonly isRootActivity: boolean,
    readonly urlBase: string // string must contains the key of activity
}

const AppManifest = {
    homepage: "HomeActivity",
    activities: new Map<string, ActivityInfo>([
        ["HomeActivity", {
            activityName: "home-activity",
            isRootActivity: true,
            urlBase: "/HomeActivity"
        }],

        ["DetailActivity", {
            activityName: "detail-activity",
            isRootActivity: false,
            urlBase: "/DetailActivity/{id}"
        }],

    ])
} 

export {ActivityInfo, AppManifest};