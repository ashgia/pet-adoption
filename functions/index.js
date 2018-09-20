// // // Create and Deploy Your First Cloud Functions
// // // https://firebase.google.com/docs/functions/write-firebase-functions
// //
// // exports.helloWorld = functions.https.onRequest((request, response) => {
// //  response.send("Hello from Firebase!");
// // });

// // The Firebase Admin SDK to access the Firebase Realtime Database.
// // const admin = require("firebase-admin");
// // admin.initializeApp();
// const functions = require("firebase-functions");
// const os = require("os");
// const path = require("path");
// // const spawn = require("child-process-promise").spawn;
// const cors = require("cors")({ origin: true });
// const Busboy = require("busboy");
// const fs = require("fs");

// const gcs = require("@google-cloud/storage");
// gcs.projectId = "pet-adoption-accb3";
// gcs.keyFilename = "pet-adoption-accb3-firebase-adminsdk-vaibk-337e6a55f9.json";

// exports.uploadFile = functions.https.onRequest((req, res) => {
//   cors(req, res, () => {
//     // if (req.method === `OPTIONS`) {
//     //   res
//     //     .set("Access-Control-Allow-Origin", "http://localhost:3000")
//     //     .set("Access-Control-Allow-Methods", "POST")
//     //     .status(200);
//     //   return;
//     // }

//     if (req.method !== "POST") {
//       return res.status(500).json({
//         message: "Not allowed"
//       });
//     }
//     const busboy = new Busboy({ headers: req.headers });
//     let uploadData = null;

//     busboy.on("file", (name, file, filename, encoding, mimetype) => {
//       const filepath = path.join(os.tmpdir(), filename);
//       uploadData = { file: filepath, type: mimetype };
//       file.pipe(fs.createWriteStream(filepath));
//     });

//     busboy.on("finish", () => {
//       const bucket = gcs.bucket("pet-adoption-accb3.appspot.com");
//       bucket
//         .upload(uploadData.file, {
//           uploadType: "media",
//           metadata: {
//             metadata: {
//               contentType: uploadData.type
//             }
//           }
//         })
//         .then(() => {
//           res.status(200).json({
//             message: "It worked!"
//           });
//         })
//         .catch(err => {
//           res.status(500).json({
//             error: err
//           });
//         });
//     });
//     busboy.end(req.rawBody);
//   });
// });
