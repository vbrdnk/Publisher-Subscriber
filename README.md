# TypeScript implementation of publisher-subscriber pattern
## Installation
```
npm install typescript-pubsub
```
or
``` 
git clone https://github.com/vbrdnk/typescirpt-pubSub.git
```
## Usage
```
import { PubSub } from 'your_relative_path_to_package';
```
Use available static methods for subscribing, unsubscribing and emitting events from PubSub class
## API
#### List of all available methods:
- ###### ```public static subscribe(eventName: string, callbackFunc: Function): void```
Adds ```eventName: Function[]``` property to ```static events``` object and pushes ```callbackFunc``` to this array. 
- ###### ```public static unsubcribe(eventName: string, callbackFunc: Function): void```
Checks for eventName property in ```static events``` and if exits checks for all functions listed in this property. If callback function exists in an array, removes it, so it won't be execuded 
- ###### ```public static emit(eventName: string, data: any): void```
Checks for eventName property in ```static events``` and executes all functions inside eventName property with given data
#### Other methods and properties:
- ###### ```private static events: {}```
Holds all events that are added with ```PubSub.subscribe(eventName: string, callbackFunc: Function): void``` method as well as all functions that should be executed when some data is emitted with specific event
