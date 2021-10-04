const http = require("https"); // or 'https' for https:// URLs
const fs = require("fs");

const BASE_URL = "https://ssr.res.netease.com/2020/media/picture2/";
const SIZE_SUFFIX = "_640X960.jpg";

const DESTINATION_DIRECTORY = "./public/images/";

const IMAGE_NUMS = [
    {
        expansion: "good-or-evil",
        cards: [
            {
                name: "asura",
                startCardNum: 223,
                endCardNum: 231,
            },
            {
                name: "orochi",
                startCardNum: 232,
                endCardNum: 241,
            },
            {
                name: "taishakuten",
                startCardNum: 242,
                endCardNum: 250,
            },
            {
                name: "akaname",
                startCardNum: 251,
                endCardNum: 259,
            },
            {
                name: "odokuro",
                startCardNum: 260,
                endCardNum: 268,
            },
            {
                name: "kingyo",
                startCardNum: 269,
                endCardNum: 277,
            },
            {
                name: "kanihime",
                startCardNum: 278,
                endCardNum: 286,
            },
            {
                name: "tamamonomae",
                startCardNum: 287,
                endCardNum: 295,
            },
        ]
    },
    {
        expansion: "four-guardians",
        cards: [
            {
                name: "hitotsume",
                startCardNum: 296,
                endCardNum: 304,
            },
            {
                name: "gaki",
                startCardNum: 305,
                endCardNum: 315,
            },
            {
                name: "joruri-gozen",
                startCardNum: 316,
                endCardNum: 324,
            },
            {
                name: "kyuumi-neko",
                startCardNum: 325,
                endCardNum: 334,
            },
            {
                name: "hitorima",
                startCardNum: 335,
                endCardNum: 343,
            },
            {
                name: "menreiki",
                startCardNum: 344,
                endCardNum: 356,
            },
            {
                name: "sayuki-hime",
                startCardNum: 357,
                endCardNum: 366,
            },
            {
                name: "genkuro",
                startCardNum: 367,
                endCardNum: 375,
            },
        ]
    }
];

const download = (url, dest, cb) => {
    // check if file exists already
    fs.stat(dest, (err, stat) => {
        if (err == null) {
            console.log("File exists");
        } else if (err && err.code === "ENOENT") {
            // download file from internet
            const file = fs.createWriteStream(dest);
            const request = http
                .get(url, (response) => {
                    response.pipe(file);
                    file.on("finish", () => {
                        file.close(cb); // close() is async, call cb after close completes.
                    });
                })
                .on("error", (err) => {
                    // Handle errors
                    fs.unlink(dest, () => {
                        if (cb) {
                            cb(err.message);
                        }
                    }); // Delete the file async. (But we don't check the result)
                });
        }
    });
};

const EXPANSION_INDEX = 1;

const curCardList = IMAGE_NUMS[EXPANSION_INDEX].cards;
const curExpansion = IMAGE_NUMS[EXPANSION_INDEX].expansion;
// change curShikigami variable value based on which shikigami to fetch images for
for (let curShikigami = 0; curShikigami < curCardList.length; curShikigami++) {
    const startNum = curCardList[curShikigami].startCardNum;
    const endNum = curCardList[curShikigami].endCardNum;
    const directorySuffix = `${curExpansion}/${curCardList[curShikigami].name}`;

    const fullPath = `${DESTINATION_DIRECTORY}${directorySuffix}`;
    console.log('fullPath: ', fullPath);

    fs.stat(fullPath, (err, stat) => {
        if (err && err.code === "ENOENT") {
            fs.mkdir(fullPath, () => {
                console.log("created new directory");
                curShikigami -= 1;
            });
        } else if (err == null) {
            for (let i = startNum, localNum = 0; i <= endNum; i++, localNum++) {
                download(
                    `${BASE_URL}${i}${SIZE_SUFFIX}`,
                    `${fullPath}/${localNum}.jpg`,
                    (message) =>
                        console.log(
                            message ? message : `finished downloading card ${i}`
                        )
                );
            }
        }
    });
}
