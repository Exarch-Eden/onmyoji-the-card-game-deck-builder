const http = require("https"); // or 'https' for https:// URLs
const fs = require("fs");

const BASE_URL = "https://ssr.res.netease.com/2020/media/picture2/";
const SIZE_SUFFIX = "_640X960.jpg";

const DESTINATION_DIRECTORY = "./public/images/";

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

const IMAGE_NUMS = [
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
];

// change curShikigami variable value based on which shikigami to fetch images for
for (let curShikigami = 3; curShikigami < IMAGE_NUMS.length; curShikigami++) {
    const startNum = IMAGE_NUMS[curShikigami].startCardNum;
    const endNum = IMAGE_NUMS[curShikigami].endCardNum;
    const directorySuffix = IMAGE_NUMS[curShikigami].name;

    const fullPath = `${DESTINATION_DIRECTORY}${directorySuffix}`;

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
