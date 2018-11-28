const client = require('./client')

call = client.getPutStream()

call.on('data', (debug_message) => {
    // process data
    console.log(debug_message.msg)
})

call.on('error', function(error) {
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
        msg: "Client is sending "+i
    });   
    if(i == 3){
        call.end()
        clearInterval(refId)
    }
}
refId = setInterval(sendDataToServer, 1000)
