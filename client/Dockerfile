FROM node:20-alpine
RUN addgroup app && adduser -S -G app app
USER app
WORKDIR /app/client
COPY package*.json ./
USER root
RUN chown -R app:app .
USER app
RUN npm install
COPY . .
EXPOSE 4000
CMD [   "sh", "-c", "npm run build && npm run preview"]
# FROM node:20-alpine
# RUN addgroup app && adduser -S -G app app
# USER app
# WORKDIR /app
# # COPY package*.json ./
# USER root
# RUN chown -R app:app .
# USER app
# # RUN npm install
# COPY . .
# EXPOSE 4000
# CMD [   "sh", "-c", "npx serve -s dist -p 4173"]
