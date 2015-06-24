# angular-socket-resource-demo
This is a demo for [angular-socket-resource](https://github.com/michaschwab/angular-socket-resource).

Try it out to see the real time updates happening automatically by running the demo on a web server, opening the page in two browser windows,
and editing the articles while seeing the live changes in the other browser window.
 
This is done without deploying **any** changes to the default articles controller packaged in the [yeoman](https://github.com/yeoman/yeoman) [MEAN generator](https://github.com/meanjs/generator-meanjs).

## How to install the demo

1. Git clone this package

		git clone https://github.com/michaschwab/angular-socket-resource-demo.git
		
2. Install node dependencies

		npm install

3. Install bower dependencies

		bower install

4. Start the server

		grunt

## How was this demo created
This demo is almost exactly what you get after running `yo meanjs` and then following the *angular-socket-resource* instructions.

The only difference is that I took out the security checks of the articles controller to make it publicly accessible and editable for ease of trying.
