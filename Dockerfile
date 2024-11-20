FROM node:20

# Arbeitsverzeichnis im Container
WORKDIR /app

# App-Dateien in den Container kopieren
COPY . .

# Abhängigkeiten installieren
RUN npm install

# Installiere das Paket für CA-Zertifikate
RUN apt-get update && apt-get install -y ca-certificates

RUN update-ca-certificates



# Umgebungsvariablen in den Container laden
ENV NEXTAUTH_URL=https://api.linn.games
ENV DATABASE_URL=mysql://linngames:Bumspilz690!@192.168.178.14:3306/linngamesdb

# Port freigeben und App starten
CMD ["node", "node_modules/next/dist/bin/next", "start", "--port", "3000", "--hostname", "api.linn.games"]
