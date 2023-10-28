import * as vision from '@google-cloud/vision';

// const CREDENTIALS = 'YOUR CREDNTIALS JSON FILE';

const CREDENTIALS = JSON.parse(JSON.stringify(
    {
        "type": "service_account",
        "project_id": "ocr-scanner-403411",
        "private_key_id": "bddd9c9216db933a3c25157623180450f0781bef",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCmq8ftjLNB9i/t\nJGHloJXaKVSKntpp2ApUBLx1HZ849iGTzNWuXDR37K13KAuQSNG+kXtwBqjrjxjY\nH8kF0TAZYyFjkXN+23X6Lc6cpMXjUWs4ka7RgvP6Xi4Dk4qNlYVrROKuKJqqc/qS\nqMl7+LffZxUKOs/vjy9tSh4h8nsnN96sBdZE4RKM7kpIbMyRz30GktkXw83/EOP6\nEXSW32Oqj7aJd1pc2pXaDugfTZ2xyzTeeWsZWg+VUhQExn0oPBR6ycDRMGfCzUkx\nhuWYVHp/nmyC5oqoXBNpMEjCdUC1/NaM6xjWPYlpW7ObJR00r49EqL8vw5Ut4ZE0\nOWMwMJN/AgMBAAECggEANYqHbjM9vpnUaYy/eiGtIekXBHTlWw0QvE7NL541cPn4\nbV9m4V0zabb5Pob5t/78igh4K9On3gwZAgyr6hd6KR2kMzUdcgoUCys97Sote8nC\n9OgvzZQQxkQM6g8yeisnMf9uBl562Pjq7MQV/aI3hye5JZEhDSblKGmf5m3bzAvs\ngdgZ1KqibNVAjZe4BJrAHbJLCGagoDyjLI0dCMLNf2XHc7BRLiD45C8mer1zkOPE\nCaIxKKeVbqdJGWKK5z3a9IcB4c+SpUi4zhk3L1Q4nbTiKyKox3AkBM4fCHpr5Qsu\nNr5wUlReCD83Jn8zlgTLqtg39sqB8ftfH2hZWA+I2QKBgQDelMqpTuxLSAwMvTE2\nLrnvTxMRiWLywJ2oylDw16qwXK/8HtZl41Xem8UkemfVfc+gAC9lsB0cPSMT+ynk\nYNVqWzhP5FUSLcemMJ9RSQKet0qCRn7mJMkwKeJvrQysPMF47/Nb0QNd3LN+0GCU\nYWX9PBggz+L75voqwGxJmN1VjQKBgQC/sgF1AqU0IUWLcP0XQ8NuBeBLh7HQ4q1Q\nQdSCp296SNYfsI/+YSX6iJ7TdyEFU38zLxNzVmGitcTMsNZjhYvrdASvxOsi8DdI\nuCPjcGnsZMgdjM61xHvTwaGImlVytlu1I+WelliNkv1CVFO9QXNOgJuTsrdbH1Ho\nEPLSmOhMOwKBgE1aeHQOsaAYEdf7iDbEVmoMmRvnGzQyLJiUdzy8Nt3D2IVOUkRm\nlVkf2Yur3pobdySr68zzP6qotKAlEZIE9SZZPWDGgaonrtLa4wNk1DxEhuhvh3qE\nHkdWxxL4mQbitnpJKdIm+XyNTvQrhuUKVF+Fmv0MQl45D4f8B6YsMf+hAoGActdT\nZCQnkKl2HmmcVjm0dM90ZgtvDbMfHXuysmtYr6u/C9EdEspklEkQzaMK10QEakeD\noY9Ygr/enLo8VfcFshMZU6vnKlE67YfTiEgqTQK7mGho1iBWBrBz84ByPHzfSA+v\nWmi7uGUc8IXQfQse5yLJEZz5l8+VpC+zKVONp00CgYEA0/5aCH3fj5DH7MmhyeHO\niGPot9O5xrXQaFfNs43mSiPqKpk5NNq0At3w4NAORx6EZjZzPUN+Wkv/uYzCk6C2\nqzRvi3eGmgSacS20nqtbdIyHmk+l+EuRhoNmQOOEO4D1yLzayhhp5S93NNt45ViD\nU2cF1Qplzxzq7LPDu6k+l5w=\n-----END PRIVATE KEY-----\n",
        "client_email": "passport-scanner@ocr-scanner-403411.iam.gserviceaccount.com",
        "client_id": "115842153054149085275",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/passport-scanner%40ocr-scanner-403411.iam.gserviceaccount.com",
        "universe_domain": "googleapis.com"
    }

))




