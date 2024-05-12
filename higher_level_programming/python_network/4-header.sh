#!/bin/bash
#displays body of a request with a specific header variable
curl -X GET -H "X-School-User-Id:98" "$1"
