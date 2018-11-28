const client = require('./client')

var call = client.getStream({})
call.on('data', (notes_stream) => {
    // process data
    console.log(notes_stream)
})

call.on('end', () => {
    // process end
    console.log("\n ========== streaming end\n")
    console.log("\n ========== call status\n", call)
})

call.on('error', function(error) {
    // process error
    console.log("\n ========== error\n", error)
})

call.on('status', function(status) {
    // process status
    console.log("\n ========== status\n", status)
})