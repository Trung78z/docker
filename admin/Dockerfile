FROM node:20-alpine
RUN addgroup app && adduser -S -G app app
USER app
WORKDIR /app/admin
COPY package*.json ./
USER root
RUN chown -R app:app .
USER app
RUN npm install
COPY . .
EXPOSE 4173
CMD [   "sh", "-c", "npm run build && npm run preview"]

