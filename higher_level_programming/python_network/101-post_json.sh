#!/bin/bash
curl -X POST -d "@$2" -H "Content-Type: application/json"  "$1"
