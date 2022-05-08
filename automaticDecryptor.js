const CallFirst = () => {
  //the following function is for decryption and separating the key
  let enc_text = document.getElementById("AD1").value;
  let k = "56789";
  let asc;
  let asc_list = [];
  let decryp_asc_list = [];
  let ind = 0;
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
  let dec_text = String.fromCharCode(...decryp_asc_list);
  console.log(dec_text);
  let decrypting_text = dec_text.substring(0, dec_text.length - 5);
  let decrypting_key = dec_text.substring(dec_text.length - 5, dec_text.length);
  console.log(decrypting_text);
  console.log(decrypting_key);

  let plainText = decrypting_text;
  let key = decrypting_key;
  console.log(key + "  " + plainText);

  //decrypting the text
  //decrypter logic
  //convert the encrypted text into the ascii code
  enc_text = plainText;
  k = key;
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
};

const CallSecond = () => {
  //the following function is for decryption and separating the key
  let enc_text = document.getElementById("AD2").value;
  let k = "56789";
  let asc;
  let asc_list = [];
  let decryp_asc_list = [];
  let ind = 0;
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
  let dec_text = String.fromCharCode(...decryp_asc_list);
  console.log(dec_text);
  let decrypting_text = dec_text.substring(0, dec_text.length - 5);
  let decrypting_key = dec_text.substring(dec_text.length - 5, dec_text.length);
  console.log(decrypting_text);
  console.log(decrypting_key);

  let plainText = decrypting_text;
  let key = decrypting_key;
  console.log(key + "  " + plainText);

  //decrypter logic
  //convert the encrypted text into the ascii code
  enc_text = plainText;
  k = key;
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
};

const CallThird = () => {
  //the following function is for decryption and separating the key
  let enc_text = document.getElementById("AD3").value;
  let k = "56789";
  let asc;
  let asc_list = [];
  let decryp_asc_list = [];
  let ind = 0;
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
  let dec_text = String.fromCharCode(...decryp_asc_list);
  console.log(dec_text);
  let decrypting_text = dec_text.substring(0, dec_text.length - 5);
  let decrypting_key = dec_text.substring(dec_text.length - 5, dec_text.length);
  console.log(decrypting_text);
  console.log(decrypting_key);

  let plainText = decrypting_text;
  let key = decrypting_key;
  console.log(key + "  " + plainText);

  //decrypter logic
  //convert the encrypted text into the ascii code
  enc_text = plainText;
  k = key;
  asc;
  asc_list = [];
  decryp_asc_list = [];
  ind = 0;
  let sum = 0;
  for (let i = 0; i < k.length; i++) {
    sum += parseInt(k[i]);
  }
  for (let i = 0; i < enc_text.length; i++) {
    //converting the normal text into the ascii one by one
    let asc = enc_text.codePointAt(i);
    console.log(asc);
    asc_list.push(asc);
    console.log(asc_list);
  }
  //substract the key from the ascii
  asc_list.forEach((asc_i) => {
    let manipulator = sum;
    // if the key - ascii < 33 then sub remaining from 122
    if (asc_i - manipulator == 32) {
      decryp_asc_list.push(asc_i - manipulator);
    } else if (asc_i - manipulator < 33) {
      decryp_asc_list.push(122 - (32 - (asc_i - manipulator)));
    } else {
      decryp_asc_list.push(asc_i - manipulator);
    }
  });
  // then convert the ascii back to the text
  dec_text = String.fromCharCode(...decryp_asc_list);
  console.log(dec_text);
};

