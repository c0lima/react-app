module.exports = {

        "repositoryUrl": "https://github.com/c0lima/react-app",
        "branches": ["main"],
        "plugins": [
        "@semantic-release/commit-analyzer", 
        "@semantic-release/release-notes-generator", 
        "@semantic-release/npm",
        ["@semantic-release/github",{
            "assets": [
                { path: "build.zip", label: "Build" },
                { path: "coverage.zip", label: "Coverage" }
            ]
        }]
        ]
}