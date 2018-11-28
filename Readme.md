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


## TUTORIAL

You can find a more detailed tutorial in [gRPC Basics: Node.js][https://grpc.io/docs/tutorials/basic/node.html]
