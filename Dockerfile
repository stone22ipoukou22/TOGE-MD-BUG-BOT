FROM quay.io/teamolduser/docker

COPY . /root/TOGE-MD
WORKDIR /root/TOGE-MD
RUN apt install ffmpeg
RUN yarn install
EXPOSE 3000
CMD ["yarn", "start"]
