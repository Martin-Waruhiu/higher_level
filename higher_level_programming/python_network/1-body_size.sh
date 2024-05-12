#!/bin/bash
# outputs the size of a response body in bytes
curl -s -o /dev/null -w "%{size_download}" "$1"
