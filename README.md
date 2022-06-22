# range-slider
This is range-slider written in TypeScript as a JQuery plugin. It has MVP architecture.
<br>
<b>How to use</b>
<br>
....
<br>
<b>Parameters</b>
<br>
<br>
<b>Project build</b>
<br>
<b>Clone repository: git clone ...</b>
<br>
<b>Go to project repository: cd slider-plugin</b>
<br>
<b>Install dependencies: npm i</b>
<br>
<b>To start development mode: npm run dev</b>
<br>
<b>To build project: npm run build</b>
<br>
<b>To run server: npm run start</b>
<br>
<b>To run tests: npm run test</b>
<br>
<br>
<b>Architecture description</b>
<br>
Plugin has MVP-architecture.
<br>
<b>Model</b>
<br>
Model stores data and contains business-logic
<br>
<b>View</b>
<br>
View has calculations which are necessary of display, also reacts on user's actions. View consists of subview. Only main View reaches subview but subviews don't reach main View and each other.
<br>
<b>Subview</b>
<br>
<ul>
  <li>barView: creates progress bar for slider</li>
  <br>
  <li>formView: creates HTML elements for slider</li>
  <br>
  <li>stepView: sets step for slider</li>
  <br>
  <li>thumbView: creates thumbs and bubble elements (bubble is an element above thumb)</li>
  <br>
  <li>ticksView: creates scale</li>
  <br>
</ul>
<br>
<b>Presenter</b>
<br>
Presenter is subscribed on Model and View, reacts on changes and updates them. Gives data from View to Model and vice versa.
