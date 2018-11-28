const grpc = require('grpc')
const notesProto = grpc.load('./protos/notes.proto')
const notes = [
    { id: '1', title: 'Note 1', content: 'Content 1'},
    { id: '2', title: 'Note 2', content: 'Content 2'}
]
const server = new grpc.Server()

server.addService(notesProto.NoteService.service, {
    list: (call, callback) => {
        console.log(call)
        console.log(callback)
        callback(null, notes);
    }, 
    getStream: (call) => {
        // console.log("\n ========== CALL START\n", call)
        noteStream = { 
            notes: notes,
            order: "-1"
        }
        for (let i = 0; i < 3; i++) { 
            noteStream.order = ""+i
            call.write(noteStream);
        }
        // console.log("\n ========== CALL IN PROGRESS\n", call)
        call.end()
        // console.log("\n ========== CALL END\n", call)
    }, 
    putStream: (call, callback) => {
        call.on('data', (notes_stream) => {
            // process data
            console.log(notes_stream)
        })

        call.on('end', () => {
            // process end
            console.log("\n ========== streaming end\n")
            callback(false, {
                code: 0,
                msg: "successfully streamed to server"
            })
        })

        call.on('error', (error) => {
            // process error
            console.log("\n ========== error\n", error)
            callback(true, {
                code: 1,
                msg: error
            })
        })

        call.on('status', (status) => {
            // process status
            console.log("\n ========== status\n", status)
        })
    },
    getPutStream: (call) => {
        call.on('data', (debug_message) => {
            // process data
            console.log(debug_message.msg)
        })

        call.on('error', (error) => {
            // process error
            console.log("\n ========== error\n", error)
        })

        call.on('end', () => {
            // process end
            console.log("\n ========== streaming end\n")
        })

        let i = 0;
        var refId = null;
        function sendDataToServer(){
            i += 1
            call.write({
                msg: "Server is sending "+i
            });   
            if(i == 7){
                call.end()
                clearInterval(refId)
            }
        }
        refId = setInterval(sendDataToServer, 1000)
    }
});

server.bind('127.0.0.1:50051', grpc.ServerCredentials.createInsecure())
console.log('Server running at http://127.0.0.1:50051')
server.start()