const scanner = require('sonarqube-scanner');

scanner(
    {
        serverUrl: 'http://localhost:9000',
        token: "sqp_6845b69a7f7c473639603db6fc1e296245709a8b",
        options: {
            'sonar.projectName': 'cynex-time-ui',
            'sonar.projectDescription': 'Cynex time UI project',
            'sonar.projectKey': 'cynex-time-ui',
            'sonar.projectVersion': '0.0.1',
            'sonar.exclusions': '',
            'sonar.sourceEncoding': 'UTF-8',
        }
    },
    () => process.exit()
)