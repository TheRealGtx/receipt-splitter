FROM node:20-alpine AS dependencies

RUN apk update && apk upgrade --no-cache

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production && npm cache clean --force

FROM node:20-alpine AS production

RUN apk update && apk upgrade --no-cache && \
    apk add --no-cache curl dumb-init && \
    rm -rf /var/cache/apk/*

RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodeuser -u 1001 -G nodejs

WORKDIR /app

COPY --from=dependencies --chown=noduser:nodejs /app/node_modules ./node_modules
COPY --chown=nodeuser:nodejs package*.json ./
COPY --chown=nodeuser:nodejs server.js ./

USER nodeuser

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=10s --start-period=15s --retries=3 \
    CMD curl -f http://localhost:8080/ || exit 1

ENTRYPOINT [ "dumb-init", "--" ]

CMD [ "npm", "start"]