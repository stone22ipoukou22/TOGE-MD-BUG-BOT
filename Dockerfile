FROM quay.io/suhailtechinfo/suhail-v2
RUN git clone https://github.com/toge012345/TOGE-MD /root/TOGE-MD
RUN rm -rf /root/TOGE-MD/.git
WORKDIR /root/TOGE-MD
RUN npm install || yarn install
EXPOSE 8000
CMD ["npm","start" ] 

FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

COPY package.json .

RUN npm install && npm install qrcode-terminal

COPY . .

EXPOSE 3000
