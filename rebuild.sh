#!/bin/bash
sudo cd /var/lib/docker/compose/cyber-site \
&& sudo mv /var/lib/docker/compos/cyber-site/docker/.env /tmp/.env \
&& sudo mv /var/lib/docker/compos/cyber-site/docker/.SECERTS /tmp/.SECRETS \
&& sudo docker compose down \
&& yes | sudo docker system prune -a \
&& sudo cd /var/lib/docker/compose \
&& sudo rm -fr /var/lib/docker/compos/cyber-site/* \
&& sudo git clone git@github.com:scorps30/cyber-site.git \
&& sudo cd /var/lib/docker/compos/cyber-site/docker \
&& sudo mv /tmp/.env /var/lib/docker/compose/cyber-site/docker/.env \
&& sudo mv /tmp/.SECRETS /var/lib/docker/compose/cyber-site/docker/.SECERTS \
&& sudo docker compose -f docker/docker-compose-build.yml up -d --build \
&& wait 20 \
&& sudo docker ps > start.log \
&& sudo docker compose logs > stack.log
