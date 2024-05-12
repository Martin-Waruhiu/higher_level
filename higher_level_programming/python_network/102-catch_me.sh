#!/bin/bash

# Send a POST request to 0.0.0.0:5000/catch_me with a custom header
curl -s -X PUT -H "x-auth-token: I will always be there for PLD" -d "user_id=98" 0.0.0.0:5000/catch_me > /dev/null 2>&1

