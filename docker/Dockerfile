FROM node:16.15.0 as builder

ENV WORKDIR=/vite2-vue3

WORKDIR $WORKDIR

COPY ./ $WORKDIR/

ARG version
ENV COMMITID=$version

RUN npm i -g pnpm && pnpm install && pnpm build

FROM nginx:alpine as prod

RUN mkdir /soybean

COPY --from=builder /vite2-vue3/dist /vite2-vue3
COPY --from=builder /vite2-vue3/docker/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
