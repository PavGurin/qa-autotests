#!/bin/sh
apk --no-cache add curl > /dev/null 2>&1
echo $(curl -s -d '{"name":"'"$CI_COMMIT_REF_NAME#$CI_PIPELINE_ID"'", "include_all":true}' -u ${CYPRESS_TESTRAIL_USER}:${CYPRESS_TESTRAIL_PASSWORD} -H 'Content-Type: application/json' -X POST https://1win.testrail.io/index.php?/api/v2/add_run/${CYPRESS_TESTRAIL_PROJECT_ID} |  sed 's/{.*\"id":"*\([0-9a-zA-Z]*\)"*,*.*}/\1/')