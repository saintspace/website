#!/bin/bash

if [[ $NODE_ENV = "production" ]]
then
    cat << EOF > .next/robots.txt
User-agent: *
Disallow:
EOF
else
    cat << EOF > .next/robots.txt
User-agent: *
Disallow: /
EOF
fi
