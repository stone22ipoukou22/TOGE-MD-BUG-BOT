FROM quay.io/hermit/hermit-ser:latest

RUN git clone https://github.com/toge012345/TOGE-MD /root/TOGE-MD
WORKDIR /root/TOGE-MD/
RUN yarn install --network-concurrency 1
CMD ["node", "index.js"]