const CallForth = () => {
  //the following function is for decryption and separating the key
  let enc_text = document.getElementById("AD4").value;
  let k = "56789";
  let asc;
  let asc_list = [];
  let decryp_asc_list = [];
  let ind = 0;
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
  let dec_text = String.fromCharCode(...decryp_asc_list);
  console.log(dec_text);
  let decrypting_text = dec_text.substring(0, dec_text.length - 5);
  let decrypting_key = dec_text.substring(dec_text.length - 5, dec_text.length);
  console.log(decrypting_text);
  console.log(decrypting_key);

  let plainText = decrypting_text;
  let key = decrypting_key;
  console.log(key + "  " + plainText);

  //decrypter logic
  //convert the encrypted text into the ascii code
  enc_text = plainText;
  k = key;
  asc;
  asc_list = [];
  decryp_asc_list = [];
  ind = 0;
  let flag_l_r = true;
  for (let i = 0; i < enc_text.length; i++) {
    //converting the normal text into the ascii one by one
    let asc = enc_text.codePointAt(i);
    console.log(asc);
    asc_list.push(asc);
    console.log(asc_list);
  }
  //substract the key from the ascii
  let mani = 0;

  asc_list.forEach((asc_i) => {
    if (flag_l_r == true) {
      mani = parseInt(k[ind]);
      // if the key - ascii < 33 then sub remaining from 122
      if (asc_i - mani == 32) {
        decryp_asc_list.push(asc_i - mani);
      } else if (asc_i - mani < 33) {
        decryp_asc_list.push(122 - (32 - (asc_i - mani)));
      } else {
        decryp_asc_list.push(asc_i - mani);
      }
      if (ind < 3) {
        console.log("in if");
        ind = ind + 1;
      } else {
        ind = 0;
        console.log("in else");
      }
    } else {
      mani = parseInt(k[k.length - 1 - ind]);
      if (asc_i - mani == 32) {
        decryp_asc_list.push(asc_i - mani);
      } else if (asc_i - mani < 33) {
        decryp_asc_list.push(122 - (32 - (asc_i - mani)));
      } else {
        decryp_asc_list.push(asc_i - mani);
      }
    }
    flag_l_r = !flag_l_r;
  });

  // then convert the ascii back to the text

  dec_text = String.fromCharCode(...decryp_asc_list);
  console.log(dec_text);
};

const CallFifth = () => {
  //the following function is for decryption and separating the key
  let enc_text = document.getElementById("AD5").value;
  let k = "56789";
  let asc;
  let asc_list = [];
  let decryp_asc_list = [];
  let ind = 0;
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
  let dec_text = String.fromCharCode(...decryp_asc_list);
  console.log(dec_text);
  let decrypting_text = dec_text.substring(0, dec_text.length - 5);
  let decrypting_key = dec_text.substring(dec_text.length - 5, dec_text.length);
  console.log(decrypting_text);
  console.log(decrypting_key);

  let plainText = decrypting_text;
  let key = decrypting_key;
  console.log(key + "  " + plainText);
  //decrypter logic
  //convert the encrypted text into the ascii code
  enc_text = plainText;
  k = key;
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

  let l_k_p = parseInt(k[0]) + parseInt(k[1]);
  let m_k_p = parseInt(k[1]) + parseInt(k[2]) + parseInt(k[3]);
  let r_k_p = parseInt(k[3]) + parseInt(k[4]);

  let k_p_s = 0;
  let mani = 0;
  //substract the key from the ascii
  asc_list.forEach((asc_i) => {
    if (k_p_s == 0) {
      mani = l_k_p;
      k_p_s++;
    } else if (k_p_s == 1) {
      mani = m_k_p;
      k_p_s++;
    } else {
      mani = r_k_p;
      k_p_s = 0;
    }
    // if the key - ascii < 33 then sub remaining from 122
    if (asc_i - mani == 32) {
      decryp_asc_list.push(asc_i - mani);
    } else if (asc_i - mani < 33) {
      decryp_asc_list.push(122 - (32 - (asc_i - mani)));
    } else {
      decryp_asc_list.push(asc_i - mani);
    }
  });
  // then convert the ascii back to the text
  dec_text = String.fromCharCode(...decryp_asc_list);
  console.log(dec_text);
};