const CONFIG = {
    credentials: {
        private_key: CREDENTIALS.private_key,
        client_email: CREDENTIALS.client_email
    }
};

const client = new vision.ImageAnnotatorClient(CONFIG);


const detectText = async (file_path) => {

    let [result] = await client.textDetection(file_path);
    console.log(result.fullTextAnnotation.text);
};

// detectText('passport Front.jpg');


// function levenshteinDistance(s1, s2) {
//     const matrix = [];
//   1
//     for (let i = 0; i <= s1.length; i++) {
//       matrix[i] = [i];
//     }

//     for (let j = 0; j <= s2.length; j++) {
//       matrix[0][j] = j;
//     }

//     for (let i = 1; i <= s1.length; i++) {
//       for (let j = 1; j <= s2.length; j++) {
//         const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
//         matrix[i][j] = Math.min(
//           matrix[i - 1][j] + 1,      // Deletion
//           matrix[i][j - 1] + 1,      // Insertion
//           matrix[i - 1][j - 1] + cost // Substitution
//         );
//       }
//     }

//     const distance = matrix[s1.length][s2.length];
//     const maxLength = Math.max(s1.length, s2.length);
//     const similarity = ((maxLength - distance) / maxLength) * 100;

//     return similarity;
//   }

//   // Example usage
//   const placeOfIssue = "Place of Issue";
//   const placeOfSsaie = "Place of fspue";
//   const similarityPercentage = levenshteinDistance(placeOfIssue, placeOfSsaie);
//   console.log(`Similarity Percentage: ${similarityPercentage.toFixed(2)}%`);

let texxt=`
भारत गणराज्य / REPUBLIC OF INDIA
कोड / Code
IND
राष्ट्रीयता / Nationality
भारतीय / INDIAN
M
टाईप / Type
P
उपनाम / Surname
MOTGILL
दिया गया नाम / Given Name(s)
SHUBHRA
जन्मतिथि / Date of Birth
30/10/1995
लिंग / Sex
F
जन्म स्थान / Place of Birth
JAMSHEDPUR, JHARKHAND
जारी करने का स्थान / Place of ssaie
RANCHI
जारी करने की तिथि/ Date of Isotie
04/05/2023
पासपोर्ट न. / Passport No.
X7442096
समाप्ति की तिथि / Date of Expiry
03/05/2033
P< INDMOTGILL<<SHUBHRA<<<<<<<<<<<<<<<<<<<<<<<
X7442096<1IND9510308F33050383077818128823<62`


let text = `L
भारत गणराज्य / REPUBLIC OF INDIA.
राष्ट्रीयता / Nationality
भारतीय / INDIAN
Apush
टाईप / Type
P
उपनाम / Sumame
MOTGILL
कोड / Code
IND
f/Given Name(s)
AYUSHMAT
जन्मतिथि / Date of Birth
01/10/1999
लिंगे / Sex
M
जन्म स्थान / Place of Birth
JAMSHEDPUR, JHARKHAND
जारी करने का स्थान/ Place of Issue
RANCHI
जारी करने की तिथि / Date of Issue
02/12/2020-
/Passport No.
Z6128251
समाप्ति की तिथि/ Date of Expiry
01/12/2030
P<INDMOTGILL<<AYUSHMAT<<<<<<<<<<<<<<<<<<<<<<<
Z6128251<2IND9910012M30120173065012698220<86`


function removeHindiTextAndBackslash(inputText) {
    return inputText
      .replace(/[\u0900-\u097F]+/g, '')
      .split(/(?<![0-9])\/(?![0-9])/g)
      .map(part => part.trim().replace('-', '').replace('\n', ':').split('\n')[0]);
  }
  
  const pureText = removeHindiTextAndBackslash(text);
  
  console.log(pureText);
