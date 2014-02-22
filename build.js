({
    mainConfigFile : "js/main.js",
    appDir: "./",
    baseUrl: "js",
    removeCombined: true,
    findNestedDependencies: true,
    dir: "dist",
    optimizeCss: "standard",
    modules: [
        {
            name: "main",
            exclude: [
                "infrastructure"
            ]
        }
    ]
})