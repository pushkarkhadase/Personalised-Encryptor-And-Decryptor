//first decryption algorithm
function decryptionFirst() {
    

    //decrypting the text
    //decrypter logic
    //convert the encrypted text into the ascii code
    enc_text = decrypting_text;
    k = decrypting_key;
    asc;
    asc_list = [];
    decryp_asc_list = [];
    ind = 0;
    for (let i = 0; i < enc_text.length; i++) {
        //converting the normal text into the ascii one by one
        let asc = enc_text.codePointAt(i);
        console.log(asc);
        asc_list.push(asc);
        console.log(asc_list);
    }
    //substract the key from the ascii
    asc_list.forEach((asc_i) => {
        let manipulator = parseInt(k[ind]);
        // if the key - ascii < 33 then sub remaining from 122
        if (asc_i - manipulator == 32) {
            decryp_asc_list.push(asc_i - manipulator);
        } else if (asc_i - manipulator < 33) {
            decryp_asc_list.push(122 - (32 - (asc_i - manipulator)));
        } else {
            decryp_asc_list.push(asc_i - manipulator);
        }
        if (ind < 4) {
            console.log("in if");
            ind = ind + 1;
        } else {
            ind = 0;
            console.log("in else");
        }
    });
    // then convert the ascii back to the text
    dec_text = String.fromCharCode(...decryp_asc_list);
    console.log(dec_text);
}
function decryptionSecond() {
    

    //decrypter logic
    //convert the encrypted text into the ascii code
     enc_text = decrypting_text;
     k = decrypting_key;
     asc;
     asc_list = [];
     decryp_asc_list = [];
     ind = 0;
    for (let i = 0; i < enc_text.length; i++) {
        //converting the normal text into the ascii one by one
        let asc = enc_text.codePointAt(i);
        console.log(asc);
        asc_list.push(asc);
        console.log(asc_list);
    }
    //substract the key from the ascii
    asc_list.forEach((asc_i) => {
        let manipulator = parseInt(k[ind]);
        // if the key - ascii < 33 then sub remaining from 122
        if (asc_i - manipulator == 32) {
            decryp_asc_list.push(asc_i - manipulator);
        } else if (asc_i - manipulator < 33) {
            decryp_asc_list.push(122 - (32 - (asc_i - manipulator)));
        } else {
            decryp_asc_list.push(asc_i - manipulator);
        }
        if (ind == 4) {
            ind = 1;
        } else if (ind == 3) {
            ind = 0;
        } else {
            ind += 2;
        }
    });
    // then convert the ascii back to the text
     dec_text = String.fromCharCode(...decryp_asc_list);
    console.log(dec_text);

}

function decryptionThird() {

}
function decryptionFourth() {

}
function decryptionFifth() {

}
