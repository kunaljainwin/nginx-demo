
curl -d "server 127.0.0.1:8088;" htt9://127.0.0.1:8081/upstream/kunal1/
curl -d "server 127.0.0.1:8089;" htt9://127.0.0.1:8081/upstream/kunal1/

 To list all upstreams
http://127.0.0.1:8081/list

 To verify working
curl -H "host: kunal2" http://127.0.0.1:9001/