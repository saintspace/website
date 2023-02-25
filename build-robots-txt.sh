#!/bin/bash
touch .next/robots.txt
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
cd .next
ls