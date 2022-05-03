//first encryption function
function encryptionOne() {
    console.log("manual key formater");
    let key = document.getElementById("key1").value;
    let plainText = document.getElementById("text1").value;
    console.log("unformated key- " + key);
    if (key.length < 5) {
        let pad_string = "00000"
        key = pad_string.substring(0, 5 - key.length) + key;
    }
    //encryption logic
    let plain_text = plainText;
    let encryption_key = key;
    let ascii_code_list = [];
    let encrypted_ascii_code_list = [];
    let encrypted_text;
    for (let i = 0; i < plain_text.length; i++) {
        //converting the normal text into the ascii one by one
        let ascii_code = plain_text.codePointAt(i);
        console.log(ascii_code);
        ascii_code_list.push(ascii_code);
        console.log(ascii_code_list);
    }
    let index = 0;
    let j = 0;
    ascii_code_list.forEach((ascii) => {
        console.log(plain_text[j]);
        //eg 115 + 10 -> 125 (not ascii)
        //125-122 = 3
        //then we will do 31 + 3 = 35
        console.log(index);
        let manipulator = parseInt(encryption_key[index]);
        if (ascii + manipulator > 122) {
            encrypted_ascii_code_list.push(ascii + manipulator - 122 + 32);
        } else {
            encrypted_ascii_code_list.push(ascii + manipulator);
        }
        if (index < 4) {
            console.log("in if");
            index = index + 1;
        } else {
            index = 0;
            console.log("in else");
        }
        j++;
        console.log(encrypted_ascii_code_list);
    });

    encrypted_text = String.fromCharCode(...encrypted_ascii_code_list);
    console.log(encrypted_text);



}

//second encrypter function
function encryptionTwo() {
    console.log("manual key formater");
    let key = document.getElementById("key1").value;
    let plainText = document.getElementById("text1").value;
    console.log("unformated key- " + key);
    if (key.length < 5) {
        let pad_string = "00000"
        key = pad_string.substring(0, 5 - key.length) + key;
    }

    // function odd_even_cyclic_encrypter(text, key) {}

    //add key to text(ascii) in cycle
    let plain_text = plainText;
    let encryption_key = key;
    let ascii_code_list = [];
    let encrypted_ascii_code_list = [];
    let encrypted_text;
    let flag_odd_even = true;
    for (let i = 0; i < plain_text.length; i++) {
        //converting the normal text into the ascii one by one
        let ascii_code = plain_text.codePointAt(i);
        console.log(ascii_code);
        ascii_code_list.push(ascii_code);
        console.log(ascii_code_list);
    }
    let index = 0;
    let j = 0;
    ascii_code_list.forEach((ascii) => {
        console.log(plain_text[j]);
        //eg 115 + 10 -> 125 (not ascii)
        //125-122 = 3
        //then we will do 31 + 3 = 35
        console.log(index);
        let manipulator = parseInt(encryption_key[index]);
        if (ascii + manipulator > 122) {
            encrypted_ascii_code_list.push(ascii + manipulator - 122 + 32);
        } else {
            encrypted_ascii_code_list.push(ascii + manipulator);
        }
        if (index == 4) {
            index = 1;
        } else if (index == 3) {
            index = 0;
        } else {
            index += 2;
        }
        j++;
        console.log(encrypted_ascii_code_list);
    });

    encrypted_text = String.fromCharCode(...encrypted_ascii_code_list);
    console.log(encrypted_text);


}

//third encryption Function

function encryptionThree() {
    console.log("manual key formater");
    let key = document.getElementById("key1").value;
    let plainText = document.getElementById("text1").value;
    console.log("unformated key- " + key);
    if (key.length < 5) {
        let pad_string = "00000"
        key = pad_string.substring(0, 5 - key.length) + key;
    }

    //encryption logic
    // function key_summation_cyclic_encrypter(text, key) {}

    //add key to text(ascii) in cycle
    let plain_text = plainText;
    let encryption_key = key;
    let ascii_code_list = [];
    let encrypted_ascii_code_list = [];
    let encrypted_text;
    let flag_left_right = true;
    for (let i = 0; i < plain_text.length; i++) {
        //converting the normal text into the ascii one by one
        let ascii_code = plain_text.codePointAt(i);
        console.log(ascii_code);
        ascii_code_list.push(ascii_code);
        console.log(ascii_code_list);
    }
    let index = 0;
    let summed_key = 0;

    for (let i = 0; i < encryption_key.length; i++) {
        summed_key += parseInt(encryption_key[i]);
    }
    console.log(summed_key);
    let j = 0;
    ascii_code_list.forEach((ascii) => {
        console.log(plain_text[j]);
        //eg 115 + 10 -> 125 (not ascii)
        //125-122 = 3
        //then we will do 31 + 3 = 35

        let manipulator = summed_key;
        if (ascii + manipulator > 122) {
            encrypted_ascii_code_list.push(ascii + manipulator - 122 + 32);
        } else {
            encrypted_ascii_code_list.push(ascii + manipulator);
        }

        // if (index < 4) {
        //   console.log("in if");
        //   index = index + 1;
        // } else {
        //   index = 0;
        //   console.log("in else");
        // }
        j++;
        console.log(encrypted_ascii_code_list);
    });

    encrypted_text = String.fromCharCode(...encrypted_ascii_code_list);
    console.log(encrypted_text);


}

