echo "Start profiling on server"
token=$(./tool.sh generate-token --admin anticrm@digitrans.lab sanity-ws)
curl -X PUT "http://localhost:3334/api/v1/manage?token=${token}&operation=profile-start"
