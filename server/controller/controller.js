import * as vision from '@google-cloud/vision';
import Passport from '../model/passport.js';
import UserModel from '../model/auth.js';
import CountryModel from '../model/country.js';
import DoctorModel from '../model/doctors.js';
import ReviewsModel from '../model/review.js';
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";



export const textExtraction = async (request, response) => {
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

    let [result] = await client.textDetection(request.body.data);



    function levenshteinDistance(s1, s2) {
        const matrix = [];

        for (let i = 0; i <= s1.length; i++) {
            matrix[i] = [i];
        }

        for (let j = 0; j <= s2.length; j++) {
            matrix[0][j] = j;
        }

        for (let i = 1; i <= s1.length; i++) {
            for (let j = 1; j <= s2.length; j++) {
                const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
                matrix[i][j] = Math.min(
                    matrix[i - 1][j] + 1,      // Deletion
                    matrix[i][j - 1] + 1,      // Insertion
                    matrix[i - 1][j - 1] + cost // Substitution
                );
            }
        }

        const distance = matrix[s1.length][s2.length];
        const maxLength = Math.max(s1.length, s2.length);
        const similarity = ((maxLength - distance) / maxLength) * 100;

        return similarity;
    }

    function findMatchingString(targetString, stringArray) {
        let bestMatch = '';
        let bestSimilarity = 0;

        for (const str of stringArray) {
            const similarityPercentage = levenshteinDistance(targetString, str);
            if (similarityPercentage > bestSimilarity) {
                bestMatch = str;
                bestSimilarity = similarityPercentage;
            }
        }

        return { bestMatch, bestSimilarity };
    }




    function removeHindiTextAndBackslash(inputText) {
        let strings = inputText
            .replace(/[\u0900-\u097F]+/g, '')
            .split(/(?<![0-9])\/(?![0-9])/g)
            .map(part => part.trim().replace('-', '').replace('\n', ':').split('\n')[0]);

        const obj = {};

        for (const str of strings) {
            const [key, value] = str.split(':');

            const dataToBeExtracted = ['Date of Expiry', 'Date of Birth', 'Passport No.', 'Date of Issue', 'Given Name(s)', 'Surname', 'Sex'];

            const { bestMatch, bestSimilarity } = findMatchingString(key, dataToBeExtracted, value);

            if (bestSimilarity.toFixed(2) > 60) {
                obj[key] = value || '';
            }
        }
        return obj;
    }


    const filteredText = removeHindiTextAndBackslash(result.fullTextAnnotation.text);

    try {
        const newPassportData = await Passport.create({
            data: filteredText
        })

        await newPassportData.save();

        return response.status(200).json(newPassportData);
    } catch (error) {
        return response.status(500).json(error.message);
    }

}


export const login = async (request, response) => {

    const { username, password } = request.body;

    const user = await UserModel.findOne({ username });

    if (!user) {
        return response
            .status(400)
            .json({ message: "Username or password is incorrect" });
    }



    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return response
            .status(400)
            .json({ message: "Username or password is incorrect" });
    }

    const token = jwt.sign({ id: user._id }, "secret");
    response.json({ token, name: username , role:user.role});
}


export const register = async (request, response) => {

    const { username, password, role } = request.body;
    const user = await UserModel.findOne({ username });

    if (user) {
        return response.status(400).json({ message: "Username already exists" });
    }

    if(!role){
        return response.status(400).json({ message: "Please Select a Role!" })
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ username, password: hashedPassword , role});
    await newUser.save();
    response.json({ message: "User registered successfully" });
}


