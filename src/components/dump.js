//index.js of functions

// const gcconfig = {
//   projectId: "pet-adoption-accb3",
//   keyFileName: "pet-adoption-accb3-firebase-adminsdk-vaibk-337e6a55f9.json"
// };

// const gcs = require("@google-cloud/storage")(gcconfig);

// const gcs = require("@google-cloud/storage");
// gcs.projectId = "pet-adoption-accb3";
// gcs.keyFilename = "pet-adoption-accb3-firebase-adminsdk-vaibk-337e6a55f9.json";

// exports.onArchive = functions.storage.object().onArchive(event => {
//   const object = event.data;
//   const bucket = object.bucket;
//   const contentType = object.contentType;
//   const filePath = object.name;
//   console.log("File change detected, function execution started");

//   if (object.resourceState === "not_exists") {
//     console.log("We deleted a file, exit...");
//     return;
//   }

//   if (path.basename(filePath).startsWith("resized-")) {
//     console.log("We already renamed that file!");
//     return;
//   }

//   const destBucket = gcs.bucket(bucket);
//   const tmpFilePath = path.join(os.tmpdir(), path.basename(filePath));
//   const metadata = { contentType: contentType };
//   return destBucket
//     .file(filePath)
//     .download({
//       destination: tmpFilePath
//     })
//     .then(() => {
//       return spawn("convert", [tmpFilePath, "-resize", "500x500", tmpFilePath]);
//     })
//     .then(() => {
//       return destBucket.upload(tmpFilePath, {
//         destination: "resized-" + path.basename(filePath),
//         metadata: metadata
//       });
//     });
// });
