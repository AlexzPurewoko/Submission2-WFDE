interface ActivityInfo {
    readonly activityName: string,
    readonly isRootActivity: boolean,
    readonly urlBase: string // string must contains the key of activity
}

const AppManifest = {
    homepage: "HomeActivity",
    mode: "normal", // [ test | normal ]
    testPage: "TestActivity",
    activities: new Map<string, ActivityInfo>([
        ["HomeActivity", {
            activityName: "home-activity",
            isRootActivity: true,
            urlBase: "/HomeActivity"
        }],

        ["DetailActivity", {
            activityName: "detail-activity",
            isRootActivity: false,
            urlBase: "/DetailActivity/{id}/{fromFavorite | empty }"
        }],

        ["TestActivity", {
            activityName: "test-activity",
            isRootActivity: true,
            urlBase: "/TestActivity"
        }],
    ])
} 

export {ActivityInfo, AppManifest};