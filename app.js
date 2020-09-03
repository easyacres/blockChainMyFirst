
// npm init
// npm lotion 
// >> github.com/keppel/lotion 
// >>Lotion folder >> root /.lotion


const express = require("express");

app = express();

const PORT = process.env.PORT || 8080;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

const lotion = require('lotion');

let bCapp = lotion ({
   
    intialState: {
        count:0
    }
   
});


bCapp.use((state,tx) => {
  
    if(state.count === tx.nonce) {
        state.count++;
    }
   
});

// app.listen(3000).then(genesis => {
   
//     console.log('App listening on port 3000. Congrats, you have launched your first blockchain!')
// });


// app.listen(PORT, () => {
//     console.log("App listening on PORT: " + PORT);
//   });

bCapp.start(8080).then(genesis => {
   
    console.log('App listening on port 8080. Congrats, you have launched your first blockchain!')
});


// HRD1-2@HE-2-PC MINGW64 ~/Desktop/gatech-bc/review/BlockChainFirstv2
// $ npm i nodemon

// > nodemon@2.0.4 postinstall C:\Users\HRD1-2\Desktop\gatech-bc\review\BlockChainFirstv2\node_modules\nodemon
// > node bin/postinstall || exit 0

// npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@~2.1.2 (node_modules\chokidar\node_modules\fsevents):
// npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.3: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
// npm WARN firstblockchain@1.0.0 No description
// npm WARN firstblockchain@1.0.0 No repository field.

// + nodemon@2.0.4
// added 5 packages from 2 contributors and audited 355 packages in 5.144s

// 8 packages are looking for funding
//   run `npm fund` for details

// found 0 vulnerabilities




// HRD1-2@HE-2-PC MINGW64 ~/Desktop/gatech-bc/review/BlockChainFirstv2
// $ nodemon app.js
// [nodemon] restarting due to changes...
// [nodemon] starting `node app.js`
// App listening on port 8080. Congrats, you have launched your first blockchain!