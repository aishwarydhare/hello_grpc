# gRPC & proto3 on Node.js Example

This directory contains code examples for all the Node.js based gRPC implementations, demonstrating example of -

* simple RPC (like the simple REST)
* streaming from server to client RPC
* streaming from client to server RPC
* bidirectional streaming RPC (both server and client streaming to each other at the same time)

I have made these examples by taking reference from [official examples by gRPC](https://github.com/grpc/grpc)

And, for more comprehensive documentation, including an [overview](https://grpc.io/docs/) and tutorials that use this example code, visit [grpc.io](https://grpc.io/docs/).


## Instructions

current example is demonstrating dynamic binary creation using notes.proto file using 'proto3' syntax version 

 - install dependencies using

   ```sh 
   $ npm install
   ```

 - to run gRPC server

   ```sh
   $ node server.js
   ```

 - to run example of simple RPC (like the simple REST)

   ```sh
   $ node get_notes.js
   ```

 - to run example of streaming from server to client RPC

   ```sh
   $ node get_stream.js
   ```

 - to run example of streaming from client to server RPC

   ```sh
   $ node put_stream.js
   ```

- to run example of bidirectional streaming RPC

   ```sh
   $ node gp_stream.js
   ```


## Other
   
- Steps to learn gRPC & proto3
   - [What is gRPC](https://grpc.io/docs/guides/)
   - [Why gRPC deserves all the hype](https://www.youtube.com/watch?v=RoXT_Rkg8LA)
   - [gRPC Benchmarks](https://github.com/david-cao/gRPCBenchmarks)
   - [What are protocol buffers, and why proto3](https://developers.google.com/protocol-buffers/docs/overview)
   - [How to use proto3](https://developers.google.com/protocol-buffers/docs/proto3)
   - [proto3 behind the scenes](https://developers.google.com/protocol-buffers/docs/encoding)
   - [Coding style guide and etiquettes for proto3](https://developers.google.com/protocol-buffers/docs/style)
   - [Simple python tutorial of proto3](https://developers.google.com/protocol-buffers/docs/pythontutorial)
   - [Back to gRPC Concepts](https://grpc.io/docs/guides/concepts.html)
   - [This medium blog has a very basic example of using gRPC on node.js](https://grpc.io/docs/quickstart/node.html)
   - [QuickStart guide for gRPC on node.js](https://medium.com/@alfianlosari/building-grpc-service-server-note-crud-api-with-node-js-bcc5478d5bdb)


## TUTORIAL

You can find a more detailed tutorial in [gRPC Basics: Node.js](https://grpc.io/docs/tutorials/basic/node.html)
