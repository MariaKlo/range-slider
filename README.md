# range-slider
This is range-slider written in TypeScript as a JQuery plugin. It has MVP architecture.
<br>
<b>How to use</b>
<br>
....
<b>Parameters</b>
<b>Project build</b>
<b>Clone repository: git clone ...</b>
<b>Go to project repository: cd slider-plugin</b>
<b>Install dependencies: npm i</b>
<b>To start development mode: npm run dev</b>
<b>To build project: npm run build</b>
<b>To run server: npm run start</b>
<b>To run tests: npm run test</b>
<br>
<b>Architecture description</b>
Plugin has MVP-architecture.
<b>Model</b>
Model stores data and contains business-logic
<b>View</b>
View has calculations which are necessary of display, also reacts on user's actions. View consists of subview. Only main View reaches subview but subviews don't reach main View and each other.
<b>Subview</b>
<ul>
  <li>barView: creates progress bar for slider</li>
  <li>formView: creates HTML elements for slider</li>
  <li>stepView: sets step for slider</li>
  <li>thumbView: creates thumbs and bubble elements (bubble is an element above thumb)</li>
  <li>ticksView: creates scale</li>
</ul>
<b>Presenter</b>
Presenter is subscribed on Model and View, reacts on changes and updates them. Gives data from View to Model and vice versa.
