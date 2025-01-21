FROM node:20-alpine AS builder

WORKDIR /app
COPY . .

RUN yarn install --legacy-peer-deps
RUN yarn run build

FROM node:20-alpine

WORKDIR /app
COPY --from=builder /app /app

RUN apk add --no-cache \
    curl \
    && addgroup -g 10000 -S app \
    && adduser -u 10001 -S app -G app \
    && chown app:app -R /app

USER app

EXPOSE 3000

CMD ["yarn", "start"]
