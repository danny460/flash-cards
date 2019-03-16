FROM node:8-alpine

WORKDIR /app

ADD . .

ENV ADMIN_PASS=1234
ENV NODE_ENV=production

RUN npm install \
	&& npm install -g knex \
	&& knex migrate:latest \
    && npm uninstall -g kinex \
    && npm install -g pm2

EXPOSE 8091

CMD ["pm2-runtime", "start", "pm2_apps.json"]