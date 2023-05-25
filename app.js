import fs from "fs"; //importing node packages fs
import http from "http"; // will host our URL

const port = 4000; // port where the server will be hosted

// here we will creat a server that will host our html flies and grab file .fs
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    console.log(req.url); // want node to let us know what html file we are on using our url
    res.writeHead(200, { "Content-Type": "text/html" }); // this code allows js to grab the content with html
    fs.readFile("./index.html", (err, data) => {
      //we use fs.readme to grab our first cat in "index.html"
      if (err) throw err; // if URL not found an error will show
      res.write(data);
      res.end(); // the program will end here.
    });
  } // here we are required to use our "/" in our url in order to see our second cat

  if (req.url === "/api") {
    console.log(req.url);
    // creat the server variable
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("./cat2.html", (err, data) => {
      if (err) throw err;
      res.write(data);
      res.end();
    });
  }
});

//We are telling our sever to be hosted on port 400 in our our local host
server.listen(port, (err) => {
  if (err) console.log("ERROR", err.message);
  console.log(`Listening on port ${port}`);
});
