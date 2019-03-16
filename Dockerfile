FROM node:8-alpine

WORKDIR /app

ADD . .

ENV ADMIN_PASS=1234
ENV NODE_ENV=production

RUN npm install \
    && npm install -g pm2 knex \
	&& knex migrate:latest \
    && rm -rf /app/db
    
EXPOSE 8091

CMD ["pm2-runtime", "start", "pm2_apps.json", "-i 1"]