export const changePassword = async (request, response) => {
    const { token, oldPassword, newPassword } = request.body;

    try {
        const decoded = jwt.verify(token, 'secret');
        const userId = decoded.id; // Extract the user ID from the token payload.

        const user = await UserModel.findById(userId);

        if (!user) {
            return response.status(404).json({ message: 'User not found' });
        }

        

        const isPasswordValid = await bcrypt.compare(oldPassword, user.password);

        if (!isPasswordValid) {
            return response.status(400).json({ message: 'Old password is incorrect' });
        }

        // Hash the new password before saving it.
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        user.password = hashedPassword;
        await user.save();

        // You can issue a new token if needed.
        const newToken = jwt.sign({ id: user._id }, 'secret');

        response.json({ token: newToken });
    } catch (error) {
        response.status(500).json({ message: error });
    }
};


export const addCountry = async (request, response) => {
    const { name, price, expected_date } = request.body;

    // Check if the file was uploaded successfully
    if (!request.file) {
        return response.status(400).json({ message: 'No file uploaded' });
    }

    const countryExists = await CountryModel.findOne({ name });

    if (countryExists) {
        return response.status(400).json({ message: 'Country already exists' });
    }

    // Assuming request.file.filename contains the name of the uploaded file
    const newCountry = new CountryModel({ name, price, expected_date, image: request.file.filename });
    await newCountry.save();
    response.json({ message: 'Country added successfully' });
};


export const deleteCountry = async (request, response) => {

    const { id } = request.params;

    try {
        const deletedCountry = await CountryModel.findByIdAndDelete(id);

        if (!deletedCountry) {
            return response.status(404).json({ message: 'Country not found' });
        }

        response.json({ message: 'Country deleted successfully' });
    } catch (error) {
        response.status(500).json({ message: 'Internal Server Error' });
    }

}


export const updateCountry = async (request, response) => {
    const { id } = request.params;
    const { name, price, expected_date, image } = request.body;

    try {
        const updatedCountry = await CountryModel.findByIdAndUpdate(
            id,
            { name, price, expected_date, image },
            { new: true, runValidators: true }
        );

        if (!updatedCountry) {
            return response.status(404).json({ message: 'Country not found' });
        }

        response.json({ message: 'Country updated successfully' });
    } catch (error) {
        response.status(500).json({ message: 'Internal Server Error' });
    }
}



export const getAllCountries = async (request, response) => {
    try {
        const countries = await CountryModel.find();
        response.json(countries);
    } catch (error) {
        response.status(500).json({ message: "Internal Server Error" });
    }
}


export const getAllDoctors = async (request, response) => {
    try {
        const { city } = request.body; // Assuming the city is sent in the request body

        if (!city) {
            return response.status(400).json({ message: "City parameter is missing" });
        }

        const regexPattern = new RegExp(`^${city}`, 'i');
        const doctors = await DoctorModel.find({ city: { $regex: regexPattern } });

        if (!doctors || doctors.length === 0) {
            return response.status(404).json({ message: "No doctors found for the given city" });
        }

        response.json(doctors);
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: "Internal Server Error" });
    }
}


export const insertDoctors = async (request, response) => {
    const { city, expertise, name } = request.body;
    const newCountry = new DoctorModel({ name, expertise, city });
    await newCountry.save();
    response.json({ message: 'DOCTOR added successfully' });
};

export const addReview = async (request, response) => {
    const { name, designation, rating, quote } = request.body;
console.log(request.body)
    // Check if the file was uploaded successfully
    if (!request.file) {
        return response.status(400).json({ message: 'No file uploaded' });
    }

    const reviewExists = await ReviewsModel.findOne({ name });

    if (reviewExists) {
        return response.status(400).json({ message: 'Review already exists' });
    }

    // Assuming request.file.filename contains the name of the uploaded file
    const newReview = new ReviewsModel({ name, designation, rating, quote , image: request.file.filename });
    await newReview.save();
    response.json({ message: 'Review added successfully' });
};


export const getAllReviews = async (request, response) => {
    try {
        const reviews = await ReviewsModel.find();
        response.json(reviews);
    } catch (error) {
        response.status(500).json({ message: "Internal Server Error" });
    }
}