function encryptionFour() {
    //manual key formater
    console.log("manual key formater");
    let key = document.getElementById("key1").value;
    let plainText = document.getElementById("text1").value;
    console.log("unformated key- " + key);
    if (key.length < 5) {
        let pad_string = "00000"
        key = pad_string.substring(0, 5 - key.length) + key;
    }

    // function bidirectional_iterator_cyclic_encrypter(text, key) {}

    //add key to text(ascii) in cycle
    let plain_text = plainText;
    let encryption_key = key;
    let ascii_code_list = [];
    let encrypted_ascii_code_list = [];
    let encrypted_text;
    let flag_left_right = true;
    for (let i = 0; i < plain_text.length; i++) {
        //converting the normal text into the ascii one by one
        let ascii_code = plain_text.codePointAt(i);
        console.log(ascii_code);
        ascii_code_list.push(ascii_code);
        console.log(ascii_code_list);
    }
    let index = 0;

    let j = 0;
    ascii_code_list.forEach((ascii) => {
        console.log(plain_text[j]);
        //eg 115 + 10 -> 125 (not ascii)
        //125-122 = 3
        //then we will do 31 + 3 = 35
        let manipulator = 0;
        if (flag_left_right == true) {
            manipulator = parseInt(encryption_key[index]);
            if (ascii + manipulator > 122) {
                encrypted_ascii_code_list.push(ascii + manipulator - 122 + 32);
            } else {
                encrypted_ascii_code_list.push(ascii + manipulator);
            }

            if (index < 3) {
                console.log("in if");
                index = index + 1;
            } else {
                index = 0;
                console.log("in else");
            }
        } else {
            manipulator = parseInt(encryption_key[encryption_key.length - 1 - index]);
            if (ascii + manipulator > 122) {
                console.log("printing ascii");
                encrypted_ascii_code_list.push(ascii + manipulator - 122 + 32);
                console.log("in the else -> if of ascii addition");
            } else {
                encrypted_ascii_code_list.push(ascii + manipulator);
                console.log("in the else -> if of ascii addition");
            }
        }
        flag_left_right = !flag_left_right;
        console.log(encrypted_ascii_code_list);
    });

    encrypted_text = String.fromCharCode(...encrypted_ascii_code_list);
    console.log(encrypted_text);


}
function encryptionFifth() {
    //manual key formater
    console.log("manual key formater");
    let key = document.getElementById("key1").value;
    let plainText = document.getElementById("text1").value;
    console.log("unformated key- " + key);
    if (key.length < 5) {
        let pad_string = "00000"
        key = pad_string.substring(0, 5 - key.length) + key;
    }

    //encryption logic
    // Split key encrypter

    //add key to text(ascii) in cycle
    let plain_text = plainText;
    let encryption_key = key;
    let ascii_code_list = [];
    let encrypted_ascii_code_list = [];
    let encrypted_text;
    let flag_left_middle_right = 0;
    for (let i = 0; i < plain_text.length; i++) {
        //converting the normal text into the ascii one by one
        let ascii_code = plain_text.codePointAt(i);
        console.log(ascii_code);
        ascii_code_list.push(ascii_code);
        console.log(ascii_code_list);
    }
    let left_key_part = parseInt(encryption_key[0]) + parseInt(encryption_key[1]);
    let middle_key_part = parseInt(encryption_key[1]) + parseInt(encryption_key[2]) + parseInt(encryption_key[3]);
    let right_key_part = parseInt(encryption_key[3]) + parseInt(encryption_key[4]);
    let j = 0;
    let key_part_switch = 0;
    let manipulator = 0;
    ascii_code_list.forEach((ascii) => {
        console.log(plain_text[j]);
        //eg 115 + 10 -> 125 (not ascii)
        //125-122 = 3
        //then we will do 31 + 3 = 35
        if (key_part_switch == 0) {
            manipulator = left_key_part;
            key_part_switch++;
        } else if (key_part_switch == 1) {
            manipulator = middle_key_part;
            key_part_switch++;
        } else {
            manipulator = right_key_part;
            key_part_switch = 0;
        }

        if (ascii + manipulator > 122) {
            encrypted_ascii_code_list.push(ascii + manipulator - 122 + 32);
        } else {
            encrypted_ascii_code_list.push(ascii + manipulator);
        }

        j++;
        console.log(encrypted_ascii_code_list);
    });

    encrypted_text = String.fromCharCode(...encrypted_ascii_code_list);
    console.log(encrypted_text);
}