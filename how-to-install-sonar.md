Linux:

sonar-scanner \
  -Dsonar.projectKey=cynex-time-ui \
  -Dsonar.sources=. \
  -Dsonar.host.url=http://localhost:9000 \
  -Dsonar.login=sqp_6845b69a7f7c473639603db6fc1e296245709a8b


Windows:

sonar-scanner.bat -D"sonar.projectKey=cynex-time-ui" -D"sonar.sources=." -D"sonar.host.url=http://localhost:9000" -D"sonar.login=TOKEN"

macOS:

sonar-scanner \
  -Dsonar.projectKey=cynex-time-ui \
  -Dsonar.sources=. \
  -Dsonar.host.url=http://localhost:9000 \
  -Dsonar.login=TOKEN