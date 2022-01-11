let request = indexedDB.open("camera", 2)

request.onsuccess = function(e){
    let db = request.result
    let note = {
        nId: "jhvahdsv",
        txt: "hello i'm sakshi"
    }

    let tx = db.transaction("gallery","readwrite")
    let store = tx.objectStore("gallery")
    store.add(note)
}

request.onupgradeneeded = function(e){
    db = request.result
    db.createObjectStore("gallery",{ keyPath: "mId"})
}
