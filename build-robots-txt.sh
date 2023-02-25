#!/bin/bash
touch public/robots.txt
if [[ $BUILD_ENV = "production" ]]
then
    cat << EOF > public/robots.txt
User-agent: *
Disallow:
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