# what is Flux?
Flux is a mode that implement the single data flow application structure. It included 4 core part:
## Dispatcher
Dispatcher responsibible for deliver the Action and Payload to Store. The Store must be regist on dispatcher. Each application should be own one Dispatcher.
## Action
Action handle the UI update and update the data from server. Action object has 2 properties, Type and Payload. Type used for distinguish the triggled behavior; Payload used for the data used in the Type. 
## Store
Store is the container of the state and logical, it monitors the Action which dispatched from Dispatcher.
## View
View according to component, it monitors the change event from the Store. 

## The flow of ToDo By using Flux
1. When user create a todo item, a Action is generated, and send this item to the Dispatcher with type and payload.
2. Dispatcher transmit the Action to all registered Store
3. According to the designed logic, Store changes the state and send the change event.
4. View(component) recieve the change event, then update and re-render the ui.
-----------
# what is Redux
Redux is a extension of the Flux, it provides a predictable container for managing state. It optimse the complexity of the Flux but also keep the Flux structure. The four main different between Redux and Flux as below:
## Add Reducer
Change the state which in Store depends on the Action must be using Reducer. It decides the state how to react with the user behavior.
## Delete Dispatcher
Redux delete the Flux Dispatcher. The Dispatcher jobs pass to the Store. 
## Single Data Source
Flux allow developer to create many Store to store different states. Redux allow one rather, all states keep in this Store. The logical handle hand-on to Reducer.
## used callback function replace event shooter
Using callback function to pass the state rather than send the event. 

## The flow of ToDo By using Redux
1. The Action is created, and transmit the Type and Payload to the Store by using Stores' APIs. 
2. After the Store catch the Action, pass the Action to Reducer and its return the result.
3. The Store update the state which is return from Reducer and pass to the component by callback function.
4. The component get the up-to-date data and re-render the DOM

---------
# The different of flow between Flux and Redux
In Flux, the logic of what to do on the data based on the received action is written in the store itself. The store also has the flexibility of what parts of the data to expose publicly. The smartest player in a Flux app is the store.

In a Redux app, you can split your reducer into simpler functions as you would do with any other function. The smartest player in Redux is the reducer.