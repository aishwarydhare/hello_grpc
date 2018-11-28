const client = require('./client')

let stream_count = 0
notes = [{ id: '1', title: 'Note 1', content: 'Content 1'}]

call = client.putStream((error, data) => {
    if(error){
        console.log("\n ========== ERROR\n", error)
    }
    console.log("\n ========== CALLBACK\n", "CODE:", data.code, "MSG:", data.msg)
    return
})

for (let i = 0; i < 100990; i++) { 
    call.write({
        notes: notes,
        order: ""+i
    });
}

call.end()
