#!/bin/bash
touch public/robots.txt
if [[ $NODE_ENV = "production" ]]
then
    cat << EOF > public/robots.txt
User-agent: *
Allow: /
EOF
else
    cat << EOF > public/robots.txt
User-agent: *
Disallow: /
EOF
fi
cd public
ls
cd ..